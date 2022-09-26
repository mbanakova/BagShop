import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const Products = () => import('../views/Products')
const Orders = () => import('../views/Orders')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router