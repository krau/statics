import{g,i as x,o as a,c as p,q as m,K as C,j as v,b as s,x as P,M as $,n as G,N as V,e as f,a8 as E,h as A,B as D,Z as B,ad as O,ae as S,W as K,E as N,G as T,w,l as o,t as Y,H as j,ac as I}from"./app-779b7a28.js";import{_ as M}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-ee992afd.js";const R=g({__name:"YunGallery",props:{photos:{}},setup(_){return(r,n)=>{const e=x("VAGallery");return a(),p(e,{photos:r.photos},null,8,["photos"])}}}),z={key:0,"w-full":"","pt-14":"","pb-10":""},H={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},L=["onKeyup"],W={key:1},q=g({__name:"ValaxyGalleryDecrypt",props:{encryptedPhotos:{}},setup(_){const r=_,n=m(""),e=m(""),l=m(!1),{decrypt:c}=C();async function d(){const i=r.encryptedPhotos;if(i)try{const t=await c(n.value,i);e.value=t||""}catch{l.value=!0}}function y(){e.value="",n.value=""}return(i,t)=>{const h=R;return a(),v("div",null,[e.value?(a(),v("div",W,[f(h,{photos:JSON.parse(e.value)},null,8,["photos"]),s("div",{"w-full":"","text-center":"","mt-8":""},[s("button",{"m-auto":"",class:"btn","font-bold":"",onClick:y}," Encrypt Again ")])])):(a(),v("div",z,[s("div",H,[P(s("input",{"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:G(l.value&&"border-red"),onInput:t[1]||(t[1]=u=>l.value=!1),onKeyup:V(d,["enter"])},null,42,L),[[$,n.value]]),s("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:d})])]))])}}}),F={text:"center",class:"yun-text-light",p:"2"},J={class:"page-action",text:"center"},U=["title"],Z=s("div",{"i-ri-arrow-go-back-line":""},null,-1),Q=[Z],X=g({__name:"gallery",setup(_){const r=E(),{t:n}=A(),e=D(),l=B(e);O([S({"@type":"CollectionPage"})]);const c=K(()=>e.value.photos||[]),y=N().value.addons["valaxy-addon-lightgallery"]?T(()=>j(()=>import("./YunGallery-e267a22c.js"),["assets/YunGallery-e267a22c.js","assets/app-779b7a28.js","assets/index-1f7b4313.css","assets/YunPageHeader.vue_vue_type_script_setup_true_lang-ee992afd.js"])):()=>null;return(i,t)=>{const h=M,u=q,b=x("router-view"),k=I;return a(),p(k,null,{"main-header":w(()=>[f(h,{title:o(l)||o(n)("title.gallery"),icon:o(e).icon||"i-ri-gallery-line",color:o(e).color},null,8,["title","icon","color"])]),"main-content":w(()=>[s("div",F,Y(o(n)("counter.photos",c.value.length)),1),s("div",J,[s("a",{class:"yun-icon-btn",title:o(n)("accessibility.back"),onClick:t[0]||(t[0]=()=>o(r).back())},Q,8,U)]),o(e).encryptedPhotos?(a(),p(u,{key:0,"encrypted-photos":o(e).encryptedPhotos},null,8,["encrypted-photos"])):(a(),p(o(y),{key:1,photos:c.value},null,8,["photos"])),f(b)]),_:1})}}}),oe=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));export{R as _,oe as g};