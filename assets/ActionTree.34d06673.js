import{B as e,t}from"./data.6db920ae.js";import{a}from"./index.e918eef3.js";import{d as n,r as s,g as l,e as o,h as d,o as i,i as c,w as r,j as p,m as u}from"./index.e5cea104.js";import{_ as f}from"./index.d3ad540a.js";import"./index.89c258d7.js";import"./domUtils.ddc9ae66.js";import"./_stringToArray.553093ef.js";import"./RightOutlined.63cc3316.js";import"./index.95c10fda.js";import"./useTimeout.8ab5f977.js";import"./useScrollTo.e484cebb.js";import"./animation.7591f702.js";import"./vendor.3b1829c7.js";import"./index.b849a135.js";import"./index.99a56753.js";import"./EllipsisOutlined.9bd10310.js";import"./types.3e3d7f7c.js";import"./isEqual.ada18de9.js";import"./toInteger.dac4ce3f.js";import"./DownOutlined.835763f0.js";import"./index.cf091346.js";import"./usePageContext.32d49c7d.js";import"./transButton.3169e759.js";import"./ArrowLeftOutlined.36c69fe8.js";var m=n({components:{BasicTree:e,CollapseContainer:a,PageWrapper:f},setup(){const e=s(null),{createMessage:a}=l();function n(){const t=o(e);if(!t)throw new Error("tree is null!");return t}return{treeData:t,treeRef:e,handleLevel:function(e){n().filterByLevel(e)},handleSetCheckData:function(){n().setCheckedKeys(["0-0"])},handleGetCheckData:function(){const e=n().getCheckedKeys();a.success(JSON.stringify(e))},handleSetSelectData:function(){n().setSelectedKeys(["0-0"])},handleGetSelectData:function(){const e=n().getSelectedKeys();a.success(JSON.stringify(e))},handleSetExpandData:function(){n().setExpandedKeys(["0-0"])},handleGetExpandData:function(){const e=n().getExpandedKeys();a.success(JSON.stringify(e))},appendNodeByKey:function(e=null){n().insertNodeByKey({parentKey:e,node:{title:"新增节点",key:"2-2-2"},push:"push"})},deleteNodeByKey:function(e){n().deleteNodeByKey(e)},updateNodeByKey:function(e){n().updateNodeByKey(e,{title:"parent2-new"})}}}});const y={class:"mb-4"},C=u("显示到第2级"),h=u("显示到第1级"),k=u("设置勾选数据"),j=u("获取勾选数据"),x=u("设置选中数据"),D=u("获取选中数据"),K=u("设置展开数据"),B=u("获取展开数据"),S={class:"mb-4"},_=u("添加根节点"),g=u("添加在parent3内添加节点"),N=u("删除parent3节点"),b=u("更新parent2节点");m.render=function(e,t,a,n,s,l){const o=d("a-button"),u=d("BasicTree"),f=d("CollapseContainer"),m=d("PageWrapper");return i(),c(m,{title:"Tree函数操作示例",contentBackground:"",contentClass:"p-4"},{default:r((()=>[p("div",y,[p(o,{onClick:t[1]||(t[1]=t=>e.handleLevel(2)),class:"mr-2"},{default:r((()=>[C])),_:1}),p(o,{onClick:t[2]||(t[2]=t=>e.handleLevel(1)),class:"mr-2"},{default:r((()=>[h])),_:1}),p(o,{onClick:e.handleSetCheckData,class:"mr-2"},{default:r((()=>[k])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetCheckData,class:"mr-2"},{default:r((()=>[j])),_:1},8,["onClick"]),p(o,{onClick:e.handleSetSelectData,class:"mr-2"},{default:r((()=>[x])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetSelectData,class:"mr-2"},{default:r((()=>[D])),_:1},8,["onClick"]),p(o,{onClick:e.handleSetExpandData,class:"mr-2"},{default:r((()=>[K])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetExpandData,class:"mr-2"},{default:r((()=>[B])),_:1},8,["onClick"])]),p("div",S,[p(o,{onClick:t[3]||(t[3]=t=>e.appendNodeByKey(null)),class:"mr-2"},{default:r((()=>[_])),_:1}),p(o,{onClick:t[4]||(t[4]=t=>e.appendNodeByKey("2-2")),class:"mr-2"},{default:r((()=>[g])),_:1}),p(o,{onClick:t[5]||(t[5]=t=>e.deleteNodeByKey("2-2")),class:"mr-2"},{default:r((()=>[N])),_:1}),p(o,{onClick:t[6]||(t[6]=t=>e.updateNodeByKey("1-1")),class:"mr-2"},{default:r((()=>[b])),_:1})]),p(f,{title:"函数操作",class:"mr-4",canExpan:!1,style:{width:"33%"}},{default:r((()=>[p(u,{treeData:e.treeData,ref:"treeRef",checkable:!0},null,8,["treeData"])])),_:1})])),_:1})};export default m;