(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)r=o[u],i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i={app:0},s=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0988e5a6":"fdcc6a17","chunk-0c54115c":"9053b8e9","chunk-0eee89a2":"a5bb51aa","chunk-136f59ee":"8bb7f060","chunk-2917da0e":"76ed6d00","chunk-2d21eb0b":"999c2219","chunk-2dd1a0ee":"50f6a19a","chunk-414c109e":"cd6c9db0","chunk-57717aee":"17897d97","chunk-756cd427":"b837e9f3","chunk-78c78544":"bc60e02f","chunk-9e99bbf6":"7898f8da","chunk-a9e4171a":"13b04abe"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0988e5a6":1,"chunk-0c54115c":1,"chunk-0eee89a2":1,"chunk-136f59ee":1,"chunk-2dd1a0ee":1,"chunk-414c109e":1,"chunk-57717aee":1,"chunk-756cd427":1,"chunk-78c78544":1,"chunk-a9e4171a":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-0988e5a6":"86c96745","chunk-0c54115c":"1e955441","chunk-0eee89a2":"cf0ad5d4","chunk-136f59ee":"bf25dc94","chunk-2917da0e":"31d6cfe0","chunk-2d21eb0b":"31d6cfe0","chunk-2dd1a0ee":"e9d7b937","chunk-414c109e":"d8144d4d","chunk-57717aee":"5ad6aec0","chunk-756cd427":"51ebbcc4","chunk-78c78544":"cc4052c8","chunk-9e99bbf6":"31d6cfe0","chunk-a9e4171a":"07ade1cb"}[t]+".css",i=c.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.request=a,delete r[t],p.parentNode.removeChild(p),n(s)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){r[t]=0}));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=s);var l,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(t),l=function(e){d.onerror=d.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");s.type=a,s.request=r,n[1](s)}i[t]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,u.appendChild(d)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00bd":function(t,e,n){},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"283c":function(t,e,n){"use strict";var a=n("bc3a"),r=n.n(a),i=function(){return r.a.create({baseURL:"/api",headers:{"Content-Type":"application/json"}})};e["a"]={fetchPosts:function(){return i().get("/posts")},getOrder:function(){return i().get("/order")},addPost:function(t){return i().post("/posts",t)},addComment:function(t){return i().post("/posts/"+t.id+"/comment",t)},fetchComment:function(){return i().get("/posts/all/comment")},addOrder:function(t){return i().post("/order",t)},getPost:function(t){return i().get("/posts/"+t.id)},deletePost:function(t){return i().delete("/posts/delete/"+t)},oneOrder:function(t){return i().get("/order/"+t.id)},updateOrder:function(t){return i().put("/order/update/"+t.id,t)},updatePost:function(t){return i().put("/posts/update/"+t.id,t)},updatesRating:function(t){return i().put("/posts/rating/"+t.id,t)}}},"3cfe":function(t,e,n){},4129:function(t,e,n){"use strict";var a=n("4e68"),r=n.n(a);r.a},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=i(t);return n(e)}function i(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(a)},r.resolve=i,t.exports=r,r.id="4678"},"46b5":function(t,e,n){"use strict";var a=n("6553"),r=n.n(a);r.a},4951:function(t,e,n){"use strict";var a=n("c040"),r=n.n(a);r.a},"4e68":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{dark:t.vampire,light:!t.vampire}},[n("app-header"),n("transition",{attrs:{mode:"out-in",appear:"","enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutDown"}},[n("router-view")],1)],1)],1)])},i=[],s=n("be94"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("v-navigation-drawer",{staticClass:"elevation-10",attrs:{"enable-resize-watcher":"",fixed:"",clipped:t.clipped,app:"",id:"drawer--z",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[t.admin.isAdmin?n("v-img",{attrs:{"aspect-ratio":16/9,src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"}},[n("v-layout",{staticClass:"lightbox white--text",attrs:{"pa-2":"",column:"","fill-height":""}},[n("v-spacer"),n("v-flex",{attrs:{shrink:""}},[n("div",{staticClass:"subheading"},[n("p",{staticClass:"admin--font"},[t._v("HELLO ADMIN")])]),n("div",{staticClass:"body-1"},[n("p",{staticClass:"admin--font"},[t._v("You have "),n("strong",{staticClass:"new--order"},[t._v(t._s(t.newOrder))]),t._v(" new order to check")])])])],1)],1):t._e(),t.admin.isAdmin?t._e():n("div",[n("br"),n("br"),n("br")]),n("v-list-tile",{attrs:{to:"/"}},[n("v-list-tile-action",[n("v-icon",[t._v("home")])],1),n("v-list-tile-content",[n("strong",[t._v("HOME")])])],1),n("v-list-tile",{attrs:{to:"/posts"}},[n("v-list-tile-action",[n("v-icon",[t._v("contact_mail")])],1),n("v-list-tile-content",[n("strong",[t._v("SHOP")])])],1),n("v-list-tile",{attrs:{to:"/shop"}},[n("v-list-tile-action",[n("v-icon",[t._v(" shopping_basket")])],1),n("v-list-tile-content",[0===t.cart.length?n("div",[n("strong",[t._v("YOUR ORDER ("+t._s(t.cart.length)+")")])]):t._e(),t.cart.length>0?n("div",{attrs:{flat:""}},[n("v-badge",{attrs:{color:"cyan",right:""}},[n("strong",[t._v("ORDER")]),n("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(" "+t._s(t.cart.length))])])],1):t._e()]),n("div",{staticClass:"check--order"},[t._v(" \r\n            "+t._s(t.checkOrder)+"\r\n            ")])],1),n("v-list-tile",{attrs:{to:"/checkorder"}},[n("v-list-tile-action",[n("v-icon",[t._v("shopping_basket")])],1),n("v-list-tile-content",[n("strong",[t._v("CHECK STATUS")])])],1),t.admin.isAdmin?t._e():n("v-list-tile",{attrs:{to:"/admin"}},[n("v-list-tile-action",[n("v-icon",[t._v("shopping_basket")])],1),n("v-list-tile-content",[n("strong",[t._v("LOGIN")])])],1),0==t.admin.isAdmin?n("div",[t.vampire?t._e():n("v-list-tile",[n("v-list-tile-action",[n("v-switch",{attrs:{label:"IM VAMPIRE",value:t.vampire,"hide-details":""},on:{click:function(e){t.vampireStateTrue()}}})],1)],1),t.vampire?n("v-list-tile",[n("v-list-tile-action",[n("v-switch",{attrs:{label:"IM NOT VAMPIRE",value:t.vampire,"hide-details":""},on:{click:function(e){t.vampireStateFalse()}}})],1)],1):t._e()],1):t._e(),t.admin.isAdmin?n("p",[t._v("sorry admin :( vampire doesnt work")]):t._e(),t.admin.isAdmin?n("div",[n("br"),n("h3",[t._v("Admin dashboard")])]):t._e(),t.admin.isAdmin?n("v-list-tile",{attrs:{to:"/dashboard"}},[n("v-list-tile-action",[n("v-icon",[t._v("dashboard")])],1),n("div",{attrs:{flat:""}},[n("v-badge",{attrs:{color:"cyan",right:""}},[n("strong",[t._v("USER ORDERS")]),n("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(" "+t._s(t.newOrder))])])],1)],1):t._e(),t.admin.isAdmin?n("v-list-tile",{attrs:{to:"/charts"}},[n("v-list-tile-action",[n("v-icon",[t._v("bar_chart")])],1),n("v-list-tile-content",[n("strong",[t._v("CHARTS")])])],1):t._e(),t.admin.isAdmin?n("v-list-tile",{attrs:{to:"/new"}},[n("v-list-tile-action",[n("v-icon",[t._v("create_new_folder")])],1),n("v-list-tile-content",[n("strong",[t._v("NEW ITEM")])])],1):t._e(),t.admin.isAdmin?n("v-list-tile",{attrs:{to:"/adminpost"}},[n("v-list-tile-action",[n("v-icon",[t._v("view_list")])],1),n("v-list-tile-content",[n("strong",[t._v("PRODUCT LIST")])])],1):t._e(),t.admin.isAdmin?n("v-list-tile",{on:{click:t.logout}},[n("v-list-tile-action",[n("v-icon",[t._v("offline_bolt")])],1),n("v-list-tile-content",[n("strong",[t._v("LOGOUT")])])],1):t._e()],1)],1),n("v-toolbar",{attrs:{color:"blue-grey lighten-1","clipped-left":t.clipped,dark:"",fixed:"",app:"",id:"toolbar-zIndex"}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Application")]),n("v-spacer"),n("v-menu",{staticClass:"hidden-md-and-up",attrs:{"nudge-width":100}})],1)],1)])},c=[],l=n("2f62"),u={data:function(){return{drawer:!1,adminPassword:"",adminUser:"",clipped:!1}},computed:Object(s["a"])({},Object(l["c"])(["cart","admin","newOrder","vampire"]),{checkOrder:function(){if(this.cart.length>0)return this.drawer=!0}}),methods:Object(s["a"])({},Object(l["b"])(["newOrders","vampireStateFalse","vampireStateTrue"]),{logout:function(){this.admin.password="",this.admin.user="",this.admin.isAdmin=!1,this.$router.push({name:"Posts"})}})},d=u,p=(n("4129"),n("2877")),f=Object(p["a"])(d,o,c,!1,null,"11098c56",null);f.options.__file="Header.vue";var v=f.exports,m={name:"App",components:{appHeader:v},computed:Object(s["a"])({},Object(l["d"])(["vampire"])),methods:Object(s["a"])({},Object(l["b"])(["vampireStateTrue","vampireStateFalse"]))},h=m,b=(n("034f"),Object(p["a"])(h,r,i,!1,null,null,null));b.options.__file="App.vue";var g=b.exports,_=n("8c4f"),j=(n("96cf"),n("1da1")),k=n("283c"),x={getPosts:function(){var t=Object(j["a"])(regeneratorRuntime.mark(function t(e){var n,a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,k["a"].fetchPosts();case 3:a=t.sent,r=a.data,n("SET_POSTS",r);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),deletePost:function(){var t=Object(j["a"])(regeneratorRuntime.mark(function t(e,n){var a,r,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,k["a"].deletePost(n);case 3:return t.next=5,k["a"].fetchPosts();case 5:r=t.sent,i=r.data,a("DELETE_POST",i);case 8:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},y={actions:x},w={orders:[],newOrder:0,anotherOrders:[]},C={getOrders:function(){var t=Object(j["a"])(regeneratorRuntime.mark(function t(e){var n,a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,k["a"].getOrder();case 3:a=t.sent,r=a.data,n("GET_ORDERS",r);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),newOrders:function(){var t=Object(j["a"])(regeneratorRuntime.mark(function t(e){var n,a,r,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,k["a"].getOrder();case 3:a=t.sent,w.anotherOrders=a.data,r=w.anotherOrders.filter(function(t){if("New order"===t.status)return t.status}),i=r.length,n("GET_NEW_ORDER",i);case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},O={GET_ORDERS:function(t,e){t.orders=e},GET_NEW_ORDER:function(t,e){t.newOrder=e}},E={orders:function(t){return t.orders},newOrder:function(t){return t.newOrder}},P={state:w,actions:C,mutations:O,getters:E},T=(n("7514"),{cart:[],summary:0,disc:{discCode:"nature",onlyOneCode:!0,warning:""}}),R={deleteItem:function(t,e){var n=t.commit;n("DELETE_CART",e)},priceSum:function(t){var e=t.commit;e("PRICE_SUM")},cleanCart:function(t){var e=t.commit;e("CLEAN_CART")},discSum:function(t,e){var n=t.commit;n("PRICE_DISCOUNT",e)},checkSumChange:function(t){var e=t.commit;e("CHECK_CHANGES")}},S={addToCart:function(t,e){var n=t.cart.find(function(t){return t.id==e.id});if(!n)return t.cart.push(e);alert("Already in the basket")},DELETE_CART:function(t,e){var n=t.cart.find(function(t){return t.id==e.id});return t.cart.splice(t.cart.indexOf(n),1),t.summary-n},CLEAN_CART:function(t,e){t.cart=[]},PRICE_SUM:function(t){t.cart.reduce(function(e,n){var a=e+n.price;return t.summary=a},0)},PRICE_DISCOUNT:function(t,e){t.summary=t.summary,e.toLowerCase()===t.disc.discCode?(t.summary*=.8,t.disc.onlyOneCode=!1):(t.disc.warning="Incorrect code, try again",setTimeout(function(){t.disc.warning=""},3e3))},CHECK_CHANGES:function(t){(t.summary++||t.summary--)&&(t.disc.onlyOneCode=!0)}},A={cart:function(t){return t.cart},summary:function(t){return t.summary},disc:function(t){return t.disc}},U={state:T,actions:R,mutations:S,getters:A},N={admin:{password:"",user:"",isAdmin:!1}},I={ADMIN_ROLE:function(t,e){t.password===e.password&&t.user===e.user&&(t.isAdmin=!0)}},$={admin:function(t){return t.admin}},z={state:N,mutations:I,getters:$};a["default"].use(l["a"]);var M=new l["a"].Store({state:{posts:[],comments:0,vampire:!1},actions:{getComment:function(){var t=Object(j["a"])(regeneratorRuntime.mark(function t(e){var n,a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,k["a"].fetchComment();case 3:a=t.sent,r=a.data,n("FETCH_COMMENT",r);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),vampireStateTrue:function(){this.state.vampire=!0},vampireStateFalse:function(){this.state.vampire=!1}},mutations:{SET_POSTS:function(t,e){t.posts=e},DELETE_POST:function(t,e){t.posts=e},FETCH_COMMENT:function(t,e){t.comments=e},VAMPIRE_STATE:function(t,e){t.vampire=e}},getters:{vampire:function(t){return t.vampire}},modules:{postModule:y,orderModule:P,cartModule:U,adminModule:z}}),D=M,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",[n("v-parallax",{staticClass:"parallex--one",attrs:{dark:"",height:"600",src:"https://images.pexels.com/photos/414586/pexels-photo-414586.jpeg?cs=srgb&dl=background-image-beautiful-blur-414586.jpg&fm=jpg"}},[n("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[n("h1",{staticClass:"display-2 font-weight-black font-italic"},[t._v("Nature shop")]),n("div",{},[n("v-btn",{staticClass:"elevation-20 hover--button",attrs:{large:"",color:"transparent"},on:{click:function(e){t.$vuetify.goTo("#first",t.options)}}},[t._v("Our product")])],1)])],1)],1),n("div",{attrs:{id:"first"}},[n("after-paralex",[n("div",{attrs:{"align-center":""}},[n("v-btn",{staticClass:"same--button",attrs:{dark:"",large:""},on:{click:function(e){t.$vuetify.goTo("#four",t.options)}}},[t._v("Contact Us!")]),n("router-link",{attrs:{to:"/posts"}},[n("v-btn",{staticClass:"same--button",attrs:{dark:"",large:""}},[t._v("Visit our online shop")])],1)],1)])],1),n("div",{attrs:{id:"second"}},[n("app-product")],1),n("div",{attrs:{id:"third"}},[n("app-parallax")],1),n("div",{attrs:{id:"four"}},[n("company-info")],1),n("div",{attrs:{id:"five"}},[n("app-footer")],1)])},q=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":""}},[n("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm4:""}},[n("div",{staticClass:"text-xs-center"},[t._l(t.items,function(e){return n("v-icon",{key:e,staticClass:"green--text text--lighten-2",attrs:{"x-large":""}},[t._v("local_florist")])}),n("h1",{staticClass:"headline font-weight-black"},[t._v("Nature shop")]),n("span",{staticClass:"subheading"},[t._t("default")],2)],2)]),n("v-flex",{attrs:{xs12:""}},[n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},t._l(t.items,function(e){return n("v-flex",{key:e,attrs:{xs12:"",md4:""}},[n("v-card",{staticClass:"elevation-15 transparent"},[n("v-card-text",{staticClass:"text-xs-center"},[n("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v(t._s(e))])],1),n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline text-xs-center"},[t._v("Nature shop")])]),n("v-card-text",[t._v("\n                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. \n                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. \n                ")])],1)],1)}))],1)],1)],1)],1)},F=[],V={data:function(){return{items:["favorite","flash_on","build"]}}},B=V,G=(n("8688"),Object(p["a"])(B,H,F,!1,null,null,null));G.options.__file="AfterParalex.vue";var Y=G.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{staticClass:"rwd--container",attrs:{"grid-list-md":"","text-xs-center":""}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.arrs,function(e){return n("v-flex",{key:e,staticClass:"my-3",attrs:{xs12:"",sm4:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var r=a.hover;return n("v-card",{staticClass:"mx-auto",attrs:{color:"grey lighten-4","max-width":"500"}},[n("v-img",{attrs:{"aspect-ratio":16/9,src:e}},[n("v-expand-transition",[r?n("div",{staticClass:"d-flex transition-fast-in-fast-out indigo darken-2 v-card--reveal display-3 white--text",staticStyle:{height:"100%"}},[t._v("\r\n            $14.99\r\n          ")]):t._e()])],1),n("v-card-text",{staticClass:"pt-4",staticStyle:{position:"relative"}},[n("v-btn",{staticClass:"white--text",attrs:{absolute:"",color:"orange",fab:"",medium:"",right:"",top:""}},[n("v-icon",[t._v("shopping_basket")])],1),n("div",{staticClass:"font-weight-light grey--text title mb-2"},[t._v("For the perfect meal")]),n("div",{staticClass:"font-weight-light title mb-2"})],1)],1)}}])})],1)}))],1)],1)},W=[],J={data:function(){return{arrs:["https://i.wpimg.pl/O/644x428/d.wpimg.pl/204634975-1593965418/bazylia.jpg","https://ogrod.smcloud.net/s/photos/t/11189/chmiel_1004241.jpg","https://7.allegroimg.com/s512/0144c4/3f9bc396465f881d892521432af7"]}}},Q=J,X=(n("cc65"),Object(p["a"])(Q,K,W,!1,null,null,null));X.options.__file="AppProduct.vue";var Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-parallax",{attrs:{id:"parallax",dark:"",height:"450",src:"https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?cs=srgb&dl=background-background-image-creek-707915.jpg&fm=jpg"}},[n("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[n("h1",{staticClass:"display-2 font-weight-thin mb-3"},[t._v("Vuetify.js")]),n("h4",{staticClass:"subheading"},[t._v("Build your application today!")])]),n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){e.hover;return n("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"indigo"},on:{click:t.toTop}},[n("v-expand-transition"),n("v-icon",[t._v("keyboard_arrow_up")])],1)}}])})],1)},et=[],nt={data:function(){return{fab:!1}},methods:{onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)}}},at=nt,rt=(n("4951"),Object(p["a"])(at,tt,et,!1,null,null,null));rt.options.__file="LastParallax.vue";var it=rt.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{height:"auto",color:"blue lighten-1"}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},t._l(t.links,function(e){return n("v-btn",{key:e,staticClass:"font-weight-black font-italic",attrs:{color:"white",flat:"",round:""}},[t._v("\n        "+t._s(e)+"\n      ")])}))],1)},ot=[],ct={data:function(){return{links:["Home","About Us","Contact Us"]}}},lt=ct,ut=Object(p["a"])(lt,st,ot,!1,null,null,null);ut.options.__file="Footer.vue";var dt=ut.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{staticClass:"my-5",attrs:{row:"",wrap:"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm4:""}},[n("v-card",{staticClass:"elevation-0 transparent"},[n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[t._v("Company info")])]),n("v-card-text",[t._v("\n              Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. \n              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \n              Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. \n            ")])],1)],1),n("v-flex",{attrs:{xs12:"",sm4:"","offset-sm1":""}},[n("v-card",{staticClass:"elevation-0 transparent"},[n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[t._v("Contact us")])]),n("v-card-text",[t._v("\n              Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.\n            ")]),n("v-list",{staticClass:"transparent"},[n("v-list-tile",[n("v-list-tile-action",[n("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("phone")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("123-456-789")])],1)],1),n("v-list-tile",[n("v-list-tile-action",[n("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("place")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Poland, Kraków")])],1)],1),n("v-list-tile",[n("v-list-tile-action",[n("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("email")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("vue@vue.pl")])],1)],1)],1)],1)],1)],1)],1)],1)},ft=[],vt={},mt=Object(p["a"])(vt,pt,ft,!1,null,null,null);mt.options.__file="CompanyInfo.vue";var ht=mt.exports,bt={name:"posts",components:{AfterParalex:Y,AppProduct:Z,AppParallax:it,AppFooter:dt,CompanyInfo:ht},data:function(){return{}},computed:{options:function(){return{duration:500}}}},gt=bt,_t=(n("46b5"),Object(p["a"])(gt,L,q,!1,null,"30045093",null));_t.options.__file="Hello.vue";var jt=_t.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container tex-center"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-offset-3 col-lg-6"},[n("div",{staticClass:"card mt-4"},[n("img",{staticClass:"card-img-top img-fluid",attrs:{src:t.product.img,alt:""}}),n("v-text-field",{attrs:{rules:t.imageRules,color:"purple darken-2",label:"Image link",required:""},model:{value:t.product.img,callback:function(e){t.$set(t.product,"img",e)},expression:"product.img"}}),n("div",{staticClass:"card-body"},[n("h3",{staticClass:"card-title"},[t._v(t._s(t.product.title))]),n("v-text-field",{attrs:{label:"Change product name here",rules:t.titleRules,color:"deep-purple"},model:{value:t.product.title,callback:function(e){t.$set(t.product,"title",e)},expression:"product.title"}}),n("h4",[t._v(t._s(t.product.price)+" $")]),n("v-slider",{attrs:{color:"purple darken-2",min:"1",rules:t.priceRules,max:"100","thumb-label":""},model:{value:t.product.price,callback:function(e){t.$set(t.product,"price",e)},expression:"product.price"}}),n("span",{staticClass:"note--description",domProps:{innerHTML:t._s(t.product.text)}},[t._v(t._s(t.product.text))]),n("quill-editor",{attrs:{options:t.editorOptions},model:{value:t.product.text,callback:function(e){t.$set(t.product,"text",e)},expression:"product.text"}}),n("br"),n("br"),t.checkValidation?n("v-btn",{staticClass:"white--text",attrs:{disabled:t.disableButton,color:"success",medium:"",right:"",bottom:""},on:{click:function(e){t.updatePost()}}},[t._v("\n         Update product\n       ")]):t._e(),t.checkValidation?t._e():n("v-alert",{attrs:{value:!0,type:"warning"}},[t._v("\n       Check your form\n     ")])],1)],1)])]),t._v("\n     "+t._s(t.checkIfUpdate)+"\n     "+t._s(t.checkFormValidation)+"\n     "),n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n           Changes:\n         ")]),n("v-card-text",[t.product.title!==t.beforeUpdate.title?n("p",[t._v("\n           Product name changed from "),n("s",[t._v(t._s(t.beforeUpdate.title))]),t._v(" to "),n("strong",[t._v(t._s(t.product.title))])]):t._e(),t.product.text!==t.beforeUpdate.text?n("p",[t._v("You change description")]):t._e(),t.product.price!==t.beforeUpdate.price?n("p",[t._v("\n           Price changed from "),n("s",[t._v(t._s(t.beforeUpdate.price)+"$")]),t._v(" to "+t._s(t.product.price)+"$\n         ")]):t._e(),t.product.img!==t.beforeUpdate.img?n("p",[t._v("Image changed")]):t._e()]),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("router-link",{attrs:{to:"/adminpost"}},[n("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog=!1,t.getPost()}}},[t._v("\n             back to product list\n           ")])],1),n("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog=!1,t.getPost()}}},[t._v("\n             I accept\n           ")])],1)],1)],1)],1)},xt=[],yt=(n("4917"),n("953d")),wt={components:{quillEditor:yt["quillEditor"]},data:function(){return{editorOptions:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{align:[]}],["link","video"]]}},titleRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>1||"Name must be atleast more than 1 characters"}],priceRules:[function(t){return t&&t>=1&&t<=100||"You need to setup price between 1$ or 100$"}],imageRules:[function(t){return t&&t.match(/\.(jpeg|jpg|gif|png)$/)||"this is not correct URL. Make sure URL ends with .jpeg .jpg .gif or .png "}],textRules:[function(t){return!!t||"Description is required"},function(t){return t&&t.length>10||"To short. Atleast 10 characters"}],disableButton:!0,checkValidation:!0,dialog:!1,product:{title:"",text:"",img:"",price:""},beforeUpdate:{title:"",text:"",img:"",price:""}}},mounted:function(){this.getPost()},methods:{getPost:function(){var t=Object(j["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k["a"].getPost({id:this.$route.params.id});case 3:e=t.sent,this.product.title=e.data.title,this.beforeUpdate.title=e.data.title,this.product.text=e.data.text,this.beforeUpdate.text=e.data.text,this.product.img=e.data.img,this.beforeUpdate.img=e.data.img,this.product.price=e.data.price,this.beforeUpdate.price=e.data.price,t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),console.log(t.t0);case 17:case"end":return t.stop()}},t,this,[[0,14]])}));return function(){return t.apply(this,arguments)}}(),updatePost:function(){var t=Object(j["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k["a"].updatePost({id:this.$route.params.id,title:this.product.title,text:this.product.text,img:this.product.img,price:this.product.price});case 2:this.dialog=!0;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},computed:{checkIfUpdate:function(){this.product.title!==this.beforeUpdate.title||this.product.text!==this.beforeUpdate.text||this.product.img!==this.beforeUpdate.img||this.product.price!==this.beforeUpdate.price?this.disableButton=!1:this.disableButton=!0},checkFormValidation:function(){this.product.title.length>1&&this.product.text.length>10&&this.product.img.match(/\.(jpeg|jpg|gif|png)$/)?this.checkValidation=!0:this.checkValidation=!1}}},Ct=wt,Ot=(n("8292"),Object(p["a"])(Ct,kt,xt,!1,null,null,null));Ot.options.__file="eachPost.vue";var Et=Ot.exports;a["default"].use(_["a"]);var Pt=function(t){n.e("chunk-9e99bbf6").then(function(){t(n("c8d1"))}.bind(null,n)).catch(n.oe)},Tt=function(t){n.e("chunk-414c109e").then(function(){t(n("b9e8"))}.bind(null,n)).catch(n.oe)},Rt=function(t){n.e("chunk-2917da0e").then(function(){t(n("f2bd"))}.bind(null,n)).catch(n.oe)},St=function(t){n.e("chunk-2d21eb0b").then(function(){t(n("d746"))}.bind(null,n)).catch(n.oe)},At=function(t){n.e("chunk-756cd427").then(function(){t(n("71b8"))}.bind(null,n)).catch(n.oe)},Ut=function(t){n.e("chunk-0988e5a6").then(function(){t(n("5d0e"))}.bind(null,n)).catch(n.oe)},Nt=function(t){n.e("chunk-a9e4171a").then(function(){t(n("7c2a"))}.bind(null,n)).catch(n.oe)},It=function(t){n.e("chunk-78c78544").then(function(){t(n("f059"))}.bind(null,n)).catch(n.oe)},$t=function(t){n.e("chunk-0eee89a2").then(function(){t(n("45a0"))}.bind(null,n)).catch(n.oe)},zt=function(t){n.e("chunk-57717aee").then(function(){t(n("63d2"))}.bind(null,n)).catch(n.oe)},Mt=function(t){n.e("chunk-136f59ee").then(function(){t(n("6527"))}.bind(null,n)).catch(n.oe)},Dt=function(t){n.e("chunk-0c54115c").then(function(){t(n("0c7c"))}.bind(null,n)).catch(n.oe)},Lt=function(t){n.e("chunk-2dd1a0ee").then(function(){t(n("f339"))}.bind(null,n)).catch(n.oe)},qt=new _["a"]({mode:"history",routes:[{path:"/",name:"Hello",component:jt},{path:"/posts",name:"Posts",component:Nt},{path:"/new",name:"NewPost",component:It,beforeEnter:Ht},{path:"/posts/:id",name:"showPost",component:$t},{path:"/shop",name:"shop",component:zt},{path:"/payment",name:"order",component:Mt},{path:"/dashboard",name:"dashboard",component:Dt,beforeEnter:Ht},{path:"/dashboard/:id",name:"EachOrder",component:Pt,beforeEnter:Ht},{path:"/payment/:id",name:"UserOrder",component:Rt},{path:"/checkorder",name:"CheckOrder",component:St},{path:"/admin",name:"admin",component:Ut},{path:"/adminpost",name:"adminPost",component:Lt,beforeEnter:Ht},{path:"*",component:At},{path:"/charts",component:Tt,beforeEnter:Ht},{path:"/editPost/:id",name:"editPost",component:Et},{path:"/*/*",component:At}]});function Ht(t,e,n){D.getters.admin.isAdmin?n():n("*")}var Ft=n("ce5b"),Vt=n.n(Ft),Bt=n("cb43"),Gt=n("d842"),Yt=n("5b20"),Kt=n.n(Yt);n("bf40"),n("a753"),n("8096"),n("14e1");a["default"].use(Bt["default"]),a["default"].use(l["a"]),a["default"].use(Vt.a),a["default"].use(Gt["a"],{adapter:Kt.a}),new a["default"]({el:"#app",router:qt,store:D,render:function(t){return t(g)}})},"64a9":function(t,e,n){},6553:function(t,e,n){},8292:function(t,e,n){"use strict";var a=n("8606"),r=n.n(a);r.a},8606:function(t,e,n){},8688:function(t,e,n){"use strict";var a=n("00bd"),r=n.n(a);r.a},c040:function(t,e){},cc65:function(t,e,n){"use strict";var a=n("3cfe"),r=n.n(a);r.a}});
//# sourceMappingURL=app.a6686aeb.js.map