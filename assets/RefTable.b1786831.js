import{_ as e}from"./index.e6874980.js";import{getBasicColumns as i,getBasicShortColumns as t}from"./tableData.252346e9.js";import{d as o,r as s,g as n,e as a,h as l,o as r,i as c,j as d,w as m,m as p}from"./index.bac2f241.js";import{d as f}from"./table.9209d7ca.js";import"./index.3ad862f9.js";import"./SearchOutlined.ded4f3bb.js";import"./CheckOutlined.0bdba688.js";import"./DownOutlined.0c0a9f0e.js";import"./index.b701f4ed.js";import"./index.94d2f7ae.js";import"./index.71cf2a99.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.c92756f2.js";import"./isEqual.c14375bd.js";import"./_baseProperty.74f89655.js";import"./toInteger.0f3c91b2.js";import"./index.a35c0d5c.js";import"./index.9700389e.js";import"./EyeOutlined.789f63fd.js";import"./index.e100c9aa.js";import"./colors.93013711.js";import"./index.2977c6e4.js";import"./UpOutlined.d1ad81ca.js";import"./index.9cad8016.js";import"./RightOutlined.896cb4ac.js";import"./RedoOutlined.8686756e.js";import"./index.5444241e.js";import"./EllipsisOutlined.f9dc2390.js";import"./types.27b3a0a1.js";import"./Tree.3c039eca.js";import"./util.bd3f1dd6.js";import"./useAttrs.8b6a0666.js";/* empty css              */import"./uuid.63bad443.js";import"./index.f448100f.js";import"./DeleteOutlined.22187302.js";import"./index.de086aab.js";import"./index.e2ca3e81.js";import"./useTimeout.27ed5fc7.js";import"./useWindowSizeFn.743ff762.js";import"./index.713a7871.js";import"./index.a3e72294.js";import"./domUtils.b58f3771.js";import"./_stringToArray.61160ef7.js";import"./useScrollTo.8a4c87a2.js";import"./animation.098eb75d.js";import"./FullscreenOutlined.bbb55f53.js";import"./index.57f1db92.js";import"./index.ea195e89.js";import"./index.26ded0b1.js";import"./LeftOutlined.be9496bc.js";import"./download.a8a349db.js";import"./index.f147ac29.js";import"./DoubleLeftOutlined.e5df23b0.js";import"./DoubleRightOutlined.a19cd4b1.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.7f4124c2.js";import"./CaretDownFilled.5f945c29.js";import"./clickOutside.d2eec81f.js";import"./useSortable.790be59d.js";import"./SettingOutlined.a7ee622b.js";import"./useExpose.1a9952e9.js";import"./useForm.6b179877.js";var u=o({components:{BasicTable:e},setup(){const e=s(null),{createMessage:o}=n();function l(){const i=a(e);if(!i)throw new Error("tableAction is null");return i}return{tableRef:e,api:f,columns:i(),changeLoading:function(){l().setLoading(!0),setTimeout((()=>{l().setLoading(!1)}),1e3)},changeColumns:function(){l().setColumns(t())},reloadTable:function(){l().setColumns(i()),l().reload({page:1})},getColumn:function(){o.info("请在控制台查看！")},getTableData:function(){o.info("请在控制台查看！")},getPagination:function(){o.info("请在控制台查看！")},setPaginationInfo:function(){l().setPagination({current:2}),l().reload()},getSelectRowList:function(){o.info("请在控制台查看！")},getSelectRowKeyList:function(){o.info("请在控制台查看！")},setSelectedRowKeyList:function(){l().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){l().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},g=p(" 还原 "),C=p(" 开启loading "),x=p(" 更改Columns "),k=p(" 获取Columns "),w=p(" 获取表格数据 "),O=p(" 跳转到第2页 "),R={class:"mb-4"},S=p(" 获取选中行 "),_=p(" 获取选中行Key "),y=p(" 设置选中行 "),T=p(" 清空选中行 "),h=p(" 获取分页信息 ");u.render=function(e,i,t,o,s,n){const a=l("a-button"),p=l("BasicTable");return r(),c("div",j,[d("div",b,[d(a,{class:"mr-2",onClick:e.reloadTable},{default:m((()=>[g])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.changeLoading},{default:m((()=>[C])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.changeColumns},{default:m((()=>[x])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getColumn},{default:m((()=>[k])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getTableData},{default:m((()=>[w])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.setPaginationInfo},{default:m((()=>[O])),_:1},8,["onClick"])]),d("div",R,[d(a,{class:"mr-2",onClick:e.getSelectRowList},{default:m((()=>[S])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:m((()=>[_])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:m((()=>[y])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.clearSelect},{default:m((()=>[T])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getPagination},{default:m((()=>[h])),_:1},8,["onClick"])]),d(p,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default u;