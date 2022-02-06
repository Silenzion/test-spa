<template>
  <div id="app" class="app">
    <div class="wrapper">
      <div class="content">
        <header class="title text-center">Lorem ipsum dolor sit</header>
        <main>
          <FilterForm ref="filter" @onReset="onReset" @onFilter="onFilter"/>
          <CardsRow ref="cardsRow" :items="items"/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

import CardsRow from "@/components/CardsRow";
import FilterForm from "@/components/Filter";

export default {
  name: 'App',
  components: {
    CardsRow,
    FilterForm
  },
  data() {
    return {
      items: []
    }
  },
  computed: {
    ...mapGetters([
      'getAllFlats',
      'getFlatsByFilters'
    ])
  },
  created() {
    this.$store.dispatch('getDataFromFile').then(() => this.items = this.getAllFlats);
  },
  methods: {
    onFilter(data) {
      console.log(data);
      this.items = this.getFlatsByFilters(data);
    },
    onReset() {
      this.items = this.getAllFlats;
    },

  }
}
</script>

<style lang="scss" scoped>
.app {
  background: $color-white;
  padding: 30px;
  border-radius: 10px;

  @include media-tablet {
    padding: 15px;
  }
  @include media-mobile {
    padding: 0;
  }
}

.wrapper {
  border-radius: 10px;
  background-color: $color-grey-200;
  display: flex;
  justify-content: center;
}

.content {
  width: 100%;
  max-width: 1170px;
}

.title {
  margin-top: 38px;
  font-size: 34px;
  line-height: 60px;
  text-transform: uppercase;
}
</style>
