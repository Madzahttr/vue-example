import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'
import Register from '@/views/Register'

const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard,
		beforeEnter: (to, from, next) => {
			if(!store.getters['auth/authenticated']) {
				return next({
					name: "Login"
				})
			}
			next()
		}
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/register',
		name: 'Register',
		component: Register
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
