import{H as e,a as t,r as s,I as a,f as l,ay as n,dk as i,d4 as o,Z as r}from"./index.c5d8d2c2.js";import{a as d}from"./index.a56b187c.js";import{D as c}from"./index.baee5596.js";import{g as p}from"./tsxHelper.87c58488.js";var u={useCollapse:e.bool.def(!0),title:e.string.def(""),size:e.oneOf(["small","default","middle",void 0]).def("small"),bordered:e.bool.def(!0),column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:e.object};var m=t({name:"Description",props:u,emits:["register"],setup(e,{attrs:t,slots:u,emit:m}){const f=s(null),x=a((()=>({...e,...l(f)}))),b=a((()=>({...l(x),title:void 0}))),h=a((()=>!!l(x).title)),v=a((()=>({canExpand:!1,...l(b).collapseOptions}))),y=a((()=>({...t,...l(b)})));function g({label:e,labelMinWidth:t,labelStyle:s}){if(!s&&!t)return e;const a={...s,minWidth:`${t}px `};return n("div",{style:a},e)}const j=()=>n(c,{class:"description",...l(y)},(()=>function(){const{schema:e}=l(b);return l(e).map((e=>{const{render:t,field:s,span:a,show:i,contentMinWidth:o}=e,{data:d}=l(b);if(i&&r(i)&&!i(d))return null;const p=()=>r(t)?t(null==d?void 0:d[s],d):l(d)&&l(d)[s],u=o;return n(c.Item,{label:g(e),key:s,span:a},(()=>o?n("div",{style:{minWidth:`${u}px`}},p()):p()))}))}()));return m("register",{setDescProps:function(e){const t=i(l(f)||{},e);f.value=o(t)}}),()=>l(h)?(()=>{const t=e.useCollapse?j():n("div",null,j());if(!e.useCollapse)return t;const{canExpand:s,helpMessage:a}=l(v),{title:i}=l(x);return n(d,{title:i,canExpan:s,helpMessage:a},{default:()=>t,action:()=>p(u,"action")})})():j()}});export{m as D};