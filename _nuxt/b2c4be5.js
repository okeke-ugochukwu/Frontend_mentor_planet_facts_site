(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{323:function(t,e,n){var content=n(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(108).default)("43131133",content,!0,{sourceMap:!1})},343:function(t,e,n){"use strict";n(323)},344:function(t,e,n){var o=n(107)((function(i){return i[1]}));o.push([t.i,"nav.open{margin-left:0}",""]),o.locals={},t.exports=o},348:function(t,e,n){"use strict";n.r(e);n(42),n(198);var o={name:"sideBar",props:{activeSubHeading:{type:Number,default:1}},computed:{planets:function(){return this.$store.state.planets},sideBar:function(){return this.$store.state.sideBar}},methods:{goToPage:function(){this.$store.commit("TOGGLE_SWITCH","sideBar")}}},r=(n(343),n(45)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"absolute top-[68px] z-10 h-[calc(100vh-68px)] pt-6 w-full ml-[-100%] bg-pf-deep-blue",class:{open:t.sideBar.isShown}},[e("div",{staticClass:"w-[87.2%] m-auto"},[e("ul",t._l(t.planets,(function(n){return e("li",{key:n.name,staticClass:"font-spartan font-bold text-white [&:not(:first-child)]:border-pf-border1 [&:not(:first-child)]:border-t-[1px] [&:not(:first-child)]:border-solid tracking-[1.36px] leading-[25px] text-[15px]",on:{click:function(e){return t.goToPage(n.name)}}},[e("nuxt-link",{staticClass:"flex justify-between items-center py-[20px]",attrs:{to:"/planets/".concat(n.name.toLowerCase())}},[e("span",{staticClass:"flex items-center"},[e("span",{staticClass:"w-5 h-5 inline-block mr-[25px] rounded-full",style:{background:n.nav_color}}),t._v(" "),e("span",[t._v("\n                     "+t._s(n.name.toUpperCase())+"\n                  ")])]),t._v(" "),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"6",height:"8"}},[e("path",{attrs:{fill:"none",stroke:"#FFF",opacity:".4",d:"M1 0l4 4-4 4"}})])])],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);