(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{344:function(t,e){},352:function(t,e,r){"use strict";var c=r(344),o=r.n(c);e.default=o.a},365:function(t,e,r){"use strict";r.r(e);r(22),r(30);var c=r(133),o=r(134),n=r(324),l={components:{SocialHead:c.default,PageHeader:o.default,ArticleList:n.default},data:function(){return{title:"Liste des articles",category:null}},head:function(){return{title:this.title}},mounted:function(){Object.prototype.hasOwnProperty.call(this.$route.params,"id")?this.category=this.$route.params.id.toLowerCase():this.category="aucune",this.title="Catégorie «".concat(this.capitalize(this.category),"»")},methods:{capitalize:function(input){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(t?input.toLowerCase():input).replace(/(?:^|\s|["'([{])+\S/g,(function(t){return t.toUpperCase()}))},queryArticles:function(){return this.$content("articles").where({categories:{$contains:this.category}})}}},d=r(41),f=r(352),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("social-head",{attrs:{title:t.title}}),t._v(" "),r("page-header",{attrs:{title:"Liste des articles"}},[t._v("\n    Articles trouvés pour la catégorie "),r("q",{staticClass:"text-capitalize",domProps:{textContent:t._s(t.$route.params.id)}}),t._v(".\n  ")]),t._v(" "),t.category?r("article-list",{attrs:{"create-query-builder":t.queryArticles}},[r("em",{staticClass:"text-muted"},[t._v("Pas d'article pour cette catégorie.")])]):t._e()],1)}),[],!1,null,null,null);"function"==typeof f.default&&Object(f.default)(component);e.default=component.exports;installComponents(component,{SocialHead:r(133).default,PageHeader:r(134).default,ArticleList:r(324).default})}}]);