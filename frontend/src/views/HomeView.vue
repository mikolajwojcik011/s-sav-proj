<script>
  export default {
    name: "HomeView",
    components: {},
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
  <router-link :to="/video/+ video.name" v-for="video in videoList" :key="video.id">{{ video.name }}</router-link>
</template>

<style scoped>
</style>
