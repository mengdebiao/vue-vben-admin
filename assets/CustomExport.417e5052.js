import{_ as e}from"./index.afe6bfe0.js";import{E as t}from"./index.c545a850.js";import{c as i,d as o,j as s}from"./data.a472ca9a.js";import{b as r}from"./index.ab16b779.js";import{_ as d}from"./index.d3ad540a.js";import{d as a,h as p,o as n,i as m,w as j,j as c,m as l}from"./index.e5cea104.js";import"./index.49f6d8c8.js";import"./SearchOutlined.874b7e0b.js";import"./CheckOutlined.bd11f80d.js";import"./DownOutlined.835763f0.js";import"./index.32c75ba1.js";import"./index.bf329a73.js";import"./responsiveObserve.c545f1cc.js";import"./index.e908b408.js";import"./vendor.3b1829c7.js";import"./findIndex.f8cb4e98.js";import"./isEqual.ada18de9.js";import"./_baseProperty.74f89655.js";import"./toInteger.dac4ce3f.js";import"./index.963edebb.js";import"./index.749776b8.js";import"./index.0e9635a5.js";import"./UpOutlined.aee13fa3.js";import"./index.b44f38c4.js";import"./EyeOutlined.6de6da94.js";import"./index.c16a3a36.js";import"./colors.ebbba271.js";import"./RightOutlined.63cc3316.js";import"./RedoOutlined.101739ca.js";import"./index.99a56753.js";import"./EllipsisOutlined.9bd10310.js";import"./types.3e3d7f7c.js";import"./Tree.d0424ea2.js";import"./util.5e4e3845.js";import"./useAttrs.72cac050.js";import"./index.95c10fda.js";import"./index.aae62fa3.js";import"./uuid.ae30f5ed.js";import"./index.c01160de.js";import"./DeleteOutlined.7972fc34.js";import"./index.9dcfd344.js";import"./index.03cc0e18.js";import"./index.e918eef3.js";import"./index.89c258d7.js";import"./domUtils.ddc9ae66.js";import"./_stringToArray.553093ef.js";import"./useTimeout.8ab5f977.js";import"./useScrollTo.e484cebb.js";import"./animation.7591f702.js";import"./index.98a232e0.js";import"./LeftOutlined.0d50da53.js";import"./download.c8a751c0.js";import"./index.47e10f1b.js";import"./DoubleLeftOutlined.3b854037.js";import"./DoubleRightOutlined.177ad5e8.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.3169e759.js";import"./CaretDownFilled.f8724d3e.js";import"./clickOutside.f7af08fb.js";import"./useSortable.3b239089.js";import"./useWindowSizeFn.72a9ad65.js";import"./SettingOutlined.97985744.js";import"./useExpose.c4fc10e5.js";import"./useForm.12972363.js";import"./FullscreenOutlined.4b07a752.js";import"./index.b849a135.js";import"./index.cf091346.js";import"./usePageContext.32d49c7d.js";import"./ArrowLeftOutlined.36c69fe8.js";var u=a({components:{BasicTable:e,ExpExcelModel:t,PageWrapper:d},setup(){const[e,{openModal:t}]=r();return{defaultHeader:function({filename:e,bookType:t}){s({data:o,filename:e,write2excelOpts:{bookType:t}})},columns:i,data:o,register:e,openModal:t}}});const f=l("导出");u.render=function(e,t,i,o,s,r){const d=p("a-button"),a=p("BasicTable"),l=p("ExpExcelModel"),u=p("PageWrapper");return n(),m(u,{title:"导出示例",content:"可以选择导出格式"},{default:j((()=>[c(a,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:j((()=>[c(d,{onClick:e.openModal},{default:j((()=>[f])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),c(l,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default u;