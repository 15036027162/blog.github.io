import{k as a,u as e,l as t,r as l,o as s,j as r,n as u,s as o,t as n,z as d}from"./vendor.12528a66.js";const c={class:"w-full flex justify-center items-center"},p={class:"mt-12 text-center"},i=d("跳转"),m=a({setup(a){const d=e(),m=t(""),f=()=>{d.push({name:"routerResult",params:{id:m.value}})};return(a,e)=>{const t=l("a-input"),d=l("a-button"),v=l("a-card");return s(),r("div",c,[u("div",p,[o(v,{class:"w-96",title:"params传参"},{default:n((()=>[o(t,{modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=a=>m.value=a),placeholder:"请输入参数","allow-clear":""},null,8,["modelValue"]),o(d,{type:"primary",style:{width:"100%","margin-top":"20px"},onClick:f},{default:n((()=>[i])),_:1})])),_:1})])])}}});export{m as default};