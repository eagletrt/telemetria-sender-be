(function(t){function n(n){for(var o,i,a=n[0],c=n[1],l=n[2],p=0,d=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(n);while(d.length)d.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],o=!0,a=1;a<e.length;a++){var c=e[a];0!==r[c]&&(o=!1)}o&&(s.splice(n--,1),t=i(i.s=e[0]))}return t}var o={},r={app:0},s=[];function i(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=o,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)i.d(e,o,function(n){return t[n]}.bind(null,o));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var u=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var o=e("85ec"),r=e.n(o);r.a},"53bc":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);var o=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("home",{attrs:{msg:"Telemetria"}})],1)},s=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"home"}},[e("div",{staticClass:"home"},[e("h1",[t._v(t._s(t.msg))]),e("collections")],1)])},a=[],c=e("7338");const l="192.168.8.102",u=`http://${l}:5000/api/collections`,p=`http://${l}:5000/api/collections/csv`,d=`http://${l}:5000/api/collections/json`;async function f(){const t=await c["get"](u);return t.data}async function h(t){const n=await c["post"](d,t,{responseType:"blob"});return n.data}async function b(t){const n=await c["post"](p,t,{responseType:"blob"});return n.data}var m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"collections"},[t.loading?e("random-spinner"):t._e(),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm"},t._l(t.databases,(function(n,o){return e("div",{key:n},[e("h2",{staticStyle:{cursor:"pointer"},on:{click:function(n){return t.selectDb(o)}}},[t._v(t._s(n))])])})),0),e("div",{staticClass:"col-sm"},t._l(t.currentCollections,(function(n){return e("div",{key:n},[e("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"checkbox",id:n},domProps:{checked:-1!==t.toExport[t.currentDbName].indexOf(n)},on:{change:function(e){return t.setCollection(n)}}}),e("label",{style:{cursor:"pointer",color:-1!==t.toExport[t.currentDbName].indexOf(n)?"green":"gray"},attrs:{for:n}},[t._v(t._s(n))])])})),0),e("div",{staticClass:"col-sm"},t._l(t.selectedDatabases,(function(n){return e("div",{key:n},[e("h4",[t._v(t._s(n))]),t._l(t.toExport[n],(function(n){return e("div",{key:n},[e("span",[t._v(t._s(n))])])}))],2)})),0)])]),e("div",{staticClass:"container"},[e("button",{staticClass:"btn btn-outline-success",on:{click:function(n){return t.downloadJson()}}},[t._v("JSON")]),e("button",{staticClass:"btn btn-outline-success",on:{click:function(n){return t.downloadCsv()}}},[t._v("CSV")])])],1)},v=[],_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[0===t.spinnerId?e("square-spinner"):t._e(),1===t.spinnerId?e("circle-spinner"):t._e(),2===t.spinnerId?e("fold-spinner"):t._e(),3===t.spinnerId?e("tile-spinner"):t._e(),4===t.spinnerId?e("cube-spinner"):t._e(),5===t.spinnerId?e("bounce-spinner"):t._e()],1)},g=[],y=e("d152"),w={name:"RandomSpinner",components:{SquareSpinner:y["SquareSpinner"],CircleSpinner:y["CircleSpinner"],FoldSpinner:y["FoldSpinner"],TileSpinner:y["TileSpinner"],CubeSpinner:y["CubeSpinner"],BounceSpinner:y["BounceSpinner"]},data:function(){return{spinnerId:0}},methods:{generateRandomId(){this.spinnerId=Math.floor(6*Math.random())}},created:function(){this.generateRandomId()}},x=w,S=e("2877"),C=Object(S["a"])(x,_,g,!1,null,null,null),E=C.exports,O={name:"collections",data(){return{collections:{},currentDb:0,loading:!1,toExport:{},selectedDatabases:[]}},props:{msg:String},computed:{databases:function(){return Object.keys(this.collections)},currentCollections:function(){return this.collections[this.currentDbName]},currentDbName:function(){return this.databases[this.currentDb]}},components:{RandomSpinner:E},watch:{databases:function(){this.toExport={},this.databases.forEach(t=>this.toExport[t]=[])},toExport:{deep:!0,handler:function(){this.selectedDatabases=Object.keys(this.toExport).filter(t=>this.toExport[t].length>0)}}},methods:{selectDb(t){this.currentDb=t},setCollection(t){const n=this.databases[this.currentDb];this.toExport[n].includes(t)?this.toExport[n]=this.toExport[n].filter(n=>n!==t):this.toExport[n]=[...this.toExport[n],t],this.toExport={...this.toExport}},async downloadJson(){this.loading=!0;const t=await h(this.toExport);this.downloadFile(t),this.loading=!1},async downloadCsv(){this.loading=!0;const t=await b(this.toExport);this.downloadFile(t),this.loading=!1},downloadFile(t){console.log(t);const n=window.URL.createObjectURL(new Blob([t])),e=document.createElement("a");e.href=n,e.setAttribute("download","zip.zip"),document.body.appendChild(e),e.click()}},mounted(){console.log("Calling API..."),f().then(t=>this.collections=t)}},j=O,k=(e("a8f1"),Object(S["a"])(j,m,v,!1,null,"9a27a6d2",null)),D=k.exports,I={name:"Home",components:{Collections:D},data(){return{test:{}}},props:{msg:String},methods:{print(){}},beforeCreate(){},mounted(){console.log("Mounted...")}},P=I,T=(e("9339"),Object(S["a"])(P,i,a,!1,null,"4203b9fb",null)),$=T.exports,M={name:"app",components:{Home:$}},N=M,R=(e("034f"),Object(S["a"])(N,r,s,!1,null,null,null)),F=R.exports;e("ab8b");o["a"].use(y["default"]),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(F)}}).$mount("#app")},"85ec":function(t,n,e){},9339:function(t,n,e){"use strict";var o=e("d3d2"),r=e.n(o);r.a},a8f1:function(t,n,e){"use strict";var o=e("53bc"),r=e.n(o);r.a},d3d2:function(t,n,e){}});
//# sourceMappingURL=app.76d29558.js.map