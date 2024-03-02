<script>
  export default {
    name: "App",
    components: {},
    data() {
      return {
        videos: ['huj']
      }
    },
    methods: {
      test() {
        console.log(this.videos)
      },
      async fetchVideos() {
        await fetch('http://localhost:5000/videos')
        .then(res => res.json())
        .then(data => this.videos = data)
        .catch(err => console.log(err))
      }
    },
    mounted() {
      this.fetchVideos()
    },
    

}
</script>

<template>
  <button @click.prevent="test">test</button>
  <div v-for="video in videos"></div>
  <video controls muted autoPlay crossOrigin="anonymous">
    <source :src="`http://localhost:5000/videos/video/tom-and-jerry`" type="video/mp4">
  </video>
</template>

<style scoped>
</style>
