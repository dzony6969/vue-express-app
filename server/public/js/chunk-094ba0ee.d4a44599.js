(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-094ba0ee"],{"02f4":function(t,e,r){var n=r("4588"),o=r("be13");t.exports=function(t){return function(e,r){var a,i,c=String(o(e)),s=n(r),u=c.length;return s<0||s>=u?t?"":void 0:(a=c.charCodeAt(s),a<55296||a>56319||s+1===u||(i=c.charCodeAt(s+1))<56320||i>57343?t?c.charAt(s):a:t?c.slice(s,s+2):i-56320+(a-55296<<10)+65536)}}},"03a4":function(t,e,r){"use strict";var n=r("f5d6"),o=r.n(n);o.a},"11e9":function(t,e,r){var n=r("52a7"),o=r("4630"),a=r("6821"),i=r("6a99"),c=r("69a8"),s=r("c69a"),u=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?u:function(t,e){if(t=a(t),e=i(e,!0),s)try{return u(t,e)}catch(r){}if(c(t,e))return o(!n.f.call(t,e),t[e])}},"1c4c":function(t,e,r){"use strict";var n=r("9b43"),o=r("5ca1"),a=r("4bf8"),i=r("1fa8"),c=r("33a4"),s=r("9def"),u=r("f1ae"),m=r("27ee");o(o.S+o.F*!r("5cc5")(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,o,l,d=a(t),p="function"==typeof this?this:Array,f=arguments.length,h=f>1?arguments[1]:void 0,v=void 0!==h,g=0,b=m(d);if(v&&(h=n(h,f>2?arguments[2]:void 0,2)),void 0==b||p==Array&&c(b))for(e=s(d.length),r=new p(e);e>g;g++)u(r,g,v?h(d[g],g):d[g]);else for(l=b.call(d),r=new p;!(o=l.next()).done;g++)u(r,g,v?i(l,h,[o.value,g],!0):o.value);return r.length=g,r}})},"45a0":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("br"),r("br"),r("br"),t.product.id.length>3?r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{lg6:"","offset-lg3":""}},[r("v-card",{staticClass:"card mt-4"},[r("img",{staticClass:"card-img-top img-fluid",attrs:{src:t.product.img,alt:""}}),r("div",{staticClass:"card-body"},[r("v-btn",{staticClass:"white--text",attrs:{absolute:"",color:"orange",fab:"",medium:"",right:"",middle:""},on:{click:function(e){t.addToCart(t.product)}}},[r("v-icon",[t._v("shopping_basket")])],1),r("h3",{staticClass:"card-title"},[t._v(t._s(t.product.title))]),r("h4",[t._v(t._s(t.product.price)+" $")]),r("hr"),t.vampire?r("div",{staticClass:"grey lighten-4 vampire--color",domProps:{innerHTML:t._s(t.product.text)}},[t._v(t._s(t.product.text))]):t._e(),t.vampire?t._e():r("div",{domProps:{innerHTML:t._s(t.product.text)}},[t._v(t._s(t.product.text))]),r("hr"),r("v-rating",{attrs:{"background-color":"purple lighten-3",color:"purple",medium:"",value:t.avgRating,readonly:""}}),t.product.comments.length>0?r("h4",[t._v("average rating for this product: "),r("strong",[t._v(t._s(""+t.avgRating.toFixed(2)))])]):t._e(),0===t.product.comments.length?r("h4",[t._v("There is no review of this product")]):t._e()],1)]),r("h3",[t._v("Add review of our product")]),r("div",[r("div",[r("div",{staticClass:"col-sm-12"},[r("v-textarea",{attrs:{"auto-grow":"",box:"",outline:"",color:"deep-purple",label:"Comment",rows:"1"},model:{value:t.comment.text,callback:function(e){t.$set(t.comment,"text",e)},expression:"comment.text"}})],1),r("div",{staticClass:"form-group"},[r("div",{staticClass:"col-sm-12 col-md-6 col-lg-5"},[r("div",{staticClass:"input-group"},[r("v-text-field",{attrs:{color:"purple darken-2",label:"Author",required:""},model:{value:t.comment.author,callback:function(e){t.$set(t.comment,"author",e)},expression:"comment.author"}})],1)]),r("div",{staticClass:"col-sm-12 col-md-5 col-lg-5"},[r("p",[t._v("Rating:")]),r("v-rating",{attrs:{"background-color":"purple lighten-3",color:"purple",medium:""},model:{value:t.comment.rating,callback:function(e){t.$set(t.comment,"rating",t._n(e))},expression:"comment.rating"}})],1)]),r("div",{staticClass:"form-group"},[r("div",{staticClass:"col-sm-offset-4 col-sm-10"},[r("br"),r("br"),t.spinner?t._e():r("v-btn",{staticClass:"btn btn-success btn-circle text-uppercase text-center",attrs:{disabled:t.disabledButton,color:"secondary",type:"submit",id:"submitComment"},on:{click:function(e){t.addComment(),t.updateRating()}}},[r("span",{staticClass:"glyphicon glyphicon-send"}),t._v("Add comment")]),t.spinner?r("div",{staticClass:"text-xs-center"},[r("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1):t._e(),r("br"),r("br")],1)])])]),r("br"),r("br"),r("br"),r("v-flex",{staticClass:"my-4 col-sm-12"},[r("div",{staticClass:"card-header"},[t._v("\n           Product Reviews "),r("strong",{staticClass:"show--comment",on:{click:t.loadComment}},[t._v("("+t._s(t.product.comments.length)+")")])]),r("div",{staticClass:"card-body"},[r("transition-group",{attrs:{mode:"in-out","enter-active-class":"animated slideInDown","leave-active-class":"animated slideOutDown"}},t._l(t.product.comments,function(e){return t.showComment?t._e():r("all-comment",{key:e._id,attrs:{comment:e}})}))],1)])],1)],1)],1):t._e()],1)},o=[],a=(r("c5f6"),r("5df3"),r("1c4c"),r("be94")),i=(r("96cf"),r("1da1")),c=r("283c"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("div",{staticClass:"col-sm-12"},[r("v-textarea",{attrs:{"auto-grow":"",box:"",color:"deep-purple",label:"Comment",rows:"1"},model:{value:t.comment.text,callback:function(e){t.$set(t.comment,"text",e)},expression:"comment.text"}})],1),r("div",{staticClass:"form-group"},[r("div",{staticClass:"col-sm-12 w-25"},[r("div",{staticClass:"input-group"},[r("v-text-field",{attrs:{color:"purple darken-2",label:"Author",required:""},model:{value:t.comment.author,callback:function(e){t.$set(t.comment,"author",e)},expression:"comment.author"}})],1)]),r("div",{staticClass:"col-sm-12"},[r("p",[t._v("Rating:")]),r("v-rating",{attrs:{"background-color":"green lighten-3",color:"green",medium:""},model:{value:t.comment.rating,callback:function(e){t.$set(t.comment,"rating",e)},expression:"comment.rating"}}),t._v("\r\n                            "+t._s(t.showComment)+"\r\n                            ")],1)]),r("div",{staticClass:"form-group"},[r("div",{staticClass:"col-sm-offset-4 col-sm-10"},[r("button",{staticClass:"btn btn-success btn-circle text-uppercase text-center",attrs:{type:"submit",id:"submitComment"},on:{click:function(e){t.addComment()}}},[r("span",{staticClass:"glyphicon glyphicon-send"}),t._v(" Summit comment")])])])]),r("br"),r("br")])},u=[],m={props:["showComment"],data:function(){return{comment:[{text:"",author:"",rating:""}]}},methods:{addComment:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.comment.rating>0)){t.next=8;break}return t.next=3,c["a"].addComment({id:this.$route.params.id,text:this.comment.text,author:this.comment.author,rating:this.comment.rating});case 3:this.comment.author="",this.comment.text="",this.comment.rating="",t.next=9;break;case 8:alert("Rate this product, please");case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},l=m,d=r("2877"),p=Object(d["a"])(l,s,u,!1,null,null,null);p.options.__file="AddComment.vue";var f=p.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-rating",{attrs:{value:t.comment.rating,"background-color":"purple lighten-3",color:"purple",medium:"",readonly:""}}),r("p",[t._v(t._s(t.comment.text))]),r("small",{staticClass:"text-muted"},[t._v("Posted by "+t._s(t.comment.author)+" on 3/1/17")]),r("hr")],1)},v=[],g={props:["comment"]},b=g,_=Object(d["a"])(b,h,v,!1,null,null,null);_.options.__file="AllComment.vue";var x=_.exports,C=r("2f62"),w={name:"showPost",data:function(){return{showComment:!0,spinner:!1,darkColor:"#F5F5F5",disabledButton:!1,comment:[{text:"",author:"",rating:0}],product:{title:"",text:"",img:"",price:"",id:"",comments:[],avgRating:0}}},components:{AllComment:x,AddComment:f},mounted:function(){this.getPost()},methods:{loadComment:function(){this.showComment=!this.showComment},getPost:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].getPost({id:this.$route.params.id});case 3:e=t.sent,this.product.title=e.data.title,this.product.text=e.data.text,this.product.img=e.data.img,this.product.price=e.data.price,this.product.id=e.data._id,this.product.comments=e.data.comments,this.product.avgRating=e.data.avgRating,t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),console.log(t.t0);case 16:case"end":return t.stop()}},t,this,[[0,13]])}));return function(){return t.apply(this,arguments)}}(),addComment:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.comment.rating>0)){t.next=5;break}return t.next=3,c["a"].addComment({id:this.$route.params.id,text:this.comment.text,author:this.comment.author,rating:this.comment.rating},this.comment.author="",this.comment.text="",this.comment.rating=0,this.spinner=!0,this.disabledButton=!0,setTimeout(function(){e.getPost(),e.spinner=!1,e.disabledButton=!1},3e3),this.showComment=!1);case 3:t.next=6;break;case 5:alert("Please rate this product");case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),addToCart:function(){this.$store.commit({type:"addToCart",id:this.product.id,title:this.product.title,img:this.product.img,price:this.product.price,quantity:1})},updateRating:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].updatesRating({id:this.$route.params.id,avgRating:this.avgRating});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},computed:Object(a["a"])({},Object(C["d"])(["comments","vampire"]),{avgRating:function(){var t=this.product.comments.map(function(t){return t.rating}),e=Array.from(t),r=e.reduce(function(t,e){return t+e},0),n=r/this.product.comments.length;return Number(n)}})},y=w,k=(r("03a4"),Object(d["a"])(y,n,o,!1,null,"7dbb7a9a",null));k.options.__file="showPost.vue";e["default"]=k.exports},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,r){var n=r("d3f4"),o=r("8b97").set;t.exports=function(t,e,r){var a,i=e.constructor;return i!==r&&"function"==typeof i&&(a=i.prototype)!==r.prototype&&n(a)&&o&&o(t,a),t}},"5df3":function(t,e,r){"use strict";var n=r("02f4")(!0);r("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},"8b97":function(t,e,r){var n=r("d3f4"),o=r("cb7c"),a=function(t,e){if(o(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,r){return a(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:a}},9093:function(t,e,r){var n=r("ce10"),o=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},aa77:function(t,e,r){var n=r("5ca1"),o=r("be13"),a=r("79e5"),i=r("fdef"),c="["+i+"]",s="​",u=RegExp("^"+c+c+"*"),m=RegExp(c+c+"*$"),l=function(t,e,r){var o={},c=a(function(){return!!i[t]()||s[t]()!=s}),u=o[t]=c?e(d):i[t];r&&(o[r]=u),n(n.P+n.F*c,"String",o)},d=l.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(m,"")),t};t.exports=l},c5f6:function(t,e,r){"use strict";var n=r("7726"),o=r("69a8"),a=r("2d95"),i=r("5dbc"),c=r("6a99"),s=r("79e5"),u=r("9093").f,m=r("11e9").f,l=r("86cc").f,d=r("aa77").trim,p="Number",f=n[p],h=f,v=f.prototype,g=a(r("2aeb")(v))==p,b="trim"in String.prototype,_=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():d(e,3);var r,n,o,a=e.charCodeAt(0);if(43===a||45===a){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var i,s=e.slice(2),u=0,m=s.length;u<m;u++)if(i=s.charCodeAt(u),i<48||i>o)return NaN;return parseInt(s,n)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof f&&(g?s(function(){v.valueOf.call(r)}):a(r)!=p)?i(new h(_(e)),r,f):_(e)};for(var x,C=r("9e1e")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;C.length>w;w++)o(h,x=C[w])&&!o(f,x)&&l(f,x,m(h,x));f.prototype=v,v.constructor=f,r("2aba")(n,p,f)}},f1ae:function(t,e,r){"use strict";var n=r("86cc"),o=r("4630");t.exports=function(t,e,r){e in t?n.f(t,e,o(0,r)):t[e]=r}},f5d6:function(t,e,r){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-094ba0ee.d4a44599.js.map