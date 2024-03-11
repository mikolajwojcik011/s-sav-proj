<script>
  export default {
    name: "HomeView",
    components: {},
    data() {
      return {
        videoList: null,
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
  <router-link v-for="video in videoList" :to="/video/+ video.uid" :key="video.uid">{{ video.title }}</router-link>
</template>

<style scoped>
</style>
