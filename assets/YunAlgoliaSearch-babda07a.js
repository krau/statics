import{useAddonAlgolia as c}from"valaxy-addon-algolia";import{d as r,a5 as p,a as l,f as i,o as d,c as m,h as f}from"./app-1f10607d.js";const B=r({__name:"YunAlgoliaSearch",props:{open:{type:Boolean}},setup(a){const o=a,{loaded:e,load:n,dispatchEvent:t}=c();return p(()=>o.open,()=>{o.open&&n(),e&&t()}),(h,u)=>{const s=l("AlgoliaSearchBox");return i(e)?(d(),m(s,{key:0,class:"hidden"})):f("v-if",!0)}}});export{B as default};
