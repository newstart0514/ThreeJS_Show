import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes:RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/show',
        name: 'shower',
        component: () => import('@/views/ShowPages.vue')
    },
    {
        // 匹配路由404
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/views/404.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),   // 路由模式
    routes
})

export default router