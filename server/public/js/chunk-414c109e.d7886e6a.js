(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-414c109e"],{"417f":function(t,e,a){},"504c":function(t,e,a){var r=a("0d58"),i=a("6821"),s=a("52a7").f;t.exports=function(t){return function(e){var a,n=i(e),c=r(n),u=c.length,o=0,l=[];while(u>o)s.call(n,a=c[o++])&&l.push(t?[a,n[a]]:n[a]);return l}}},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"6d2c":function(t,e,a){"use strict";var r=a("417f"),i=a.n(r);i.a},8615:function(t,e,a){var r=a("5ca1"),i=a("504c")(!1);r(r.S,"Object",{values:function(t){return i(t)}})},ac6a:function(t,e,a){for(var r=a("cadf"),i=a("0d58"),s=a("2aba"),n=a("7726"),c=a("32e9"),u=a("84f2"),o=a("2b4c"),l=o("iterator"),d=o("toStringTag"),h=u.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=i(p),m=0;m<f.length;m++){var v,b=f[m],g=p[b],y=n[b],C=y&&y.prototype;if(C&&(C[l]||c(C,l,h),C[d]||c(C,d,b),u[b]=h,g))for(v in r)C[v]||s(C,v,r[v],!0)}},b9e8:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("br"),a("br"),a("v-container",{staticClass:"set--width--chart elevation-10 grey lighten-4",attrs:{sm12:""}},[a("br"),a("strong",[a("hr")]),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"","offset-sm1":"",sm5:"","pl-1":""}},[a("v-date-picker",{ref:"picker",attrs:{"full-width":""},model:{value:t.typeDate,callback:function(e){t.typeDate=e},expression:"typeDate"}})],1),a("v-flex",{attrs:{xs12:"",sm5:"","pl-3":""}},[a("div",{staticClass:"title"},[t._v("Daily news("+t._s(t.typeDate||"change month...")+")\n                    "),a("v-btn",{staticClass:"info",attrs:{large:"",round:""},on:{click:function(e){t.filterChart()}}},[t._v("Pick date")])],1),a("div",{staticClass:"subheading"},[t._v("wrap up for selected date")]),a("div"),a("ul",[1===t.chartValueObject.length?a("div",[a("strong",[a("li",[t._v("Overall amount: "+t._s(""+t.chartValueArray[1][1].toFixed(2))+"$")])]),a("strong",[a("li",[t._v("Tax due: "+t._s(""+t.chartValueArray[1][2].toFixed(2))+"$")])]),a("strong",[a("li",[t._v("Profit: "+t._s(""+t.chartValueArray[1][3].toFixed(2))+"$")])])]):t._e(),t.chartValueObject.length>1?a("div",[a("v-alert",{attrs:{value:!0,type:"warning"}},[t._v("\n                            Data not found\n                        ")])],1):t._e()])]),a("br"),a("v-flex",[a("br"),a("br"),a("br"),a("div",{staticClass:"alert alert-success text-center alert--connect elevation-5"},[a("h4",[t._v("DAILY CHART")])]),a("GChart",{staticClass:"elevation-15 pa-5",attrs:{type:"ColumnChart",data:t.chartValueArray,options:t.chartOptions,createChart:function(t,e){return new e.charts.Bar(t)},settings:{packages:["bar"]}},on:{ready:t.onChartReady}}),a("br"),a("div",{staticClass:"text-center"},[a("br"),a("br"),a("hr"),a("div",{staticClass:"alert alert-success text-center alert--connect elevation-5 alert--conect-margin"},[a("h4",[t._v("LINE CHART FOR ALL DAYS")]),a("p",[t._v("(soon for month)")])]),a("br"),a("line-chart",{staticClass:"elevation-15 line--chart",attrs:{height:"300px",data:t.lineChartValueArray}}),a("br"),a("br"),a("div",{staticClass:"alert alert-success text-center alert--connect elevation-5"},[a("h4",[t._v("OVERALL")])]),a("pie-chart",{attrs:{data:t.lineChartValueArray}}),a("app-overall",{attrs:{sumAllAmount:t.sumAllAmount}})],1)],1)],1)],1)],1)},i=[],s=a("be94"),n=(a("ac6a"),a("96cf"),a("1da1"));var c=a("5b20"),u=a.n(c);function o(t,e){return{render:function(t){return t("div",{style:this.styles,class:this.cssClasses},[t("canvas",{attrs:{id:this.chartId,width:this.width,height:this.height},ref:"canvas"})])},props:{chartId:{default:t,type:String},width:{default:400,type:Number},height:{default:400,type:Number},cssClasses:{type:String,default:""},styles:{type:Object},plugins:{type:Array,default:function(){return[]}}},data:function(){return{_chart:null,_plugins:this.plugins}},methods:{addPlugin:function(t){this.$data._plugins.push(t)},generateLegend:function(){if(this.$data._chart)return this.$data._chart.generateLegend()},renderChart:function(t,a){this.$data._chart&&this.$data._chart.destroy(),this.$data._chart=new u.a(this.$refs.canvas.getContext("2d"),{type:e,data:t,options:a,plugins:this.$data._plugins})}},beforeDestroy:function(){this.$data._chart&&this.$data._chart.destroy()}}}var l=o("bar-chart","bar"),d=(o("horizontalbar-chart","horizontalBar"),o("doughnut-chart","doughnut"),o("line-chart","line"),o("pie-chart","pie"),o("polar-chart","polarArea"),o("radar-chart","radar"),o("bubble-chart","bubble"),o("scatter-chart","scatter"),a("2f62")),h={data:function(){return{chartsLib:null}},methods:{onChartReady:function(t,e){this.chartsLib=e}},computed:{chartOptions:function(){return this.chartsLib?this.chartsLib.charts.Bar.convertOptions({chart:{title:"Company Performance",subtitle:"Sale overall per day",fill:"#1b9e77"},bars:"horizontal",hAxis:{format:"decimal"},backgroundColor:{fill:"#f5f5f5"},colors:["#1b9e77","#d95f02","#7570b3"]}):null}}},p={computed:{sumAllAmount:function(){var t=this.orders.map(function(t){return t.summary}),e=t.reduce(function(t,e){return t+e},20);e=e.toFixed(2);var a=(.23*e).toFixed(2),r=(.77*e).toFixed(2),i={sum:e,tax:a,profit:r};return i}}},f=(a("8615"),{methods:{convertToArray:function(){var t=this.chartValueObject.map(function(t){return Object.values(t)});t.unshift(["date","sum","taxes","profit"]);t.forEach(function(t){var e=.23*t[1],a=.77*t[1];t.push(e,a)});return t[0].splice(4,5),this.chartValueArray=t},convertToLineArray:function(){var t=this.chartValueObject.map(function(t){return Object.values(t)});return this.lineChartValueArray=t}}}),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"card-deck"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-header alert-success"},[a("v-icon",{staticStyle:{"font-size":"40px"},attrs:{large:""}},[t._v("monetization_on")]),a("span",{staticClass:"title display-1"},[t._v("  AMOUNT")])],1),a("h2",{staticClass:"card-text",attrs:{color:"green"}},[t._v(t._s(t.sumAllAmount.sum)+" $")]),a("small",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusantium, sunt dicta cupiditate debitis ipsum dolorem, similique amet natus rerum consequatur id minus. Quasi et optio, placeat provident accusamus fuga!")])])]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-header alert-warning"},[a("v-icon",{staticStyle:{"font-size":"40px"},attrs:{large:""}},[t._v("monetization_on")]),a("span",{staticClass:"title display-1"},[t._v("  TAX DUE")])],1),a("h2",{staticClass:"card-text",attrs:{color:"green"}},[t._v(t._s(t.sumAllAmount.tax)+" $")]),a("small",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusantium, sunt dicta cupiditate debitis ipsum dolorem, similique amet natus rerum consequatur id minus. Quasi et optio, placeat provident accusamus fuga!")])])]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-header alert-primary"},[a("v-icon",{staticStyle:{"font-size":"40px"},attrs:{large:""}},[t._v("monetization_on")]),a("span",{staticClass:"title display-1"},[t._v("  PROFIT")])],1),a("h2",{staticClass:"card-text",attrs:{color:"green"}},[t._v(t._s(t.sumAllAmount.profit)+" $")]),a("small",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusantium, sunt dicta cupiditate debitis ipsum dolorem, similique amet natus rerum consequatur id minus. Quasi et optio, placeat provident accusamus fuga!")])])])])])},v=[],b=(a("cadf"),a("551c"),a("097d"),{props:["sumAllAmount"]}),g=b,y=a("2877"),C=Object(y["a"])(g,m,v,!1,null,null,null);C.options.__file="Overall.vue";var _=C.exports,A={mixins:[h,p,f],extends:l,components:{AppOverall:_},data:function(){return{typeDate:(new Date).toISOString().substr(0,10),compareDate:"",showChart:!1,chartValueObject:[],chartValueArray:[],lineChartValueArray:[]}},created:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("getOrders");case 2:return t.next=4,this.getDate();case 4:this.convertToArray(),this.convertToLineArray(),this.filterChart();case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{getDate:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,a,r,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.orders.map(function(t){return t.createdAt.substr(0,10)});case 2:e=t.sent,a=e.filter(function(t,a){return e.indexOf(t)==a}),r=function(t){return i.orders.map(function(e){if(t===e.createdAt.substr(0,10))return e.summary})},a.forEach(function(t){i.chartValueObject.push({date:t,sum:r(t).filter(function(t){if(null!=t)return t}).reduce(function(t,e){var a=t+e;return a},0)})});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),filterChart:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getDate();case 2:setTimeout(function(){e.chartValueObject.filter(function(t){var a=t.date;e.typeDate===a&&(e.chartValueObject=[t],e.convertToArray())})},2e3);case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},computed:Object(s["a"])({},Object(d["c"])(["orders"]))},x=A,L=(a("6d2c"),Object(y["a"])(x,r,i,!1,null,null,null));L.options.__file="Chart.vue";e["default"]=L.exports}}]);
//# sourceMappingURL=chunk-414c109e.d7886e6a.js.map