<template>
<button :class="`btn  btn-${variant}`" @click="$emit('click', $event)">{{text}}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    variant: {
      type: String,
      default: 'green'
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>


</style>