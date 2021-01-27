import{_ as e,a as t}from"./index.486c49cc.js";import{d as i,h as o,o as n,i as s,j as r,w as d,m as a}from"./index.25b7b5fc.js";import{g as l}from"./index.60b3070f.js";import{u as m}from"./useTable.a82e3e31.js";import"./index.290ee578.js";import"./SearchOutlined.b66fbfbe.js";import"./CheckOutlined.858b435e.js";import"./DownOutlined.8796a279.js";import"./index.7d0dbe6d.js";import"./index.3e59d4ea.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.159bea82.js";import"./isEqual.ef398636.js";import"./_baseProperty.74f89655.js";import"./toInteger.34e54435.js";import"./index.10a2e5b4.js";import"./RightOutlined.80d69337.js";import"./EllipsisOutlined.3ddff257.js";import"./types.75b2061b.js";import"./index.2ed87d0a.js";import"./LeftOutlined.06ccfb10.js";import"./DoubleLeftOutlined.fe18de41.js";import"./DoubleRightOutlined.ee82da45.js";import"./zh_CN.8094f4d6.js";import"./uuid.07519bd8.js";import"./index.3186655d.js";import"./util.e01c1bab.js";import"./DeleteOutlined.04eb5723.js";import"./EyeOutlined.bbf9afc6.js";import"./index.463e2338.js";import"./index.95c10fda.js";import"./scrollTo.c1e0f75f.js";import"./transButton.6bbddf74.js";import"./CaretDownFilled.c59e8ff5.js";import"./clickOutside.516198a9.js";import"./domUtils.7252317e.js";import"./_stringToArray.fd7cea8c.js";import"./index.6346a568.js";import"./index.f418f493.js";import"./UpOutlined.2e609594.js";import"./index.013441f2.js";import"./useSortable.9390d1f5.js";import"./useTimeout.4101b58e.js";import"./useWindowSizeFn.b36958a0.js";import"./index.341c3125.js";import"./useAttrs.cecee0af.js";import"./index.6c4bbdf5.js";import"./index.d317f8e9.js";import"./useScrollTo.3e27ea8f.js";import"./animation.5c6ea99a.js";import"./FullscreenOutlined.b884f50f.js";import"./index.071f175b.js";import"./SettingOutlined.e89633d9.js";import"./useExpose.fcd4b669.js";import"./useForm.78d22a3e.js";import"./index.e5942447.js";import"./index.eefcbda4.js";import"./colors.e7a38d90.js";import"./RedoOutlined.e878d1f7.js";import"./Tree.4dd17072.js";import"./index.617b1909.js";import"./index.ec6a717d.js";import"./download.6995c76c.js";const p=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],c=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var j=i({components:{BasicTable:e,EditTableHeaderIcon:t,TableAction:l},setup(){const[e,{getDataSource:t}]=m({columns:p,showIndexColumn:!1,dataSource:c,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function i(e){var t;null==(t=e.onEdit)||t.call(e,!0)}function o(e){var i;if(null==(i=e.onEdit)||i.call(e,!1),e.isNew){const i=t(),o=i.findIndex((t=>t.key===e.key));i.splice(o,1)}}function n(e){var t;null==(t=e.onEdit)||t.call(e,!1,!0)}return{registerTable:e,handleEdit:i,createActions:function(e,t){return e.editable?[{label:"保存",onClick:n.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:o.bind(null,e,t)}}]:[{label:"编辑",onClick:i.bind(null,e)},{label:"删除"}]},handleAdd:function(){t().push({name:"",no:"",dept:"",editable:!0,isNew:!0})},getDataSource:t}}});const u=a("新增成员");j.render=function(e,t,i,a,l,m){const p=o("TableAction"),c=o("BasicTable"),j=o("a-button");return n(),s("div",null,[r(c,{onRegister:e.registerTable},{action:d((({record:t,column:i})=>[r(p,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"]),r(j,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:d((()=>[u])),_:1},8,["onClick"])])};export default j;