let e=document.createElement("style");e.innerHTML=".qrcode-demo-item[data-v-4e67686e]{width:30%;margin-right:1%}",document.head.appendChild(e);import{aT as o,a as t,r as l,l as r,f as a,d8 as s,d9 as d,i,o as n,j as m,k as c,bo as u,p}from"./index.e76c06f1.js";import"./xlsx.9d951958.js";import"./Trigger.e0ae6bef.js";import"./omit.387e4bc9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9023c34c.js";import"./index.6b9d0259.js";import"./index.eba57d7e.js";import"./RightOutlined.238a5698.js";import"./usePageContext.db13adb7.js";import"./types.2b5911d0.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.b9c7bfd3.js";import"./index.0492ce3b.js";import"./transButton.914fefeb.js";import{a as g}from"./index.1ef513c1.js";import"./RightOutlined.4e6f221b.js";import"./useTimeout.0b9d202d.js";import"./tsxHelper.3ee1ad98.js";import"./index.1671d981.js";import"./animation.7d541661.js";import"./useScrollTo.ae385fa0.js";import{s as b}from"./index.90bfe2f3.js";const f=o((()=>import("./index.b21d829a.js")));var v=t({components:{CollapseContainer:g,QrCode:f,PageWrapper:b},setup(){const e=l(null);return{qrCodeUrl:"https://www.vvbin.cn",LogoImg:r,download:function(){const o=a(e);o&&o.download("文件名")},qrRef:e}}});const j=u("data-v-4e67686e");s("data-v-4e67686e");const x={class:"flex flex-wrap"},q=p(" 下载 "),C=c("div",{class:"msg"},"(在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题)",-1);d();const _=j(((e,o,t,l,r,a)=>{const s=i("QrCode"),d=i("CollapseContainer"),u=i("a-button"),p=i("PageWrapper");return n(),m(p,{title:"二维码组件使用示例"},{default:j((()=>[c("div",x,[c(d,{title:"基础示例",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl},null,8,["value"])])),_:1}),c(d,{title:"渲染成img标签示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])])),_:1}),c(d,{title:"配置样式示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),c(d,{title:"本地logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])])),_:1}),c(d,{title:"在线logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),c(d,{title:"logo配置示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])])),_:1}),c(d,{title:"下载示例",class:"text-center qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),c(u,{class:"mb-2",type:"primary",onClick:e.download},{default:j((()=>[q])),_:1},8,["onClick"]),C])),_:1}),c(d,{title:"配置大小示例",class:"text-center qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,width:300},null,8,["value"])])),_:1})])])),_:1})}));v.render=_,v.__scopeId="data-v-4e67686e";export default v;