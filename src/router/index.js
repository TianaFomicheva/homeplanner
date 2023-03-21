import { createWebHistory,createRouter } from 'vue-router'
const itemsList = () => import('../components/ItemsList.vue')
const defaultPage = () => import('../components/SkeletonPage.vue')

const routes = [
    { path: '/', component: defaultPage },
    { path: '/todofast', component: itemsList },
    { path: '/todosomeday', component: itemsList },
    { path: '/recipes', component: itemsList }

]

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes
})

export default router