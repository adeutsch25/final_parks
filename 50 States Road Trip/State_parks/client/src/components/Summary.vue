<template>
    <div class="summary">

        <h3>You have visited {{ total }} {{ parksPlural }} </h3>

        <p id="visited-all" v-if="visitedAll">
            You have visited all national parks in MN, ND, and SD!
        </p>

    </div>
</template>

<script>
export default {
    name: 'Summary',
    props: {
        total: Number,
        visitedAll: Boolean 
    },
    computed: {
        parksPlural() {
            return this.total === 1 ? 'park' : 'parks'
        }
    }
}
</script>

<style scoped>
#visited-all {
    columns: #be8234;
    font-weight: 600;
}
</style>