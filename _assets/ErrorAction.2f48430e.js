import{a as t,u as o,aZ as e,I as r,ax as s,dw as a,i as n,o as i,j as u,w as l,k as m}from"./index.e76c06f1.js";import"./xlsx.9d951958.js";import"./Trigger.e0ae6bef.js";import{B as d}from"./index.b93c1beb.js";import"./colors.b20c9223.js";import{T as c}from"./index.0492ce3b.js";import{B as p}from"./BugOutlined.00649595.js";var f=t({name:"ErrorAction",components:{BugOutlined:p,Tooltip:c,Badge:d},setup(){const{t:t}=o(),{push:n}=e();return{t:t,getCount:r((()=>a.getErrorListCountState)),handleToErrorList:function(){n(s.ERROR_LOG_PAGE).then((()=>{a.commitErrorListCountState(0)}))}}}});f.render=function(t,o,e,r,s,a){const d=n("BugOutlined"),c=n("Badge"),p=n("Tooltip");return i(),u(p,{title:t.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:t.handleToErrorList},{default:l((()=>[m(c,{count:t.getCount,offset:[0,10],dot:"",overflowCount:99},{default:l((()=>[m(d)])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default f;