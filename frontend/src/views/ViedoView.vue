<script>

export default {
    name: "VideoView",
    props: ['id']
}

</script>

<template> 
    <video controls muted autoPlay crossOrigin="anonymous">
        <source :src="`http://localhost:5000/videos/video/`+ this.id" type="video/mp4">
    </video>
</template>