(function(t){function e(e){for(var i,r,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={app:0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.initStatus?n(t.viewName,{tag:"component"}):t._e()],1)},a=[],r=(n("e9c4"),n("ac1f"),n("5319"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view"},[n("div",{staticClass:"main"},[n("div",{staticClass:"slogan"}),n("div",{staticClass:"roulette"},[n("div",{staticClass:"roulette_bg"}),n("div",{staticClass:"roulette_light"}),n("ul",{staticClass:"circle",class:{transition:t.transAble},style:"transform: rotate("+t.angle+"deg);",on:{transitionend:t.onTransitionFinish}},t._l(t.prizes,(function(e,i){return n("li",{key:e.level,class:{active:!t.waiting&&t.resultIndex===i},style:"transform:rotate("+e.angle+"deg);"+e.clip},[n("span",{domProps:{innerHTML:t._s(e.name)}})])})),0),n("button",{staticClass:"start",attrs:{disabled:t.waiting},on:{click:t.startClick}})])])])}),s=[],l=(n("b0c0"),n("a9e3"),n("d3b7"),n("159b"),n("99af"),n("b680"),{name:"Index",data:function(){return{angle:0,waiting:!1,transAble:!1,resultIndex:null,prizes:[],popupSetting:!0}},mounted:function(){var t=JSON.parse(window.localStorage.getItem("prizes"));this.prizes=this.makeLevels(t)},methods:{startClick:function(){var t=this;if(!this.waiting){this.waiting=!0;var e=this.roundNumber(100*Math.random(),2),n=this.getResult(e);this.resultIndex=n.item.index,this.transAble=!0,window.setTimeout((function(){t.$nextTick((function(){t.angle=n.angle}))}),300),console.log(e,n.item.name)}},getResult:function(t){var e=0,n=this.prizes,i=360/n.length,o={item:null,angle:null};for(var a in n){var r=n[a];if(t>=e&&t<e+r.odds){o.item=JSON.parse(JSON.stringify(r)),o.item["index"]=Number(a),o.angle=7200+a*i+(t-e)/r.odds*i-i/2;break}e+=r.odds}return o},onTransitionFinish:function(){var t=this;this.transAble=!1,this.waiting=!1,this.$nextTick((function(){t.angle=t.angle%360}))},makeLevels:function(t){var e=t.length||0;if(2===e)t.forEach((function(t,n){t.angle=-360*n/e,t.clip=""}));else{var n=Math.PI/e,i=this.roundNumber(50*Math.tan(n),2);t.forEach((function(t,n){t.angle=-360*n/e,t.clip="clip-path: polygon(".concat(50-i,"% 0%, ").concat(50+i,"% 0%, 50% 100%)")}))}return t},roundNumber:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=null;try{n=Number(Number(t).toFixed(e))}catch(i){n=NaN}return n}}}),c=l,u=(n("dc91"),n("2877")),d=Object(u["a"])(c,r,s,!1,null,"eb1ffac0",null),p=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view"},[n("NavBar",{attrs:{title:"奖项设置","left-text":"抽奖",fixed:!0,placeholder:!0},on:{"click-left":t.onLeftClick},scopedSlots:t._u([{key:"right",fn:function(){return[n("button",{staticClass:"btn_add",on:{click:t.newItemClick}},[t._v("新增")])]},proxy:!0}])}),n("CellGroup",{attrs:{title:"奖项"}},t._l(t.prizes,(function(e,i){return n("Cell",{key:e.level,attrs:{title:e.name,value:e.odds+"%","is-link":""},on:{click:function(e){return t.editItemClick(i)}}})})),1),n("Popup",{staticClass:"popup_edit",attrs:{closeable:"",position:"bottom"},on:{close:t.editCloseClick},model:{value:t.popupEdit,callback:function(e){t.popupEdit=e},expression:"popupEdit"}},[t.editItem?n("div",{staticClass:"edit_box"},[n("h6",[t._v(t._s(t.editItem.index>=0?"修改奖项":"新增奖项"))]),n("Field",{attrs:{label:"名称",placeholder:"请输入长度1~10的名称"},model:{value:t.editItem.name,callback:function(e){t.$set(t.editItem,"name",e)},expression:"editItem.name"}}),n("Field",{attrs:{label:"几率",placeholder:"请输入0~99的数字"},model:{value:t.editItem.odds,callback:function(e){t.$set(t.editItem,"odds",e)},expression:"editItem.odds"}}),n("Field",{attrs:{label:"序号",placeholder:"请输排序序号"},model:{value:t.editItem.sort,callback:function(e){t.$set(t.editItem,"sort",e)},expression:"editItem.sort"}}),n("div",{staticClass:"btn_box"},[t.editItem.index>=0?n("button",{staticStyle:{background:"#aaaaaa"},on:{click:t.deletClick}},[t._v("删除")]):n("button",{staticStyle:{background:"#aaaaaa"},on:{click:t.editCloseClick}},[t._v("取消")]),n("button",{staticStyle:{background:"#07c160"},on:{click:t.saveClick}},[t._v("保存")])])],1):t._e()])],1)},m=[],h=(n("498a"),n("4e82"),n("00b4"),n("a434"),n("6b41")),b=n("34e9"),v=n("7744"),g=n("e41f"),k=n("565f"),w=n("f564"),C=(n("9a5b"),n("5f7d"),n("17d1"),n("160b"),n("fdc4"),n("5448"),{name:"Setting",components:{NavBar:h["a"],CellGroup:b["a"],Cell:v["a"],Popup:g["a"],Field:k["a"]},data:function(){return{prizes:[],editItem:null,popupEdit:!1}},mounted:function(){var t=JSON.parse(window.localStorage.getItem("prizes"));t&&(this.prizes=t)},methods:{onLeftClick:function(){window.location.href="/index.html"},newItemClick:function(){this.editItem={name:"",odds:"",sort:""},this.popupEdit=!0},editItemClick:function(t){var e=this.prizes[t],n=JSON.parse(JSON.stringify(e));n["index"]=t,this.editItem=n,this.popupEdit=!0},editCloseClick:function(){this.editClose()},saveClick:function(){var t=this.editItem,e=t.name.trim(),n=this.roundNumber(t.odds,2),i=Number(t.sort);if(/^\S{1,10}$/.test(e))if(!isNaN(n)&&/^[0-9.]+$/.test(n))if(/^[1-9]+$/.test(i)){var o=JSON.parse(JSON.stringify(this.prizes));null!=t.index?o[t.index]={name:e,odds:n,sort:i}:o.push({name:e,odds:n,sort:i});var a=o.reduce((function(t,e){return t+Number(e.odds)}),0);a=this.roundNumber(a,2),a>100?Object(w["a"])("各奖项总概率不能超过100"):(o.sort((function(t,e){return t.sort-e.sort})),this.editClose(),this.prizes=o,window.localStorage.setItem("prizes",JSON.stringify(o)))}else Object(w["a"])("序号输入有误");else Object(w["a"])("几率输入有误");else Object(w["a"])("名称输入有误")},deletClick:function(){var t=this.editItem.index;this.prizes.splice(t,1),this.editClose()},editClose:function(){this.editItem=null,this.popupEdit=null},roundNumber:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=null;try{n=Number(Number(t).toFixed(e))}catch(i){n=NaN}return n}}}),x=C,N=(n("cb2e"),Object(u["a"])(x,f,m,!1,null,"6c158483",null)),y=N.exports,I=[{name:"一等奖",sort:1,odds:5},{name:"二等奖",sort:2,odds:15},{name:"三等奖",sort:3,odds:30},{name:"四等奖",sort:4,odds:30}],S={name:"App",components:{Index:p,Setting:y},data:function(){return{viewName:null,initStatus:!1}},mounted:function(){this.init()},methods:{init:function(){var t=JSON.parse(window.localStorage.getItem("prizes"));t||window.localStorage.setItem("prizes",JSON.stringify(I));var e=window.location.hash.replace(/^#/,"");console.log(e),this.viewName="setting"===e?"Setting":"Index",this.initStatus=!0}}},_=S,O=(n("034f"),Object(u["a"])(_,o,a,!1,null,null,null)),j=O.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(j)}}).$mount("#app")},"5fd3":function(t,e,n){},8370:function(t,e,n){},"85ec":function(t,e,n){},cb2e:function(t,e,n){"use strict";n("5fd3")},dc91:function(t,e,n){"use strict";n("8370")}});