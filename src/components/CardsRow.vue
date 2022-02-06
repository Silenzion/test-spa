<template>
  <div class="cards-row">
    <div class="flat-card col-12 col-md-6 col-lg-4 col-xl-3" v-for="(item,index) in items" :key="index">
      <div class="flat-card-content ">
        <div class="flat-card-header d-flex flex-row justify-content-between">
          <span class="flat-card-floor">{{ item.floor }} этаж</span>
          <div class="flat-card-square">{{ item.rooms }} комната - {{ item.square }} м<sup>2</sup></div>
        </div>
        <div class="flat-card-body">
          <div class="flat-card-building-id"> № {{ item.building_id }}</div>
          <img src="../assets/images/1.png" alt="Card image">
        </div>
        <div class="flat-card-footer">
          <div class="flat-card-total-price">{{ item.price.toLocaleString() }}р.</div>
          <div>{{ (item.price / item.square).toLocaleString() }} р. за м<sup>2</sup></div>
          <Button text="Подробнее" type="green"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "CardsRow",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
.cards-row {
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  flex-wrap: wrap;
  justify-content: start;

  @include media-tablet {
    justify-content: center;
  }
}

.btn {
  height:0;
  opacity: 0;
  transition: all 1s ease;
}


.flat-card{
  padding: 15px;

  &-content{
    overflow: hidden;
    padding: 8px 10px 10px;
    box-shadow: $box-shadow;
    background-color: $color-white;
    border-radius: 10px;
    max-width: 270px;
    height: 365px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
  }

  &-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: 40px;
  }

  &-floor{
    font-weight: bold;
    color: $color-grey-300;
  }

  &-square{
    font-weight: bold;
  }

  &-body{
    border: $border-grey-300;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  img {
    //height: 188px;
    //width: 230px;
    width: 100%;
    align-self: center;
    transition: all 1s ease;
  }

  &-building-id {
    margin-top: -1px;
    margin-right: -1px;
    text-align: right;
    font-weight: bold;
    font-size: 14px;
    padding-left: 10px;
    padding-right: 10px;
    border: $border-grey-300;
    border-radius: 0px 5px;
  }

  &-footer{
    padding-top: 11px;
    text-align: right;

    div {
      margin-bottom: 10px;
    }
  }

  &-total-price{
    font-size: 20px;
  }
}

// Hover

.flat-card:hover{

  .flat-card-content {
    box-shadow: $box-shadow-dark;
  }

  .btn {
    height: auto;
    opacity:1;
    transition: all 1s ease;
  }

  img {
    height: 152px;
    width: 186px;
    transition: all 1s ease;
  }
}

</style>