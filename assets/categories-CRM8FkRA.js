import{_ as j}from"./YunCard.vue_vue_type_script_setup_true_lang-CstcHiEk.js";import{_ as E}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-DFkwcNrm.js";import{h as B,i as K,a as A,l as $,R as P,q as w,L as N,r as S,o as t,k as r,f as _,t as b,u as l,F as g,m as V,aj as U,c as f,w as p,e as q,b as m,x,M as D,ak as F,a5 as T,af as M,ag as W,d as H,ah as O,ae as G}from"./app-DTjO6UXc.js";import{u as J}from"./helper-DEume3Da.js";import{_ as Q}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-CGvVL0hK.js";const X={class:"category-list-item inline-flex items-center cursor-pointer"},Z={key:0,"i-ri-folder-add-line":""},I={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},ee={key:0},te=_("div",{"i-ri-file-text-line":""},null,-1),oe={m:"l-1",font:"serif black"},ne=B({__name:"YunCategory",props:{parentKey:{},category:{},level:{},collapsable:{type:Boolean,default:!0}},setup(Y){const u=Y,y=K(),n=A(),v=$(()=>{const e=n.query.category||"";return Array.isArray(e)?[e]:e.split("/")}),o=P(u.collapsable),{t:i}=w(),{locale:k}=w();function z(e){const c=k.value==="zh-CN"?"zh":k.value;return e[`title_${c}`]?e[`title_${c}`]:e.title}const d=P(),{show:s}=J(d);function h(e){y.push({query:{category:e}}),s()}return N(()=>{const e=document.querySelector(".post-collapse-container");e&&(d.value=e)}),(e,c)=>{const C=S("YunCategory",!0),L=S("RouterLink");return t(),r(g,null,[_("li",X,[_("span",{class:"folder-action inline-flex",onClick:c[0]||(c[0]=a=>o.value=!o.value)},[o.value?(t(),r("div",Z)):(t(),r("div",I))]),_("span",{class:"category-name",m:"l-1",onClick:c[1]||(c[1]=a=>h(e.parentKey))},b(e.category.name==="Uncategorized"?l(i)("category.uncategorized"):e.category.name)+" ["+b(e.category.total)+"] ",1)]),o.value?q("v-if",!0):(t(),r("ul",ee,[(t(!0),r(g,null,V(e.category.children.values(),(a,R)=>(t(),r("li",{key:R,class:"post-list-item",m:"l-4"},[l(U)(a)?(t(),f(C,{key:0,"parent-key":e.parentKey?`${e.parentKey}/${a.name}`:a.name,category:a,collapsable:!v.value.includes(a.name)},null,8,["parent-key","category","collapsable"])):(t(),r(g,{key:1},[a.title?(t(),f(L,{key:0,to:a.path||"",class:"inline-flex items-center"},{default:p(()=>[te,_("span",oe,b(z(a)),1)]),_:2},1032,["to"])):q("v-if",!0)],64))]))),128))]))],64)}}}),ae=B({__name:"YunCategories",props:{categories:{},level:{default:0},collapsable:{type:Boolean,default:!0}},setup(Y){const u=A(),y=$(()=>{const n=u.query.category||"";return Array.isArray(n)?[n]:n.split("/")});return(n,v)=>{const o=ne;return t(!0),r(g,null,V(n.categories.values(),i=>(t(),r("ul",{key:i.name,class:"category-list",m:"l-4"},[m(o,{"parent-key":i.name,category:i,level:n.level+1,collapsable:!y.value.includes(i.name)},null,8,["parent-key","category","level","collapsable"])]))),128)}}}),se={text:"center",class:"yun-text-light",p:"2"},pe=B({__name:"categories",setup(Y){const{t:u}=w(),y=x(),n=D(),v=A(),o=$(()=>v.query.category||""),i=F(),k=$(()=>y.postList.filter(s=>s.categories&&o.value!=="Uncategorized"?typeof s.categories=="string"?s.categories===o.value:s.categories.join("/").startsWith(o.value)&&s.categories[0]===o.value.split("/")[0]:!s.categories&&o.value==="Uncategorized"?s.categories===void 0:!1)),z=T(n);return M([W({"@type":"CollectionPage"})]),(d,s)=>{const h=G,e=Q,c=ae,C=S("RouterView"),L=E,a=j;return t(),r(g,null,[d.$slots["sidebar-child"]?(t(),f(h,{key:0},{default:p(()=>[H(d.$slots,"sidebar-child")]),_:3})):(t(),f(h,{key:1})),m(C,null,{default:p(({Component:R})=>[(t(),f(O(R),null,{"main-header":p(()=>[m(e,{title:l(z)||l(u)("menu.categories"),icon:l(n).icon||"i-ri-folder-2-line",color:l(n).color},null,8,["title","icon","color"])]),"main-content":p(()=>[_("div",se,b(l(u)("counter.categories",Array.from(l(i).children).length)),1),m(c,{categories:l(i).children},null,8,["categories"]),m(C)]),"main-nav-before":p(()=>[o.value?(t(),f(a,{key:0,class:"post-collapse-container",m:"t-4",w:"full"},{default:p(()=>[m(e,{title:o.value==="Uncategorized"?l(u)("category.uncategorized"):o.value.split("/").join(" / "),icon:"i-ri-folder-open-line"},null,8,["title"]),m(L,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:k.value},null,8,["posts"])]),_:1})):q("v-if",!0)]),_:2},1024))]),_:1})],64)}}});export{pe as default};
