import{d as e,aQ as s,h as i,o as a,i as t,j as r,w as l,k as n,aR as u,aS as d}from"./index.50e8b5dc.js";import{I as m}from"./index.b7a80bfd.js";import"./LeftOutlined.1c66b0ce.js";import"./RightOutlined.bad02d13.js";var o=e({name:"TableImage",components:{Image:m,PreviewGroup:m.PreviewGroup},props:{imgList:{type:Array,default:null},size:{type:Number,default:40}},setup(){const{prefixCls:e}=s("basic-table-img");return{prefixCls:e}}});o.render=function(e,s,m,o,p,f){const c=i("Image"),g=i("PreviewGroup");return e.imgList&&e.imgList.length?(a(),t("div",{key:0,class:e.prefixCls},[r(g,null,{default:l((()=>[(a(!0),t(u,null,d(e.imgList,(s=>(a(),t(c,{key:s,width:e.size,src:s},null,8,["width","src"])))),128))])),_:1})],2)):n("",!0)};export default o;