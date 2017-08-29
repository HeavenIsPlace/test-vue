import Vue from 'vue'
import Router from 'vue-router'
import userCount from '@/component/userCount'
import clockDetails from '@/component/clockDetails'
import paomadeng from '@/component/paomadeng'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'userCount',
            component: userCount
        },
        {
            path: '/clockDetails',
            name: 'clockDetails',
            component: clockDetails
        },
        {
            path: '/paomadeng',
            name: 'paomadeng',
            component: paomadeng
        }
    ]
})