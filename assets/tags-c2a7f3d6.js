import{g as x,o as s,j as C,b as i,t as _,aj as N,ak as V,u as A,a2 as E,m as I,h as R,B as z,av as D,$ as v,aa as H,q as O,an as W,a1 as G,i as J,c as m,w as a,e as r,l as t,k as K,a5 as M,F as Q,a as U,ah as X}from"./app-4c727bde.js";import{_ as Z}from"./YunCard.vue_vue_type_script_setup_true_lang-2ef9f914.js";import{_ as tt}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-a8217403.js";import{_ as et}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-518a7645.js";const st={"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},nt={"inline-flex":""},ot={"inline-flex":"",text:"xs"},at=x({__name:"YunLayoutPostTag",props:{title:{},count:{}},setup($){return(n,p)=>(s(),C("span",st,[i("span",nt,"#"+_(n.title),1),i("span",ot,"["+_(n.count)+"]",1)]))}}),rt={class:"yun-text-light",text:"center",p:"2"},it={class:"justify-center items-end",flex:"~ wrap",gap:"1"},pt=x({__name:"tags",setup($){N([V({"@type":"CollectionPage"})]);const n=A(),p=E(),w=I(),{t:f}=R(),l=z(),{tags:g,getTagStyle:T}=D({primary:w.value.colors.primary}),o=v(()=>n.query.tag||""),k=H(),P=v(()=>k.postList.filter(e=>e.tags?typeof e.tags=="string"?e.tags===o.value:e.tags.includes(o.value):!1)),d=O(),{show:S}=W(d);function b(c){p.push({query:{tag:c}}),S()}const Y=G(l);return(c,e)=>{const h=et,B=at,L=J("router-view"),j=tt,q=Z,F=X;return s(),m(F,null,{"main-header":a(()=>[r(h,{title:t(Y)||t(f)("menu.tags"),icon:t(l).icon||"i-ri-tag-line",color:t(l).color},null,8,["title","icon","color"])]),"main-content":a(()=>[i("div",rt,_(t(f)("counter.tags",Array.from(t(g)).length)),1),i("div",it,[(s(!0),C(Q,null,K(Array.from(t(g)).sort(),([u,y])=>(s(),m(B,{key:u,title:u,count:y.count,style:M(t(T)(y.count)),onClick:lt=>b(u.toString())},null,8,["title","count","style","onClick"]))),128))]),r(L)]),"main-nav-before":a(()=>[o.value?(s(),m(q,{key:0,ref_key:"collapse",ref:d,m:"t-4",w:"full"},{default:a(()=>[r(h,{title:o.value,icon:"i-ri-hashtag"},null,8,["title"]),r(j,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:P.value},null,8,["posts"])]),_:1},512)):U("v-if",!0)]),_:1})}}});export{pt as default};
