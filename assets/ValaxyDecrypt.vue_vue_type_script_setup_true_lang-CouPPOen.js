import{h as d,V as a,L as x,o as s,k as l,f as t,W as _,aa as w,n as C,ab as k,g,e as V,b as T,u as A,ac as D,M as W}from"./app-B-ElfUmG.js";import{r as m}from"./ValaxyMain.vue_vue_type_style_index_0_lang-q79oSesm.js";import{u as E}from"./decrypt-CimpbA1e.js";const I={key:0,"w-full":"","pt-14":"","pb-10":""},N={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},P={key:0,class:"-bottom-6",absolute:"","text-xs":"",op:"50"},B=t("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",target:"_blank"},[t("span",null,"Web Crypto API")],-1),M={key:1},K=d({__name:"ValaxyDecrypt",props:{encryptedContent:{}},setup(v){const f=v,n=a(""),r=a(""),c=a(!1),{decrypt:y}=E();async function i(){const o=f.encryptedContent;if(o)try{const e=await y(n.value,o);r.value=e||"",setTimeout(()=>{m()},16)}catch{c.value=!0}}function h(){r.value="",n.value="",setTimeout(()=>{m()},16)}const b=d({name:"ValaxyDeprecatedContent",props:{html:String},render(){const o=`<div>${this.html}</div>`;return D({setup:()=>({frontmatter:W()}),template:o})}}),u=a(!1);return x(()=>{location.protocol!=="https:"&&(u.value=!0)}),(o,e)=>(s(),l("div",null,[r.value?(s(),l("div",M,[T(A(b),{html:r.value},null,8,["html"]),t("div",{"w-full":"","text-center":"","mt-8":""},[t("button",{"m-auto":"",class:"btn","font-bold":"",onClick:h}," Encrypt Again ")])])):(s(),l("div",I,[t("div",N,[_(t("input",{"onUpdate:modelValue":e[0]||(e[0]=p=>n.value=p),"w-full":"",border:"~ solid dark:dark-100","pl-5":"","pr-11":"","py-3":"","rounded-full":"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:C(c.value&&"border-red"),onInput:e[1]||(e[1]=p=>c.value=!1),onKeyup:k(i,["enter"])},null,34),[[w,n.value]]),t("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:i}),u.value?(s(),l("div",P,[B,g(" Only works in HTTPS ")])):V("v-if",!0)])]))]))}});export{K as _};