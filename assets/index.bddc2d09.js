import{d as t,aQ as a,K as e,e as r,h as s,o as n,i,w as o,m as p,l as m,j as u}from"./index.bac2f241.js";import{_ as d}from"./index.ad5aa56c.js";import"./vendor.3b1829c7.js";import"./index.da461302.js";import"./index.5444241e.js";import"./RightOutlined.896cb4ac.js";import"./EllipsisOutlined.f9dc2390.js";import"./types.27b3a0a1.js";import"./isEqual.c14375bd.js";import"./toInteger.0f3c91b2.js";import"./DownOutlined.0c0a9f0e.js";/* empty css              */import"./index.4ceb8376.js";import"./usePageContext.41b1a31f.js";import"./transButton.7f4124c2.js";import"./ArrowLeftOutlined.5a8a1263.js";var l=t({name:"TestTab",components:{PageWrapper:d},setup(){const{currentRoute:t}=a();return{params:e((()=>r(t).params))}}});const c=u("br",null,null,-1),j=p(" Keep Alive "),f=u("input",null,null,-1);l.render=function(t,a,e,r,u,d){const l=s("PageWrapper");return n(),i(l,{title:"带参数标签页",content:"支持带参数多tab缓存"},{default:o((()=>[p(" Current Param : "+m(t.params)+" ",1),c,j,f])),_:1})};export default l;