import{g as B,a0 as L,m as b,u as Y,a7 as N,J as R,h as z,o as n,i,b as p,t as y,k as t,F as v,j,a8 as U,c as k,w as d,a as w,e as m,Z as q,A as F,a1 as P,S,a9 as T,R as V,a4 as D}from"./app-e6729504.js";import{_ as A}from"./YunCard.vue_vue_type_style_index_0_lang-b974772e.js";import{_ as H}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-fc2aaf44.js";import{_ as J}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-c7d76983.js";const M={class:"category-list-item inline-flex items-center cursor-pointer"},W={key:0,"i-ri-folder-add-line":""},Z={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},G={key:0},O=p("div",{"i-ri-file-text-line":""},null,-1),Q={m:"l-1",font:"serif black"},X=B({__name:"YunCategory",props:{parentKey:null,category:null,level:null,collapsable:{type:Boolean,default:!0}},setup(o){const u=L(),c=b(!0),{t:_}=Y(),{locale:g}=Y(),l=a=>{const e=g.value==="zh-CN"?"zh":g.value;return a[`title_${e}`]?a[`title_${e}`]:a.title},r=b(),{show:C}=N(r),h=a=>{u.push({query:{category:a}}),C()};return R(()=>{const a=document.querySelector(".post-collapse-container");a&&(r.value=a)}),(a,e)=>{const f=z("YunCategory",!0),x=z("router-link");return n(),i(v,null,[p("li",M,[p("span",{class:"folder-action inline-flex",onClick:e[0]||(e[0]=s=>c.value=!c.value)},[c.value?(n(),i("div",W)):(n(),i("div",Z))]),p("span",{class:"category-name",m:"l-1",onClick:e[1]||(e[1]=s=>h(o.parentKey))},y(o.category.name==="Uncategorized"?t(_)("category.uncategorized"):o.category.name)+" ["+y(o.category.total)+"] ",1)]),c.value?w("v-if",!0):(n(),i("ul",G,[(n(!0),i(v,null,j(o.category.children,(s,$)=>(n(),i("li",{key:$,class:"post-list-item",m:"l-4"},[t(U)(s)?(n(),k(f,{key:0,"parent-key":o.parentKey?`${o.parentKey}/${s.name}`:s.name,category:s},null,8,["parent-key","category"])):(n(),i(v,{key:1},[s.title?(n(),k(x,{key:0,to:s.path||"",class:"inline-flex items-center"},{default:d(()=>[O,p("span",Q,y(l(s)),1)]),_:2},1032,["to"])):w("v-if",!0)],64))]))),128))]))],64)}}}),I=B({__name:"YunCategories",props:{categories:null,level:{default:0},collapsable:{type:Boolean,default:!0}},setup(o){const c=b(o.collapsable);return(_,g)=>{const l=X;return n(!0),i(v,null,j(o.categories,r=>(n(),i("ul",{key:r.name,class:"category-list",m:"l-4"},[m(l,{"parent-key":r.name,category:r,level:o.level+1,collapsable:c.value},null,8,["parent-key","category","level","collapsable"])]))),128)}}});const ee={text:"center",class:"yun-text-light",p:"2"},ae=B({__name:"categories",setup(o){const{t:u}=Y(),c=q(),_=F(),g=P(),l=S(()=>g.query.category||""),r=T(),C=S(()=>c.postList.filter(e=>e.categories&&l.value!=="Uncategorized"?typeof e.categories=="string"?e.categories===l.value:e.categories.join("/").startsWith(l.value)&&e.categories[0]===l.value.split("/")[0]:!e.categories&&l.value==="Uncategorized"?e.categories===void 0:!1)),h=V(_);return(a,e)=>{const f=J,x=I,s=z("router-view"),$=H,E=A,K=D;return n(),k(K,null,{"main-header":d(()=>[m(f,{title:t(h)||t(u)("menu.categories"),icon:t(_).icon||"i-ri-folder-2-line",color:t(_).color},null,8,["title","icon","color"])]),"main-content":d(()=>[p("div",ee,y(t(u)("counter.categories",t(r).children.length)),1),m(x,{categories:t(r).children},null,8,["categories"]),m(s)]),"main-nav-before":d(()=>[t(l)?(n(),k(E,{key:0,class:"post-collapse-container",m:"t-4",w:"full"},{default:d(()=>[m(f,{title:t(l)==="Uncategorized"?t(u)("category.uncategorized"):t(l).split("/").join(" / "),icon:"i-ri-folder-open-line"},null,8,["title"]),m($,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:t(C)},null,8,["posts"])]),_:1})):w("v-if",!0)]),_:1})}}});export{ae as default};
