<template>
    <div class="park-detail p-2">

        <h2>The National Park of {{park.name}}</h2>

        <p v-if="park.visited">You have visited this park</p>
        <p v-else>You have not visited this park</p>

        <div id="map-container">
            <l-map
                ref="parkMap"
                style="height: 100%; width: 1005"
                v-bind:zoom="zoom"
                v-bind:center="center">
                <l-tile-layer :url="url"></l-tile-layer>
            </l-map>
        </div>

    </div>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet'

export default {
    name: 'ParkDetail',
    components: {
        LMap, LTileLayer 
    },
    data () {
        return {
            state: {
                name: ''
        },
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        zoom: 2,
        center: [44, -103], // Initialize at the geographic center of the US
        bounds: null
    }
},
    mounted() {
        this.park.name = this. $route.params.state
        // Note required, prevents user dragging map away from park.
        // User can still zoom in and out
        this.$refs.parkMap.mapObject.dragging.disable()
        this.fetchParkData()
    },
    methods: {
        fetchParkData() {
                this.$parkService.getOne( this.park.name ).then( data => {
                this.park = data 
                this.zoom = data.zoomthis.center = [data.lat, data.lon]
                // fly to new center coordinates to center on state
                this.$refs.parkMap.mapObject.flyTo(this.center, this.zoom)
            }).catch( err => console.error(err))
        }
    }
}
</script>

<style scoped>
#map-container {
    height: 30em;
}
</style>

