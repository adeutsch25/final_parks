<template>
    <div class="header">

    <div class="jumbotron">
        <h1 class="display-4" id="title">Have you visted every national park in MN, ND, and SD?</h1>
    </div>

    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    .jumbotron {
        background-image: url('../assets/parks_header.jpg');
        background-position: center;
        background-size: cover;
    }
    #title {
        font-weight: 500;
        color:aqua;
    }
</style>
