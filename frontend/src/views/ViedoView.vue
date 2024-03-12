<script>

export default {
    name: "VideoView",
    props: ['uid'],
    data() {
        return {
            resTable: [],
            videoSrc: null,
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
            .then(data => {
                for(const [key, value] of Object.entries(data)) this.resTable.push(value)
            })
            .catch(err => console.log(err))
            console.log(this.resTable[0])
        },
    },
    mounted() {
      this.fetchResTable()
    },
    }

</script>

<template> 
    <video v-if="resTable.length != 0" width="1280" height="720" ref="VideoPlayer" controls muted autoPlay crossOrigin="anonymous">
        <source :src="`http://localhost:5000/videos/video/`+ this.uid + '-' + this.resTable[0]" type="video/mp4">
    </video>
    <button v-for="resolution in resTable" @click="changeResolution(resolution)">{{resolution}}</button>
</template>