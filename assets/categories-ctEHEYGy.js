import{_ as j}from"./YunCard.vue_vue_type_script_setup_true_lang-pMiCul1u.js";import{_ as E}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-BIfJfwSo.js";import{h as B,i as K,a as A,l as $,R as P,q as w,L as N,r as S,o as t,k as r,f as _,t as b,u as s,F as y,m as V,aj as T,c as f,w as p,e as q,b as m,x as U,M as x,ak as D,a5 as F,af as M,ag as W,d as H,ah as O,ae as G}from"./app-C3byl0xN.js";import{u as J}from"./helper-BV4WzcL7.js";import{_ as Q}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-Dwg2FlTu.js";const X={class:"category-list-item inline-flex items-center cursor-pointer"},Z={key:0,"i-ri-folder-add-line":""},I={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},ee={key:0},te=_("div",{"i-ri-file-text-line":""},null,-1),oe={m:"l-1",font:"serif black"},ae=B({__name:"YunCategory",props:{parentKey:{},category:{},level:{},collapsable:{type:Boolean,default:!0}},setup(Y){const u=Y,g=K(),a=A(),v=$(()=>{const e=a.query.category||"";return Array.isArray(e)?[e]:e.split("/")}),o=P(u.collapsable),{t:i}=w(),{locale:k}=w();function z(e){const c=k.value==="zh-CN"?"zh":k.value;return e[`title_${c}`]?e[`title_${c}`]:e.title}const d=P(),{show:l}=J(d);function h(e){g.push({query:{category:e}}),l()}return N(()=>{const e=document.querySelector(".post-collapse-container");e&&(d.value=e)}),(e,c)=>{const C=S("YunCategory",!0),L=S("RouterLink");return t(),r(y,null,[_("li",X,[_("span",{class:"folder-action inline-flex",onClick:c[0]||(c[0]=n=>o.value=!o.value)},[o.value?(t(),r("div",Z)):(t(),r("div",I))]),_("span",{class:"category-name",m:"l-1",onClick:c[1]||(c[1]=n=>h(e.parentKey))},b(e.category.name==="Uncategorized"?s(i)("category.uncategorized"):e.category.name)+" ["+b(e.category.total)+"] ",1)]),o.value?q("v-if",!0):(t(),r("ul",ee,[(t(!0),r(y,null,V(e.category.children.values(),(n,R)=>(t(),r("li",{key:R,class:"post-list-item",m:"l-4"},[s(T)(n)?(t(),f(C,{key:0,"parent-key":e.parentKey?`${e.parentKey}/${n.name}`:n.name,category:n,collapsable:!v.value.includes(n.name)},null,8,["parent-key","category","collapsable"])):(t(),r(y,{key:1},[n.title?(t(),f(L,{key:0,to:n.path||"",class:"inline-flex items-center"},{default:p(()=>[te,_("span",oe,b(z(n)),1)]),_:2},1032,["to"])):q("v-if",!0)],64))]))),128))]))],64)}}}),ne=B({__name:"YunCategories",props:{categories:{},level:{default:0},collapsable:{type:Boolean,default:!0}},setup(Y){const u=A(),g=$(()=>{const a=u.query.category||"";return Array.isArray(a)?[a]:a.split("/")});return(a,v)=>{const o=ae;return t(!0),r(y,null,V(a.categories.values(),i=>(t(),r("ul",{key:i.name,class:"category-list",m:"l-4"},[m(o,{"parent-key":i.name,category:i,level:a.level+1,collapsable:!g.value.includes(i.name)},null,8,["parent-key","category","level","collapsable"])]))),128)}}}),se={text:"center",class:"yun-text-light",p:"2"},pe=B({__name:"categories",setup(Y){const{t:u}=w(),g=U(),a=x(),v=A(),o=$(()=>v.query.category||""),i=D(),k=$(()=>g.postList.filter(l=>l.categories&&o.value!=="Uncategorized"?typeof l.categories=="string"?l.categories===o.value:l.categories.join("/").startsWith(o.value)&&l.categories[0]===o.value.split("/")[0]:!l.categories&&o.value==="Uncategorized"?l.categories===void 0:!1)),z=F(a);return M([W({"@type":"CollectionPage"})]),(d,l)=>{const h=G,e=Q,c=ne,C=S("RouterView"),L=E,n=j;return t(),r(y,null,[d.$slots["sidebar-child"]?(t(),f(h,{key:0},{default:p(()=>[H(d.$slots,"sidebar-child")]),_:3})):(t(),f(h,{key:1})),m(C,null,{default:p(({Component:R})=>[(t(),f(O(R),null,{"main-header":p(()=>[m(e,{title:s(z)||s(u)("menu.categories"),icon:s(a).icon||"i-ri-folder-2-line",color:s(a).color,"page-title-class":s(a).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":p(()=>[_("div",se,b(s(u)("counter.categories",Array.from(s(i).children).length)),1),m(c,{categories:s(i).children},null,8,["categories"]),m(C)]),"main-nav-before":p(()=>[o.value?(t(),f(n,{key:0,class:"post-collapse-container",m:"t-4",w:"full"},{default:p(()=>[m(e,{title:o.value==="Uncategorized"?s(u)("category.uncategorized"):o.value.split("/").join(" / "),icon:"i-ri-folder-open-line"},null,8,["title"]),m(L,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:k.value},null,8,["posts"])]),_:1})):q("v-if",!0)]),_:2},1024))]),_:1})],64)}}});export{pe as default};