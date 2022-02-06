<template>
  <div class="filter">
    <b-form-group
        label="КОМНАТЫ"
        v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
          v-model="rooms"
          :options="roomsOptions"
          :aria-describedby="ariaDescribedby"
          buttons
          button-variant="checkbox"
      ></b-form-checkbox-group>
      <div class="separator">|</div>
    </b-form-group>

    <Range v-for="(item,index) in rangesData" :key="index" :item="item"/>
    <div class="filter-buttons">
      <Button text="Применить" @click="onFilter"/>
      <Button text="Сбросить фильтр" variant="link" @click="onReset"/>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import Range from "@/components/Range";

export default {
  name: "FilterForm",
  components: {
    Button,
    Range
  },
  data() {
    return {
      rooms: [],
      roomsOptions: [
        {text: 'S', value: 'is_studio'},
        {text: '1k', value: 1},
        {text: '2k', value: 2},
        {text: '3k', value: 3}
      ],
      rangesData: {
        floor: {
          label: 'ЭТАЖ',
          min: 1,
          max: 99,
          step: 1,
          value: [1, 99]
        },
        square: {
          label: 'ПЛОЩАДЬ, м<sup>2</sup>',
          min: 9,
          max: 999,
          step: 1,
          value: [9, 999]
        },
        price: {
          label: 'СТОИМОСТЬ, млн. р.',
          min: 1.9,
          max: 99.9,
          step: 0.1,
          value: [1.9, 99.9]
        }
      }
    }

  },
  methods: {
    onReset() {
      this.$emit('onReset');
      const dataCtx = this.rangesData;
      this.rooms = [];
      dataCtx.floor.value = [dataCtx.floor.min, dataCtx.floor.max];
      dataCtx.square.value = [dataCtx.square.min, dataCtx.square.max];
      dataCtx.price.value = [dataCtx.price.min, dataCtx.price.max];
    },
    onFilter() {
      const dataCtx = this.rangesData;
      this.$emit('onFilter',
          {
            'rooms': this.rooms.length ? this.rooms : this.roomsOptions.map((item) => item.value),
            'floor': dataCtx.floor.value,
            'square': dataCtx.square.value,
            'price': dataCtx.price.value,
          }
      );
    }
  }
}
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 15px;

  @include media-tablet{
    justify-content: center;
  }

  @include media-little-tablet{
    flex-direction: column;
    align-items: center;
  }

  & > * {
    width: 100%;
    max-width:235px;
    margin-bottom: 15px;
  }

}

.filter-buttons{
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: end;
  @include media-little-tablet{
    align-self: auto;
  }
}
</style>