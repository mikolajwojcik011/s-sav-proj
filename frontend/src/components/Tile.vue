<template>
    <div class="tile"> <img src="https://1.bp.blogspot.com/-R-ab3bJBv6o/YRoctUuVKiI/AAAAAAAAG8A/eNHL8NAhJ6gRZBp3eW-KMzGOdrUsaFVrQCLcBGAsYHQ/s16000/youtubethumbnaildownloader.png" alt="Thumbnail"><h3>Title 1</h3></div>

</template>

<script>
 export default {
    name: "Tile",
    components: {},
}
</script>

<style>
  .tile {
        background-color: #d82d2d;
        border: 1px solid #000000;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 5px;
        max-width: 400px;
    }

    .tile img {
        max-width: 344px;
        height: auto;
        display: block;
        margin-bottom: 10px;
    }

    .tile h3 {
        font-size: 16px;
        margin: 0;
    }
</style>