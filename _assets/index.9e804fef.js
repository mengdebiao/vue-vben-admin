import{r as e,f as t,bK as r,cK as o,a,i as n,o as s,j as i,w as l,k as d,p as m}from"./index.e76c06f1.js";import"./xlsx.9d951958.js";import"./Trigger.e0ae6bef.js";import"./omit.387e4bc9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9023c34c.js";import"./index.6b9d0259.js";import"./index.eba57d7e.js";import"./RightOutlined.238a5698.js";import"./usePageContext.db13adb7.js";import"./types.2b5911d0.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.b9c7bfd3.js";import"./index.0492ce3b.js";import"./transButton.914fefeb.js";import{a as c}from"./index.1ef513c1.js";import"./RightOutlined.4e6f221b.js";import"./useTimeout.0b9d202d.js";import"./tsxHelper.3ee1ad98.js";import"./index.1671d981.js";import"./animation.7d541661.js";import"./useScrollTo.ae385fa0.js";import{s as p}from"./index.90bfe2f3.js";const u=Symbol("watermark-dom");var f=a({components:{CollapseContainer:c,PageWrapper:p},setup(){const a=e(null),{setWatermark:n,clear:s}=function(a=e(document.body)){let n=()=>{};const s=u.toString(),i=()=>{const e=document.getElementById(s);if(e){const r=t(a);r&&r.removeChild(e)}window.removeEventListener("resize",n)},l=e=>{i();const r=document.createElement("canvas");r.width=300,r.height=240;const o=r.getContext("2d");o&&(o.rotate(-20*Math.PI/120),o.font="15px Vedana",o.fillStyle="rgba(0, 0, 0, 0.15)",o.textAlign="left",o.textBaseline="middle",o.fillText(e,r.width/20,r.height));const n=document.createElement("div");n.id=s,n.style.pointerEvents="none",n.style.top="3px",n.style.left="0px",n.style.position="absolute",n.style.zIndex="100000",n.style.width=document.documentElement.clientWidth+"px",n.style.height=document.documentElement.clientHeight+"px",n.style.background="url("+r.toDataURL("image/png")+") left top repeat";const l=t(a);return l&&l.appendChild(n),s};return{setWatermark:function(e){l(e),n=()=>{l(e)},window.addEventListener("resize",n),o()&&r((()=>{i()}))},clear:i}}();return{setWatermark:n,clear:s,areaRef:a}}});const b=m(" Create "),j=m("Clear"),x=m(" Reset ");f.render=function(e,t,r,o,a,m){const c=n("a-button"),p=n("CollapseContainer"),u=n("PageWrapper");return s(),i(u,{title:"水印示例"},{default:l((()=>[d(p,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Global WaterMark"},{default:l((()=>[d(c,{type:"primary",class:"mr-2",onClick:t[1]||(t[1]=t=>e.setWatermark("WaterMark Info"))},{default:l((()=>[b])),_:1}),d(c,{color:"error",class:"mr-2",onClick:e.clear},{default:l((()=>[j])),_:1},8,["onClick"]),d(c,{color:"warning",class:"mr-2",onClick:t[2]||(t[2]=t=>e.setWatermark("WaterMark Info New"))},{default:l((()=>[x])),_:1})])),_:1})])),_:1})};export default f;