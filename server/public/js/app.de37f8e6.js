(function(t){function e(e){for(var r,a,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)a=o[u],i[a]&&d.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==i[o]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},i={app:0},s=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0d36c8":"ef163d7e","chunk-4a260d68":"0884cfbe","chunk-68b38651":"41327f21","chunk-78c78544":"693c2d4d","chunk-f0eb6b8e":"47f26cf9","chunk-ff2808c8":"be6af2d4"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-4a260d68":1,"chunk-68b38651":1,"chunk-78c78544":1,"chunk-f0eb6b8e":1,"chunk-ff2808c8":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0d36c8":"31d6cfe0","chunk-4a260d68":"9670f51a","chunk-68b38651":"bf25dc94","chunk-78c78544":"be759987","chunk-f0eb6b8e":"f43f33eb","chunk-ff2808c8":"ac935cb0"}[t]+".css",i=c.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===r||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.request=r,delete a[t],f.parentNode.removeChild(f),n(s)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=s);var l,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(t),l=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");s.type=r,s.request=a,n[1](s)}i[t]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,u.appendChild(d)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00bd":function(t,e,n){},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"283c":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var r=n("bc3a"),a=n.n(r),i=function(){return a.a.create({baseURL:"/api",headers:{"Content-Type":"application/json"}})};e["a"]={fetchPosts:function(){return i().get("/posts")},getOrder:function(){return i().get("/order")},addPost:function(t){return i().post("/posts",t)},addOrder:function(t){return i().post("/order",t)},getPost:function(t){return i().get("/posts/"+t.id)},deletePost:function(t){return i().delete("/posts/delete/"+t)},oneOrder:function(t){return i().get("/order/"+t.id)},updateOrder:function(t){return i().put("/order/update/"+t.id,t)}}},"2f41":function(t,e,n){},3033:function(t,e,n){"use strict";var r=n("8ff8"),a=n.n(r);a.a},4951:function(t,e,n){"use strict";var r=n("c040"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-header"),n("transition",{attrs:{mode:"out-in",appear:"","enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutDown"}},[n("router-view")],1)],1)},i=[],s=n("2f62"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("v-navigation-drawer",{attrs:{fixed:"",app:"",id:"drawer--z"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[t._v("\r\n    "+t._s(t.checkOrder)+"\r\n      "),n("v-list",{attrs:{dense:""}},[n("v-list-tile",{on:{click:function(e){t.drawer=!1}}},[n("v-list-tile-action",[n("v-icon",{attrs:{large:""}},[t._v("close")])],1),n("v-list-tile-content",[t._v("\r\n           CLOSE PANEL\r\n          ")])],1),n("v-list-tile",{attrs:{to:"/"}},[n("v-list-tile-action",[n("v-icon",[t._v("home")])],1),n("v-list-tile-content",[t._v("\r\n           HOME\r\n          ")])],1),n("v-list-tile",{attrs:{to:"/posts"}},[n("v-list-tile-action",[n("v-icon",[t._v("contact_mail")])],1),n("v-list-tile-content",[t._v("\r\n            SHOP\r\n          ")])],1),n("v-list-tile",{attrs:{to:"/new"}},[n("v-list-tile-action",[n("v-icon",[t._v("shop")])],1),n("v-list-tile-content",[t._v("\r\n            NEW ITEM\r\n          ")])],1),n("v-list-tile",{attrs:{to:"/shop"}},[n("v-list-tile-action",[n("v-icon",[t._v(" shopping_basket")])],1),n("v-list-tile-content",[0===t.cart.length?n("div",[t._v("\r\n             Your order ("+t._s(t.cart.length)+")\r\n             ")]):t._e(),t.cart.length>0?n("div",{attrs:{flat:""}},[n("v-badge",{attrs:{color:"cyan",right:""}},[t._v("\r\n          ORDER\r\n            "),n("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(" "+t._s(t.cart.length))])])],1):t._e()])],1),n("v-list-tile",{attrs:{to:"/dashboard"}},[n("v-list-tile-action",[n("v-icon",[t._v("shopping_basket")])],1),n("v-list-tile-content",[t._v("\r\n            admin dashboard\r\n          ")])],1)],1)],1),n("v-toolbar",{attrs:{color:"indigo",dark:"",fixed:"",id:"toolbar-zIndex"}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Application")]),n("v-spacer"),n("v-menu",{staticClass:"hidden-md-and-up",attrs:{"nudge-width":100}})],1)],1)])},c=[],l=n("be94"),u={data:function(){return{drawer:!1}},computed:Object(l["a"])({},Object(s["c"])(["cart"]),{checkOrder:function(){if(this.cart.length>0)return this.drawer=!0}})},d=u,f=(n("3033"),n("2877")),p=Object(f["a"])(d,o,c,!1,null,"80ff99b2",null);p.options.__file="Header.vue";var v=p.exports,h={name:"App",components:{appHeader:v}},m=h,g=(n("034f"),Object(f["a"])(m,a,i,!1,null,null,null));g.options.__file="App.vue";var b=g.exports,_=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("section",[n("v-parallax",{attrs:{dark:"",height:"600",src:"https://images.pexels.com/photos/414586/pexels-photo-414586.jpeg?cs=srgb&dl=background-image-beautiful-blur-414586.jpg&fm=jpg"}},[n("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[n("h1",{staticClass:"display-2 font-weight-black font-italic"},[t._v("Nature shop")]),n("h4",{staticClass:"subheading"},[t._v("Build your application today!")]),n("v-btn",{attrs:{color:"error",dark:"",large:""},on:{click:function(e){t.$vuetify.goTo("#first",t.options)}}},[t._v("Our product")])],1)],1)],1),n("div",{attrs:{id:"first"}},[n("after-paralex",[n("div",{attrs:{"align-center":""}},[n("v-btn",{attrs:{color:"error",dark:"",large:""},on:{click:function(e){t.$vuetify.goTo("#four",t.options)}}},[t._v("Contact Us!")]),n("router-link",{attrs:{to:"/posts"}},[n("v-btn",{attrs:{color:"error",dark:"",large:""}},[t._v("Visit our online shop")])],1)],1)])],1),n("div",{attrs:{id:"second"}},[n("app-product")],1),n("div",{attrs:{id:"third"}},[n("app-parallax")],1),n("div",{attrs:{id:"four"}},[n("company-info")],1),n("div",{attrs:{id:"five"}},[n("app-footer")],1)])},y=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":""}},[n("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm4:""}},[n("div",{staticClass:"text-xs-center"},[t._l(t.items,function(e){return n("v-icon",{key:e,staticClass:"green--text text--lighten-2",attrs:{"x-large":""}},[t._v("local_florist")])}),n("h1",{staticClass:"headline font-weight-black"},[t._v("Nature shop")]),n("span",{staticClass:"subheading"},[t._t("default")],2)],2)]),n("v-flex",{attrs:{xs12:""}},[n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},t._l(t.items,function(e){return n("v-flex",{key:e,attrs:{xs12:"",md4:""}},[n("v-card",{staticClass:"elevation-15 transparent"},[n("v-card-text",{staticClass:"text-xs-center"},[n("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v(t._s(e))])],1),n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline text-xs-center"},[t._v("Nature shop")])]),n("v-card-text",[t._v("\n                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. \n                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. \n                ")])],1)],1)}))],1)],1)],1)],1)},k=[],C={data:function(){return{items:["favorite","flash_on","build"]}}},O=C,E=(n("8688"),Object(f["a"])(O,w,k,!1,null,null,null));E.options.__file="AfterParalex.vue";var j=E.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.arrs,function(e){return n("v-flex",{key:e,staticClass:"my-3",attrs:{xs12:"",sm4:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(r){var a=r.hover;return n("v-card",{staticClass:"mx-auto",attrs:{color:"grey lighten-4","max-width":"500"}},[n("v-img",{attrs:{"aspect-ratio":16/9,src:e}},[n("v-expand-transition",[a?n("div",{staticClass:"d-flex transition-fast-in-fast-out indigo darken-2 v-card--reveal display-3 white--text",staticStyle:{height:"100%"}},[t._v("\r\n            $14.99\r\n          ")]):t._e()])],1),n("v-card-text",{staticClass:"pt-4",staticStyle:{position:"relative"}},[n("v-btn",{staticClass:"white--text",attrs:{absolute:"",color:"orange",fab:"",medium:"",right:"",top:""}},[n("v-icon",[t._v("shopping_basket")])],1),n("div",{staticClass:"font-weight-light grey--text title mb-2"},[t._v("For the perfect meal")]),n("div",{staticClass:"font-weight-light title mb-2"})],1)],1)}}])})],1)}))],1)],1)},S=[],T={data:function(){return{arrs:["https://i.wpimg.pl/O/644x428/d.wpimg.pl/204634975-1593965418/bazylia.jpg","https://ogrod.smcloud.net/s/photos/t/11189/chmiel_1004241.jpg","https://7.allegroimg.com/s512/0144c4/3f9bc396465f881d892521432af7"]}}},A=T,R=Object(f["a"])(A,P,S,!1,null,null,null);R.options.__file="AppProduct.vue";var N=R.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-parallax",{attrs:{id:"parallax",dark:"",height:"450",src:"https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?cs=srgb&dl=background-background-image-creek-707915.jpg&fm=jpg"}},[n("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[n("h1",{staticClass:"display-2 font-weight-thin mb-3"},[t._v("Vuetify.js")]),n("h4",{staticClass:"subheading"},[t._v("Build your application today!")])]),n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return n("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"indigo"},on:{click:t.toTop}},[n("v-expand-transition",[r?n("div",{staticClass:"d-flex transition-fast-in-fast-out indigo darken-2"},[t._v("\r\n            Go to top\r\n          ")]):t._e()]),n("v-icon",[t._v("keyboard_arrow_up")])],1)}}])})],1)},q=[],M={data:function(){return{fab:!1}},methods:{onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)}}},L=M,D=(n("4951"),Object(f["a"])(L,$,q,!1,null,null,null));D.options.__file="LastParallax.vue";var I=D.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{height:"auto",color:"blue lighten-1"}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},t._l(t.links,function(e){return n("v-btn",{key:e,staticClass:"font-weight-black font-italic",attrs:{color:"white",flat:"",round:""}},[t._v("\n        "+t._s(e)+"\n      ")])}))],1)},z=[],B={data:function(){return{links:["Home","About Us","Team","Services","Blog","Contact Us"]}}},H=B,F=Object(f["a"])(H,U,z,!1,null,null,null);F.options.__file="Footer.vue";var G=F.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{staticClass:"my-5",attrs:{row:"",wrap:"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm4:""}},[n("v-card",{staticClass:"elevation-0 transparent"},[n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[t._v("Company info")])]),n("v-card-text",[t._v("\n              Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. \n              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n              Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. \n            ")])],1)],1),n("v-flex",{attrs:{xs12:"",sm4:"","offset-sm1":""}},[n("v-card",{staticClass:"elevation-0 transparent"},[n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[t._v("Contact us")])]),n("v-card-text",[t._v("\n              Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.\n            ")]),n("v-list",{staticClass:"transparent"},[n("v-list-tile",[n("v-list-tile-action",[n("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("phone")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("777-867-5309")])],1)],1),n("v-list-tile",[n("v-list-tile-action",[n("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("place")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Chicago, US")])],1)],1),n("v-list-tile",[n("v-list-tile-action",[n("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("email")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("john@vuetifyjs.com")])],1)],1)],1)],1)],1)],1)],1)],1)},V=[],Y={},W=Object(f["a"])(Y,J,V,!1,null,null,null);W.options.__file="CompanyInfo.vue";var K=W.exports,Q={name:"posts",components:{AfterParalex:j,AppProduct:N,AppParallax:I,AppFooter:G,CompanyInfo:K},data:function(){return{}},computed:{options:function(){return{duration:500}}}},X=Q,Z=(n("f073"),Object(f["a"])(X,x,y,!1,null,"1895e901",null));Z.options.__file="Hello.vue";var tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("v-container",[n("br"),n("br"),n("br"),n("br"),t._v("\r\n        "+t._s(t.order.id)+"\r\n        "),n("br"),t._v("\r\n        "+t._s(t.order.address)+"\r\n        "),n("br"),t._v("\r\n        "+t._s(t.order.order)+"\r\n        "),n("br"),t._v("\r\n        "+t._s(t.order.name)+"\r\n        "),n("br"),t._v("\r\n        "+t._s(t.order.zip)+"\r\n        "),n("br"),t._v("\r\n        "+t._s(t.order.summary)+"\r\n        "),n("br"),t._v("\r\n        "+t._s(t.order.createdAt)+"\r\n        "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.order.name,expression:"order.name"}],attrs:{type:"text"},domProps:{value:t.order.name},on:{input:function(e){e.target.composing||t.$set(t.order,"name",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.order.status,expression:"order.status"}],attrs:{type:"text"},domProps:{value:t.order.status},on:{input:function(e){e.target.composing||t.$set(t.order,"status",e.target.value)}}}),n("button",{staticClass:"app_post_btn",on:{click:t.upPost}},[t._v("Update")])])],1)},nt=[],rt=(n("7f7f"),n("96cf"),n("1da1")),at=n("283c"),it={name:"EachOrder",data:function(){return{order:{id:"",order:[],name:"",address:"",city:"",zip:"",summary:"",createdAt:"",status:""}}},mounted:function(){this.getOneOrder()},methods:{getOneOrder:function(){var t=Object(rt["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,at["a"].oneOrder({id:this.$route.params.id});case 3:e=t.sent,this.order.id=e.data._id,this.order.address=e.data.address,this.order.order=e.data.order,this.order.name=e.data.name,this.order.zip=e.data.zip,this.order.summary=e.data.summary,this.order.createdAt=e.data.createdAt,this.order.status=e.data.status,t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),console.log(t.t0);case 17:case"end":return t.stop()}},t,this,[[0,14]])}));return function(){return t.apply(this,arguments)}}(),upPost:function(){var t=Object(rt["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,at["a"].updateOrder({id:this.$route.params.id,status:this.order.status,name:this.order.name});case 2:this.$router.push({name:"dashboard"});case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},st=it,ot=Object(f["a"])(st,et,nt,!1,null,null,null);ot.options.__file="EachOrder.vue";var ct=ot.exports;r["default"].use(_["a"]);var lt=function(t){n.e("chunk-ff2808c8").then(function(){t(n("7c2a"))}.bind(null,n)).catch(n.oe)},ut=function(t){n.e("chunk-78c78544").then(function(){t(n("f059"))}.bind(null,n)).catch(n.oe)},dt=function(t){n.e("chunk-4a260d68").then(function(){t(n("0320"))}.bind(null,n)).catch(n.oe)},ft=function(t){n.e("chunk-2d0d36c8").then(function(){t(n("5d69"))}.bind(null,n)).catch(n.oe)},pt=function(t){n.e("chunk-68b38651").then(function(){t(n("92b7"))}.bind(null,n)).catch(n.oe)},vt=function(t){n.e("chunk-f0eb6b8e").then(function(){t(n("0c7c"))}.bind(null,n)).catch(n.oe)},ht=new _["a"]({mode:"history",routes:[{path:"/",name:"Hello",component:tt},{path:"/posts",name:"Posts",component:lt},{path:"/new",name:"NewPost",component:ut},{path:"/posts/:id",name:"showPost",component:dt},{path:"/shop",name:"shop",component:ft},{path:"/payment",name:"order",component:pt},{path:"/dashboard",name:"dashboard",component:vt},{path:"/dashboard/:id",name:"EachOrder",component:ct}]}),mt={getPosts:function(){var t=Object(rt["a"])(regeneratorRuntime.mark(function t(e){var n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,at["a"].fetchPosts();case 3:r=t.sent,a=r.data,n("SET_POSTS",a);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),deletePost:function(){var t=Object(rt["a"])(regeneratorRuntime.mark(function t(e,n){var r,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,at["a"].deletePost(n);case 3:return t.next=5,at["a"].fetchPosts();case 5:a=t.sent,i=a.data,r("DELETE_POST",i);case 8:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},gt={actions:mt},bt={orders:[]},_t={getOrders:function(){var t=Object(rt["a"])(regeneratorRuntime.mark(function t(e){var n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,at["a"].getOrder();case 3:r=t.sent,a=r.data,console.log(a),n("GET_ORDERS",a);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},xt={GET_ORDERS:function(t,e){t.orders=e}},yt={orders:function(t){return t.orders}},wt={state:bt,actions:_t,mutations:xt,getters:yt},kt=(n("7514"),{cart:[],summary:0}),Ct={deleteItem:function(t,e){var n=t.commit;n("DELETE_CART",e)},priceSum:function(t){var e=t.commit;e("PRICE_SUM")}},Ot={addToCart:function(t,e){var n=t.cart.find(function(t){return t.id==e.id});if(!n)return t.cart.push(e);e.quantity++},DELETE_CART:function(t,e){var n=t.cart.find(function(t){return t.id==e.id});return t.cart.splice(t.cart.indexOf(n),1)},PRICE_SUM:function(t){t.cart.reduce(function(e,n){var r=e+n.price;return t.summary=r},0)}},Et={cart:function(t){return t.cart},summary:function(t){return t.summary}},jt={state:kt,actions:Ct,mutations:Ot,getters:Et};r["default"].use(s["a"]);var Pt=new s["a"].Store({state:{posts:[]},mutations:{SET_POSTS:function(t,e){t.posts=e},DELETE_POST:function(t,e){t.posts=e}},modules:{postModule:gt,orderModule:wt,cartModule:jt}}),St=Pt,Tt=n("ce5b"),At=n.n(Tt),Rt=n("cb43");n("bf40");r["default"].use(Rt["default"]),r["default"].use(s["a"]),r["default"].use(At.a),new r["default"]({el:"#app",router:ht,store:St,render:function(t){return t(b)}})},"64a9":function(t,e,n){},8688:function(t,e,n){"use strict";var r=n("00bd"),a=n.n(r);a.a},"8ff8":function(t,e,n){},c040:function(t,e){},f073:function(t,e,n){"use strict";var r=n("2f41"),a=n.n(r);a.a}});
//# sourceMappingURL=app.de37f8e6.js.map