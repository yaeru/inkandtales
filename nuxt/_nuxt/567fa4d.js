(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{516:function(t,e,n){"use strict";(function(t){e.a={name:"AllGenres",data:function(){return{api_url:t.env.VUE_APP_STRAPI_API_URL}},props:{genres:Array}}}).call(this,n(166))},540:function(t,e,n){"use strict";n.r(e);var r=n(516).a,l=n(23),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uk-grid uk-grid-small",attrs:{id:"it-genres-filter-tag","uk-grid":""}},t._l(t.genres,(function(e){return n("div",{key:e.id},[e.series.length?n("router-link",{key:e.id,staticClass:"uk-label uk-width-1-1 uk-text-center",attrs:{to:{path:"/genre/"+e.id}}},[t._v("\n\t\t\t"+t._s(e.name)+"\n\t\t")]):t._e()],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);