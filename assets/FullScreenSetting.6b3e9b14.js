import{d as e,b1 as i,u as t,h as s,o as r,i as o,w as n,j as l,l as d}from"./index.e5cea104.js";import"./index.95c10fda.js";import{u as p}from"./index.32c75ba1.js";import{u as a}from"./useFullScreen.0bfc771a.js";import{F as m,a as c}from"./FullscreenOutlined.4b07a752.js";import"./vendor.3b1829c7.js";import"./index.bf329a73.js";import"./responsiveObserve.c545f1cc.js";import"./index.e908b408.js";import"./findIndex.f8cb4e98.js";import"./isEqual.ada18de9.js";import"./_baseProperty.74f89655.js";import"./toInteger.dac4ce3f.js";import"./index.963edebb.js";import"./index.49f6d8c8.js";import"./SearchOutlined.874b7e0b.js";import"./CheckOutlined.bd11f80d.js";import"./DownOutlined.835763f0.js";import"./index.749776b8.js";import"./index.0e9635a5.js";import"./UpOutlined.aee13fa3.js";import"./index.b44f38c4.js";import"./EyeOutlined.6de6da94.js";import"./index.c16a3a36.js";import"./colors.ebbba271.js";import"./RightOutlined.63cc3316.js";import"./RedoOutlined.101739ca.js";import"./index.99a56753.js";import"./EllipsisOutlined.9bd10310.js";import"./types.3e3d7f7c.js";import"./Tree.d0424ea2.js";import"./util.5e4e3845.js";import"./useAttrs.72cac050.js";import"./index.aae62fa3.js";import"./uuid.ae30f5ed.js";import"./index.c01160de.js";import"./DeleteOutlined.7972fc34.js";import"./index.ab16b779.js";import"./useTimeout.8ab5f977.js";import"./useWindowSizeFn.72a9ad65.js";import"./index.e918eef3.js";import"./index.89c258d7.js";import"./domUtils.ddc9ae66.js";import"./_stringToArray.553093ef.js";import"./useScrollTo.e484cebb.js";import"./animation.7591f702.js";import"./index.9dcfd344.js";import"./index.03cc0e18.js";import"./index.98a232e0.js";import"./LeftOutlined.0d50da53.js";import"./download.c8a751c0.js";var u=e({name:"FullScreenSetting",components:{FullscreenExitOutlined:m,FullscreenOutlined:c,Tooltip:i},setup(){const e=p(),{t:i}=t(),{toggleFullscreen:s,isFullscreenRef:r}=a(e.wrapRef);return{handleFullScreen:function(){s()},isFullscreenRef:r,t:i}}});u.render=function(e,i,t,p,a,m){const c=s("FullscreenOutlined"),u=s("FullscreenExitOutlined"),j=s("Tooltip");return r(),o(j,{placement:"top"},{title:n((()=>[l("span",null,d(e.t("component.table.settingFullScreen")),1)])),default:n((()=>[e.isFullscreenRef?(r(),o(u,{key:1,onClick:e.handleFullScreen},null,8,["onClick"])):(r(),o(c,{key:0,onClick:e.handleFullScreen},null,8,["onClick"]))])),_:1})};export default u;