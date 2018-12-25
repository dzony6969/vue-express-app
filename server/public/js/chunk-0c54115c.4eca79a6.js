(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c54115c","chunk-414c109e"],{"0c7c":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"inspire"}},[r("br"),r("br"),r("br"),r("h1",{staticClass:"text-center"},[t._v("Admin dashboard")]),r("v-btn",{attrs:{color:"success"},on:{click:t.toggle}},[t._v("Filter by date")]),t.datePopup?t._e():r("v-card",{staticClass:"text-center"},[r("v-date-picker",{attrs:{color:"green lighten-1 text-center"},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1),r("v-text-field",{attrs:{label:"Search by name","single-line":""},model:{value:t.searchByName,callback:function(e){t.searchByName=e},expression:"searchByName"}}),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.mainHeaders,items:t.datePicker,"item-key":"name","hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[r("tr",[r("td",{staticClass:"text-xs",on:{click:function(t){e.expanded=!e.expanded}}},[t._v(t._s(e.item.name))]),r("td",{staticClass:"text-xs"},[t._v(t._s(e.item.order.length))]),r("td",{staticClass:"text-xs"},[t._v(t._s(e.item.address))]),r("td",{staticClass:"text-xs"},[t._v(t._s(e.item.summary)+" $")]),r("td",{staticClass:"text-xs"},[t._v(t._s(""+e.item.createdAt.substring(0,10)))]),r("td",{staticClass:"text-xs",attrs:{dark:""}},["New order"===e.item.status?r("span",[t._v(t._s(e.item.status)+" "),r("v-icon",{attrs:{color:"blue darken-2"}},[t._v("info")])],1):t._e(),"Sending"===e.item.status?r("span",[t._v(" "+t._s(e.item.status)+" "),r("v-icon",{attrs:{color:"yellow darken-2"}},[t._v("check_circle")])],1):t._e(),"package lost"===e.item.status?r("span",[t._v(" "+t._s(e.item.status)+" "),r("v-icon",{attrs:{color:"red darken-2"}},[t._v("error")])],1):t._e(),"on the way"===e.item.status?r("span",[t._v(" "+t._s(e.item.status)+" "),r("v-icon",{attrs:{color:"green darken-2"}},[t._v("send")])],1):t._e()]),r("td",{staticClass:"text-xs"},[r("router-link",{attrs:{to:{name:"EachOrder",params:{id:e.item._id}}}},[r("v-btn",{attrs:{outline:"",fab:"",color:"indigo"}},[r("v-icon",[t._v("edit")])],1)],1)],1)])]}}])})],1)},n=[],s=(r("7f7f"),r("6762"),r("2fdb"),r("be94")),i=(r("cadf"),r("551c"),r("097d"),r("2f62")),c=r("b9e8"),u={name:"dashboard",components:{Chart:c["default"]},data:function(){return{picker:(new Date).toISOString().substr(0,10),datePopup:!0,searchByName:"",mainHeaders:[{text:"NAME",value:"name",sortable:!1},{text:"ORDER",value:"order"},{text:"ADDRESS",value:"address",sortable:!1},{text:"AMOUNT",value:"price",sortable:!1},{text:"CREATED AT",value:"created"},{text:"STATUS",value:"status"},{text:"DETAIL",value:"detail",sortable:!1}],subHeaders:[{text:"order",value:"order detail"},{text:"Value",value:"value"}]}},mounted:function(){this.$store.dispatch("getOrders")},methods:{toggle:function(){this.datePopup=!this.datePopup}},computed:Object(s["a"])({},Object(i["c"])(["orders"]),{datePicker:function(){var t=this,e=this.orders.filter(function(e){var r=e.createdAt.substring(0,10),a=e.name.toLowerCase().includes(t.searchByName.toLowerCase());return t.picker!==r||t.datePopup?t.datePopup?a:void 0:a});return e}})},o=u,l=(r("9fee"),r("2877")),h=Object(l["a"])(o,a,n,!1,null,null,null);h.options.__file="Dashboard.vue";e["default"]=h.exports},"2fdb":function(t,e,r){"use strict";var a=r("5ca1"),n=r("d2c8"),s="includes";a(a.P+a.F*r("5147")(s),"String",{includes:function(t){return!!~n(this,t,s).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"417f":function(t,e,r){},"504c":function(t,e,r){var a=r("0d58"),n=r("6821"),s=r("52a7").f;t.exports=function(t){return function(e){var r,i=n(e),c=a(i),u=c.length,o=0,l=[];while(u>o)s.call(i,r=c[o++])&&l.push(t?[r,i[r]]:i[r]);return l}}},5147:function(t,e,r){var a=r("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[a]=!1,!"/./"[t](e)}catch(n){}}return!0}},"52a7":function(t,e){e.f={}.propertyIsEnumerable},6762:function(t,e,r){"use strict";var a=r("5ca1"),n=r("c366")(!0);a(a.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},"6d2c":function(t,e,r){"use strict";var a=r("417f"),n=r.n(a);n.a},"7f7f":function(t,e,r){var a=r("86cc").f,n=Function.prototype,s=/^\s*function ([^ (]*)/,i="name";i in n||r("9e1e")&&a(n,i,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},"828e":function(t,e,r){},8615:function(t,e,r){var a=r("5ca1"),n=r("504c")(!1);a(a.S,"Object",{values:function(t){return n(t)}})},"9fee":function(t,e,r){"use strict";var a=r("828e"),n=r.n(a);n.a},aae3:function(t,e,r){var a=r("d3f4"),n=r("2d95"),s=r("2b4c")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==n(t))}},ac6a:function(t,e,r){for(var a=r("cadf"),n=r("0d58"),s=r("2aba"),i=r("7726"),c=r("32e9"),u=r("84f2"),o=r("2b4c"),l=o("iterator"),h=o("toStringTag"),d=u.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=n(f),v=0;v<p.length;v++){var b,m=p[v],g=f[m],y=i[m],_=y&&y.prototype;if(_&&(_[l]||c(_,l,d),_[h]||c(_,h,m),u[m]=d,g))for(b in a)_[b]||s(_,b,a[b],!0)}},b9e8:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("br"),r("br"),r("br"),r("div",{staticClass:"set--width--chart elevation-10 grey lighten-4"},[r("br"),r("h1",{staticClass:"text-center"},[t._v("Charts overview")]),r("br"),t._m(0),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"","offset-sm1":"",sm5:"","pl-1":""}},[r("v-date-picker",{ref:"picker",attrs:{"full-width":""},model:{value:t.typeDate,callback:function(e){t.typeDate=e},expression:"typeDate"}})],1),r("v-flex",{attrs:{xs12:"",sm5:"","pl-3":""}},[r("div",{staticClass:"title"},[t._v("Daily news("+t._s(t.typeDate||"change month...")+")"),r("v-btn",{staticClass:"info",on:{click:function(e){t.filterChart()}}},[t._v("Pick date")])],1),r("div",{staticClass:"subheading"},[t._v("wrap up for selected date")]),r("div"),r("ul",[1===t.chartValueObject.length?r("div",[r("strong",[r("li",[t._v("Overall amount: "+t._s(t.chartValueArray[1][1])+"$")])]),r("strong",[r("li",[t._v("Tax due: "+t._s(""+t.chartValueArray[1][2].toFixed(2))+"$")])]),r("strong",[r("li",[t._v("Profit: "+t._s(""+t.chartValueArray[1][3].toFixed(2))+"$")])])]):t._e(),t.chartValueObject.length>1?r("div",[r("v-alert",{attrs:{value:!0,type:"warning"}},[t._v("\r\n        Data not found\r\n      ")])],1):t._e()])])],1),r("br"),r("GChart",{staticClass:"elevation-15 pa-4",attrs:{type:"ColumnChart",data:t.chartValueArray,options:t.chartOptions,createChart:function(t,e){return new e.charts.Bar(t)},settings:{packages:["bar"]}},on:{ready:t.onChartReady}}),r("br"),r("div",{staticClass:"text-center"},[r("br"),r("br"),r("hr"),r("h1",[t._v("Overall amount per day")]),r("br"),r("div",[r("line-chart",{staticClass:"elevation-15 set--width--chart",attrs:{height:"300px",width:"1000px",data:t.lineChartValueArray}})],1),r("br"),r("br"),r("br")])],1)])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("strong",[r("hr")])}],s=r("be94"),i=(r("8615"),r("ac6a"),r("96cf"),r("1da1"));var c=r("5b20"),u=r.n(c);function o(t,e){return{render:function(t){return t("div",{style:this.styles,class:this.cssClasses},[t("canvas",{attrs:{id:this.chartId,width:this.width,height:this.height},ref:"canvas"})])},props:{chartId:{default:t,type:String},width:{default:400,type:Number},height:{default:400,type:Number},cssClasses:{type:String,default:""},styles:{type:Object},plugins:{type:Array,default:function(){return[]}}},data:function(){return{_chart:null,_plugins:this.plugins}},methods:{addPlugin:function(t){this.$data._plugins.push(t)},generateLegend:function(){if(this.$data._chart)return this.$data._chart.generateLegend()},renderChart:function(t,r){this.$data._chart&&this.$data._chart.destroy(),this.$data._chart=new u.a(this.$refs.canvas.getContext("2d"),{type:e,data:t,options:r,plugins:this.$data._plugins})}},beforeDestroy:function(){this.$data._chart&&this.$data._chart.destroy()}}}var l=o("bar-chart","bar"),h=(o("horizontalbar-chart","horizontalBar"),o("doughnut-chart","doughnut"),o("line-chart","line"),o("pie-chart","pie"),o("polar-chart","polarArea"),o("radar-chart","radar"),o("bubble-chart","bubble"),o("scatter-chart","scatter"),r("2f62")),d={extends:l,data:function(){return{chartsLib:null,typeDate:(new Date).toISOString().substr(0,10),compareDate:"",showChart:!1,chartValueObject:[],chartValueArray:[],lineChartValueArray:[]}},created:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("getOrders");case 2:return t.next=4,this.getDate();case 4:this.convertToArray(),this.convertToLineArray(),this.filterChart();case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{getDate:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,r,a,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.orders.map(function(t){return t.createdAt.substr(0,10)});case 2:e=t.sent,r=e.filter(function(t,r){return e.indexOf(t)==r}),a=function(t){return n.orders.map(function(e){if(t===e.createdAt.substr(0,10))return e.summary})},r.forEach(function(t){n.chartValueObject.push({date:t,sum:a(t).filter(function(t){if(null!=t)return t}).reduce(function(t,e){var r=t+e;return r},0)})});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),convertToArray:function(){var t=this.chartValueObject.map(function(t){return Object.values(t)});t.unshift(["date","sum","taxes","profit"]);t.forEach(function(t){var e=.23*t[1],r=.77*t[1];t.push(e,r)});return t[0].splice(4,5),this.chartValueArray=t},convertToLineArray:function(){var t=this.chartValueObject.map(function(t){return Object.values(t)});t.forEach(function(t){if(t.sum>0){var e=.23*t[1],r=.77*t[1];t.push(e,r)}});return this.lineChartValueArray=t},onChartReady:function(t,e){this.chartsLib=e},filterChart:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getDate();case 2:setTimeout(function(){e.chartValueObject.filter(function(t){var r=t.date;e.typeDate===r&&(e.chartValueObject=[t],e.convertToArray())})},2e3);case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},computed:Object(s["a"])({},Object(h["c"])(["orders"]),{chartOptions:function(){return this.chartsLib?this.chartsLib.charts.Bar.convertOptions({chart:{title:"Company Performance",subtitle:"Sale overall per day"},bars:"horizontal",hAxis:{format:"decimal"},height:300,width:1e3,colors:["#1b9e77","#d95f02","#7570b3"]}):null}})},f=d,p=(r("6d2c"),r("2877")),v=Object(p["a"])(f,a,n,!1,null,null,null);v.options.__file="Chart.vue";e["default"]=v.exports},d2c8:function(t,e,r){var a=r("aae3"),n=r("be13");t.exports=function(t,e,r){if(a(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(n(t))}}}]);
//# sourceMappingURL=chunk-0c54115c.4eca79a6.js.map