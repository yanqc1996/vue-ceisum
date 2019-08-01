import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'CComponent',
            component: () => import(/* webpackChunkName: "cesiumContainer" */ '../views/cesiumContainer.vue')
        }
    ]
})
