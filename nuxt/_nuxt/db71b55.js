(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{537:function(t,e,r){"use strict";r.r(e);var n={name:"NavPagesMobile",props:{chapter_page:Object,chapter:Object},data:function(){return{isActive:!1}},computed:{back:function(){return this.chapter.series.has_chapter,"/serie/"+this.chapter.series.id},next:function(){var t=this.currentIndex();return this.maxPages()>t+1?this.urlFor(t+1):null},previous:function(){var t=this.currentIndex();return t>0?this.urlFor(t-1):null}},methods:{maxPages:function(){return this.chapter.chapter_pages.length},currentIndex:function(){return this.chapter.chapter_pages.indexOf(this.chapter_page)},urlFor:function(t){var e;return{path:"#it-page-"+(null===(e=this.chapter.chapter_pages[t])||void 0===e?void 0:e.page_number)}}}},c=r(23),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.chapter.id?r("div",[r("nav",{staticClass:"uk-navbar-container uk-position-top uk-position-fixed uk-light uk-hidden@m",attrs:{id:"it-nav-viewer-top","uk-navbar":""}},[r("div",{staticClass:"uk-navbar-left"},[r("router-link",{staticClass:"uk-navbar-item",attrs:{to:t.back}},[r("span",{attrs:{"uk-icon":"arrow-left"}})]),t._v(" "),r("div",{staticClass:"uk-navbar-item"},[t._v("\n\t\t\t\t"+t._s(t.chapter.series.Title)+" | "+t._s(t.chapter.name)+"\n\t\t\t")])],1)]),t._v(" "),r("nav",{staticClass:"uk-navbar-container uk-hidden@m uk-position-bottom uk-position-fixed uk-light",attrs:{id:"it-nav-viewer-bottom","uk-navbar":""}},[r("div",{staticClass:"uk-navbar-center"},[t.chapter?r("ul",{staticClass:"uk-navbar-nav"},[t.previous?r("li",[r("router-link",{attrs:{to:t.previous}},[r("span",{attrs:{"uk-icon":"chevron-left"}})])],1):r("li",[t._m(0)]),t._v(" "),r("li",[r("a",{staticClass:"uk-disabled",attrs:{href:"#"}},[t._v(t._s(t.chapter_page.page_number))])]),t._v(" "),t.next?r("li",[r("router-link",{attrs:{to:t.next}},[r("span",{attrs:{"uk-icon":"chevron-right"}})])],1):r("li",[t._m(1)])]):t._e()])])]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"uk-disabled",attrs:{href:"#"}},[e("span",{attrs:{"uk-icon":"chevron-left"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"uk-disabled",attrs:{href:"#"}},[e("span",{attrs:{"uk-icon":"chevron-right"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:r(86).default})}}]);