<template>
<button :class="`btn button button-${variant}`">{{text}}</button>
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
.button {
  font-size: 14px;
  line-height: 28px;
  font-weight: bold;
  text-transform: uppercase;
}

.button-green {
  background-color: $color-accent-green-100;
  color: $color-white;
  border-radius: 5px;
  width: 100%;
  height: 40px;
}

.button-link {
  color: $color-black-100;
  text-decoration: underline;
  text-underline-color: $color-accent-green-100;
}
</style>