let e=document.createElement("style");e.innerHTML=".vben-setting-theme-picker{display:flex;flex-wrap:wrap;margin:16px 0;justify-content:space-around}.vben-setting-theme-picker__item{width:20px;height:20px;cursor:pointer;border:1px solid #ddd;border-radius:2px}.vben-setting-theme-picker__item svg{display:none}.vben-setting-theme-picker__item--active{border:1px solid #31a5fe}.vben-setting-theme-picker__item--active svg{display:inline-block;margin:0 0 3px 3px;font-size:12px;fill:#fff!important}",document.head.appendChild(e);import{a as t,aU as i,i as r,o as s,j as n,aL as o,aV as p,k as a}from"./index.e76c06f1.js";import"./xlsx.9d951958.js";import"./Trigger.e0ae6bef.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.b9c7bfd3.js";import"./index.0492ce3b.js";import"./index.470a4b2d.js";import"./index.e6e3668e.js";import"./index.1ef513c1.js";import"./index.3be0d60f.js";import{C as d}from"./CheckOutlined.b93c956a.js";import"./RightOutlined.4e6f221b.js";import"./SettingOutlined.f44164b6.js";import"./useTimeout.0b9d202d.js";import"./tsxHelper.3ee1ad98.js";import"./index.1671d981.js";import"./animation.7d541661.js";import"./useScrollTo.ae385fa0.js";import"./useAttrs.cd179906.js";import"./useHeaderSetting.3f7fad10.js";import{b as m}from"./index.c2aa1c2d.js";var l=t({name:"ThemePicker",components:{CheckOutlined:d},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:t}=i("setting-theme-picker");return{prefixCls:t,handleClick:function(t){e.event&&m(e.event,t)}}}});l.render=function(e,t,i,d,m,l){const c=r("CheckOutlined");return s(),n("div",{class:e.prefixCls},[(s(!0),n(o,null,p(e.colorList||[],(t=>(s(),n("span",{key:t,onClick:i=>e.handleClick(t),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}],style:{background:t}},[a(c)],14,["onClick"])))),128))],2)};export default l;