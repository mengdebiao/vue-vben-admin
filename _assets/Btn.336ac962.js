let e=document.createElement("style");e.innerHTML=".demo[data-v-6ff3f06c]{background:#fff}",document.head.appendChild(e);import{a as s,b3 as o,bB as a,dz as t,dA as r,d8 as i,d9 as d,i as c,br as n,o as m,j as l,bo as f,k as u,n as p,m as x,ap as _,p as j}from"./index.c5d8d2c2.js";import"./xlsx.9d951958.js";import"./Trigger.8423b189.js";import"./omit.613852c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9b7bc90a.js";import{A as b}from"./index.28c69232.js";import"./index.a8efe853.js";import"./index.5e68bb45.js";import"./RightOutlined.ac5b2c4e.js";import"./usePageContext.75d92c53.js";import"./types.02846160.js";import"./index.ebbe171f.js";import{D as y}from"./index.8a1a96c3.js";import"./transButton.3e3572fa.js";import"./tsxHelper.87c58488.js";import{s as P}from"./index.f1db30ef.js";import h from"./CurrentPermissionMode.fb4c82fe.js";import{s as g}from"./index.9c899fb2.js";var v=s({components:{Alert:b,PageWrapper:P,CurrentPermissionMode:h,Divider:y,Authority:g},setup(){const{hasPermission:e}=t();async function s(e){const s=await r({userId:e});o.commitPermCodeListState(s)}return s("1"),{hasPermission:e,permissionStore:o,changePermissionCode:s,PermissionModeEnum:a}}});const C=f("data-v-6ff3f06c");i("data-v-6ff3f06c");const k=j(" 当前拥有的code列表: "),A=j(" 点击切换按钮权限(用户id为2) "),M=j(" 点击切换按钮权限(用户id为1,默认) "),S=j("组件方式判断权限"),w=j("拥有code ['1000']权限可见"),D=j("拥有code ['2000']权限可见"),B=j("拥有code ['1000','2000']角色权限可见"),L=j("函数方式方式判断权限"),E=j(" 拥有code ['1000']权限可见 "),H=j(" 拥有code ['2000']权限可见 "),I=j(" 拥有code ['1000','2000']角色权限可见 "),O=j("指令方式方式判断权限(该方式不能动态修改权限.)"),T=j(" 拥有code ['1000']权限可见 "),W=j(" 拥有code ['2000']权限可见 "),z=j(" 拥有code ['1000','2000']角色权限可见 ");d();const R=C(((e,s,o,a,t,r)=>{const i=c("Alert"),d=c("CurrentPermissionMode"),f=c("Divider"),j=c("a-button"),b=c("Authority"),y=c("PageWrapper"),P=n("auth");return m(),l(y,{contentBackgrond:"",title:"按钮权限控制",contentClass:"p-4"},{default:C((()=>[u(i,{message:"刷新后会还原","show-icon":""}),u(d),u("p",null,[k,u("a",null,p(e.permissionStore.getPermCodeListState),1)]),u(f),u(i,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),u(f),u(j,{type:"primary",class:"mr-2",onClick:s[1]||(s[1]=s=>e.changePermissionCode("2"))},{default:C((()=>[A])),_:1}),u(j,{type:"primary",onClick:s[2]||(s[2]=s=>e.changePermissionCode("1"))},{default:C((()=>[M])),_:1}),u(f,null,{default:C((()=>[S])),_:1}),u(b,{value:"1000"},{default:C((()=>[u(j,{type:"primary",class:"mx-4"},{default:C((()=>[w])),_:1})])),_:1}),u(b,{value:"2000"},{default:C((()=>[u(j,{color:"success",class:"mx-4"},{default:C((()=>[D])),_:1})])),_:1}),u(b,{value:["1000","2000"]},{default:C((()=>[u(j,{color:"error",class:"mx-4"},{default:C((()=>[B])),_:1})])),_:1}),u(f,null,{default:C((()=>[L])),_:1}),e.hasPermission("1000")?(m(),l(j,{key:0,type:"primary",class:"mx-4"},{default:C((()=>[E])),_:1})):x("v-if",!0),e.hasPermission("2000")?(m(),l(j,{key:1,color:"success",class:"mx-4"},{default:C((()=>[H])),_:1})):x("v-if",!0),e.hasPermission(["1000","2000"])?(m(),l(j,{key:2,color:"error",class:"mx-4"},{default:C((()=>[I])),_:1})):x("v-if",!0),u(f,null,{default:C((()=>[O])),_:1}),_(u(j,{type:"primary",class:"mx-4"},{default:C((()=>[T])),_:1},512),[[P,"1000"]]),_(u(j,{color:"success",class:"mx-4"},{default:C((()=>[W])),_:1},512),[[P,"2000"]]),_(u(j,{color:"error",class:"mx-4"},{default:C((()=>[z])),_:1},512),[[P,["1000","2000"]]])])),_:1})}));v.render=R,v.__scopeId="data-v-6ff3f06c";export default v;