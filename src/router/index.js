import Home from '../components/layout/Home.vue'
import UserDetail from '../components/users/UserDetail.vue';
import About from '../components/layout/About'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/users/:userName',
        component: UserDetail
    }
]

export default routes;