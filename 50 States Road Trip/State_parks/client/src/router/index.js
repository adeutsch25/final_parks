import Router from 'vue-router'

import ParksList from '@/components/ParksList'
import About from '@/components/About'
import ParkDetail from '@/components/ParkDetail'

export default new Router({
    routes: [
        {
            path: '/',
            component: ParksList
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/detail/:park',
            name: 'detail',
            component: ParkDetail 
        }
    ]
})