(window.webpackJsonp=window.webpackJsonp||[]).push([[14,10],{299:function(t,e,r){},305:function(t,e,r){"use strict";r(299)},311:function(t,e,r){"use strict";r.r(e);var n={name:"RedBox",props:{title:{type:String,default:null}}},l=(r(305),r(40)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"red-box"},[t.title?r("span",{staticClass:"title",domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"5d69f4e0",null);e.default=component.exports},353:function(t,e,r){"use strict";r.r(e);var n=r(35),l=(r(28),r(76),r(0)),c=r(80),o={components:{BIconBookmark:l.Lc},data:function(){return{firstArticle:null,showTitle:!1,siteName:c.b}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles").sortBy("date","desc").limit(2).fetch();case 2:(r=e.sent).length>0&&(t.firstArticle=r[0]),t.showTitle=r.length>1;case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Accueil"}},computed:{otherArticles:function(){return this.articles.slice(1)}},methods:{queryArticles:function(){return this.$content("articles")}}},d=r(40),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("social-head",{attrs:{title:t.siteName}}),t._v(" "),r("page-header",[t._v("By "),r("a",{attrs:{href:"https://skyost.eu"}},[t._v("Skyost")]),t._v(".")]),t._v(" "),t.firstArticle?r("red-box",{attrs:{title:"Dernier article 👀"}},[r("article-card",{attrs:{article:t.firstArticle}})],1):t._e(),t._v(" "),t.showTitle?r("h1",{staticClass:"mt-5 mb-4"},[r("b-icon-bookmark"),t._v(" Articles les plus récents\n  ")],1):t._e(),t._v(" "),r("article-list",{attrs:{"create-query-builder":t.queryArticles,"initial-limit":6,"load-limit":9,skip:1,size:"small"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SocialHead:r(128).default,PageHeader:r(240).default,ArticleCard:r(323).default,RedBox:r(311).default,ArticleList:r(322).default})}}]);