<template>
    <b-form-group class="range" >
      <template  v-slot:label>
        <div v-html="item.label"></div>
      </template>
      <div>
      <div class="d-flex align-items-center">
        <b-form-input id="range-2" v-model="item.value[0]" type="text" class="range-input"></b-form-input>
        <span class="input-separator"> - </span>
        <b-form-input id="range-2" v-model="item.value[1]" type="text" class="range-input"></b-form-input>
      </div>
      <vue-slider v-model="item.value" :min="item.min" :max="item.max" :step="item.step" tooltip="none"/>
      </div>
      <div class="separator">|</div>
    </b-form-group>

</template>

<script>
import 'vue-slider-component/theme/antd.css'
import VueSlider from 'vue-slider-component'

export default {
  name: "Range",
  components: {
    VueSlider
  },
  props: {
    item:{
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" >

.range {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.range-input {
  width: 100%!important;
  max-width: 80px;
  border: $border-grey-300;
}
.input-separator{
  padding-left: 5px;
  padding-right: 5px;
}
.vue-slider{
  padding-top: 14px!important;
}

.vue-slider-process{
  background-color: $color-accent-green-100!important;
}

.vue-slider-dot-handle{
  margin-top: -4px;
  width: 24px;
  height: 24px;
  background-color: $color-accent-green-100!important;
  border: 4px solid $color-white!important;
  box-shadow: $box-shadow;
}

.vue-slider-rail{
  background-color: $color-grey-300;
}
</style>