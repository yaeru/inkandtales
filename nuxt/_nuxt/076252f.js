(window.webpackJsonp=window.webpackJsonp||[]).push([[37,11,19],{373:function(t,e,r){"use strict";(function(t){var n=r(372);e.a={name:"SerieCard",data:function(){return{api_url:t.env.VUE_APP_STRAPI_API_URL,placeholder:r(374)}},methods:{showNewBadge:function(t){var e=n(t.updatedAt);return n().diff(e,"days")<=3}},props:{serie:Object},components:{}}}).call(this,r(166))},374:function(t,e,r){t.exports=r.p+"img/placeholder.6b261c2.png"},375:function(t,e,r){"use strict";r.r(e);var n={name:"Loading"},l=r(23),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"uk-position-center uk-light",attrs:{id:"it-loading"}},[e("div",{attrs:{"uk-spinner":"ratio: 3"}})])}],!1,null,null,null);e.default=component.exports},376:function(t,e,r){"use strict";r.r(e);var n=r(373).a,l=r(23),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-link",{staticClass:"uk-link-reset uk-text-center uk-position-relative",attrs:{to:{path:"/serie/"+t.serie.id},id:"it-card-serie"}},[t.serie.cover?r("img",{staticClass:"uk-border-rounded",attrs:{"data-src":t.serie.cover.url,alt:t.serie.Title,"uk-img":""}}):r("img",{staticClass:"uk-border-rounded",attrs:{"data-src":t.placeholder,alt:t.serie.Title,"uk-img":""}}),t._v(" "),t.showNewBadge(t.serie)?r("p",{staticClass:"uk-card-badge uk-label uk-label-success it-label-new"},[t._v(t._s(t._f("translate")("NEW")))]):t._e(),t._v(" "),r("h3",{staticClass:"uk-margin-small-top uk-margin-remove-bottom uk-text-truncate",attrs:{title:t.serie.Title}},[t._v(t._s(t.serie.Title))]),t._v(" "),t.serie.genres?r("p",{staticClass:"it-serie-genre"},t._l(t.serie.genres,(function(e){return r("span",{key:e.id},[t._v("\n\t\t\t"+t._s(e.name)+"\n\t\t")])})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},513:function(t,e,r){var map={"./af":377,"./af.js":377,"./ar":378,"./ar-dz":379,"./ar-dz.js":379,"./ar-kw":380,"./ar-kw.js":380,"./ar-ly":381,"./ar-ly.js":381,"./ar-ma":382,"./ar-ma.js":382,"./ar-sa":383,"./ar-sa.js":383,"./ar-tn":384,"./ar-tn.js":384,"./ar.js":378,"./az":385,"./az.js":385,"./be":386,"./be.js":386,"./bg":387,"./bg.js":387,"./bm":388,"./bm.js":388,"./bn":389,"./bn-bd":390,"./bn-bd.js":390,"./bn.js":389,"./bo":391,"./bo.js":391,"./br":392,"./br.js":392,"./bs":393,"./bs.js":393,"./ca":394,"./ca.js":394,"./cs":395,"./cs.js":395,"./cv":396,"./cv.js":396,"./cy":397,"./cy.js":397,"./da":398,"./da.js":398,"./de":399,"./de-at":400,"./de-at.js":400,"./de-ch":401,"./de-ch.js":401,"./de.js":399,"./dv":402,"./dv.js":402,"./el":403,"./el.js":403,"./en-au":404,"./en-au.js":404,"./en-ca":405,"./en-ca.js":405,"./en-gb":406,"./en-gb.js":406,"./en-ie":407,"./en-ie.js":407,"./en-il":408,"./en-il.js":408,"./en-in":409,"./en-in.js":409,"./en-nz":410,"./en-nz.js":410,"./en-sg":411,"./en-sg.js":411,"./eo":412,"./eo.js":412,"./es":413,"./es-do":414,"./es-do.js":414,"./es-mx":415,"./es-mx.js":415,"./es-us":416,"./es-us.js":416,"./es.js":413,"./et":417,"./et.js":417,"./eu":418,"./eu.js":418,"./fa":419,"./fa.js":419,"./fi":420,"./fi.js":420,"./fil":421,"./fil.js":421,"./fo":422,"./fo.js":422,"./fr":423,"./fr-ca":424,"./fr-ca.js":424,"./fr-ch":425,"./fr-ch.js":425,"./fr.js":423,"./fy":426,"./fy.js":426,"./ga":427,"./ga.js":427,"./gd":428,"./gd.js":428,"./gl":429,"./gl.js":429,"./gom-deva":430,"./gom-deva.js":430,"./gom-latn":431,"./gom-latn.js":431,"./gu":432,"./gu.js":432,"./he":433,"./he.js":433,"./hi":434,"./hi.js":434,"./hr":435,"./hr.js":435,"./hu":436,"./hu.js":436,"./hy-am":437,"./hy-am.js":437,"./id":438,"./id.js":438,"./is":439,"./is.js":439,"./it":440,"./it-ch":441,"./it-ch.js":441,"./it.js":440,"./ja":442,"./ja.js":442,"./jv":443,"./jv.js":443,"./ka":444,"./ka.js":444,"./kk":445,"./kk.js":445,"./km":446,"./km.js":446,"./kn":447,"./kn.js":447,"./ko":448,"./ko.js":448,"./ku":449,"./ku.js":449,"./ky":450,"./ky.js":450,"./lb":451,"./lb.js":451,"./lo":452,"./lo.js":452,"./lt":453,"./lt.js":453,"./lv":454,"./lv.js":454,"./me":455,"./me.js":455,"./mi":456,"./mi.js":456,"./mk":457,"./mk.js":457,"./ml":458,"./ml.js":458,"./mn":459,"./mn.js":459,"./mr":460,"./mr.js":460,"./ms":461,"./ms-my":462,"./ms-my.js":462,"./ms.js":461,"./mt":463,"./mt.js":463,"./my":464,"./my.js":464,"./nb":465,"./nb.js":465,"./ne":466,"./ne.js":466,"./nl":467,"./nl-be":468,"./nl-be.js":468,"./nl.js":467,"./nn":469,"./nn.js":469,"./oc-lnc":470,"./oc-lnc.js":470,"./pa-in":471,"./pa-in.js":471,"./pl":472,"./pl.js":472,"./pt":473,"./pt-br":474,"./pt-br.js":474,"./pt.js":473,"./ro":475,"./ro.js":475,"./ru":476,"./ru.js":476,"./sd":477,"./sd.js":477,"./se":478,"./se.js":478,"./si":479,"./si.js":479,"./sk":480,"./sk.js":480,"./sl":481,"./sl.js":481,"./sq":482,"./sq.js":482,"./sr":483,"./sr-cyrl":484,"./sr-cyrl.js":484,"./sr.js":483,"./ss":485,"./ss.js":485,"./sv":486,"./sv.js":486,"./sw":487,"./sw.js":487,"./ta":488,"./ta.js":488,"./te":489,"./te.js":489,"./tet":490,"./tet.js":490,"./tg":491,"./tg.js":491,"./th":492,"./th.js":492,"./tk":493,"./tk.js":493,"./tl-ph":494,"./tl-ph.js":494,"./tlh":495,"./tlh.js":495,"./tr":496,"./tr.js":496,"./tzl":497,"./tzl.js":497,"./tzm":498,"./tzm-latn":499,"./tzm-latn.js":499,"./tzm.js":498,"./ug-cn":500,"./ug-cn.js":500,"./uk":501,"./uk.js":501,"./ur":502,"./ur.js":502,"./uz":503,"./uz-latn":504,"./uz-latn.js":504,"./uz.js":503,"./vi":505,"./vi.js":505,"./x-pseudo":506,"./x-pseudo.js":506,"./yo":507,"./yo.js":507,"./zh-cn":508,"./zh-cn.js":508,"./zh-hk":509,"./zh-hk.js":509,"./zh-mo":510,"./zh-mo.js":510,"./zh-tw":511,"./zh-tw.js":511};function n(t){var e=l(t);return r(e)}function l(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=l,t.exports=n,n.id=513},524:function(t,e,r){"use strict";(function(t){r(51);var n=r(375),l=r(376);e.a={components:{SerieCard:l.default,Loading:n.default},data:function(){return{api_url:t.env.VUE_APP_STRAPI_API_URL,series:[]}},methods:{classExtraction:function(t){return t.genres.map((function(t){return"tag-"+t.id}))}},apollo:{series:GENRES_ALL_SERIES,genres:HOME_ALL_GENRES}}}).call(this,r(166))},583:function(t,e,r){"use strict";r.r(e);var n=r(524).a,l=r(23),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.genres?r("div",{attrs:{id:"it-genres"}},[r("vue-headful",{attrs:{title:"Géneros - Ink&Tales"}}),t._v(" "),r("section",{staticClass:"uk-section uk-section-muted uk-section-small"},[r("div",{staticClass:"uk-container uk-container-large"},[r("h1",{staticClass:"uk-h2 uk-margin-remove"},[t._v(t._s(t._f("translate")("ALL_GENRES")))])])]),t._v(" "),r("section",{staticClass:"uk-section"},[r("div",{staticClass:"uk-container uk-container-large"},[r("div",{staticClass:"uk-margin-large-bottom",attrs:{"uk-filter":"target: .js-filter"}},[r("ul",{staticClass:"uk-subnav uk-subnav-pill"},[t._m(0),t._v(" "),t._l(t.genres,(function(e){return r("li",{key:e.id,attrs:{"uk-filter-control":".tag-"+e.id}},[r("a",{attrs:{href:"#"}},[t._v(t._s(e.name))])])}))],2),t._v(" "),r("ul",{staticClass:"js-filter uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small uk-grid-match uk-text-center",attrs:{"uk-grid":""}},t._l(t.series,(function(e){return r("li",{key:e.id,class:t.classExtraction(e)},[r("SerieCard",{attrs:{serie:e}})],1)})),0)])])])],1):r("Loading")}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"uk-active",attrs:{"uk-filter-control":""}},[r("a",{attrs:{href:"#"}},[t._v("Todos")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SerieCard:r(376).default,Loading:r(375).default})}}]);