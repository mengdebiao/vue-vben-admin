import{a as e,bn as s,i as l,o,j as t,k as r,w as a,p as c}from"./index.5a06cc5a.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.3c41385f.js";import{a as i}from"./index.813fa6f2.js";import"./RightOutlined.18857b33.js";import"./useTimeout.f9167c02.js";import"./tsxHelper.7d018852.js";import"./index.1b9ab3b5.js";import"./domUtils.a8aece5c.js";import"./index.2d373899.js";import"./animation.91509674.js";import"./useScrollTo.06e85a9e.js";var n=e({name:"TabsDemo",components:{CollapseContainer:i},setup(){const{closeAll:e,closeLeft:l,closeRight:o,closeOther:t,closeCurrent:r,refreshPage:a}=s();return{closeAll:e,closeLeft:l,closeRight:o,closeOther:t,closeCurrent:r,refreshPage:a}}});const m={class:"p-4"},p=c("关闭所有"),f=c("关闭左侧"),u=c("关闭右侧"),d=c("关闭其他"),C=c("关闭当前"),j=c("刷新当前");n.render=function(e,s,c,i,n,k){const h=l("a-input"),_=l("CollapseContainer"),b=l("a-button");return o(),t("div",m,[r(_,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:a((()=>[r(h,{placeholder:"请输入"})])),_:1}),r(_,{class:"mt-4",title:"标签页操作"},{default:a((()=>[r(b,{class:"mr-2",onClick:e.closeAll},{default:a((()=>[p])),_:1},8,["onClick"]),r(b,{class:"mr-2",onClick:e.closeLeft},{default:a((()=>[f])),_:1},8,["onClick"]),r(b,{class:"mr-2",onClick:e.closeRight},{default:a((()=>[u])),_:1},8,["onClick"]),r(b,{class:"mr-2",onClick:e.closeOther},{default:a((()=>[d])),_:1},8,["onClick"]),r(b,{class:"mr-2",onClick:e.closeCurrent},{default:a((()=>[C])),_:1},8,["onClick"]),r(b,{class:"mr-2",onClick:e.refreshPage},{default:a((()=>[j])),_:1},8,["onClick"])])),_:1})])};export default n;