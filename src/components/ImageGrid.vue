<template>
  <div class="imageGrid">
    <div class="imageItem" v-for="image in imageList" :key="image.id">
      <div class="voteButtons">
        <button @click="incrementVote(image)"><i class="fas fa-caret-up"></i></button>
        <p>{{voteCounter(image)}}</p>
        <button @click="decrementVote(image)"><i class="fas fa-caret-down"></i></button>
      </div>
      <div class="imagePic" :style="{ backgroundImage: 'url(' + require(`@/assets/images/${image.path}`) + ')' }">
      </div>
      <div class="descriptionView">
        <p>{{image.description}}</p>
      </div>
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
  methods: {
    voteCounter(image) {
      return this.$root.$data.imageList[image.id].voteCounter;
    },
    incrementVote(image) {
      this.$root.$data.imageList[image.id].voteCounter++;
    },
    decrementVote(image) {
      this.$root.$data.imageList[image.id].voteCounter--;
    }
  }
  
}
</script>

<style scoped>
.imageGrid {
  width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 50px 2px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . ."
    ". . .";
}
.imageItem {
  width: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1.3fr 0.7fr 1.3fr 0.7fr;
  gap: 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "voteButtons imagePic imagePic imagePic imagePic imagePic imagePic"
    "voteButtons imagePic imagePic imagePic imagePic imagePic imagePic"
    "voteButtons imagePic imagePic imagePic imagePic imagePic imagePic"
    ". descriptionView descriptionView descriptionView descriptionView descriptionView descriptionView";
}

.voteButtons { grid-area: voteButtons; }

.imagePic {
  grid-area: imagePic;
  background-size: cover;
}

.descriptionView { grid-area: descriptionView; }

</style>
