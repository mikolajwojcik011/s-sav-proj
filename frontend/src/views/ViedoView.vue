<script>

export default {
    name: "VideoView",
    props: ['uid'],
    data() {
        return {
            videoSrc: null,
            resTable: null
        }
    },
    methods: {
        changeResolution(res) {
            let currentTime = this.$refs.VideoPlayer.currentTime
            this.$refs.VideoPlayer.src = `http://localhost:5000/videos/video/` + this.uid + '-' + res
            this.$refs.VideoPlayer.play()
            this.$refs.VideoPlayer.currentTime = currentTime
        },
        async fetchResTable() {
            await fetch(`http://localhost:5000/videos/resoltuionTable/` + this.uid)
            .then(res => res.json())
            .then(data => this.resTable = data)
            .catch(err => console.log(err))
            console.log(this.resTable)
        },
    },
    mounted() {
      this.fetchResTable()
    },
    }

</script>

<template> 
    <video width="1280" height="720" ref="VideoPlayer" controls muted autoPlay crossOrigin="anonymous">
        <source :src="videoSrc" type="video/mp4">
    </video>
    <button @click="changeResolution('720')">720</button>
    <button @click="changeResolution('240')">240</button>
</template>