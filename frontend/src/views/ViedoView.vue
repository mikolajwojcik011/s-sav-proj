<script>
import CustomButton from '../components/CustomButton.vue';
export default {
    name: "VideoView",
    components: {CustomButton},
    data() {
        return {
            resolutions: ["240","720","1080"],
        }
    }
}

</script>

<template> 
    <section class="container">
        <video controls muted autoPlay crossOrigin="anonymous">
            <source :src="`http://localhost:5000/videos/video/XDDDul`" type="video/mp4">
        </video>
    </section> 
    <section class="container-res">
        <div>
            <CustomButton :resolution="res" v-for="res in resolutions"></CustomButton>
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

    @media screen and (max-width: 1280px) {
  video {
    width: 100%; 
    height: 100%; 
  }
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
</style>