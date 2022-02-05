<template>
  <div id="app" class="app">
    <header>Lorem ipsum dolor sit</header>
    <main>
      <Card></Card>
    </main>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: 'App',
  components: {
    Card
  },
  created:{

  }
}
</script>

<style lang="scss">
body{
  padding: 80px;
  @media-mobile {
    padding:20px;
  }
}
</style>
