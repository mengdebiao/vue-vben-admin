import{d as e,aV as a,aW as o,aF as s,aK as r,u as t,K as n,f as i,bf as d,h as l,o as c,i as p,w as m,j as u,k as f,l as g}from"./index.bac2f241.js";import{D as h,M as x}from"./index.5444241e.js";/* empty css              */import"./index.ea195e89.js";import{D as b}from"./siteSetting.c485f07c.js";import{d as j}from"./useHeaderSetting.2bcbda37.js";import{h as C}from"./header.d801b988.js";import"./vendor.3b1829c7.js";import"./RightOutlined.896cb4ac.js";import"./EllipsisOutlined.f9dc2390.js";import"./types.27b3a0a1.js";import"./isEqual.c14375bd.js";import"./toInteger.0f3c91b2.js";var D=e({name:"UserDropdown",components:{Dropdown:h,Menu:x,MenuItem:a((()=>o((()=>import("./DropMenuItem.b834b176.js")),["/assets/DropMenuItem.b834b176.js","/assets/index.20066e29.css","/assets/index.bac2f241.js","/assets/index.52403077.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.5444241e.js","/assets/index.271c2814.css","/assets/RightOutlined.896cb4ac.js","/assets/EllipsisOutlined.f9dc2390.js","/assets/types.27b3a0a1.js","/assets/isEqual.c14375bd.js","/assets/toInteger.0f3c91b2.js"]))),MenuDivider:x.Divider},props:{theme:s.oneOf(["dark","light"])},setup(){const{prefixCls:e}=r("header-user-dropdown"),{t:a}=t(),{getShowDoc:o}=j();return{prefixCls:e,t:a,getUserInfo:n((()=>{const{realName:e="",desc:a}=i.getUserInfoState||{};return{realName:e,desc:a}})),handleMenuClick:function(e){switch(e.key){case"loginOut":i.confirmLoginOut();break;case"doc":d(b)}},getShowDoc:o,headerImg:C}}});D.render=function(e,a,o,s,r,t){const n=l("MenuItem"),i=l("MenuDivider"),d=l("Menu"),h=l("Dropdown");return c(),p(h,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m((()=>[u(d,{onClick:e.handleMenuClick},{default:m((()=>[e.getShowDoc?(c(),p(n,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"gg:loadbar-doc"},null,8,["text"])):f("",!0),u(i),u(n,{key:"loginOut",text:e.t("layout.header.dropdownItemLoginOut"),icon:"carbon:power"},null,8,["text"])])),_:1},8,["onClick"])])),default:m((()=>[u("span",{class:[e.prefixCls,`${e.prefixCls}--${e.theme}`]},[u("img",{class:`${e.prefixCls}__header`,src:e.headerImg},null,10,["src"]),u("span",{class:`${e.prefixCls}__info`},[u("span",{class:`${e.prefixCls}__name anticon`},g(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"])};export default D;