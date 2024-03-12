<script>

import Tile from '../components/Tile.vue';

  
export default {
    name: "HomeView",
    components: {Tile},
    data() {
      return {
        videoList: ['huj']
      }
    },
    methods: {
      test() {
        console.log(this.videos)
      },
      async fetchVideos() {
        await fetch('http://localhost:5000/videos')
        .then(res => res.json())
        .then(data => this.videoList = data)
        .catch(err => console.log(err))
      }
    },
    mounted() {
      this.fetchVideos()
    },
    

}
</script>

<template>
  <section class="wrapper">
    <Tile ></Tile>
    <Tile ></Tile>
    <Tile ></Tile>
    <Tile ></Tile>
    <Tile ></Tile>
    <Tile ></Tile>
    <Tile ></Tile>
    <Tile ></Tile>
    <Tile ></Tile>
    <Tile ></Tile>
    <Tile ></Tile>
    <Tile ></Tile>
    <Tile ></Tile>
    <Tile ></Tile>
    <Tile ></Tile>
  </section>
</template>

<style scoped>
  .wrapper {
    display: grid;
        grid-template-columns: repeat(5, 1fr);  
        padding: 1rem;  
          
  }

</style>
