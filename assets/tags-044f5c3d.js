import{g as x,o as s,j as C,b as i,t as _,ay as j,az as q,u as F,aj as z,m as A,h as E,B as I,aL as D,N as v,ap as H,q as K,aB as O,ai as W,i as G,c as m,w as a,e as r,l as t,k as J,K as M,F as Q,a as U,aw as X}from"./app-5c91788f.js";import{_ as Z}from"./YunCard.vue_vue_type_script_setup_true_lang-13846db1.js";import{_ as tt}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-992a73a9.js";import{_ as et}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-c55a3635.js";const st={"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},nt={"inline-flex":""},ot={"inline-flex":"",text:"xs"},at=x({__name:"YunLayoutPostTag",props:{title:{},count:{}},setup(w){return(n,p)=>(s(),C("span",st,[i("span",nt,"#"+_(n.title),1),i("span",ot,"["+_(n.count)+"]",1)]))}}),rt={class:"yun-text-light",text:"center",p:"2"},it={class:"justify-center items-end",flex:"~ wrap",gap:"1"},pt=x({__name:"tags",setup(w){j([q({"@type":"CollectionPage"})]);const n=F(),p=z(),T=A(),{t:f}=E(),l=I(),{tags:g,getTagStyle:$}=D({primary:T.value.colors.primary}),o=v(()=>n.query.tag||""),P=H(),S=v(()=>P.postList.filter(e=>e.tags?typeof e.tags=="string"?e.tags===o.value:e.tags.includes(o.value):!1)),d=K(),{show:b}=O(d);function k(c){p.push({query:{tag:c}}),b()}const B=W(l);return(c,e)=>{const y=et,L=at,Y=G("RouterView"),V=tt,N=Z,R=X;return s(),m(R,null,{"main-header":a(()=>[r(y,{title:t(B)||t(f)("menu.tags"),icon:t(l).icon||"i-ri-tag-line",color:t(l).color},null,8,["title","icon","color"])]),"main-content":a(()=>[i("div",rt,_(t(f)("counter.tags",Array.from(t(g)).length)),1),i("div",it,[(s(!0),C(Q,null,J(Array.from(t(g)).sort(),([u,h])=>(s(),m(L,{key:u,title:u,count:h.count,style:M(t($)(h.count)),onClick:lt=>k(u.toString())},null,8,["title","count","style","onClick"]))),128))]),r(Y)]),"main-nav-before":a(()=>[o.value?(s(),m(N,{key:0,ref_key:"collapse",ref:d,m:"t-4",w:"full"},{default:a(()=>[r(y,{title:o.value,icon:"i-ri-hashtag"},null,8,["title"]),r(V,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:S.value},null,8,["posts"])]),_:1},512)):U("v-if",!0)]),_:1})}}});export{pt as default};
