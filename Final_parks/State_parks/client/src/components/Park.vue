<template>
    <div class="park-summary p-2 rounded">

        <span class="m-2">{{ park.name }}</span>
        <p>
            <input id="visited" class="m-2" type="checkbox"
            v-model="parkVisited" v-on:change="$emit('isVisited', parkName, parkVisited)">
        </p>

        <p>
            <router-link v-bind:to="{ name: 'detail', params: { state: stateName } }">
                <img class="map-icon" src="@/assets/icons8-oak-tree.png">
            </router-link>
        </p>

    </div>
</template>

<script>

export default {
    name: 'Park',
    props: {
        state: Object 
    },
    data() {
        return {
            parkName: this.park.name,
            parkVisited: this.park.visited,
        }
    }
}
</script>

<style scoped>
    .park-summary {
        height: 10cm;
        width: 12cm;
        border: 1px #EEE solid;
        background-color:gray;
    }

    .tree-icon {
        width: 3cm;
        height: 3cm;
    }
</style>