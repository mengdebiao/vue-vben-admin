import{dl as e,c as i,a as s,h as o,i as r,o as t,j as a,w as p,k as n}from"./index.e76c06f1.js";import"./xlsx.9d951958.js";import"./index.2e7cfb95.js";import"./Trigger.e0ae6bef.js";import"./omit.387e4bc9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9023c34c.js";import"./CheckOutlined.187a3060.js";import{g as d,s as m}from"./index.15751672.js";import"./index.1bb021e3.js";import"./index.6b9d0259.js";import"./colors.b20c9223.js";import"./index.eba57d7e.js";import"./RightOutlined.238a5698.js";import"./usePageContext.db13adb7.js";import"./types.2b5911d0.js";import"./index.13fbb8a0.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.b9c7bfd3.js";import"./index.0492ce3b.js";import"./index.f4cf7fd8.js";import"./UpOutlined.c57d18c6.js";import"./index.22e82fe7.js";import"./index.ffdab4cb.js";import"./index.470a4b2d.js";import"./index.545f4296.js";import"./index.652cf000.js";import"./index.351bc02d.js";import"./index.ec0f3664.js";import"./index.ac515f18.js";import"./transButton.914fefeb.js";import"./index.1ef513c1.js";import"./CloseOutlined.364204b4.js";import"./FullscreenOutlined.647cd1c9.js";import"./index.6d17570e.js";import"./RightOutlined.4e6f221b.js";import"./useTimeout.0b9d202d.js";import"./tsxHelper.3ee1ad98.js";import"./index.1671d981.js";import"./animation.7d541661.js";import"./useScrollTo.ae385fa0.js";import{s as l}from"./index.90bfe2f3.js";import"./useAttrs.cd179906.js";import"./index.3c40b99f.js";import"./useWindowSizeFn.18768138.js";import"./index.cee60ffd.js";import"./uuid.40269c00.js";import"./download.75bd0097.js";import{u as j}from"./useForm.fb4d76f9.js";const{uploadUrl:c=""}=i();function f(i,s){return e.uploadFile({url:c,onUploadProgress:s},i)}const u=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:f}}];var b=s({components:{BasicUpload:d,BasicForm:m,PageWrapper:l},setup(){const{createMessage:e}=o(),[i]=j({labelWidth:120,schemas:u,actionColOptions:{span:16}});return{handleChange:i=>{e.info(`已上传文件${JSON.stringify(i)}`)},uploadApi:f,register:i}}});b.render=function(e,i,s,o,d,m){const l=r("a-alert"),j=r("BasicUpload"),c=r("BasicForm"),f=r("PageWrapper");return t(),a(f,{title:"上传组件示例"},{default:p((()=>[n(l,{message:"基础示例",class:"my-5"}),n(j,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi},null,8,["onChange","api"]),n(l,{message:"嵌入表单,加入表单校验",class:"my-5"}),n(c,{onRegister:e.register},null,8,["onRegister"])])),_:1})};export default b;