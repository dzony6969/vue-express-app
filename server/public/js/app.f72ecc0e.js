(function(t){function e(e){for(var a,s,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)s=c[u],r[s]&&d.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},r={app:0},i=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-05044362":"cb12ecab","chunk-0988e5a6":"fc535916","chunk-0c54115c":"f1444a29","chunk-136f59ee":"5d7f3240","chunk-13bfec6c":"75a1442a","chunk-2917da0e":"76ed6d00","chunk-2d21eb0b":"6ac05075","chunk-414c109e":"7656a37c","chunk-57717aee":"bba20dca","chunk-756cd427":"b837e9f3","chunk-7e7bebd2":"48b8053e","chunk-9e99bbf6":"7898f8da","chunk-a9e4171a":"a1dedc47"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-05044362":1,"chunk-0988e5a6":1,"chunk-0c54115c":1,"chunk-136f59ee":1,"chunk-13bfec6c":1,"chunk-414c109e":1,"chunk-57717aee":1,"chunk-756cd427":1,"chunk-7e7bebd2":1,"chunk-a9e4171a":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-05044362":"e9d7b937","chunk-0988e5a6":"86c96745","chunk-0c54115c":"4e482956","chunk-136f59ee":"bf25dc94","chunk-13bfec6c":"6d419406","chunk-2917da0e":"31d6cfe0","chunk-2d21eb0b":"31d6cfe0","chunk-414c109e":"4cfeee86","chunk-57717aee":"5ad6aec0","chunk-756cd427":"51ebbcc4","chunk-7e7bebd2":"32b6d6c9","chunk-9e99bbf6":"31d6cfe0","chunk-a9e4171a":"9703f4cf"}[t]+".css",r=o.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.request=a,delete s[t],f.parentNode.removeChild(f),n(i)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){s[t]=0}));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=i);var l,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=c(t),l=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+s+")");i.type=a,i.request=s,n[1](i)}r[t]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,u.appendChild(d)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00bd":function(t,e,n){},"034f":function(t,e,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},1557:function(t,e,n){},"283c":function(t,e,n){"use strict";var a=n("bc3a"),s=n.n(a),r=function(){return s.a.create({baseURL:"/api",headers:{"Content-Type":"application/json"}})};e["a"]={fetchPosts:function(){return r().get("/posts")},getOrder:function(){return r().get("/order")},addPost:function(t){return r().post("/posts",t)},addComment:function(t){return r().post("/posts/"+t.id+"/comment",t)},fetchComment:function(){return r().get("/posts/all/comment")},addOrder:function(t){return r().post("/order",t)},getPost:function(t){return r().get("/posts/"+t.id)},deletePost:function(t){return r().delete("/posts/delete/"+t)},oneOrder:function(t){return r().get("/order/"+t.id)},updateOrder:function(t){return r().put("/order/update/"+t.id,t)},updatePost:function(t){return r().put("/posts/update/"+t.id,t)}}},"320e":function(t,e,n){"use strict";var a=n("1557"),s=n.n(a);s.a},"3cfe":function(t,e,n){},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=r(t);return n(e)}function r(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}s.keys=function(){return Object.keys(a)},s.resolve=r,t.exports=s,s.id="4678"},4951:function(t,e,n){"use strict";var a=n("c040"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("div",{attrs:{id:"app"}},[n("v-app",[n("app-header",{staticClass:"app--header"}),n("transition",{attrs:{mode:"out-in",appear:"","enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutDown"}},[n("router-view")],1)],1)],1)])},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("v-navigation-drawer",{staticClass:"elevation-10",attrs:{"enable-resize-watcher":"",fixed:"",clipped:t.clipped,app:"",id:"drawer--z",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[t.admin.isAdmin?n("v-img",{attrs:{"aspect-ratio":16/9,src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"}},[n("v-layout",{staticClass:"lightbox white--text",attrs:{"pa-2":"",column:"","fill-height":""}},[n("v-spacer"),n("v-flex",{attrs:{shrink:""}},[n("div",{staticClass:"subheading"},[n("p",{staticClass:"admin--font"},[t._v("HELLO ADMIN")])]),n("div",{staticClass:"body-1"},[n("p",{staticClass:"admin--font"},[t._v("You have "),n("strong",{staticClass:"new--order"},[t._v(t._s(t.newOrder))]),t._v(" new order to check")])])])],1)],1):t._e(),n("v-list-tile",{attrs:{to:"/"}},[n("v-list-tile-action",[n("v-icon",[t._v("home")])],1),n("v-list-tile-content",[n("strong",[t._v("HOME")])])],1),n("v-list-tile",{attrs:{to:"/posts"}},[n("v-list-tile-action",[n("v-icon",[t._v("contact_mail")])],1),n("v-list-tile-content",[n("strong",[t._v("SHOP")])])],1),n("v-list-tile",{attrs:{to:"/shop"}},[n("v-list-tile-action",[n("v-icon",[t._v(" shopping_basket")])],1),n("v-list-tile-content",[0===t.cart.length?n("div",[n("strong",[t._v("YOUR ORDER ("+t._s(t.cart.length)+")")])]):t._e(),t.cart.length>0?n("div",{attrs:{flat:""}},[n("v-badge",{attrs:{color:"cyan",right:""}},[n("strong",[t._v("ORDER")]),n("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(" "+t._s(t.cart.length))])])],1):t._e()]),n("div",{staticClass:"check--order"},[t._v(" \r\n            "+t._s(t.checkOrder)+"\r\n            ")])],1),n("v-list-tile",{attrs:{to:"/checkorder"}},[n("v-list-tile-action",[n("v-icon",[t._v("shopping_basket")])],1),n("v-list-tile-content",[n("strong",[t._v("CHECK STATUS")])])],1),t.admin.isAdmin?t._e():n("v-list-tile",{attrs:{to:"/admin"}},[n("v-list-tile-action",[n("v-icon",[t._v("shopping_basket")])],1),n("v-list-tile-content",[n("strong",[t._v("LOGIN")])])],1),t.admin.isAdmin?n("div",[n("br"),n("h3",[t._v("Admin dashboard")])]):t._e(),t.admin.isAdmin?n("v-list-tile",{attrs:{to:"/dashboard"}},[n("v-list-tile-action",[n("v-icon",[t._v("dashboard")])],1),n("div",{attrs:{flat:""}},[n("v-badge",{attrs:{color:"cyan",right:""}},[n("strong",[t._v("USER ORDERS")]),n("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(" "+t._s(t.newOrder))])])],1)],1):t._e(),t.admin.isAdmin?n("v-list-tile",{attrs:{to:"/charts"}},[n("v-list-tile-action",[n("v-icon",[t._v("bar_chart")])],1),n("v-list-tile-content",[n("strong",[t._v("Charts")])])],1):t._e(),t.admin.isAdmin?n("v-list-tile",{attrs:{to:"/new"}},[n("v-list-tile-action",[n("v-icon",[t._v("create_new_folder")])],1),n("v-list-tile-content",[n("strong",[t._v("NEW ITEM")])])],1):t._e(),t.admin.isAdmin?n("v-list-tile",{attrs:{to:"/adminpost"}},[n("v-list-tile-action",[n("v-icon",[t._v("create_new_folder")])],1),n("v-list-tile-content",[n("strong",[t._v("Product list")])])],1):t._e(),t.admin.isAdmin?n("v-list-tile",{on:{click:t.logout}},[n("v-list-tile-action",[n("v-icon",[t._v("offline_bolt")])],1),n("v-list-tile-content",[n("strong",[t._v("LOGOUT")])])],1):t._e()],1)],1),n("v-toolbar",{attrs:{color:"blue-grey lighten-1","clipped-left":t.clipped,dark:"",fixed:"",app:"",id:"toolbar-zIndex"}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Application")]),n("v-spacer"),n("v-menu",{staticClass:"hidden-md-and-up",attrs:{"nudge-width":100}})],1)],1)])},c=[],o=n("be94"),l=n("2f62"),u={data:function(){return{drawer:!1,adminPassword:"",adminUser:"",clipped:!1}},computed:Object(o["a"])({},Object(l["c"])(["cart","admin","newOrder"]),{checkOrder:function(){if(this.cart.length>0)return this.drawer=!0}}),methods:Object(o["a"])({},Object(l["b"])(["newOrders"]),{logout:function(){this.admin.password="",this.admin.user="",this.admin.isAdmin=!1,this.$router.push({name:"Posts"})}})},d=u,f=(n("5d86"),n("2877")),p=Object(f["a"])(d,i,c,!1,null,"326cdf70",null);p.options.__file="Header.vue";var v=p.exports,h={name:"App",components:{appHeader:v}},m=h,b=(n("034f"),Object(f["a"])(m,s,r,!1,null,null,null));b.options.__file="App.vue";var g=b.exports,j=n("8c4f"),_=(n("96cf"),n("1da1")),k=n("283c"),y={getPosts:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(e){var n,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,k["a"].fetchPosts();case 3:a=t.sent,s=a.data,n("SET_POSTS",s);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),deletePost:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(e,n){var a,s,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,k["a"].deletePost(n);case 3:return t.next=5,k["a"].fetchPosts();case 5:s=t.sent,r=s.data,a("DELETE_POST",r);case 8:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},w={actions:y},x={orders:[],newOrder:0,anotherOrders:[]},C={getOrders:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(e){var n,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,k["a"].getOrder();case 3:a=t.sent,s=a.data,n("GET_ORDERS",s);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),newOrders:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(e){var n,a,s,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,k["a"].getOrder();case 3:a=t.sent,x.anotherOrders=a.data,s=x.anotherOrders.filter(function(t){if("New order"===t.status)return t.status}),r=s.length,n("GET_NEW_ORDER",r);case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},O={GET_ORDERS:function(t,e){t.orders=e},GET_NEW_ORDER:function(t,e){t.newOrder=e}},E={orders:function(t){return t.orders},newOrder:function(t){return t.newOrder}},T={state:x,actions:C,mutations:O,getters:E},P=(n("7514"),{cart:[],summary:0,disc:{discCode:"nature",onlyOneCode:!0,warning:""}}),A={deleteItem:function(t,e){var n=t.commit;n("DELETE_CART",e)},priceSum:function(t){var e=t.commit;e("PRICE_SUM")},cleanCart:function(t){var e=t.commit;e("CLEAN_CART")},discSum:function(t,e){var n=t.commit;n("PRICE_DISCOUNT",e)},checkSumChange:function(t){var e=t.commit;e("CHECK_CHANGES")}},S={addToCart:function(t,e){var n=t.cart.find(function(t){return t.id==e.id});if(!n)return t.cart.push(e);alert("Already in the basket")},DELETE_CART:function(t,e){var n=t.cart.find(function(t){return t.id==e.id});return t.cart.splice(t.cart.indexOf(n),1),t.summary-n},CLEAN_CART:function(t,e){t.cart=[]},PRICE_SUM:function(t){t.cart.reduce(function(e,n){var a=e+n.price;return t.summary=a},0)},PRICE_DISCOUNT:function(t,e){t.summary=t.summary,e.toLowerCase()===t.disc.discCode?(t.summary*=.8,t.disc.onlyOneCode=!1):(t.disc.warning="Incorrect code, try again",setTimeout(function(){t.disc.warning=""},3e3))},CHECK_CHANGES:function(t){(t.summary++||t.summary--)&&(t.disc.onlyOneCode=!0)}},R={cart:function(t){return t.cart},summary:function(t){return t.summary},disc:function(t){return t.disc}},N={state:P,actions:A,mutations:S,getters:R},z={admin:{password:"",user:"",isAdmin:!1}},D={ADMIN_ROLE:function(t,e){t.password===e.password&&t.user===e.user&&(t.isAdmin=!0)}},M={admin:function(t){return t.admin}},L={state:z,mutations:D,getters:M};a["default"].use(l["a"]);var I=new l["a"].Store({state:{posts:[],comments:0},actions:{getComment:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(e){var n,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,k["a"].fetchComment();case 3:a=t.sent,s=a.data,n("FETCH_COMMENT",s);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},mutations:{SET_POSTS:function(t,e){t.posts=e},DELETE_POST:function(t,e){t.posts=e},FETCH_COMMENT:function(t,e){t.comments=e}},modules:{postModule:w,orderModule:T,cartModule:N,adminModule:L}}),U=I,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",[n("v-parallax",{staticClass:"parallex--one",attrs:{dark:"",height:"600",src:"https://images.pexels.com/photos/414586/pexels-photo-414586.jpeg?cs=srgb&dl=background-image-beautiful-blur-414586.jpg&fm=jpg"}},[n("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[n("h1",{staticClass:"display-2 font-weight-black font-italic"},[t._v("Nature shop")]),n("div",{},[n("v-btn",{staticClass:"elevation-20 hover--button",attrs:{large:"",color:"transparent"},on:{click:function(e){t.$vuetify.goTo("#first",t.options)}}},[t._v("Our product")])],1)])],1)],1),n("div",{attrs:{id:"first"}},[n("after-paralex",[n("div",{attrs:{"align-center":""}},[n("v-btn",{staticClass:"same--button",attrs:{dark:"",large:""},on:{click:function(e){t.$vuetify.goTo("#four",t.options)}}},[t._v("Contact Us!")]),n("router-link",{attrs:{to:"/posts"}},[n("v-btn",{staticClass:"same--button",attrs:{dark:"",large:""}},[t._v("Visit our online shop")])],1)],1)])],1),n("div",{attrs:{id:"second"}},[n("app-product")],1),n("div",{attrs:{id:"third"}},[n("app-parallax")],1),n("div",{attrs:{id:"four"}},[n("company-info")],1),n("div",{attrs:{id:"five"}},[n("app-footer")],1)])},$=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":""}},[n("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm4:""}},[n("div",{staticClass:"text-xs-center"},[t._l(t.items,function(e){return n("v-icon",{key:e,staticClass:"green--text text--lighten-2",attrs:{"x-large":""}},[t._v("local_florist")])}),n("h1",{staticClass:"headline font-weight-black"},[t._v("Nature shop")]),n("span",{staticClass:"subheading"},[t._t("default")],2)],2)]),n("v-flex",{attrs:{xs12:""}},[n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},t._l(t.items,function(e){return n("v-flex",{key:e,attrs:{xs12:"",md4:""}},[n("v-card",{staticClass:"elevation-15 transparent"},[n("v-card-text",{staticClass:"text-xs-center"},[n("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v(t._s(e))])],1),n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline text-xs-center"},[t._v("Nature shop")])]),n("v-card-text",[t._v("\n                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. \n                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. \n                ")])],1)],1)}))],1)],1)],1)],1)},G=[],F={data:function(){return{items:["favorite","flash_on","build"]}}},B=F,K=(n("8688"),Object(f["a"])(B,q,G,!1,null,null,null));K.options.__file="AfterParalex.vue";var W=K.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{staticClass:"rwd--container",attrs:{"grid-list-md":"","text-xs-center":""}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.arrs,function(e){return n("v-flex",{key:e,staticClass:"my-3",attrs:{xs12:"",sm4:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var s=a.hover;return n("v-card",{staticClass:"mx-auto",attrs:{color:"grey lighten-4","max-width":"500"}},[n("v-img",{attrs:{"aspect-ratio":16/9,src:e}},[n("v-expand-transition",[s?n("div",{staticClass:"d-flex transition-fast-in-fast-out indigo darken-2 v-card--reveal display-3 white--text",staticStyle:{height:"100%"}},[t._v("\r\n            $14.99\r\n          ")]):t._e()])],1),n("v-card-text",{staticClass:"pt-4",staticStyle:{position:"relative"}},[n("v-btn",{staticClass:"white--text",attrs:{absolute:"",color:"orange",fab:"",medium:"",right:"",top:""}},[n("v-icon",[t._v("shopping_basket")])],1),n("div",{staticClass:"font-weight-light grey--text title mb-2"},[t._v("For the perfect meal")]),n("div",{staticClass:"font-weight-light title mb-2"})],1)],1)}}])})],1)}))],1)],1)},J=[],V={data:function(){return{arrs:["https://i.wpimg.pl/O/644x428/d.wpimg.pl/204634975-1593965418/bazylia.jpg","https://ogrod.smcloud.net/s/photos/t/11189/chmiel_1004241.jpg","https://7.allegroimg.com/s512/0144c4/3f9bc396465f881d892521432af7"]}}},Q=V,X=(n("cc65"),Object(f["a"])(Q,Y,J,!1,null,null,null));X.options.__file="AppProduct.vue";var Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-parallax",{attrs:{id:"parallax",dark:"",height:"450",src:"https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?cs=srgb&dl=background-background-image-creek-707915.jpg&fm=jpg"}},[n("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[n("h1",{staticClass:"display-2 font-weight-thin mb-3"},[t._v("Vuetify.js")]),n("h4",{staticClass:"subheading"},[t._v("Build your application today!")])]),n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){e.hover;return n("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"indigo"},on:{click:t.toTop}},[n("v-expand-transition"),n("v-icon",[t._v("keyboard_arrow_up")])],1)}}])})],1)},et=[],nt={data:function(){return{fab:!1}},methods:{onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)}}},at=nt,st=(n("4951"),Object(f["a"])(at,tt,et,!1,null,null,null));st.options.__file="LastParallax.vue";var rt=st.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{height:"auto",color:"blue lighten-1"}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},t._l(t.links,function(e){return n("v-btn",{key:e,staticClass:"font-weight-black font-italic",attrs:{color:"white",flat:"",round:""}},[t._v("\n        "+t._s(e)+"\n      ")])}))],1)},ct=[],ot={data:function(){return{links:["Home","About Us","Contact Us"]}}},lt=ot,ut=Object(f["a"])(lt,it,ct,!1,null,null,null);ut.options.__file="Footer.vue";var dt=ut.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{staticClass:"my-5",attrs:{row:"",wrap:"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm4:""}},[n("v-card",{staticClass:"elevation-0 transparent"},[n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[t._v("Company info")])]),n("v-card-text",[t._v("\n              Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. \n              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n              Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. \n            ")])],1)],1),n("v-flex",{attrs:{xs12:"",sm4:"","offset-sm1":""}},[n("v-card",{staticClass:"elevation-0 transparent"},[n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[t._v("Contact us")])]),n("v-card-text",[t._v("\n              Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.\n            ")]),n("v-list",{staticClass:"transparent"},[n("v-list-tile",[n("v-list-tile-action",[n("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("phone")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("123-456-789")])],1)],1),n("v-list-tile",[n("v-list-tile-action",[n("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("place")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Poland, Kraków")])],1)],1),n("v-list-tile",[n("v-list-tile-action",[n("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("email")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("vue@vue.pl")])],1)],1)],1)],1)],1)],1)],1)],1)},pt=[],vt={},ht=Object(f["a"])(vt,ft,pt,!1,null,null,null);ht.options.__file="CompanyInfo.vue";var mt=ht.exports,bt={name:"posts",components:{AfterParalex:W,AppProduct:Z,AppParallax:rt,AppFooter:dt,CompanyInfo:mt},data:function(){return{}},computed:{options:function(){return{duration:500}}}},gt=bt,jt=(n("320e"),Object(f["a"])(gt,H,$,!1,null,"6b4ed716",null));jt.options.__file="Hello.vue";var _t=jt.exports;a["default"].use(j["a"]);var kt=function(t){n.e("chunk-9e99bbf6").then(function(){t(n("c8d1"))}.bind(null,n)).catch(n.oe)},yt=function(t){n.e("chunk-414c109e").then(function(){t(n("b9e8"))}.bind(null,n)).catch(n.oe)},wt=function(t){n.e("chunk-2917da0e").then(function(){t(n("f2bd"))}.bind(null,n)).catch(n.oe)},xt=function(t){n.e("chunk-2d21eb0b").then(function(){t(n("d746"))}.bind(null,n)).catch(n.oe)},Ct=function(t){n.e("chunk-756cd427").then(function(){t(n("71b8"))}.bind(null,n)).catch(n.oe)},Ot=function(t){n.e("chunk-0988e5a6").then(function(){t(n("5d0e"))}.bind(null,n)).catch(n.oe)},Et=function(t){n.e("chunk-a9e4171a").then(function(){t(n("7c2a"))}.bind(null,n)).catch(n.oe)},Tt=function(t){n.e("chunk-13bfec6c").then(function(){t(n("f059"))}.bind(null,n)).catch(n.oe)},Pt=function(t){n.e("chunk-7e7bebd2").then(function(){t(n("45a0"))}.bind(null,n)).catch(n.oe)},At=function(t){n.e("chunk-57717aee").then(function(){t(n("63d2"))}.bind(null,n)).catch(n.oe)},St=function(t){n.e("chunk-136f59ee").then(function(){t(n("6527"))}.bind(null,n)).catch(n.oe)},Rt=function(t){n.e("chunk-0c54115c").then(function(){t(n("0c7c"))}.bind(null,n)).catch(n.oe)},Nt=function(t){n.e("chunk-05044362").then(function(){t(n("f339"))}.bind(null,n)).catch(n.oe)},zt=new j["a"]({mode:"history",routes:[{path:"/",name:"Hello",component:_t},{path:"/posts",name:"Posts",component:Et},{path:"/new",name:"NewPost",component:Tt,beforeEnter:Dt},{path:"/posts/:id",name:"showPost",component:Pt},{path:"/shop",name:"shop",component:At},{path:"/payment",name:"order",component:St},{path:"/dashboard",name:"dashboard",component:Rt,beforeEnter:Dt},{path:"/dashboard/:id",name:"EachOrder",component:kt,beforeEnter:Dt},{path:"/payment/:id",name:"UserOrder",component:wt},{path:"/checkorder",name:"CheckOrder",component:xt},{path:"/admin",name:"admin",component:Ot},{path:"/adminpost",name:"adminPost",component:Nt,beforeEnter:Dt},{path:"*",component:Ct},{path:"/charts",component:yt,beforeEnter:Dt},{path:"/*/*",component:Ct}]});function Dt(t,e,n){U.getters.admin.isAdmin?n():n("*")}var Mt=n("ce5b"),Lt=n.n(Mt),It=n("cb43"),Ut=n("d842"),Ht=n("5b20"),$t=n.n(Ht);n("bf40");a["default"].use(It["default"]),a["default"].use(l["a"]),a["default"].use(Lt.a),a["default"].use(Ut["a"],{adapter:$t.a}),new a["default"]({el:"#app",router:zt,store:U,render:function(t){return t(g)}})},"5d86":function(t,e,n){"use strict";var a=n("f57e"),s=n.n(a);s.a},"64a9":function(t,e,n){},8688:function(t,e,n){"use strict";var a=n("00bd"),s=n.n(a);s.a},c040:function(t,e){},cc65:function(t,e,n){"use strict";var a=n("3cfe"),s=n.n(a);s.a},f57e:function(t,e,n){}});
//# sourceMappingURL=app.f72ecc0e.js.map