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
      async fetchVideos() {
        await fetch('http://localhost:5000/videos')
        .then(res => res.json())
        .then(data => this.videoList = data)
        .catch(err => console.log(err))
        console.log(this.videoList)
      },
    },
    mounted() {
      this.fetchVideos()
    },
    

}
</script>

<template>
  <router-link v-for="{title, uid} in videoList" :to="/video/+ uid" :key="uid">{{ title }}</router-link>
</template>

<style scoped>
</style>
