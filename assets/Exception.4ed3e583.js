import{d as t,ay as e,r as s,az as a,aA as l,u as n,$ as i,e as r,aB as o,j as u,M as T,aC as b}from"./index.e5cea104.js";import{R as c}from"./index.7cbc8d98.js";import"./vendor.3b1829c7.js";var p=t({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String},subTitle:{type:String},full:{type:Boolean,default:!1}},setup(t){const p=s(new Map),{query:x}=a(),d=b(),E=l(),{t:y}=n(),_=i((()=>{const{status:e}=x,{status:s}=t;return Number(e)||s})),O=i((()=>r(p).get(r(_)))),N=y("sys.exception.backLogin"),m=y("sys.exception.backHome");return r(p).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:y("sys.exception.subTitle403"),btnText:t.full?N:m,handler:()=>t.full?d(o.BASE_LOGIN):d()}),r(p).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:y("sys.exception.subTitle404"),btnText:t.full?N:m,handler:()=>t.full?d(o.BASE_LOGIN):d()}),r(p).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:y("sys.exception.subTitle500"),btnText:m,handler:()=>d()}),r(p).set(e.PAGE_NOT_DATA,{title:y("sys.exception.noDataTitle"),subTitle:"",btnText:y("common.redo"),handler:()=>E(),icon:"/assets/no-data.7a45acb3.png"}),r(p).set(e.NET_WORK_ERROR,{title:y("sys.exception.networkErrorTitle"),subTitle:y("sys.exception.networkErrorSubTitle"),btnText:"Refresh",handler:()=>E(),icon:"/assets/net-work.5d408b05.png"}),()=>{const{title:e,subTitle:s,btnText:a,icon:l,handler:n,status:i}=r(O)||{};return u(c,{class:"exception ",status:i,title:t.title||e,"sub-title":t.subTitle||s},{extra:()=>a&&u(T,{type:"primary",onClick:n},{default:()=>a}),icon:()=>l?u("img",{src:l},null):null})}}});export default p;