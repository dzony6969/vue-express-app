import Vue from "vue";
import Router from "vue-router";
import store from "../_store/store";
import Hello from "../components/Hello";

Vue.use(Router);

const EachOrder = resolve => {
  require.ensure(["../components/_Dashboard/EachOrder.vue"], () => {
    resolve(require("../components/_Dashboard/EachOrder.vue"));
  });
};

const Chart = resolve => {
  require.ensure(["../components/_Dashboard/Chart.vue"], () => {
    resolve(require("../components/_Dashboard/Chart.vue"));
  });
};

const UserOrder = resolve => {
  require.ensure(["../components/_orderComponent/UserOrder.vue"], () => {
    resolve(require("../components/_orderComponent/UserOrder.vue"));
  });
};

const CheckOrder = resolve => {
  require.ensure(["../components/_orderComponent/CheckOrder"], () => {
    resolve(require("../components/_orderComponent/CheckOrder"));
  });
};

const PageNotFound = resolve => {
  require.ensure(["../components/partials/PageNotFound"], () => {
    resolve(require("../components/partials/PageNotFound"));
  });
};

const AdminLogin = resolve => {
  require.ensure(["../components/AdminLogin"], () => {
    resolve(require("../components/AdminLogin"));
  });
};

const Posts = resolve => {
  require.ensure(["../components/Posts"], () => {
    resolve(require("../components/Posts"));
  });
};
const NewPost = resolve => {
  require.ensure(["../components/NewPost.vue"], () => {
    resolve(require("../components/NewPost.vue"));
  });
};
const showPost = resolve => {
  require.ensure(["../components/_postComponent/showPost.vue"], () => {
    resolve(require("../components/_postComponent/showPost.vue"));
  });
};
const ShopList = resolve => {
  require.ensure(["../components/_orderComponent/ShopList.vue"], () => {
    resolve(require("../components/_orderComponent/ShopList.vue"));
  });
};
const Payment = resolve => {
  require.ensure(["../components/_orderComponent/Payment.vue"], () => {
    resolve(require("../components/_orderComponent/Payment.vue"));
  });
};
const Dashboard = resolve => {
  require.ensure(["../components/Dashboard.vue"], () => {
    resolve(require("../components/Dashboard.vue"));
  });
};
const PostAdmin = resolve => {
  require.ensure(["../components/_Dashboard/PostAdmin.vue"], () => {
    resolve(require("../components/_Dashboard/PostAdmin.vue"));
  });
};

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts
    },
    {
      path: "/new",
      name: "NewPost",
      component: NewPost,
      beforeEnter: checkAuth
    },
    {
      path: "/posts/:id",
      name: "showPost",
      component: showPost
    },
    {
      path: "/shop",
      name: "shop",
      component: ShopList
    },
    {
      path: "/payment",
      name: "order",
      component: Payment
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      beforeEnter: checkAuth
    },
    {
      path: "/dashboard/:id",
      name: "EachOrder",
      component: EachOrder,
      beforeEnter: checkAuth
    },
    {
      path: "/payment/:id",
      name: "UserOrder",
      component: UserOrder
    },
    {
      path: "/checkorder",
      name: "CheckOrder",
      component: CheckOrder
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminLogin
    },
    {
      path: "/adminpost",
      name: "adminPost",
      component: PostAdmin,
      beforeEnter: checkAuth
    },
    {
      path: "*",
      component: PageNotFound
    },
    {
      path: '/charts',
      component: Chart,
      beforeEnter: checkAuth
    },
    {
      path: "/*/*",
      component: PageNotFound
    }
  ]
});
function checkAuth(to, from, next) {
  if (!store.getters.admin.isAdmin) {
    next("*");
  } else {
    next();
  }
}
