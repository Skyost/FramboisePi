(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{298:function(e,t,r){"use strict";function n(article){var e;return null!==(e=article.image)&&void 0!==e?e:"/images/articles/".concat(article.slug,"/preview.png")}function c(article){return"/article/".concat(article.slug)}function o(article){var e;return null!==(e=article.author)&&void 0!==e?e:{name:"Skyost",link:"https://skyost.eu"}}r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return o}))},301:function(e,t,r){},308:function(e,t,r){"use strict";r(301)},313:function(e,t,r){"use strict";r.r(t);var n=r(35),article=(r(76),r(298)),c={name:"PreviewImage",props:{article:{type:Object,required:!0}},destroyed:function(){window.removeEventListener("resize",this.resizePreview)},beforeMount:function(){window.addEventListener("resize",this.resizePreview)},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:e.resizePreview();case 3:case"end":return t.stop()}}),t)})))()},methods:{getArticleImage:article.c,resizePreview:function(){if(this.$refs.preview){var e=this.$refs.preview;e.style.height="".concat(e.offsetWidth/2,"px")}}}},o=(r(308),r(40)),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"preview",staticClass:"preview",style:"background-image: url('"+e.getArticleImage(e.article)+"')"})}),[],!1,null,"a016a64a",null);t.default=component.exports}}]);