<script>
import CustomButton from '../components/CustomButton.vue'

export default {
    name: "VideoView",
    components: {
        CustomButton
    },
    props: ['uid'],
    data() {
        return {
            resTable: [],
            defaultRes: null,
            videoSrc: null,
        }
    },
    methods: {
        changeResolution(res) {
            if(res == '1080') res = '180'
            let currentTime = this.$refs.VideoPlayer.currentTime
            this.$refs.VideoPlayer.src = `http://26.172.244.223:8080/videos/video/` + this.uid + '-' + res
            this.$refs.VideoPlayer.play()
            this.$refs.VideoPlayer.currentTime = currentTime
        },
        async fetchResTable() {
            await fetch(`http://26.172.244.223:8080/videos/resoltuionTable/` + this.uid)
            .then(res => res.json())
            .then(data => {
                for(const [key, value] of Object.entries(data)){
                    if(value == '180') {
                        this.resTable.push('1080')
                        this.defaultRes = '180'
                    }
                    else{ 
                        this.resTable.push(value)
                        this.defaultRes = value
                    }
                }
            })
            .catch(err => console.log(err))
        },
    },
    mounted() {
      this.fetchResTable()
    },
    }

</script>

<template> 
    <section class="container">
        <video v-if="resTable.length != 0" ref="VideoPlayer" controls muted autoPlay crossOrigin="anonymous">
            <source :src="`http://26.172.244.223:8080/videos/video/`+ this.uid + '-' + defaultRes" type="video/mp4">
        </video>
    </section>
    <section class="container-res">
        <div>
            <CustomButton v-for="res in resTable" @click="changeResolution(res)" :resolution="res"></CustomButton>
        </div>
    </section> 
</template>

<style>
    .container-res {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

    video {
        margin-left: 1rem;
        margin-right: 1rem;
        width: 1280px;
        height: 720px;
    }

    .container {
        display: flex;
        justify-content: center; 
        align-items: center;
        background-color: black;
        margin-top: 4rem;
    }

    .container-res div{
        margin-top: 0.4rem;
        display: flex;
        justify-content: flex-end;
        width: 1280px;
        align-items: center;
        gap: 0.4rem;
    }
    @media screen and (max-width: 1280px) {
        video {
            width: 100%; 
            height: 100%; 
        }
    }

    @media screen and (min-width: 1930px) {
        video {
            width: 1920px; 
            height: 1080px; 
        }
    }
</style>