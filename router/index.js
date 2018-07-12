import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import article from '@/pages/article/index'
import articleShow from '@/pages/article/show'
import product from '@/pages/product/index'
import productShow from '@/pages/product/show'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: index},
    {path: '/article', component: article},
    {path: '/article/show/:id', component: articleShow},
    {path:'/product',component:product},
    {path:'/product/show/:id',component:productShow}
    
  ]
})
