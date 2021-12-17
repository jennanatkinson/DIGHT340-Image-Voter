<template>
  <div class="topImages">
    <div class="imageItem" v-for="image in imageList" :key="'topImage' + image.rank">
      <div class="rank">
        <h2>#{{image.rank}}</h2>
        </div>
      <div class="topImagePic" :style="{ backgroundImage: 'url(' + require(`@/assets/images/${image.path}`) + ')' }">
      </div>
      <div class="descriptionView">
        <p>{{image.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopImages',
  props: {
    imageList: Array
  },
  data() {
    return {
    }
  },
  
}
</script>

<style scoped>
.topImages {
  padding: 20px 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . .";
  margin-bottom: 30px;
  padding-bottom: 100px;
}

.topImagePic {
  width: 150px;
  height: 100px;
  grid-area: imagePic;
  background-size: cover;
  margin: auto;
}

/*
.topImages {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  height: 300px;
  grid-template-areas:
    "imageView imageView imageView"
}

.imageView { grid-area: imageView; }

.imagePic {
  grid-area: imagePic;
  background-size: cover;
}*/

</style>
