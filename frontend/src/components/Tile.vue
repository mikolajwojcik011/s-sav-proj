<template>
    <div class="tile"> 
        <img :src=thumbnail alt="Thumbnail">
        <div class="txt-align">
            <h3 class="roboto-bold">{{ title }}</h3>
        </div>
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
    .txt-align {
        padding-right: 1.8rem;
        padding-left: 1rem;
    }
  .tile {
        box-sizing: border-box;
        max-width: 344px;
        margin-bottom: 2.5rem;
    }

    .tile img {
        max-width: 344px;
        height: auto;
        display: block;
        margin-bottom: 0.4rem;
        border-radius: 0.4rem;
    }

    .tile h3 {
        font-size: 1rem;
        margin: 0;
        color: black;
    }
    
    .roboto-bold {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-style: normal;
    }
</style>