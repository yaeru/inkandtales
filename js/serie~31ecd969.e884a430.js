(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["serie~31ecd969"],{"17a4":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"it-modal-share","uk-modal":""}},[s("div",{staticClass:"uk-modal-dialog uk-margin-auto-vertical uk-modal-body uk-text-center uk-border-rounded"},[s("button",{staticClass:"uk-modal-close-default",attrs:{type:"button","uk-close":""}}),s("h2",{staticClass:"uk-modal-title"},[e._v(e._s(e._f("translate")("SHARE"))),s("br",{staticClass:"uk-hidden@m"}),e._v(" "+e._s(e.serie.Title))]),s("div",{staticClass:"uk-child-width-1-2 uk-child-width-1-3@m uk-grid-small",attrs:{"uk-grid":"","uk-margin":""}},[s("div",[s("ShareNetwork",{attrs:{network:"whatsapp",url:"https://inkandtales.com/serie/"+e.serie.id,title:"Leer "+e.serie.Title+" en Ink&Takes.",description:e.serie.Description}},[s("span",{attrs:{"uk-icon":"icon: whatsapp"}}),e._v(" Whatsapp ")])],1),s("div",[s("ShareNetwork",{attrs:{network:"telegram",url:"https://inkandtales.com/serie/"+e.serie.id,title:"Leer "+e.serie.Title+" en Ink&Takes.",description:e.serie.Description}},[s("span",{attrs:{"uk-icon":"icon: telegram"}}),e._v(" Telegram ")])],1),s("div",[s("ShareNetwork",{attrs:{network:"twitter",url:"https://inkandtales.com/serie/"+e.serie.id,title:"Leer "+e.serie.Title+" en Ink&Takes.",description:e.serie.Description,hashtags:(e.serie.Title+",InkAndTales").replace(/\s*,\s*/g,",").replace(/\s+/g,"")}},[s("span",{attrs:{"uk-icon":"icon: facebook"}}),e._v(" Twitter ")])],1),s("div",[s("ShareNetwork",{attrs:{network:"facebook",url:"https://inkandtales.com/serie/"+e.serie.id,title:"Leer "+e.serie.Title+" en Ink&Takes.",description:e.serie.Description,quote:e.serie.Title+": "+e.serie.Description,hashtags:(e.serie.Title+",InkAndTales").replace(/\s*,\s*/g,",").replace(/\s+/g,"")}},[s("span",{attrs:{"uk-icon":"icon: facebook"}}),e._v(" Facebook ")])],1),s("div",[s("ShareNetwork",{attrs:{network:"pinterest",url:"https://inkandtales.com/serie/"+e.serie.id,title:"Leer "+e.serie.Title+" en Ink&Takes."}},[s("span",{attrs:{"uk-icon":"icon: pinterest"}}),e._v(" Pinterest ")])],1),s("div",[s("ShareNetwork",{attrs:{network:"messenger",url:"https://inkandtales.com/serie/"+e.serie.id,title:"Leer "+e.serie.Title+" en Ink&Takes."}},[s("span",{attrs:{"uk-icon":"icon: messenger"}}),e._v(" Messenger ")])],1)])])])},r=[],a={name:"Share",props:{serie:Object}},n=a,l=s("2877"),o=Object(l["a"])(n,i,r,!1,null,null,null);t["a"]=o.exports},2651:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.serie?i("div",{attrs:{id:"it-serie"}},[i("vue-headful",{attrs:{title:e.serie.Title+" - Ink & Tales",description:e.serie.Description}}),i("section",{staticClass:"uk-section uk-section-small uk-cover-container",attrs:{id:"it-serie-hero"}},[e.serie.background?i("img",{staticClass:"uk-visible@m",attrs:{src:e.serie.background.url,"uk-cover":"",alt:e.serie.Title}}):e._e(),i("div",{staticClass:"uk-container uk-container-large"},[i("div",{staticClass:"uk-flex-middle",attrs:{"uk-grid":""}},[i("div",{staticClass:"uk-width-2-5@m uk-width-1-2@l it-serie-art uk-hidden@m"},[i("figure",{staticClass:"it-cover"},[e.serie.cover?i("img",{staticClass:"uk-border-rounded",attrs:{src:e.serie.cover.url,alt:e.serie.Title}}):i("img",{staticClass:"uk-border-rounded",attrs:{src:s("59e0"),alt:e.serie.Title}})])]),i("div",{staticClass:"uk-width-3-5@m uk-width-1-2@l it-serie-info"},[e.serie.genres?i("p",{staticClass:"it-serie-genre"},e._l(e.serie.genres,(function(t){return i("span",{key:t.id},[e._v(" "+e._s(t.name)+" ")])})),0):e._e(),i("h1",{staticClass:"it-serie-title uk-margin-remove"},[e._v(e._s(e.serie.Title))]),i("h2",{staticClass:"it-serie-author uk-text-large uk-margin-small-top"},e._l(e.serie.authors,(function(t){return i("span",{key:t.id},[i("router-link",{key:t.id,staticClass:"uk-link-reset",attrs:{to:{path:"/author/"+t.id}}},[e._v(" "+e._s(t.name)+" ")])],1)})),0),i("div",{staticClass:"it-serie-reverse"},[i("div",{staticClass:"it-serie-description"},[i("p",{staticClass:"it-serie-meta uk-article-meta uk-flex uk-flex-middle"},[i("span",{staticClass:"uk-label uk-label-primary uk-margin-small-right"},[e.serie.is_finish?i("span",[e._v(e._s(e._f("translate")("COMPLETE")))]):i("span",[e._v(e._s(e._f("translate")("ONGOING")))])]),e.serie.editorial?i("a",{staticClass:"uk-margin-small-right",attrs:{href:e.serie.editorial.url,target:"_blank"}},[e._v(" "+e._s(e._f("translate")("EDITORIAL"))+" "+e._s(e.serie.editorial.name)+" ")]):e._e(),e.serie.updated_at?i("span",{staticClass:"uk-visible@m"},[e._v(" "+e._s(e._f("translate")("LASTUPDATE"))+" "+e._s(e.moment(e.serie.updated_at).format("DD MMM YY"))+" ")]):e._e()]),e.serie.Description?i("vue-markdown-it",{attrs:{source:e.serie.Description}}):e._e()],1),i("nav",{staticClass:"it-serie-actionbar uk-flex uk-flex-middle"},[e.read?i("router-link",{staticClass:"it-button-readnow uk-button uk-button-large uk-button-dark",attrs:{to:e.read}},[e._v(" "+e._s(e._f("translate")("SERIE_READ"))+" ")]):e._e(),i("div",{staticClass:"uk-flex uk-flex-middle"},[e.username?i("div",[0==e.serie.follow_series.length?i("button",{staticClass:"ik-button-fav uk-button  addtofav",attrs:{type:"button"},on:{click:e.addToFav}},[i("span",{attrs:{"uk-icon":"icon: unfollow"}})]):i("button",{staticClass:"ik-button-fav uk-button  removefromfav",attrs:{type:"button"},on:{click:e.removeFromFav}},[i("span",{attrs:{"uk-icon":"icon: follow"}})])]):i("div",[e._m(0)]),i("a",{staticClass:"uk-button ",attrs:{href:"","uk-toggle":"target: #it-modal-share","uk-icon":"icon: social"}})])],1),i("Share",{attrs:{serie:e.serie}})],1)]),i("div",{staticClass:"uk-width-2-5@m uk-width-1-2@l uk-visible@m",attrs:{id:"it-serie-cover"}},[i("figure",{staticClass:"it-cover"},[e.serie.cover?i("img",{staticClass:"uk-border-rounded",attrs:{src:e.serie.cover.url,alt:e.serie.Title}}):i("img",{staticClass:"uk-border-rounded",attrs:{src:s("59e0"),alt:e.serie.Title}})])])])])]),e.serie.has_chapter?i("section",{staticClass:"uk-section uk-section-small"},[i("div",{staticClass:"uk-container uk-container-large"},[i("ChapterList",{attrs:{serie:e.serie}})],1)]):e._e(),i("section",{staticClass:"uk-section",attrs:{id:"it-serie-related"}},[i("div",{staticClass:"uk-container uk-container-large"},[i("h3",{staticClass:"uk-text-large uk-article-title"},[e._v(e._s(e._f("translate")("RELATED")))]),i("SeriesRelated",{attrs:{serie:e.serie}})],1)])],1):i("Loading")},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{staticClass:"ik-button-fav uk-button ",attrs:{href:"#modal-login","uk-toggle":""}},[s("span",{attrs:{"uk-icon":"icon: heart"}})])}],a=s("1da1"),n=(s("159b"),s("96cf"),s("7034")),l=s.n(n),o=s("4868"),u=s("e90c"),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.serie?s("div",[s("div",{},[s("h3",{staticClass:"uk-text-large uk-margin-remove"},[e._v(e._s(e.serie.chapters.length)+" "+e._s(e._f("translate")("CHAPTERS")))]),s("ul",{staticClass:"uk-list uk-list-divider"},e._l(e.serie.chapters,(function(t){return s("li",{key:t.id},[s("router-link",{staticClass:"uk-link-reset uk-grid-small",attrs:{to:e.read(t),"uk-grid":""}},[s("div",{staticClass:"uk-width-auto"},[s("span",{staticClass:"it-chapter-number uk-article-title uk-text-muted"},[e._v(e._s(t.number))])]),s("div",{staticClass:"uk-width-expand"},[s("h3",{staticClass:"uk-margin-remove"},[e._v(" "+e._s(t.name)+" ")]),s("div",{staticClass:"uk-flex uk-flex-middle"},[s("span",{staticClass:"uk-margin-right"},[e._v(e._s(e.moment(e.serie.updated_at).format("DD MMM YY")))]),s("span",{staticClass:"uk-margin-right"},[e._v(e._s(t.chapter_pages.length)+" "+e._s(e._f("translate")("CHAPTER_PAGES_TOTAL")))])])])])],1)})),0)])]):e._e()},d=[],k=s("c1df"),h={name:"ChapterList",data:function(){return{moment:k,api_url:"https://glacial-chamber-38684.herokuapp.com",oldToNew:!0}},methods:{toggleSort:function(){this.oldToNew=!this.oldToNew,this.oldToNew?this.serie.chapters=this.serie.chapters.sort(this.oldToNewFuntion):this.serie.chapters=this.serie.chapters.sort(this.newToOldFuntion)},oldToNewFuntion:function(e,t){return e.number<t.number?-1:1},newToOldFuntion:function(e,t){return e.number<t.number?1:-1},read:function(e){var t;return this.serie&&this.serie.chapters&&0!=this.serie.chapters.length?{path:"/viewer/"+e.id+"/"+(null===(t=e.chapter_pages[0])||void 0===t?void 0:t.id)}:null}},props:{serie:Object},computed:{}},p=h,m=s("2877"),v=Object(m["a"])(p,c,d,!1,null,null,null),f=v.exports,_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.series?s("SeriesList",{attrs:{series:e.series||[],classProp:"uk-child-width-1-5@l"}}):e._e()},g=[],b=(s("d81d"),s("94aa")),w={name:"SeriesRelated",data:function(){return{series:null,api_url:"https://glacial-chamber-38684.herokuapp.com"}},props:{serie:Object},components:{SeriesList:b["a"]},apollo:{series:{query:o["l"],variables:function(){return{id:[this.serie.id],genreIds:this.serie.genres.map((function(e){return e.id}))}},skip:function(){return!this.serie}}}},C=w,T=Object(m["a"])(C,_,g,!1,null,null,null),x=T.exports,E=s("17a4"),S=s("3a5e"),I=s("c1df"),L={mounted:function(){var e=this;this.loadUsername(),setTimeout((function(){e.id=e.$store.getters["auth/getId"],e.$apollo.queries.serie.refetch()}),100)},data:function(){return{serie:null,username:null,moment:I,api_url:"https://glacial-chamber-38684.herokuapp.com",routeParam:this.$route.params.id,id:null}},computed:{read:function(){var e;if(!this.serie||!this.serie.chapters||0==this.serie.chapters.length)return null;var t=this.serie.chapters[0];return{path:"/viewer/"+t.id+"/"+(null===(e=t.chapter_pages[0])||void 0===e?void 0:e.id)}}},methods:{loadUsername:function(){var e=this;setTimeout((function(){e.username=e.$store.getters["auth/getUsername"],e.userId=e.$store.getters["auth/getId"]}),1e3)},addToFav:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].createEntry("follow-series",{series:{_id:e.serie.id},user:{_id:e.id}}).then((function(t){e.serie.follow_series.push(t)})).catch((function(e){return console.debug("err",e)}));case 2:case"end":return t.stop()}}),t)})))()},removeFromFav:function(){var e=this;this.serie.follow_series.forEach((function(t){u["a"].deleteEntry("follow-series",t.id).then((function(){e.serie.follow_series=[]})).catch((function(e){return console.debug("err",e)}))}))}},components:{Loading:S["a"],VueMarkdownIt:l.a,ChapterList:f,SeriesRelated:x,Share:E["a"]},apollo:{serie:{query:o["m"],variables:function(){var e;return{id:this.routeParam,userId:null!==(e=this.id)&&void 0!==e?e:0}}}}},D=L,O=Object(m["a"])(D,i,r,!1,null,null,null);t["default"]=O.exports},d81d:function(e,t,s){"use strict";var i=s("23e7"),r=s("b727").map,a=s("1dde"),n=a("map");i({target:"Array",proto:!0,forced:!n},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=serie~31ecd969.e884a430.js.map