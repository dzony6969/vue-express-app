(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fd5ca06"],{"02f4":function(t,e,r){var n=r("4588"),a=r("be13");t.exports=function(t){return function(e,r){var o,i,c=String(a(e)),s=n(r),u=c.length;return s<0||s>=u?t?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===u||(i=c.charCodeAt(s+1))<56320||i>57343?t?c.charAt(s):o:t?c.slice(s,s+2):i-56320+(o-55296<<10)+65536)}}},1100:function(t,e,r){},"11e9":function(t,e,r){var n=r("52a7"),a=r("4630"),o=r("6821"),i=r("6a99"),c=r("69a8"),s=r("c69a"),u=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?u:function(t,e){if(t=o(t),e=i(e,!0),s)try{return u(t,e)}catch(r){}if(c(t,e))return a(!n.f.call(t,e),t[e])}},"1c4c":function(t,e,r){"use strict";var n=r("9b43"),a=r("5ca1"),o=r("4bf8"),i=r("1fa8"),c=r("33a4"),s=r("9def"),u=r("f1ae"),d=r("27ee");a(a.S+a.F*!r("5cc5")(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,a,l,m=o(t),p="function"==typeof this?this:Array,f=arguments.length,v=f>1?arguments[1]:void 0,h=void 0!==v,g=0,_=d(m);if(h&&(v=n(v,f>2?arguments[2]:void 0,2)),void 0==_||p==Array&&c(_))for(e=s(m.length),r=new p(e);e>g;g++)u(r,g,h?v(m[g],g):m[g]);else for(l=_.call(m),r=new p;!(a=l.next()).done;g++)u(r,g,h?i(l,v,[a.value,g],!0):a.value);return r.length=g,r}})},"45a0":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.product.id.length>3?r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{lg6:"",md12:"","offset-lg1":""}},[r("v-card",{staticClass:"card mt-4"},[r("img",{staticClass:"card-img-top img-fluid",attrs:{src:t.product.img,alt:""}}),r("div",{staticClass:"card-body"},[r("v-btn",{staticClass:"white--text",attrs:{absolute:"",color:"orange",fab:"",medium:"",right:"",middle:""},on:{click:function(e){t.addToCart(t.product)}}},[r("v-icon",[t._v("shopping_basket")])],1),r("h3",{staticClass:"card-title"},[t._v(t._s(t.product.title))]),r("h4",[t._v(t._s(t.product.price)+" $")]),r("hr"),t.vampire?r("div",{staticClass:"grey lighten-4 vampire--color",domProps:{innerHTML:t._s(t.product.text)}},[t._v(t._s(t.product.text))]):t._e(),t.vampire?t._e():r("div",{domProps:{innerHTML:t._s(t.product.text)}},[t._v(t._s(t.product.text))]),r("hr"),r("v-rating",{attrs:{"background-color":"purple lighten-3",color:"purple",medium:"","half-increments":"",value:t.avgRating,readonly:""}}),t.product.comments.length>0?r("h4",[t._v("average rating for this product: "),r("strong",[t._v(t._s(""+t.avgRating.toFixed(2)))])]):t._e(),0===t.product.comments.length?r("h4",[t._v("There is no review of this product")]):t._e()],1)]),r("v-card",{staticClass:"elevation-10"},[r("div",[r("div",[r("div",{staticClass:"col-sm-12"},[r("v-textarea",{attrs:{"auto-grow":"",box:"",outline:"",color:"deep-purple",label:"Comment",rows:"1"},model:{value:t.comment.text,callback:function(e){t.$set(t.comment,"text",e)},expression:"comment.text"}})],1),r("div",{staticClass:"form-group"},[r("div",{staticClass:"col-sm-12 col-md-6 col-lg-5"},[r("div",{staticClass:"input-group"},[r("v-text-field",{attrs:{color:"purple darken-2",label:"Author",required:""},model:{value:t.comment.author,callback:function(e){t.$set(t.comment,"author",e)},expression:"comment.author"}})],1)]),r("div",{staticClass:"col-sm-12 col-md-5 col-lg-5"},[r("p",[t._v("Rating:")]),r("v-rating",{attrs:{"background-color":"purple lighten-3",color:"purple",medium:""},model:{value:t.comment.rating,callback:function(e){t.$set(t.comment,"rating",t._n(e))},expression:"comment.rating"}})],1)]),r("div",{staticClass:"form-group"},[r("div",{staticClass:"col-sm-offset-4 col-sm-10"},[r("br"),r("br"),t.spinner?t._e():r("v-btn",{staticClass:"btn btn-success btn-circle text-uppercase text-center",attrs:{disabled:t.disabledButton,color:"secondary",type:"submit",id:"submitComment"},on:{click:function(e){t.addComment(),t.updateRating()}}},[r("span",{staticClass:"glyphicon glyphicon-send"}),t._v("Add comment")]),t.spinner?r("div",{staticClass:"text-xs-center"},[r("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1):t._e()],1)])])])]),r("v-flex",{staticClass:"my-4 col-sm-12"},[r("div",{staticClass:"card-header"},[t._v("\n                        Product Reviews "),r("strong",{staticClass:"show--comment",on:{click:t.loadComment}},[t._v("("+t._s(t.product.comments.length)+")")])]),r("div",{staticClass:"card-body"},[t.showComment?t._e():r("transition-group",{attrs:{mode:"in-out","enter-active-class":"animated slideInDown","leave-active-class":"animated slideOutDown"}},t._l(t.product.comments,function(t){return r("all-comment",{key:t._id,attrs:{comment:t}})}))],1)])],1),r("v-flex",{staticClass:"recommend--media",attrs:{lg3:"",md3:""}},[r("recommend",{attrs:{cutId:t.product.id,productType:t.product.type}})],1)],1)],1):t._e()],1)},a=[],o=(r("c5f6"),r("5df3"),r("1c4c"),r("be94")),i=(r("96cf"),r("1da1")),c=r("283c"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-rating",{attrs:{value:t.comment.rating,"background-color":"purple lighten-3",color:"purple",medium:"",readonly:""}}),r("p",[t._v(t._s(t.comment.text))]),r("small",{staticClass:"text-muted"},[t._v("Posted by "+t._s(t.comment.author)+" on 3/1/17")]),r("hr")],1)},u=[],d={props:["comment"]},l=d,m=r("2877"),p=Object(m["a"])(l,s,u,!1,null,null,null);p.options.__file="AllComment.vue";var f=p.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"text-xs-center"},[r("v-chip",[r("h4",[t._v("recommended for you")])])],1),t._l(t.filteredPosts,function(e){return r("v-flex",{key:e._id,staticClass:"recommend--media",attrs:{"mb-4":"",lg3:"",md3:""}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var a=n.hover;return r("v-card",{staticClass:"ma-4",class:"elevation-"+(a?12:2),attrs:{row:"",width:"344"}},[r("router-link",{attrs:{to:{name:"showPost",params:{id:e._id}}}},[r("v-img",{attrs:{"aspect-ratio":16/9,src:e.img}})],1),r("v-card-title",[r("div",[r("span",{staticClass:"headline"},[r("p",[t._v(t._s(e.title)+" - "+t._s(e.price)+"$")])]),r("div",{staticClass:"d-flex"},[r("v-rating",{attrs:{color:"amber",dense:"",value:e.avgRating,"half-increments":"",readonly:"",size:"14"}}),r("div",{staticClass:"ml-2 grey--text text--darken-2"},[r("span",[t._v(t._s(""+e.avgRating.toFixed(2)))]),r("span",[t._v(" ("+t._s(e.comments.length)+")")])])],1)]),r("v-spacer")],1)],1)}}])})],1)})],2)},h=[],g=(r("4917"),r("7f7f"),r("cadf"),r("551c"),r("097d"),r("2f62")),_={props:["productType","cutId"],data:function(){return{name:this.$route.params.name}},beforeRouteUpdate:function(t){this.name=t.params.name},computed:Object(o["a"])({},Object(g["d"])(["posts"]),{filteredPosts:function(){var t=this,e=this.posts.filter(function(e){var r=e.postType,n=e._id;if(t.productType.match(r)&&!t.cutId.match(n))return e});return e.slice(0,3)}})},b=_,x=Object(m["a"])(b,v,h,!1,null,null,null);x.options.__file="Recommend.vue";var y=x.exports,C={name:"showPost",components:{AllComment:f,Recommend:y},data:function(){return{showComment:!0,spinner:!1,darkColor:"#F5F5F5",disabledButton:!1,comment:[{text:"",author:"",rating:0}],product:{title:"",text:"",type:"",img:"",price:"",id:"",comments:[],avgRating:0}}},mounted:function(){this.getPost()},methods:{loadComment:function(){this.showComment=!this.showComment},getPost:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].getPost({id:this.$route.params.id});case 3:e=t.sent,this.product.title=e.data.title,this.product.text=e.data.text,this.product.img=e.data.img,this.product.price=e.data.price,this.product.id=e.data._id,this.product.type=e.data.postType,this.product.comments=e.data.comments,this.product.avgRating=e.data.avgRating,t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),console.log(t.t0);case 17:case"end":return t.stop()}},t,this,[[0,14]])}));return function(){return t.apply(this,arguments)}}(),addComment:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.comment.rating>0)){t.next=5;break}return t.next=3,c["a"].addComment({id:this.$route.params.id,text:this.comment.text,author:this.comment.author,rating:this.comment.rating},this.comment.author="",this.comment.text="",this.comment.rating=0,this.spinner=!0,this.disabledButton=!0,setTimeout(function(){e.getPost(),e.spinner=!1,e.disabledButton=!1},3e3),this.showComment=!1);case 3:t.next=6;break;case 5:alert("Please rate this product");case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),addToCart:function(){this.$store.commit({type:"addToCart",id:this.product.id,title:this.product.title,img:this.product.img,price:this.product.price,quantity:1})},updateRating:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].updatesRating({id:this.$route.params.id,avgRating:this.avgRating});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},computed:Object(o["a"])({},Object(g["d"])(["comments","vampire"]),{avgRating:function(){var t=this.product.comments.map(function(t){return t.rating}),e=Array.from(t),r=e.reduce(function(t,e){return t+e},0),n=r/this.product.comments.length;return Number(n)}})},w=C,k=(r("6df6"),Object(m["a"])(w,n,a,!1,null,"2a185c13",null));k.options.__file="showPost.vue";e["default"]=k.exports},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,r){var n=r("d3f4"),a=r("8b97").set;t.exports=function(t,e,r){var o,i=e.constructor;return i!==r&&"function"==typeof i&&(o=i.prototype)!==r.prototype&&n(o)&&a&&a(t,o),t}},"5df3":function(t,e,r){"use strict";var n=r("02f4")(!0);r("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},"6df6":function(t,e,r){"use strict";var n=r("1100"),a=r.n(n);a.a},"7f7f":function(t,e,r){var n=r("86cc").f,a=Function.prototype,o=/^\s*function ([^ (]*)/,i="name";i in a||r("9e1e")&&n(a,i,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"8b97":function(t,e,r){var n=r("d3f4"),a=r("cb7c"),o=function(t,e){if(a(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,r){return o(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:o}},9093:function(t,e,r){var n=r("ce10"),a=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},aa77:function(t,e,r){var n=r("5ca1"),a=r("be13"),o=r("79e5"),i=r("fdef"),c="["+i+"]",s="​",u=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),l=function(t,e,r){var a={},c=o(function(){return!!i[t]()||s[t]()!=s}),u=a[t]=c?e(m):i[t];r&&(a[r]=u),n(n.P+n.F*c,"String",a)},m=l.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(d,"")),t};t.exports=l},c5f6:function(t,e,r){"use strict";var n=r("7726"),a=r("69a8"),o=r("2d95"),i=r("5dbc"),c=r("6a99"),s=r("79e5"),u=r("9093").f,d=r("11e9").f,l=r("86cc").f,m=r("aa77").trim,p="Number",f=n[p],v=f,h=f.prototype,g=o(r("2aeb")(h))==p,_="trim"in String.prototype,b=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():m(e,3);var r,n,a,o=e.charCodeAt(0);if(43===o||45===o){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+e}for(var i,s=e.slice(2),u=0,d=s.length;u<d;u++)if(i=s.charCodeAt(u),i<48||i>a)return NaN;return parseInt(s,n)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof f&&(g?s(function(){h.valueOf.call(r)}):o(r)!=p)?i(new v(b(e)),r,f):b(e)};for(var x,y=r("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;y.length>C;C++)a(v,x=y[C])&&!a(f,x)&&l(f,x,d(v,x));f.prototype=h,h.constructor=f,r("2aba")(n,p,f)}},f1ae:function(t,e,r){"use strict";var n=r("86cc"),a=r("4630");t.exports=function(t,e,r){e in t?n.f(t,e,a(0,r)):t[e]=r}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-7fd5ca06.282f36b3.js.map