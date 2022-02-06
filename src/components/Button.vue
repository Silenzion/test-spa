<template>
<button :class="`btn  btn-${variant}`">{{text}}</button>
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