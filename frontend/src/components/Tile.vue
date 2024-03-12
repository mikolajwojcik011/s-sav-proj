<template>
    <div class="tile"> 
        <img :src=thumbnail alt="Thumbnail">
        <h3 class="roboto-bold">{{ title }}</h3>
    </div>

</template>

<script>
 export default {
    name: "Tile",
    props: ['title', 'thumbnail'],
    components: {},
}
</script>

<style>
  .tile {
        box-sizing: border-box;
        max-width: 344px;
        margin-bottom: 2.5rem;
    }

    .tile img {
        max-width: 344px;
        height: auto;
        display: block;
        margin-bottom: 1rem;
        border-radius: 1rem;
    }

    .tile h3 {
        font-size: 1.2rem;
        margin: 0;
        margin-left: 1rem;

    }
    
    .roboto-bold {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-style: normal;
    }
</style>