(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["publicaciones"],{"64e0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Publicaciones")]),a("router-link",{attrs:{to:{name:"agregarPublicaciones"}}},[a("button",{staticClass:"btn btn-success btn-sm btn-block"},[t._v("Agregar")])]),t.carga?a("div",{staticClass:"text-center mt-5"},[a("h3",[t._v("Cargando contenido...")]),a("pulse-loader",{attrs:{loading:t.carga}})],1):t._e(),t.carga?t._e():a("div",{staticClass:"card-body"},[a("table",{staticClass:"table table-sm table-striped table-bordered"},[t._m(0),a("tbody",t._l(t.arrayFiltrado2,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.autor))]),a("td",[t._v(t._s(e.titulo))]),a("td",[t._v(t._s(e.ano))]),a("td",{staticClass:"text-center"},[e.autor===e.autor&&e.titulo===e.titulo&&e.ano===e.ano&&e.vol===e.vol&&e.categoria===e.categoria&&e.doi===e.doi&&e.link===e.link&&e.isbn===e.isbn&&e.revista===e.revista&&e.estado===e.estado&&e.impact===e.impact&&e.paginas===e.paginas?a("span",[a("font-awesome-icon",{attrs:{icon:"check"}})],1):t._e()]),a("td",[a("span",{staticClass:"pointer",on:{click:function(a){return t.eliminarPublicaciones(e.id)}}},[a("i",{staticClass:"trash-alt"}),a("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1),t._v(" |\n            "),a("router-link",{attrs:{to:{name:"editarPublicaciones",params:{id:e.id}}}},[a("span",{staticClass:"pointer"},[a("i",{staticClass:"edit"}),a("font-awesome-icon",{attrs:{icon:"edit"}})],1)])],1)])}),0)])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Autor")]),a("th",[t._v("Título")]),a("th",[t._v("Año")]),a("th",[t._v("Info")]),a("th",[t._v("Acción")])])])}],s=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),r=a("2f62"),o=a("8a5d");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,i)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach(function(e){Object(s["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var u={name:"Inicio",data:function(){return{fields:["Autor","Titulo","Año","Info","Acción"],texto:""}},computed:l({},Object(r["d"])(["usuario","publicaciones","carga"]),{},Object(r["c"])(["arrayFiltrado2"])),methods:l({},Object(r["b"])(["getPublicaciones","eliminarPublicaciones","buscador"])),created:function(){this.getPublicaciones()},components:{PulseLoader:o["a"]}},d=u,p=a("2877"),b=Object(p["a"])(d,i,n,!1,null,null,null);e["default"]=b.exports},"671b":function(t,e,a){"use strict";var i=a("b22e"),n=a.n(i);n.a},"8a5d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"v-spinner"},[a("div",{staticClass:"v-pulse v-pulse1",style:[t.spinnerStyle,t.spinnerDelay1]}),a("div",{staticClass:"v-pulse v-pulse2",style:[t.spinnerStyle,t.spinnerDelay2]}),a("div",{staticClass:"v-pulse v-pulse3",style:[t.spinnerStyle,t.spinnerDelay3]})])},n=[],s={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},r=s,o=(a("671b"),a("2877")),c=Object(o["a"])(r,i,n,!1,null,null,null);e["a"]=c.exports},b22e:function(t,e,a){}}]);
//# sourceMappingURL=publicaciones.9f60ccbd.js.map