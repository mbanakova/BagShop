import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const Products = () => import('../views/Products')
const Checkout = () => import('../views/Checkout')

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
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router