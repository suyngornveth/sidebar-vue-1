import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/dashboard',
            component: () => import('../views/Dashboard.vue')
        },
        {
            path: '/user',
            component: () => import('../views/User.vue')
        },
        {
            path: '/message',
            component: () => import('../views/Message.vue')
        },
        {
            path: '/analytics',
            component: () => import('../views/Analytics.vue')
        },
        {
            path: '/file-manager',
            component: () => import('../views/FileManager.vue')
        },
        {
            path: '/order',
            component: () => import('../views/Order.vue')
        },
        {
            path: '/saved',
            component: () => import('../views/Saved.vue')
        },
        {
            path: '/setting',
            component: () => import('../views/Setting.vue')
        },

    ]
})

export default router;