<template>
    <button>{{ resolution }}</button>
</template>

<script>
 export default {
    name: "CustomButton",
    components: {},
    props: ["resolution"]
}
</script>
<style>
  button {
    margin-bottom: 2.5rem;
    display: inline-block;
    padding: 0.2rem 0.8rem;
    background-color: rgb(16, 16, 16);
    color: #FFFFFF;
    border: none;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
}
  button:hover {
  background-color: rgb(36, 36, 36);
  transition: 0.1s;
}
</style>