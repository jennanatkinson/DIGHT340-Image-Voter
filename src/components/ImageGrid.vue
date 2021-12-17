<template>
  <div class="imageGrid">
    <div class="imageItem" v-for="image in imageList" :key="image.id">
      <div class="imageViewTop">
        <div class="voteButtons">
          <button><i class="fas fa-caret-up"></i></button>
          <p>{{image.voteCounter}}</p>
          <button><i class="fas fa-caret-down"></i></button>
        </div>
        <img :src="require('../assets/images/' + image.path)" class="imagePic"/>
      </div>
      <p class="description">{{image.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGrid',
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
.imageViewTop {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 10px 10px;
  grid-auto-flow: row;
  grid-template-areas:
    ". .";
}
.voteButtons {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 10px 10px;
  grid-auto-flow: row;
  grid-template-areas:
    "."
    "."
    ".";
}
.imageGrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px 10px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . ."
    ". . .";
}
.imagePic {
  width: 100px;
}
</style>
