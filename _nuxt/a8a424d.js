(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{307:function(t,e,r){},318:function(t,e,r){"use strict";r(307)},330:function(t,e,r){"use strict";r.r(e);r(28),r(32),r(31),r(69),r(55),r(11),r(64),r(77),r(60);var n=r(35);r(76);function o(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return l=t.done,t},e:function(t){f=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(f)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var l={name:"ArticleContent",props:{article:{type:Object,required:!0}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,table;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:r=t.$el.querySelectorAll("table"),n=o(r);try{for(n.s();!(c=n.n()).done;)(table=c.value).classList.add("table"),table.classList.add("table-striped"),table.classList.add("table-bordered"),table.classList.add("table-hover"),table.classList.add("table-responsive")}catch(t){n.e(t)}finally{n.f()}case 5:case"end":return e.stop()}}),e)})))()}},f=(r(318),r(40)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("nuxt-content",{attrs:{document:t.article}})],1)}),[],!1,null,"57e3944e",null);e.default=component.exports}}]);