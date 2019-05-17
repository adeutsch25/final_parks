import axios from 'axios'


export default {
    getAll () {
        return axios.get('/api/park/').then( response => {
            return response.data
        })
    },

    setVisited(parkName, visited) {
        return axios.patch('/api/state/' + parkName, { visited: visited }).then(response => {
            return response.data
        })
    },

    getOne(parkName) {
        return axios.get('/api/states/' + parkName).then( response => {
            return response.data
        })
    },
}