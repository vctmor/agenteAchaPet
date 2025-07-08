
import { createRouter, createWebHistory} from 'vue-router'

import Testes from '@/views/Testes.vue'

import FormSearch from '@/views/FormSearch.vue'
import CartazView from '@/views/CartazView.vue'
import ListView from '@/views/ListView.vue'
import HomePage from '@/views/HomePage.vue'

const routes = [

  { path: '/testes',
    name: 'testes',
    component: Testes },

  {
    path: '/',
    name: 'inicial',
    component: HomePage
  },
  { path: '/busca',
    name: 'formSearch',
    component: FormSearch },

  { path: '/cartaz/:id',
    name: 'cartaz',
    component: CartazView },

  { path: '/listar',
    name: 'listar',
    component: ListView },
]

export default createRouter({

  history: createWebHistory(),
  routes
})
