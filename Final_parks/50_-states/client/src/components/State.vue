<template>
    <div class="state-summery p-2 rounded">

        <span class="m-2">{{ state.name }}</span>
        <p>
            <input id="visited" class="m-2" type="checkbox"
            v-model="stateVisited" v-on:change="$emit('isVisited', stateName, stateVisited)">
        </p>

        <p>
            <router-link v-bind:to="{ name: 'detail', params: { state: stateName } }">
                <img class="map-icon" src="@/assets/icons8-map-64.png">
            </router-link>
        </p>
    </div>
</template>

<script>

export default {
    name: 'State',
    props: {
        state: Object
    },
    data() {
        return{
            stateName: this.state.name,
            statVisited: this.state.visited,
        }
    }
}
</script>

<style scoped>
    .state-summary {
        height: 8cm ;
        width: 10cm;
        border: 1px #EEE solid;
        background-color: whitesmoke;
    }

    .map-icon {
        width: 2cm;
        height: 2cm
    }
</style>
