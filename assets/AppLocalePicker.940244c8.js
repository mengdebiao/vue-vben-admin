import{_ as e}from"./index.ea195e89.js";import{d as a,aJ as s,aF as t,r as o,aK as n,K as l,aZ as r,bi as i,ck as c,e as p,h as d,o as u,i as f,bw as v,j as m,l as x,k as g}from"./index.bac2f241.js";import"./index.5444241e.js";import"./RightOutlined.896cb4ac.js";import"./EllipsisOutlined.f9dc2390.js";import"./types.27b3a0a1.js";import"./isEqual.c14375bd.js";import"./toInteger.0f3c91b2.js";/* empty css              */import"./vendor.3b1829c7.js";var j=a({name:"AppLocalPicker",components:{Dropdown:e,Icon:s},props:{showText:t.bool.def(!0),reload:t.bool},setup(e){const a=o([]),{prefixCls:s}=n("app-locale-picker"),{localeList:t}=i(),{changeLocale:d,getLang:u}=c(),f=l((()=>{var e;const s=a.value[0];return s?null==(e=t.find((e=>e.event===s)))?void 0:e.text:""}));return r((()=>{a.value=[p(u)]})),{localeList:t,handleMenuEvent:function(s){var t;t=s.event,d(t),a.value=[t],e.reload&&location.reload()},selectedKeys:a,getLangText:f,prefixCls:s}}});const b=v("data-v-25af17ef"),L=b(((e,a,s,t,o,n)=>{const l=d("Icon"),r=d("Dropdown");return u(),f(r,{trigger:["click"],dropMenuList:e.localeList,selectedKeys:e.selectedKeys,onMenuEvent:e.handleMenuEvent,overlayClassName:`${e.prefixCls}-overlay`},{default:b((()=>[m("span",{class:e.prefixCls},[m(l,{icon:"cil:language"}),e.showText?(u(),f("span",{key:0,class:`${e.prefixCls}__text`},x(e.getLangText),3)):g("",!0)],2)])),_:1},8,["dropMenuList","selectedKeys","onMenuEvent","overlayClassName"])}));j.render=L,j.__scopeId="data-v-25af17ef";export default j;