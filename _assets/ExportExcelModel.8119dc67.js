import{a as e,u as s,i as t,o as i,j as o,w as r,k as m,J as n}from"./index.e76c06f1.js";import"./xlsx.9d951958.js";import"./index.2e7cfb95.js";import"./Trigger.e0ae6bef.js";import"./omit.387e4bc9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9023c34c.js";import"./CheckOutlined.187a3060.js";import{s as l}from"./index.15751672.js";import"./index.1bb021e3.js";import"./colors.b20c9223.js";import"./index.eba57d7e.js";import"./RightOutlined.238a5698.js";import"./types.2b5911d0.js";import"./index.13fbb8a0.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.b9c7bfd3.js";import"./index.0492ce3b.js";import"./index.f4cf7fd8.js";import"./UpOutlined.c57d18c6.js";import"./index.22e82fe7.js";import"./index.ffdab4cb.js";import"./index.470a4b2d.js";import"./index.545f4296.js";import"./index.652cf000.js";import"./index.351bc02d.js";import"./index.ec0f3664.js";import"./index.ac515f18.js";import"./index.1ef513c1.js";import"./CloseOutlined.364204b4.js";import"./FullscreenOutlined.647cd1c9.js";import"./index.6d17570e.js";import"./RightOutlined.4e6f221b.js";import"./useTimeout.0b9d202d.js";import"./tsxHelper.3ee1ad98.js";import"./index.1671d981.js";import"./animation.7d541661.js";import"./useScrollTo.ae385fa0.js";import"./useAttrs.cd179906.js";import{s as a,u as d}from"./index.3c40b99f.js";import"./useWindowSizeFn.18768138.js";import"./index.cee60ffd.js";import"./uuid.40269c00.js";import"./download.75bd0097.js";import{u as p}from"./useForm.fb4d76f9.js";const{t:c}=s(),j=[{field:"filename",component:"Input",label:c("component.excel.fileName"),rules:[{required:!0}]},{field:"bookType",component:"Select",label:c("component.excel.fileType"),defaultValue:"xlsx",rules:[{required:!0}],componentProps:{options:[{label:"xlsx",value:"xlsx",key:"xlsx"},{label:"html",value:"html",key:"html"},{label:"csv",value:"csv",key:"csv"},{label:"txt",value:"txt",key:"txt"}]}}];var u=e({components:{BasicModal:a,BasicForm:l},emits:["success","register"],setup(e,{emit:s}){const[t,{validateFields:i}]=p(),[o,{closeModal:r}]=d();return{schemas:j,handleOk:async function(){const e=await i(),{filename:t,bookType:o}=e;s("success",{filename:`${t.split(".").shift()}.${o}`,bookType:o}),r()},registerForm:t,registerModal:o,t:c}}});u.render=function(e,s,l,a,d,p){const c=t("BasicForm"),j=t("BasicModal");return i(),o(j,n(e.$attrs,{title:e.t("component.excel.exportModalTitle"),onOk:e.handleOk,onRegister:e.registerModal}),{default:r((()=>[m(c,{labelWidth:100,schemas:e.schemas,showActionButtonGroup:!1,onRegister:e.registerForm},null,8,["schemas","onRegister"])])),_:1},16,["title","onOk","onRegister"])};export default u;