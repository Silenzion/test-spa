<template>
  <div id="app" class="app">
    <div class="wrapper">
      <div class="content">
        <header class="title text-center">Lorem ipsum dolor sit</header>
        <main>
          <Filter ref="filter"></Filter>
          <CardsRow ref="cardsRow" :items="items"></CardsRow>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
// import api from "@/api";
import CardsRow from "@/components/CardsRow";
import Filter from "@/components/Filter";

export default {
  name: 'App',
  components: {
    CardsRow,
    Filter
  },
  data(){
    return {
      items: [{
        "building_id":73,
        "building_name":"1 этап 1а корпуса",
        "floor":10,
        "id":23329,
        "is_studio":1,
        "number":"163",
        "plan":"/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
        "porch":3,
        "price":2956317,
        "rooms":1,
        "size":"XS",
        "square":23.66
      },
        {
          "building_id":74,
          "building_name":"1 этап 1а корпуса",
          "floor":4,
          "id":20822,
          "is_studio":1,
          "number":"163",
          "plan":"/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
          "porch":3,
          "price":2992701,
          "rooms":1,
          "size":"XS",
          "square":23.87
        },
        {
          "building_id":73,
          "building_name":"1 этап 1а корпуса",
          "floor":10,
          "id":23329,
          "is_studio":1,
          "number":"163",
          "plan":"/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
          "porch":3,
          "price":2956317,
          "rooms":1,
          "size":"XS",
          "square":23.66
        },
        {
          "building_id":74,
          "building_name":"1 этап 1а корпуса",
          "floor":4,
          "id":20822,
          "is_studio":1,
          "number":"163",
          "plan":"/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
          "porch":3,
          "price":2992701,
          "rooms":1,
          "size":"XS",
          "square":23.87
        }
      ],
    }
  },
  created: {

  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    onFilter(data){

    },
    onReset(){

    },
    getDataForCards(){

    }
  }
}
</script>

<style lang="scss" scoped>
.app{
  background: $color-white;
  padding: 30px;
  border-radius: 10px;

  @include media-mobile {
    padding: 15px;
  }
}

.wrapper {
  border-radius: 10px;
  background-color: $color-grey-200;
  display: flex;
  justify-content: center;
}

.content {
  width:100%;
  max-width: 1020px;
}

.title {
  margin-top: 38px;
  font-size: 34px;
  line-height: 60px;
  text-transform: uppercase;
}
</style>
