(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docencia"],{5047:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Docencia")]),a("router-link",{attrs:{to:{name:"agregarDocencia"}}},[a("button",{staticClass:"btn btn-success btn-sm btn-block"},[e._v("Agregar")])]),e.carga?a("div",{staticClass:"text-center mt-5"},[a("h3",[e._v("Cargando contenido...")]),a("pulse-loader",{attrs:{loading:e.carga}})],1):e._e(),e.carga?e._e():a("div",{staticClass:"card-body"},[a("b-table",{attrs:{"sticky-header":"",striped:"",hover:"",bordered:"",sm:"",items:e.items,fields:e.fields}}),a("table",{staticClass:"table table-sm table-striped table-bordered"},[e._m(0),a("tbody",e._l(e.arrayFiltrado,function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.codigo))]),a("td",[e._v(e._s(t.nombre))]),a("td",[e._v(e._s(t.docente))]),a("td",[e._v(e._s(t.rexe))]),a("td",[e._v(e._s(t.horas))]),a("td",[e._v(e._s(t.unidad))]),a("td",[a("span",{staticClass:"pointer",on:{click:function(a){return e.eliminarDocencia(t.id)}}},[a("i",{staticClass:"trash-alt"}),a("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1),e._v(" |\n              "),a("router-link",{attrs:{to:{name:"editarDocencia",params:{id:t.id}}}},[a("span",{staticClass:"pointer"},[a("i",{staticClass:"edit"}),a("font-awesome-icon",{attrs:{icon:"edit"}})],1)])],1)])}),0)])],1)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("Código")]),a("th",[e._v("Nombre")]),a("th",[e._v("Docente")]),a("th",[e._v("Programa")]),a("th",[e._v("Horas")]),a("th",[e._v("Unidad")]),a("th",[e._v("Acción")])])])}],r=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),s=a("2f62"),o=a("8a5d");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach(function(t){Object(r["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var d={name:"Inicio",data:function(){return{fields:[{key:"Codigo",sortable:!0},{key:"Nombre",sortable:!1},{key:"Docente",sortable:!1},{key:"Rexe",sortable:!1},{key:"Horas",sortable:!1},{key:"Unidad",sortable:!1},{key:"Accion",sortable:!1}],texto:""}},computed:l({},Object(s["d"])(["usuario","docencias","carga"]),{},Object(s["c"])(["arrayFiltrado"])),methods:l({},Object(s["b"])(["getDocencias","eliminarDocencia","buscador"])),created:function(){this.getDocencias()},components:{PulseLoader:o["a"]}},u=d,p=a("2877"),b=Object(p["a"])(u,n,i,!1,null,null,null);t["default"]=b.exports},"671b":function(e,t,a){"use strict";var n=a("b22e"),i=a.n(n);i.a},"8a5d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner"},[a("div",{staticClass:"v-pulse v-pulse1",style:[e.spinnerStyle,e.spinnerDelay1]}),a("div",{staticClass:"v-pulse v-pulse2",style:[e.spinnerStyle,e.spinnerDelay2]}),a("div",{staticClass:"v-pulse v-pulse3",style:[e.spinnerStyle,e.spinnerDelay3]})])},i=[],r={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},s=r,o=(a("671b"),a("2877")),c=Object(o["a"])(s,n,i,!1,null,null,null);t["a"]=c.exports},b22e:function(e,t,a){}}]);
//# sourceMappingURL=docencia.177574cd.js.map