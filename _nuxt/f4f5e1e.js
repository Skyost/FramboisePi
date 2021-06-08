(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{128:function(t,e,r){"use strict";r.r(e);r(11),r(64);var n=r(68),o={name:"SocialHead",props:{title:{type:String,required:!0},description:{type:String,default:n.b},openGraphImage:{type:String,default:"".concat(n.a,"/images/social/open-graph.png")},twitterCard:{type:String,default:"summary"},twitterImage:{type:String,default:"".concat(n.a,"/images/social/twitter.png")}},head:function(){return{meta:[{property:"og:title",content:this.title},{property:"og:description",content:this.description},{property:"og:type",content:"website"},{property:"og:site_name",content:n.c},{property:"og:url",content:Object(n.d)(this.$route)},{property:"og:image",content:this.openGraphImage},{property:"og:locale",content:"fr_FR"},{name:"twitter:card",content:this.twitterCard},{name:"twitter:title",content:this.title},{name:"twitter:description",content:this.description},{name:"twitter:site",content:"@Skyost"},{name:"twitter:creator",content:"@Skyost"},{name:"twitter:url",content:Object(n.d)(this.$route)},{name:"twitter:image",content:this.twitterImage}],link:[{rel:"canonical",href:this.$route.path}]}}},l=r(40),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._e()}),[],!1,null,null,null);e.default=component.exports},129:function(t,e,r){"use strict";r.r(e);var n={name:"PageHeader",props:{title:{type:String,default:null}}},o=(r(272),r(40)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"pt-5 pb-5"},[r("h1",{staticClass:"title"},[t.title?r("span",{domProps:{textContent:t._s(t.title)}}):r("span",[t._v("Framboise "),r("img",{staticClass:"pi",attrs:{src:"/images/pi.svg",alt:"Pi"}})])]),t._v(" "),r("span",{staticClass:"d-block text-muted tagline"},[t._t("default")],2)])}),[],!1,null,"75ff8836",null);e.default=component.exports},132:function(t,e,r){"use strict";r.r(e);r(171);var n={name:"ErrorDisplay",components:{PageHeader:r(129).default},props:{errorCode:{type:Number,default:500}},computed:{title:function(){return 404===this.errorCode?"Page non trouvée !":"Erreur ".concat(this.statusCode)}}},o=r(40),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("page-header",{attrs:{title:t.title}}),t._v(" "),r("p",[t._v("\n    Vous pouvez continuer votre navigation en allant sur "),r("a",{attrs:{href:"javascript:history.back()"}},[t._v("la page précédente")]),t._v(" ou\n    en allant sur "),r("nuxt-link",{attrs:{to:"/"}},[t._v("la page d'accueil")]),t._v(".\n    "),404===t.errorCode?r("span",[t._v("\n      Si quelque chose devait se trouver ici, n'hésitez pas à\n      "),r("a",{attrs:{href:"https://skyost.eu/#contact"}},[t._v("me contacter")]),t._v(" pour me le signaler.\n    ")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:r(129).default})},164:function(t,e,r){"use strict";r.r(e);var n=r(68),o={name:"PageFooter",data:function(){return{siteName:n.c}}},l=(r(293),r(40)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("img",{staticClass:"raspberrypi",attrs:{src:r(292),alt:"Raspberry Pi"}}),t._v("\n  Copyright © 2021 - Hugo Delaunay "),n("q",[t._v("Skyost")]),t._v(".\n  Tous droits réservés.\n  "),n("a",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modal-legals",expression:"'modal-legals'"}],attrs:{href:"#"}},[t._v("Mentions légales")]),t._v(".\n  "),n("b-modal",{attrs:{id:"modal-legals",title:"Mentions légales",size:"lg","ok-title":"Fermer","ok-variant":"secondary","ok-only":""}},[n("h2",[t._v("Affiliation")]),t._v(" "),n("p",[t._v("\n      Ce site est partenaire de certains sites de e-commerce et participe à un programme d’affiliation permettant\n      de toucher une commission sur l'achat de certains produits par des liens affiliés.\n    ")]),t._v(" "),n("h2",[t._v("Marques")]),t._v(" "),n("p",[t._v("\n      Raspberry Pi est une marque déposée de la fondation Raspberry Pi.\n      Pour plus d'informations, voir\n      "),n("q",[n("a",{attrs:{href:"https://www.raspberrypi.org/trademark-rules/"}},[t._v("Trademark rules and brand guidelines")])]),t._v("\n      sur le site officiel de la fondation Raspberry Pi.\n    ")]),t._v(" "),n("h2",[t._v("Crédits")]),t._v(" "),n("p",[t._v("\n      Certaines illustrations proviennent de FreePik via "),n("a",{attrs:{href:"https://www.flaticon.com/"}},[t._v("FlatIcon")]),t._v(".\n    ")]),t._v(" "),n("h2",[t._v("Propriété intellectuelle")]),t._v(" "),n("p",[t._v("\n      Le contenu de "+t._s(t.siteName)+" est protégé par les lois sur le Copyright et le Code de la Propriété Intellectuelle.\n      En conséquence, toute reproduction, totale ou partielle, ou imitation, sans accord exprès,\n      préalable et écrit, est interdite.\n    ")])])],1)}),[],!1,null,"352c3246",null);e.default=component.exports},169:function(t,e,r){"use strict";var n=r(19),o=r(242);n.default.component("Youtube",o.default)},211:function(t,e,r){},216:function(t,e,r){"use strict";function n(t){return"/categorie/".concat(t,"/")}r.d(e,"a",(function(){return n}))},217:function(t,e,r){},218:function(t,e,r){},219:function(t,e,r){},231:function(t,e,r){},239:function(t,e,r){"use strict";var n=r(240),o=r(164),l={components:{PageNavbar:n.default,PageFooter:o.default},layout:"default"},c=(r(294),r(40)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("page-navbar"),t._v(" "),r("b-container",[r("nuxt")],1),t._v(" "),r("page-footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{PageFooter:r(164).default})},240:function(t,e,r){"use strict";r.r(e);r(28),r(32),r(31),r(70),r(56),r(11),r(64),r(78),r(60);var n=r(35),o=(r(77),r(89),r(79),r(84),r(0)),l=r(241),c=r(216);function d(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var m={name:"PageNavbar",components:{BIconPen:o.br,BIconListUl:o.Pp,BIconQuestion:o.ds,SearchItem:l.default},data:function(){return{categories:[]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c,f,m,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles").only("categories").fetch();case 2:r=e.sent,n=[],o=d(r);try{for(o.s();!(l=o.n()).done;){c=l.value,f=d(c.categories);try{for(f.s();!(m=f.n()).done;)v=m.value,n.includes(v)||n.push(v)}catch(t){f.e(t)}finally{f.f()}}}catch(t){o.e(t)}finally{o.f()}n.sort(),t.categories=n;case 8:case"end":return e.stop()}}),e)})))()},methods:{getCategoryAddress:c.a}},v=(r(291),r(40)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{toggleable:"lg"}},[n("b-navbar-brand",{attrs:{to:"/"}},[n("img",{staticClass:"logo",attrs:{src:r(277),alt:"Pi"}})]),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{to:"/",active:"/"===t.$nuxt.$route.path}},[n("b-icon-pen"),t._v(" Articles\n      ")],1),t._v(" "),n("search-item"),t._v(" "),t.categories.length>0?n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("b-icon-list-ul"),t._v(" Catégories\n        ")]},proxy:!0}],null,!1,1121493609)},[t._v(" "),t._l(t.categories,(function(e){return n("b-dropdown-item",{key:e,attrs:{to:t.getCategoryAddress(e)}},[t._v("\n          "+t._s(e)+"\n        ")])}))],2):t._e(),t._v(" "),n("b-nav-item",{attrs:{href:"https://skyost.eu"}},[n("b-icon-question"),t._v(" À propos\n      ")],1)],1)],1)],1)}),[],!1,null,"7ac399df",null);e.default=component.exports},241:function(t,e,r){"use strict";r.r(e);var n={name:"SearchItem",components:{BIconSearch:r(0).Js},methods:{onOkClicked:function(){this.$refs.form.submit()}}},o=r(40),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-nav-item",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modal-search",expression:"'modal-search'"}]},[r("b-icon-search"),t._v(" Rechercher\n  "),r("b-modal",{attrs:{id:"modal-search",title:"Rechercher un article","ok-title":"Rechercher","ok-variant":"red","cancel-title":"Annuler"},on:{ok:t.onOkClicked}},[r("form",{ref:"form",attrs:{action:"/recherche/",method:"get"}},[r("b-form-group",{attrs:{label:"Votre recherche :","label-for":"terms-input","invalid-feedback":"Champ requis."}},[r("b-form-input",{attrs:{id:"terms-input",name:"requete",required:""}})],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports},242:function(t,e,r){"use strict";r.r(e);var n={name:"Youtube",props:{video:{type:String,required:!0}}},o=(r(303),r(40)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("iframe",{staticClass:"youtube-frame",attrs:{src:"https://www.youtube.com/embed/"+t.video,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})}),[],!1,null,"0ff1b48e",null);e.default=component.exports},244:function(t,e,r){r(245),t.exports=r(246)},272:function(t,e,r){"use strict";r(211)},277:function(t,e,r){t.exports=r.p+"img/pi.107f3a7.svg"},291:function(t,e,r){"use strict";r(217)},292:function(t,e,r){t.exports=r.p+"img/raspberrypi.be93e73.svg"},293:function(t,e,r){"use strict";r(218)},294:function(t,e,r){"use strict";r(219)},303:function(t,e,r){"use strict";r(231)},68:function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return l})),r.d(e,"d",(function(){return c}));var n="Framboise Pi",o="Blog consacré au Raspberry Pi. Au programme : des actualités, des tutoriels en français, des conseils, des projets, et bien plus pour exploiter le maximum de votre framboise !",l="https://framboise-pi.skyost.eu";function c(t){return"".concat(l).concat(t.path)}},74:function(t,e,r){"use strict";var n=r(128),o=r(132),l={components:{SocialHead:n.default,ErrorDisplay:o.default},layout:"error",props:{error:{type:Object,default:null}},head:function(){return{title:this.title}},computed:{title:function(){return"Erreur ".concat(this.error.statusCode)}}},c=r(40),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("social-head",{attrs:{title:t.title}}),t._v(" "),r("error-display",{attrs:{"error-code":t.error.statusCode}})],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{SocialHead:r(128).default,ErrorDisplay:r(132).default})}},[[244,17,2,18]]]);