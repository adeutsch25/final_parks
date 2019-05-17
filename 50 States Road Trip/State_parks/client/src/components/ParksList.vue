<template>
    <div id="parks-list">
        
        <summary
            v-bind:total="totalVisited"
            v-bind:visitedAll="visitedAll">
        </Summary>

        <div class="d-flex flex-wrap justify-content-around">
            <div class="p-2" v-for="park in parks" v-bind:key="park.name">
                <Park
                    v-bind:park="park"
                    v-on:isVisited="updateVisited"
                ></Park>
            </div>
        </div>

    </div>
</template>

<script>

import Park from '@/components/Park'
import Summary from '@/components/Summary'

export default {
    name: 'ParksList',
    components: {
        Park, Summary
    },
    data() {
        return {
            parks: [],
        }
    },
mounted() {
    this.getAll()
},
methods: {
    getAll() {
        this.$parkService.getAll().then(data => {
            this.parks = data
        })
    },
    updateVisited(parkName, parkVisited) {
        this.$parkService.setVisited(parkName, parkVisited).then(data => {
            this.getAll()
    })
  }
},
computed: {
    totalVisited() {
        let visited = this.parks.filter(function(park) {
            return park.updatevisited
      })
      return visited.length
    },
    visitedAll() {
       let visited = this.parks.filter(function(park) {
        return park.visited
       })
       return visited.length == this.parks.length
    }   
}
}
</script>