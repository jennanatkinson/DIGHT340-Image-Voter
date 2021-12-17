<template>
  <div class="home">
    <ImageGrid :imageList="this.$root.$data.imageList"/>
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
