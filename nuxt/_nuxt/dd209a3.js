(window.webpackJsonp=window.webpackJsonp||[]).push([[20,19],{371:function(e,t,r){"use strict";(function(e){var j=r(370);t.a={name:"SerieCard",data:function(){return{api_url:e.env.VUE_APP_STRAPI_API_URL,placeholder:r(372)}},methods:{showNewBadge:function(e){var t=j(e.updatedAt);return j().diff(t,"days")<=3}},props:{serie:Object},components:{}}}).call(this,r(165))},372:function(e,t,r){e.exports=r.p+"img/placeholder.6b261c2.png"},374:function(e,t,r){"use strict";r.r(t);var j=r(371).a,n=r(23),component=Object(n.a)(j,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-link",{staticClass:"uk-link-reset uk-text-center uk-position-relative",attrs:{to:{path:"/serie/"+e.serie.id},id:"it-card-serie"}},[e.serie.cover?r("img",{staticClass:"uk-border-rounded",attrs:{"data-src":e.serie.cover.url,alt:e.serie.Title,"uk-img":""}}):r("img",{staticClass:"uk-border-rounded",attrs:{"data-src":e.placeholder,alt:e.serie.Title,"uk-img":""}}),e._v(" "),e.showNewBadge(e.serie)?r("p",{staticClass:"uk-card-badge uk-label uk-label-success it-label-new"},[e._v(e._s(e._f("translate")("NEW")))]):e._e(),e._v(" "),r("h3",{staticClass:"uk-margin-small-top uk-margin-remove-bottom uk-text-truncate",attrs:{title:e.serie.Title}},[e._v(e._s(e.serie.Title))]),e._v(" "),e.serie.genres?r("p",{staticClass:"it-serie-genre"},e._l(e.serie.genres,(function(t){return r("span",{key:t.id},[e._v("\n\t\t\t"+e._s(t.name)+"\n\t\t")])})),0):e._e()])}),[],!1,null,null,null);t.default=component.exports},510:function(e,t,r){"use strict";r.r(t);var j=r(374),n={name:"SeriesList",props:{series:Array,classProp:String},components:{SerieCard:j.default}},l=r(23),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"uk-grid uk-grid-medium uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-grid-match",class:e.classProp,attrs:{id:"it-serie-list","uk-grid":""}},e._l(e.series,(function(e){return r("div",{key:e.id},[r("SerieCard",{attrs:{serie:e}})],1)})),0)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SerieCard:r(374).default})},511:function(e,t,r){var map={"./af":375,"./af.js":375,"./ar":376,"./ar-dz":377,"./ar-dz.js":377,"./ar-kw":378,"./ar-kw.js":378,"./ar-ly":379,"./ar-ly.js":379,"./ar-ma":380,"./ar-ma.js":380,"./ar-sa":381,"./ar-sa.js":381,"./ar-tn":382,"./ar-tn.js":382,"./ar.js":376,"./az":383,"./az.js":383,"./be":384,"./be.js":384,"./bg":385,"./bg.js":385,"./bm":386,"./bm.js":386,"./bn":387,"./bn-bd":388,"./bn-bd.js":388,"./bn.js":387,"./bo":389,"./bo.js":389,"./br":390,"./br.js":390,"./bs":391,"./bs.js":391,"./ca":392,"./ca.js":392,"./cs":393,"./cs.js":393,"./cv":394,"./cv.js":394,"./cy":395,"./cy.js":395,"./da":396,"./da.js":396,"./de":397,"./de-at":398,"./de-at.js":398,"./de-ch":399,"./de-ch.js":399,"./de.js":397,"./dv":400,"./dv.js":400,"./el":401,"./el.js":401,"./en-au":402,"./en-au.js":402,"./en-ca":403,"./en-ca.js":403,"./en-gb":404,"./en-gb.js":404,"./en-ie":405,"./en-ie.js":405,"./en-il":406,"./en-il.js":406,"./en-in":407,"./en-in.js":407,"./en-nz":408,"./en-nz.js":408,"./en-sg":409,"./en-sg.js":409,"./eo":410,"./eo.js":410,"./es":411,"./es-do":412,"./es-do.js":412,"./es-mx":413,"./es-mx.js":413,"./es-us":414,"./es-us.js":414,"./es.js":411,"./et":415,"./et.js":415,"./eu":416,"./eu.js":416,"./fa":417,"./fa.js":417,"./fi":418,"./fi.js":418,"./fil":419,"./fil.js":419,"./fo":420,"./fo.js":420,"./fr":421,"./fr-ca":422,"./fr-ca.js":422,"./fr-ch":423,"./fr-ch.js":423,"./fr.js":421,"./fy":424,"./fy.js":424,"./ga":425,"./ga.js":425,"./gd":426,"./gd.js":426,"./gl":427,"./gl.js":427,"./gom-deva":428,"./gom-deva.js":428,"./gom-latn":429,"./gom-latn.js":429,"./gu":430,"./gu.js":430,"./he":431,"./he.js":431,"./hi":432,"./hi.js":432,"./hr":433,"./hr.js":433,"./hu":434,"./hu.js":434,"./hy-am":435,"./hy-am.js":435,"./id":436,"./id.js":436,"./is":437,"./is.js":437,"./it":438,"./it-ch":439,"./it-ch.js":439,"./it.js":438,"./ja":440,"./ja.js":440,"./jv":441,"./jv.js":441,"./ka":442,"./ka.js":442,"./kk":443,"./kk.js":443,"./km":444,"./km.js":444,"./kn":445,"./kn.js":445,"./ko":446,"./ko.js":446,"./ku":447,"./ku.js":447,"./ky":448,"./ky.js":448,"./lb":449,"./lb.js":449,"./lo":450,"./lo.js":450,"./lt":451,"./lt.js":451,"./lv":452,"./lv.js":452,"./me":453,"./me.js":453,"./mi":454,"./mi.js":454,"./mk":455,"./mk.js":455,"./ml":456,"./ml.js":456,"./mn":457,"./mn.js":457,"./mr":458,"./mr.js":458,"./ms":459,"./ms-my":460,"./ms-my.js":460,"./ms.js":459,"./mt":461,"./mt.js":461,"./my":462,"./my.js":462,"./nb":463,"./nb.js":463,"./ne":464,"./ne.js":464,"./nl":465,"./nl-be":466,"./nl-be.js":466,"./nl.js":465,"./nn":467,"./nn.js":467,"./oc-lnc":468,"./oc-lnc.js":468,"./pa-in":469,"./pa-in.js":469,"./pl":470,"./pl.js":470,"./pt":471,"./pt-br":472,"./pt-br.js":472,"./pt.js":471,"./ro":473,"./ro.js":473,"./ru":474,"./ru.js":474,"./sd":475,"./sd.js":475,"./se":476,"./se.js":476,"./si":477,"./si.js":477,"./sk":478,"./sk.js":478,"./sl":479,"./sl.js":479,"./sq":480,"./sq.js":480,"./sr":481,"./sr-cyrl":482,"./sr-cyrl.js":482,"./sr.js":481,"./ss":483,"./ss.js":483,"./sv":484,"./sv.js":484,"./sw":485,"./sw.js":485,"./ta":486,"./ta.js":486,"./te":487,"./te.js":487,"./tet":488,"./tet.js":488,"./tg":489,"./tg.js":489,"./th":490,"./th.js":490,"./tk":491,"./tk.js":491,"./tl-ph":492,"./tl-ph.js":492,"./tlh":493,"./tlh.js":493,"./tr":494,"./tr.js":494,"./tzl":495,"./tzl.js":495,"./tzm":496,"./tzm-latn":497,"./tzm-latn.js":497,"./tzm.js":496,"./ug-cn":498,"./ug-cn.js":498,"./uk":499,"./uk.js":499,"./ur":500,"./ur.js":500,"./uz":501,"./uz-latn":502,"./uz-latn.js":502,"./uz.js":501,"./vi":503,"./vi.js":503,"./x-pseudo":504,"./x-pseudo.js":504,"./yo":505,"./yo.js":505,"./zh-cn":506,"./zh-cn.js":506,"./zh-hk":507,"./zh-hk.js":507,"./zh-mo":508,"./zh-mo.js":508,"./zh-tw":509,"./zh-tw.js":509};function j(e){var t=n(e);return r(t)}function n(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}j.keys=function(){return Object.keys(map)},j.resolve=n,e.exports=j,j.id=511}}]);