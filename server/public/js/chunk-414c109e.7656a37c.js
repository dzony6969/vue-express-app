(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-414c109e"],{"417f":function(t,e,r){},"504c":function(t,e,r){var a=r("0d58"),n=r("6821"),i=r("52a7").f;t.exports=function(t){return function(e){var r,s=n(e),c=a(s),u=c.length,o=0,h=[];while(u>o)i.call(s,r=c[o++])&&h.push(t?[r,s[r]]:s[r]);return h}}},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"6d2c":function(t,e,r){"use strict";var a=r("417f"),n=r.n(a);n.a},8615:function(t,e,r){var a=r("5ca1"),n=r("504c")(!1);a(a.S,"Object",{values:function(t){return n(t)}})},ac6a:function(t,e,r){for(var a=r("cadf"),n=r("0d58"),i=r("2aba"),s=r("7726"),c=r("32e9"),u=r("84f2"),o=r("2b4c"),h=o("iterator"),l=o("toStringTag"),f=u.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=n(d),v=0;v<p.length;v++){var b,y=p[v],g=d[y],m=s[y],C=m&&m.prototype;if(C&&(C[h]||c(C,h,f),C[l]||c(C,l,y),u[y]=f,g))for(b in a)C[b]||i(C,b,a[b],!0)}},b9e8:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("br"),r("br"),r("br"),r("div",{staticClass:"set--width--chart elevation-10 grey lighten-4"},[r("br"),r("h1",{staticClass:"text-center"},[t._v("Charts overview")]),r("br"),t._m(0),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"","offset-sm1":"",sm5:"","pl-1":""}},[r("v-date-picker",{ref:"picker",attrs:{"full-width":""},model:{value:t.typeDate,callback:function(e){t.typeDate=e},expression:"typeDate"}})],1),r("v-flex",{attrs:{xs12:"",sm5:"","pl-3":""}},[r("div",{staticClass:"title"},[t._v("Daily news("+t._s(t.typeDate||"change month...")+")"),r("v-btn",{staticClass:"info",on:{click:function(e){t.filterChart()}}},[t._v("Pick date")])],1),r("div",{staticClass:"subheading"},[t._v("wrap up for selected date")]),r("div"),r("ul",[1===t.chartValueObject.length?r("div",[r("strong",[r("li",[t._v("Overall amount: "+t._s(t.chartValueArray[1][1])+"$")])]),r("strong",[r("li",[t._v("Tax due: "+t._s(""+t.chartValueArray[1][2].toFixed(2))+"$")])]),r("strong",[r("li",[t._v("Profit: "+t._s(""+t.chartValueArray[1][3].toFixed(2))+"$")])])]):t._e(),t.chartValueObject.length>1?r("div",[r("v-alert",{attrs:{value:!0,type:"warning"}},[t._v("\r\n        Data not found\r\n      ")])],1):t._e()])])],1),r("br"),r("h1",{staticClass:"text-center"},[t._v("Daily chart")]),r("GChart",{staticClass:"elevation-15 pa-5",attrs:{type:"ColumnChart",data:t.chartValueArray,options:t.chartOptions,createChart:function(t,e){return new e.charts.Bar(t)},settings:{packages:["bar"]}},on:{ready:t.onChartReady}}),r("br"),r("div",{staticClass:"text-center"},[r("br"),r("br"),r("hr"),r("h1",[t._v("Overall amount per day")]),r("br"),r("line-chart",{staticClass:"elevation-15 set--width--chart",attrs:{height:"300px",width:"1000px",data:t.lineChartValueArray}}),r("pie-chart",{attrs:{data:t.lineChartValueArray}}),r("br"),r("br"),r("br")],1)],1)])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("strong",[r("hr")])}],i=r("be94"),s=(r("8615"),r("ac6a"),r("96cf"),r("1da1"));var c=r("5b20"),u=r.n(c);function o(t,e){return{render:function(t){return t("div",{style:this.styles,class:this.cssClasses},[t("canvas",{attrs:{id:this.chartId,width:this.width,height:this.height},ref:"canvas"})])},props:{chartId:{default:t,type:String},width:{default:400,type:Number},height:{default:400,type:Number},cssClasses:{type:String,default:""},styles:{type:Object},plugins:{type:Array,default:function(){return[]}}},data:function(){return{_chart:null,_plugins:this.plugins}},methods:{addPlugin:function(t){this.$data._plugins.push(t)},generateLegend:function(){if(this.$data._chart)return this.$data._chart.generateLegend()},renderChart:function(t,r){this.$data._chart&&this.$data._chart.destroy(),this.$data._chart=new u.a(this.$refs.canvas.getContext("2d"),{type:e,data:t,options:r,plugins:this.$data._plugins})}},beforeDestroy:function(){this.$data._chart&&this.$data._chart.destroy()}}}var h=o("bar-chart","bar"),l=(o("horizontalbar-chart","horizontalBar"),o("doughnut-chart","doughnut"),o("line-chart","line"),o("pie-chart","pie"),o("polar-chart","polarArea"),o("radar-chart","radar"),o("bubble-chart","bubble"),o("scatter-chart","scatter"),r("2f62")),f={extends:h,data:function(){return{chartsLib:null,typeDate:(new Date).toISOString().substr(0,10),compareDate:"",showChart:!1,chartValueObject:[],chartValueArray:[],lineChartValueArray:[]}},created:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("getOrders");case 2:return t.next=4,this.getDate();case 4:this.convertToArray(),this.convertToLineArray(),this.filterChart();case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{getDate:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,r,a,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.orders.map(function(t){return t.createdAt.substr(0,10)});case 2:e=t.sent,r=e.filter(function(t,r){return e.indexOf(t)==r}),a=function(t){return n.orders.map(function(e){if(t===e.createdAt.substr(0,10))return e.summary})},r.forEach(function(t){n.chartValueObject.push({date:t,sum:a(t).filter(function(t){if(null!=t)return t}).reduce(function(t,e){var r=t+e;return r},0)})});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),convertToArray:function(){var t=this.chartValueObject.map(function(t){return Object.values(t)});t.unshift(["date","sum","taxes","profit"]);t.forEach(function(t){var e=.23*t[1],r=.77*t[1];t.push(e,r)});return t[0].splice(4,5),this.chartValueArray=t},convertToLineArray:function(){var t=this.chartValueObject.map(function(t){return Object.values(t)});t.forEach(function(t){if(t.sum>0){var e=.23*t[1],r=.77*t[1];t.push(e,r)}});return this.lineChartValueArray=t},onChartReady:function(t,e){this.chartsLib=e},filterChart:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getDate();case 2:setTimeout(function(){e.chartValueObject.filter(function(t){var r=t.date;e.typeDate===r&&(e.chartValueObject=[t],e.convertToArray())})},2e3);case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},computed:Object(i["a"])({},Object(l["c"])(["orders"]),{chartOptions:function(){return this.chartsLib?this.chartsLib.charts.Bar.convertOptions({chart:{title:"Company Performance",subtitle:"Sale overall per day",fill:"#1b9e77"},bars:"horizontal",hAxis:{format:"decimal"},height:300,width:1e3,backgroundColor:{fill:"#f5f5f5"},colors:["#1b9e77","#d95f02","#7570b3"]}):null}})},d=f,p=(r("6d2c"),r("2877")),v=Object(p["a"])(d,a,n,!1,null,null,null);v.options.__file="Chart.vue";e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-414c109e.7656a37c.js.map