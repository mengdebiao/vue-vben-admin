import{a as i,i as e,o as s,j as t,k as o,w as r,p as m}from"./index.e76c06f1.js";import"./xlsx.9d951958.js";import"./useSortable.0c0d08b6.js";import"./index.2e7cfb95.js";import"./Trigger.e0ae6bef.js";import"./omit.387e4bc9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9023c34c.js";import"./CheckOutlined.187a3060.js";import"./index.15751672.js";import"./index.1bb021e3.js";import"./colors.b20c9223.js";import"./index.eba57d7e.js";import"./RightOutlined.238a5698.js";import"./types.2b5911d0.js";import"./index.13fbb8a0.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.b9c7bfd3.js";import"./index.0492ce3b.js";import"./index.f4cf7fd8.js";import"./UpOutlined.c57d18c6.js";import"./LeftOutlined.bf71bcd8.js";import"./index.22e82fe7.js";import"./index.ffdab4cb.js";import"./index.470a4b2d.js";import"./index.545f4296.js";import"./index.652cf000.js";import"./index.aa27229a.js";import"./zh_CN.0242bd16.js";import"./index.351bc02d.js";import"./index.ec0f3664.js";import"./index.ac515f18.js";import"./CaretDownFilled.014f475c.js";import"./transButton.914fefeb.js";import{B as d}from"./index.1ef513c1.js";import"./CheckOutlined.b93c956a.js";import"./CloseOutlined.364204b4.js";import{s as p,F as a}from"./index.6d23fe48.js";import"./FullscreenOutlined.647cd1c9.js";import"./index.6d17570e.js";import"./RightOutlined.4e6f221b.js";import"./SettingOutlined.f44164b6.js";import"./useTimeout.0b9d202d.js";import"./tsxHelper.3ee1ad98.js";import"./index.1671d981.js";import"./animation.7d541661.js";import"./useScrollTo.ae385fa0.js";import"./useAttrs.cd179906.js";import"./index.3c40b99f.js";import"./useWindowSizeFn.18768138.js";import"./index.cee60ffd.js";import"./uuid.40269c00.js";import"./download.75bd0097.js";import"./useForm.fb4d76f9.js";import"./useExpose.17c749fc.js";import{u as n}from"./useTable.ba62adad.js";import{getCustomHeaderColumns as j}from"./tableData.2eaaee24.js";import{d as c}from"./table.e39b1c8c.js";var l=i({components:{BasicTable:p,FormOutlined:a,BasicHelp:d},setup(){const[i]=n({title:"定高/头部自定义",api:c,columns:j(),canResize:!1,scroll:{y:100}});return{registerTable:i}}});const b={class:"p-4"},f=m(" 姓名 "),u=m(" 地址 ");l.render=function(i,m,d,p,a,n){const j=e("BasicHelp"),c=e("FormOutlined"),l=e("BasicTable");return s(),t("div",b,[o(l,{onRegister:i.registerTable},{customTitle:r((()=>[o("span",null,[f,o(j,{class:"ml-2",text:"姓名"})])])),customAddress:r((()=>[u,o(c,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default l;