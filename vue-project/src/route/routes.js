import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost.vue'
import showPost from '@/components/showPost.vue'
import ShopList from '../components/ShopList.vue'
import Payment from '../components/Payment.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
        path: '/new',
        name: 'NewPost',
        component: NewPost
    },
    {
        path: '/posts/:id',
        name: 'showPost',
        component: showPost
      },
      {
        path: '/shop',
        name: 'shop',
        component: ShopList
      },
      {
        path: '/payment',
        name: 'order',
        component: Payment,
      }    
  ]
})