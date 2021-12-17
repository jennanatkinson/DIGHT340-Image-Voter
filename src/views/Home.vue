<template>
  <div class="home">
    <div class="header">
      <h1>Image Voter</h1>
    </div>
    <TopImages :imageList="topImages" class="topBar"/>
    <div class="content">
      <ImageGrid :imageList="this.$root.$data.imageList"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopImages from '@/components/TopImages.vue'
import ImageGrid from '@/components/ImageGrid.vue'

export default {
  name: 'Home',
  components: {
    TopImages,
    ImageGrid
  },
  computed: {
    topImages() {
      let images = JSON.parse(JSON.stringify(this.$root.$data.imageList));
      images = images.sort((a,b) => b.voteCounter - a.voteCounter).slice(0,3);
      for (let i = 0; i < images.length; i++) {
        images[i].rank = i + 1;
      }
      return images;
    }
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
  padding: 20px 100px 100px 100px;
}
.topBar {
  background-color: #E5F7FF;
  padding: 20px 100px 20px 100px;
}
</style>
