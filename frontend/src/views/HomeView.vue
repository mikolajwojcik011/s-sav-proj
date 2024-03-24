<script>
  import Tile from "../components/Tile.vue"

  export default {
    name: "HomeView",
    components: {
      Tile,
    },
    data() {
      return {
        videoList: null,
      }
    },
    methods: {
      async fetchVideos() {
        await fetch('http://26.172.244.223:8080/videos')
        .then(res => res.json())
        .then(data => this.videoList = data)
        .catch(err => console.log(err))
      },
    },
    mounted() {
      this.fetchVideos()
    },
    

}
</script>

<template>
  <section class="wrapper">
    <section class="tile-container">
      <router-link class="underline" v-for="{title, uid, thumbnail} in videoList" :to="/video/+ uid" :key="uid">
        <Tile :title="title" :thumbnail="thumbnail"></Tile>
      </router-link>
    </section>
  </section>
</template>

<style>
  .wrapper{
    justify-content: center;
    display: flex;
  }

  .tile-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);  
      padding: 1rem;  
    }

    .underline {
      text-decoration: none;
    }

  @media screen and (max-width: 1400px) {
    .tile-container{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (max-width: 1050px) {
    .tile-container{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 700px) {
    .tile-container{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }

</style>
