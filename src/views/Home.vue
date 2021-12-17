<template>
  <div class="home">
    <div class="header">
      <h1>Image Voter</h1>
    </div>
    <div class="content">
      <ImageGrid :imageList="this.$root.$data.imageList"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageGrid from '@/components/ImageGrid.vue'

export default {
  name: 'Home',
  components: {
    ImageGrid
  }
}
</script>

<style scoped>
.header {
  width: inherit;
  padding: 20px 0px;
  height: 100px;
  background-color: #0C4FB3;
  color: white;
}
.content {
  margin: 20px 100px 100px 100px;
}
</style>
