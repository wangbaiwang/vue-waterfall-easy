webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement;return(this._self._c||t)("a",{staticClass:"alink",attrs:{href:this.to,target:"_blank"}},[this._t("default")],2)},staticRenderFns:[]};var r={name:"vue-waterfall-easy",components:{alink:i("VU/8")({name:"alink",props:["to"],data:function(){return{msg:"this is from alink.vue"}},methods:{}},n,!1,function(t){i("O6QY")},null,null).exports},props:{width:{type:Number},height:{type:[Number,String]},reachBottomDistance:{type:Number,default:20},loadingDotCount:{type:Number,default:3},loadingDotStyle:{type:Object},gap:{type:Number,default:20},mobileGap:{type:Number,default:8},maxCols:{type:Number,default:5},imgsArr:{type:Array,required:!0},srcKey:{type:String,default:"src"},hrefKey:{type:String,default:"href"},imgWidth:{type:Number,default:240},isRouterLink:{type:Boolean,default:!1},linkRange:{type:String,default:"card"},loadingTimeOut:{type:Number,default:500},cardAnimationClass:{type:[String],default:"default-card-animation"},enablePullDownEvent:{type:Boolean,default:!1}},data:function(){return{msg:"this is from vue-waterfall-easy.vue",isMobile:!!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i),isPreloading:!0,isPreloading_c:!0,imgsArr_c:[],loadedCount:0,cols:NaN,imgBoxEls:null,beginIndex:0,colsHeightArr:[],LoadingTimer:null,isFirstLoad:!0,over:!1}},computed:{colWidth:function(){return this.imgWidth+this.gap},imgWidth_c:function(){return this.isMobile?window.innerWidth/2-this.mobileGap:this.imgWidth},hasLoadingSlot:function(){return!!this.$scopedSlots.loading}},mounted:function(){var t=this;this.bindClickEvent(),this.loadingMiddle(),this.preload(),this.cols=this.calcuCols(),this.$on("preloaded",function(){t.isFirstLoad=!1,t.imgsArr_c=t.imgsArr.concat([]),t.$nextTick(function(){t.isPreloading=!1,t.imgBoxEls=t.$el.getElementsByClassName("img-box"),t.waterfall()})}),this.isMobile||this.width||this.response(),this.isMobile&&this.enablePullDownEvent&&this.pullDown(),this.scroll()},watch:{isPreloading:function(t,e){var i=this;t?setTimeout(function(){i.isPreloading&&(i.isPreloading_c=!0)},this.loadingTimeOut):this.isPreloading_c=!1},imgsArr:function(t,e){e.length>0&&t[0]&&!t[0]._height&&this.reset(),this.preload()}},methods:{preload:function(t,e){var i=this;this.imgsArr.forEach(function(t,e){if(!(e<i.loadedCount)){if(!t[i.srcKey])return i.imgsArr[e]._height="0",i.loadedCount++,void(i.loadedCount==i.imgsArr.length&&i.$emit("preloaded"));var s=new Image;s.src=t[i.srcKey],s.onload=s.onerror=function(t){i.loadedCount++,i.imgsArr[e]._height="load"==t.type?Math.round(i.imgWidth_c/(s.width/s.height)):i.isMobile?i.imgWidth_c:i.imgWidth,"error"==t.type&&(i.imgsArr[e]._error=!0,i.$emit("imgError",i.imgsArr[e])),i.loadedCount==i.imgsArr.length&&i.$emit("preloaded")}}})},calcuCols:function(){var t=this.width?this.width:window.innerWidth,e=parseInt(t/this.colWidth);return e=0===e?1:e,this.isMobile?2:e>this.maxCols?this.maxCols:e},waterfall:function(){if(this.imgBoxEls){var t,e,i,s=this.isMobile?this.imgBoxEls[0].offsetWidth:this.colWidth;0==this.beginIndex&&(this.colsHeightArr=[]);for(var n=this.beginIndex;n<this.imgsArr.length;n++){if(!this.imgBoxEls[n])return;if(i=this.imgBoxEls[n].offsetHeight,n<this.cols)this.colsHeightArr.push(i),t=0,e=n*s;else{var r=Math.min.apply(null,this.colsHeightArr),a=this.colsHeightArr.indexOf(r);t=r,e=a*s,this.colsHeightArr[a]=r+i}this.imgBoxEls[n].style.left=e+"px",this.imgBoxEls[n].style.top=t+"px"}this.beginIndex=this.imgsArr.length}},response:function(){var t=this;window.addEventListener("resize",function(){var e=t.cols;t.cols=t.calcuCols(),e!==t.cols&&(t.beginIndex=0,t.waterfall(),t.over&&t.setOverTipPos())})},scrollFn:function(){var t=this.$refs.scrollEl;if(!this.isPreloading){var e=Math.min.apply(null,this.colsHeightArr);t.scrollTop+t.offsetHeight>e-this.reachBottomDistance&&(this.isPreloading=!0,this.$emit("scrollReachBottom"))}},scroll:function(){this.$refs.scrollEl.addEventListener("scroll",this.scrollFn)},waterfallOver:function(){this.$refs.scrollEl.removeEventListener("scroll",this.scrollFn),this.isPreloading=!1,this.over=!0,this.setOverTipPos()},setOverTipPos:function(){var t=this,e=Math.max.apply(null,this.colsHeightArr);this.$nextTick(function(){t.$refs.over.style.top=e+"px"})},bindClickEvent:function(){var t=this;this.$el.querySelector(".vue-waterfall-easy").addEventListener("click",function(e){var i=e.target;if(-1===e.target.className.indexOf("over")&&-1==i.className.indexOf("img-box")){for(;-1==i.className.indexOf("img-inner-box");)i=i.parentNode;var s=i.getAttribute("data-index");t.$emit("click",e,{index:s,value:t.imgsArr_c[s]})}})},pullDown:function(){var t,e=this,i=this.$el.querySelector(".vue-waterfall-easy-scroll");i.addEventListener("touchmove",function(s){if(0===i.scrollTop){var n=s.changedTouches[0];t||(t=n.pageY);var r=n.pageY-t;r>0&&s.preventDefault(),e.$emit("pullDownMove",r)}}),i.addEventListener("touchend",function(s){0===i.scrollTop&&(t=NaN,e.$emit("pullDownEnd"))})},loadingMiddle:function(){var t=this.$el.querySelector(".vue-waterfall-easy-scroll"),e=t.offsetWidth-t.clientWidth;this.$el.querySelector(".loading").style.marginLeft=-e/2+"px"},reset:function(){this.imgsArr_c=[],this.beginIndex=0,this.loadedCount=0,this.isFirstLoad=!0,this.isPreloading=!0,this.scroll(),this.over=!1}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vue-waterfall-easy-container",style:{width:t.width&&!t.isMobile?t.width+"px":"",height:parseFloat(t.height)==t.height?t.height+"px":t.height}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isPreloading_c,expression:"isPreloading_c"}],staticClass:"loading ball-beat",class:{first:t.isFirstLoad}},[t._t("loading",null,{isFirstLoad:t.isFirstLoad}),t._l(t.loadingDotCount,function(e){return t.hasLoadingSlot?t._e():i("div",{staticClass:"dot",style:t.loadingDotStyle})})],2),i("div",{ref:"scrollEl",staticClass:"vue-waterfall-easy-scroll"},[t._t("waterfall-head"),i("div",{staticClass:"vue-waterfall-easy",style:t.isMobile?"":{width:t.colWidth*t.cols+"px",left:"50%",marginLeft:-1*t.colWidth*t.cols/2+"px"}},[t._l(t.imgsArr_c,function(e,s){return i("div",{staticClass:"img-box",class:[t.cardAnimationClass,{__err__:e._error}],style:{padding:(t.isMobile?t.mobileGap:t.gap)/2+"px",width:t.isMobile?"":t.colWidth+"px"}},[i(t.isRouterLink&&"card"==t.linkRange?"router-link":"alink",{tag:"component",staticClass:"img-inner-box",attrs:{"data-index":s,to:"card"==t.linkRange&&e[t.hrefKey]}},[e[t.srcKey]?i(t.isRouterLink&&"img"==t.linkRange?"router-link":"alink",{tag:"component",staticClass:"img-wraper",style:{width:t.imgWidth_c+"px",height:!!e._height&&e._height+"px"},attrs:{to:"img"==t.linkRange&&e[t.hrefKey]}},[i("img",{attrs:{src:e[t.srcKey]}})]):t._e(),t._t("default",null,{index:s,value:e})],2)],1)}),t.over?i("div",{ref:"over",staticClass:"over"},[t._t("waterfall-over",[t._v("被你看光了")])],2):t._e()],2)],2)])},staticRenderFns:[]};var o=i("VU/8")(r,a,!1,function(t){i("n1ta")},"data-v-aad6dd70",null).exports,l=i("mtWM"),c=i.n(l),d={name:"app",data:function(){return{imgsArr:[],group:0,pullDownDistance:0}},components:{vueWaterfallEasy:o},methods:{getData:function(){var t=this;c.a.get("./static/mock/data.json?group="+this.group).then(function(e){t.group++,10!==t.group?t.imgsArr=t.imgsArr.concat(e.data):t.$refs.waterfall.waterfallOver()})},clickFn:function(t,e){var i=e.index,s=e.value;"img"==t.target.tagName.toLowerCase()&&console.log("img clicked",i,s)},imgErrorFn:function(t){console.log("图片加载错误",t)},changeImgArr:function(){var t=this;c.a.get("./static/mock/data-change.json").then(function(e){t.imgsArr=e.data})},pullDownMove:function(t){this.pullDownDistance=t},pullDownEnd:function(t){console.log("pullDownEnd"),this.pullDownDistance>50&&alert("下拉刷新"),this.pullDownDistance=0}},created:function(){this.getData()}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("a",{attrs:{id:"header",href:"https://github.com/lfyfly/vue-waterfall-easy",target:"_blank",title:"github of vue-waterfall-easy"}},[t._v("vue-waterfall-easy")]),i("button",{style:{position:"fixed",zIndex:1e4},on:{click:t.changeImgArr}},[t._v("changeImgArr")]),i("div",{attrs:{id:"content"}},[i("vue-waterfall-easy",{ref:"waterfall",attrs:{imgsArr:t.imgsArr},on:{scrollReachBottom:t.getData,click:t.clickFn,imgError:t.imgErrorFn},scopedSlots:t._u([{key:"default",fn:function(e){return i("div",{staticClass:"img-info"},[i("p",{staticClass:"some-info"},[t._v("第"+t._s(e.index+1)+"张图片")]),i("p",{staticClass:"some-info"},[t._v(t._s(e.value.info))])])}}])})],1)])},staticRenderFns:[]};var u=i("VU/8")(d,h,!1,function(t){i("SUxP")},null,null).exports,g=i("/ocq");s.a.use(g.a);var f=new g.a({routes:[{path:"/test",name:"test",component:{name:"test",template:"<h1>test test test test test test</h1>"}}]}),m=i("Gs/g"),p=i.n(m);window.Promise||(window.Promise=p.a),new s.a({el:"#app",router:f,template:"<App/>",components:{App:u}})},O6QY:function(t,e){},SUxP:function(t,e){},n1ta:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.952a3ce22c70c1354320.js.map