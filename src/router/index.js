import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Sobre from '@/views/Sobre'
import Produto from '@/views/Produto'
import Clientes from '@/views/Clientes'
import Contato from '@/views/Contato'
import Representante from '@/views/Representante'

Vue.use(Router)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'sobre',
        path: '/sobre',
        component: Sobre
    },
    {
        name: 'produto',
        path: '/produto',
        component: Produto
    },
    {
        name: 'clientes',
        path: '/clientes',
        component: Clientes,
        props: true 
    },
    {
        name: 'contato',
        path: '/contato',
        component: Contato
    },
    {
        name: 'representante',
        path: '/representante',
        component: Representante
    }
]

//const router = new Router({ routes })

const router = new Router({
    routes,
    mode: 'history' //remove p /#/ da rota
  })

export default router