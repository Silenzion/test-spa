<template>
  <div class="filter">
    <b-form-group
        label="Комнаты"
        v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
          v-model="rooms"
          :options="roomsOptions"
          :aria-describedby="ariaDescribedby"
          buttons
          button-variant="green"
      ></b-form-checkbox-group>
    </b-form-group>
    <Range v-for="(item,index) in rangesData" :key="index" :item="item"/>
    <div class="d-flex flex-column align-items-center">
      <Button text="Применить" @click="onFilter"/>
      <Button text="Сбросить" variant="link" @click="onReset"/>
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
          label: 'ЭТАЖ, м<sup>2</sup>',
          min: 1,
          max: 99,
          step: 1,
          value: [1, 99]
        },
        square: {
          label: 'ПЛОЩАДЬ',
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
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px;
  flex-shrink: 1;
  -webkit-flex-shrink: 1;
}

.btn-green-checkbox {
  background-color: $color-accent-green-100;
  color: $color-white;
  border-radius: 5px;
}
</style>