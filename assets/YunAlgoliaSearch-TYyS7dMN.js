import{g as l,N as r,Q as c,l as d,v as i,o as p,c as f,a as m,O as h}from"./app-V7sBZOCc.js";const A=l({__name:"YunAlgoliaSearch",props:{open:{type:Boolean}},setup(a){const o=a;if(r(h))throw new Error("Algolia addon is not installed");const{loaded:e,load:n,dispatchEvent:t}=(void 0)();return c(()=>o.open,()=>{o.open&&n(),e&&t()}),(u,_)=>{const s=d("AlgoliaSearchBox");return i(e)?(p(),f(s,{key:0,class:"hidden"})):m("v-if",!0)}}});export{A as default};