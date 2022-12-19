import{k as e,m as t,r as a,o as s,c as i,t as n,j as l,D as r,q as o,F as d,s as c,z as u,E as m,n as p,i as h,u as g}from"./vendor.12528a66.js";import{i as b}from"./index.76ff2bf3.js";import{a as f}from"./index.c82e9445.js";const x={class:"flex justify-between items-center"},y=["src"],v=e({setup(e){const h=t({listTable:[{title:"访问量",subtitle:"年",number:5670,color:"red",key:"Name",dataIndex:"较昨日",img:"./assets/hone_1.13d1fb70.png"},{title:"成交额",subtitle:"月",number:5670,color:"orangered",key:"Name",dataIndex:"较昨日",img:"./assets/hone_2.acd76a0a.png"},{title:"流动人口",subtitle:"日",number:5670,color:"orange",key:"Name",dataIndex:"较昨日",img:"./assets/hone_3.cef80c4d.png"},{title:"访问总人数",subtitle:"时",number:5670,color:"lime",key:"Name",dataIndex:"较昨日",img:"./assets/hone_4.b5a45c1c.png"}]});return(e,t)=>{const g=a("a-tag"),b=a("a-statistic"),f=a("a-card"),v=a("a-col"),_=a("a-row");return s(),i(_,{class:"mb-5",justify:"space-between"},{default:n((()=>[(s(!0),l(d,null,r(o(h).listTable,((e,t)=>(s(),i(v,{span:5},{default:n((()=>[(s(),i(f,{title:e.title,hoverable:"",key:t},{extra:n((()=>[c(g,{color:e.color},{default:n((()=>[u(m(e.subtitle),1)])),_:2},1032,["color"])])),default:n((()=>[p("div",x,[c(b,{value:e.number,"show-group-separator":"",animation:""},null,8,["value"]),p("img",{src:e.img,alt:"",style:{width:"60px",height:"50px"}},null,8,y)]),p("div",null,m(e.dataIndex),1)])),_:2},1032,["title"]))])),_:2},1024)))),256))])),_:1})}}}),_=p("div",{id:"myChart1",style:{width:"100%",height:"400px"}},null,-1),w=e({setup(e){h((()=>{setTimeout((()=>{t()}),500)}));const t=()=>{let e=b(document.getElementById("myChart1"));e.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Vue",type:"bar",stack:"Ad",emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"React",type:"bar",stack:"Ad",emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"Vite",type:"bar",stack:"Ad",emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]}]}),window.onresize=function(){e.resize()}};return(e,t)=>{const i=a("a-card");return s(),l("div",null,[c(i,{title:"搜索引擎占比",bordered:!1,class:"container"},{default:n((()=>[_])),_:1})])}}}),k=p("div",{id:"myChart2",style:{width:"100%",height:"400px"}},null,-1),z=e({setup(e){h((()=>{setTimeout((()=>{t()}),500)}));const t=()=>{let e=b(document.getElementById("myChart2"));e.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{bottom:10,left:"center",data:["深圳","北京","上海","晋城","山西"]},series:[{type:"pie",radius:"65%",center:["50%","50%"],selectedMode:"single",data:[{value:1548,name:"山西"},{value:735,name:"晋城"},{value:510,name:"上海"},{value:434,name:"北京"},{value:335,name:"深圳"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}),window.onresize=function(){e.resize()}};return(e,t)=>{const i=a("a-card");return s(),l("div",null,[c(i,{title:"饼图示例",bordered:!1,class:"container"},{default:n((()=>[k])),_:1})])}}}),j=[{title:"Github",icon:"icon-github",desc:"不要等待机会，而要创造机会。",group:"开源组",date:"2021-04-01"},{title:"Vue",icon:"icon-Vue",desc:"现在的你决定将来的你。",group:"算法组",date:"2021-04-01"},{title:"Html5",icon:"icon-HTML",desc:"没有什么才能比努力更重要。",group:"上班摸鱼",date:"2021-04-01"},{title:"Angular",icon:"icon-Angular",desc:"热情和欲望可以突破一切难关。",group:"UI",date:"2021-04-01"},{title:"React",icon:"icon-react",desc:"健康的身体是实目标的基石。",group:"技术牛",date:"2021-04-01"},{title:"Js",icon:"icon-javascript",desc:"路是走出来的",group:"架构组",date:"2021-04-01"}],I=[{name:"工作台",icon:"icon-shouye",path:"/home"},{name:"指标管理",icon:"icon-zhibiaochi",path:"/chart"},{name:"设备管理",icon:"icon-shebei",path:"/manage"},{name:"表单管理",icon:"icon-tianxiebiaodan",path:"/table"},{name:"用户管理",icon:"icon-yonghu",path:"/role"},{name:"部门管理",icon:"icon-bumen",path:"/management"}],T={class:"card-content"},A={class:"text-size-[20px] font-bold flex items-center mb-2"},C={class:"icon w-8 h-8 mr-3","aria-hidden":"true"},N=["xlink:href"],V={style:{"line-height":"40px"}},B={class:"card-desc text-size-[14px] mb-2"},E={class:"flex justify-between items-center"},M=e({setup(e){const u=t({list:j});return(e,t)=>{const h=a("a-card"),g=a("a-card-grid");return s(),i(h,{title:"项目",bordered:!1,class:"mb-8"},{default:n((()=>[(s(!0),l(d,null,r(o(u).list,((e,t)=>(s(),i(g,{key:e.date,hoverable:!0,style:{width:"33%"}},{default:n((()=>[c(h,{class:"card-demo",bordered:!1},{default:n((()=>[p("div",T,[p("div",A,[(s(),l("svg",C,[p("use",{"xlink:href":`#${e.icon}`},null,8,N)])),p("span",V,m(e.title),1)]),p("div",B,m(e.desc),1),p("div",E,[p("span",null,m(e.group),1),p("span",null,m(e.date),1)])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})}}}),O=["onClick"],S={class:"mb-3"},F={class:"icon svg-icon h-12 w-7","aria-hidden":"true"},H=["xlink:href"],L={class:"text-size-[16px] font-bold line-through-[40px] flex justify-center items-center"},R={class:"text-size-[14px]"},$=e({setup(e){const u=g(),h=f(),b=t({list:I});return(e,t)=>{const g=a("a-card"),f=a("a-card-grid");return s(),i(g,{title:"快捷导航",hoverable:"",bordered:!1,class:"mb-7"},{default:n((()=>[(s(!0),l(d,null,r(o(b).list,(e=>(s(),i(f,{key:e.name,hoverable:!0,class:"w-1/3"},{default:n((()=>[c(g,{class:"px-16px py-6px",bordered:!1},{default:n((()=>[p("div",{class:"text-center",onClick:t=>(e=>{u.push(e.path),h.addTagIten(e)})(e)},[p("div",S,[(s(),l("svg",F,[p("use",{"xlink:href":`#${e.icon}`},null,8,H)]))]),p("div",L,[p("span",R,m(e.name),1)])],8,O)])),_:2},1024)])),_:2},1024)))),128))])),_:1})}}}),q=e({setup:e=>(e,t)=>{const i=a("a-col"),r=a("a-row");return s(),l("div",null,[c(v),c(r,{class:"grid-demo",gutter:24},{default:n((()=>[c(i,{span:16},{default:n((()=>[c(M)])),_:1}),c(i,{span:8},{default:n((()=>[c($)])),_:1})])),_:1}),c(r,{class:"grid-demo",gutter:24},{default:n((()=>[c(i,{span:16},{default:n((()=>[c(w)])),_:1}),c(i,{span:8},{default:n((()=>[c(z)])),_:1})])),_:1})])}});export{q as default};
