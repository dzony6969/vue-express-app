import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import EachOrder from '../components/_Dashboard/EachOrder.vue'
import UserOrder from '../components/UserOrder.vue'
import CheckOrder from '../components/CheckOrder'
import PageNotFound from '../components/PageNotFound'
// import Posts from '../components/Posts'
// import NewPost from '../components/NewPost.vue'
// import showPost from '../components/showPost.vue'
// import ShopList from '../components/ShopList.vue'
// import Payment from '../components/Payment.vue'
// import Dashboard from '../components/Dashboard.vue'
Vue.use(Router)

// const Hello = resolve => {
//   require.ensure(['../components/Hello'], () => {
//       resolve(require('../components/Hello'));
//   });
// }
const Posts = resolve => {
  require.ensure(['../components/Posts'], () => {
      resolve(require('../components/Posts'));
  });
}
const NewPost = resolve => {
  require.ensure(['../components/NewPost.vue'], () => {
      resolve(require('../components/NewPost.vue'));
  });
}
const showPost = resolve => {
  require.ensure(['../components/showPost.vue'], () => {
      resolve(require('../components/showPost.vue'));
  });
}
const ShopList = resolve => {
  require.ensure(['../components/ShopList.vue'], () => {
      resolve(require('../components/ShopList.vue'));
  });
}
const Payment = resolve => {
  require.ensure(['../components/Payment.vue'], () => {
      resolve(require('../components/Payment.vue'));
  });
}
const Dashboard = resolve => {
  require.ensure(['../components/Dashboard.vue'], () => {
      resolve(require('../components/Dashboard.vue'));
  });
}


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
        component: showPost,
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
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
      },
      {
        path: '/dashboard/:id',
        name: 'EachOrder',
        component: EachOrder,
      },
      {
        path: '/payment/:id',
        name: 'UserOrder',
        component: UserOrder,
      },
      {
        path: '/checkorder',
        name: 'CheckOrder',
        component: CheckOrder,
      },
      {
        path: "*",
        component: PageNotFound,
      },
      {
        path: "/*/*",
        component: PageNotFound,
      }
  ]
})