import{d as e,ch as a,r as t,q as n,a1 as s,E as r,e as i,h as o,o as l,i as c,j as m,bz as d}from"./index.50e8b5dc.js";import{g as p}from"./domUtils.7471ed8a.js";import{u as f}from"./useWindowSizeFn.0f9e7345.js";import"./_stringToArray.e20740db.js";var g=e({name:"IFrame",components:{Spin:a},props:{frameSrc:{type:String}},setup(){const e=t(!1),a=t(50),o=t(window.innerHeight),l=t(null);function c(){const e=i(l);if(!e)return;let{top:t}=p(e);t+=20,a.value=t,o.value=window.innerHeight-t;const n=document.documentElement.clientHeight-t;e.style.height=`${n}px`}function m(){e.value=!1,c()}return f(c,150,{immediate:!0}),n((()=>{e.value=!0,r((()=>{const e=i(l);e&&(e.attachEvent?e.attachEvent("onload",(()=>{m()})):e.onload=()=>{m()})}))})),{getWrapStyle:s((()=>({height:`${i(o)}px`}))),loading:e,frameRef:l}}});const u=d("data-v-50ce1274"),h=u(((e,a,t,n,s,r)=>{const i=o("Spin");return l(),c("div",{class:"iframe-page",style:e.getWrapStyle},[m(i,{spinning:e.loading,size:"large",style:e.getWrapStyle},{default:u((()=>[m("iframe",{src:e.frameSrc,class:"iframe-page__main",ref:"frameRef"},null,8,["src"])])),_:1},8,["spinning","style"])],4)}));g.render=h,g.__scopeId="data-v-50ce1274";export default g;