import{g as r,at as c,au as i,ah as l,i as d,l as p,o as f,c as m,a as h}from"./app-d8f36d80.js";const A=r({__name:"YunAlgoliaSearch",props:{open:{type:Boolean}},setup(a){const o=a;if(c(i))throw new Error("Algolia addon is not installed");const{loaded:e,load:n,dispatchEvent:t}=(void 0)();return l(()=>o.open,()=>{o.open&&n(),e&&t()}),(u,_)=>{const s=d("AlgoliaSearchBox");return p(e)?(f(),m(s,{key:0,class:"hidden"})):h("v-if",!0)}}});export{A as default};
