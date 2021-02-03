import{a as e}from"./index.713a7871.js";import{u as l}from"./useFullScreen.209d74e7.js";import{_ as t}from"./index.ad5aa56c.js";import{d as r,r as o,h as s,o as i,i as n,w as a,j as c,m as u,l as m}from"./index.bac2f241.js";import"./index.a3e72294.js";import"./domUtils.b58f3771.js";import"./_stringToArray.61160ef7.js";import"./RightOutlined.896cb4ac.js";/* empty css              */import"./useTimeout.27ed5fc7.js";import"./useScrollTo.8a4c87a2.js";import"./animation.098eb75d.js";import"./index.da461302.js";import"./index.5444241e.js";import"./EllipsisOutlined.f9dc2390.js";import"./types.27b3a0a1.js";import"./isEqual.c14375bd.js";import"./toInteger.0f3c91b2.js";import"./DownOutlined.0c0a9f0e.js";import"./index.4ceb8376.js";import"./usePageContext.41b1a31f.js";import"./transButton.7f4124c2.js";import"./ArrowLeftOutlined.5a8a1263.js";import"./vendor.3b1829c7.js";var d=r({components:{CollapseContainer:e,PageWrapper:t},setup(){const e=o(null),{enterFullscreen:t,toggleFullscreen:r,isFullscreenRef:s,exitFullscreen:i}=l(),{toggleFullscreen:n}=l(e);return{enterFullscreen:t,toggleDom:n,toggleFullscreen:r,isFullscreenRef:s,exitFullscreen:i,domRef:e}}});const p=u(" Enter Window Full Screen "),f=u(" Toggle Window Full Screen "),j=u(" Exit Window Full Screen "),g=u(" Enter Dom Full Screen "),F={ref:"domRef",class:"w-1/2 h-64 flex justify-center rounded-md items-center bg-white mx-auto mt-10"},x=u(" Exit Dom Full Screen ");d.render=function(e,l,t,r,o,d){const C=s("a-button"),b=s("CollapseContainer"),w=s("PageWrapper");return i(),n(w,{title:"全屏示例"},{default:a((()=>[c(b,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Window Full Screen"},{default:a((()=>[c(C,{type:"primary",onClick:e.enterFullscreen,class:"mr-2"},{default:a((()=>[p])),_:1},8,["onClick"]),c(C,{color:"success",onClick:e.toggleFullscreen,class:"mr-2"},{default:a((()=>[f])),_:1},8,["onClick"]),c(C,{color:"error",onClick:e.exitFullscreen,class:"mr-2"},{default:a((()=>[j])),_:1},8,["onClick"]),u(" Current State: "+m(e.isFullscreenRef),1)])),_:1}),c(b,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Dom Full Screen"},{default:a((()=>[c(C,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:a((()=>[g])),_:1},8,["onClick"])])),_:1}),c("div",F,[c(C,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:a((()=>[x])),_:1},8,["onClick"])],512)])),_:1})};export default d;