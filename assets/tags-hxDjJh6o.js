import{_ as A}from"./YunCard.vue_vue_type_script_setup_true_lang-OQy_RVkS.js";import{_ as D}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-CmY9MQIG.js";import{h as S,o as t,k as _,f as c,t as p,am as E,an as I,a as j,i as z,B as H,q as K,K as O,aF as W,l as $,y as G,C as J,ar as M,aa as Q,r as U,c as a,w as s,d as X,b as r,ao as Z,u as e,F as b,m as ee,v as te,e as se,al as ne}from"./app-UWR6Q9pm.js";import{_ as oe}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-DmgBg_Ey.js";const ae={"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},re={"inline-flex":""},le={"inline-flex":"",text:"xs"},ie=S({__name:"YunLayoutPostTag",props:{title:{},count:{}},setup(k){return(l,f)=>(t(),_("span",ae,[c("span",re,"#"+p(l.title),1),c("span",le,"["+p(l.count)+"]",1)]))}}),ce={class:"yun-text-light",text:"center",p:"2"},ue={class:"justify-center items-end",flex:"~ wrap",gap:"1"},ge=S({__name:"tags",setup(k){E([I({"@type":"CollectionPage"})]);const l=j(),f=z(),w=H(),{t:d}=K(),u=O(),{tags:g,getTagStyle:T}=W({primary:w.value.colors.primary}),i=$(()=>l.query.tag||""),P=G(),Y=$(()=>P.postList.filter(o=>o.tags?typeof o.tags=="string"?o.tags===i.value:o.tags.includes(i.value):!1)),y=J(),{show:B}=M(y);function V(n){f.push({query:{tag:n}}),B()}const F=Q(u);return(n,o)=>{const h=ne,v=oe,L=ie,C=U("RouterView"),R=D,q=A;return t(),_(b,null,[n.$slots["sidebar-child"]?(t(),a(h,{key:0},{default:s(()=>[X(n.$slots,"sidebar-child")]),_:3})):(t(),a(h,{key:1})),r(C,null,{default:s(({Component:N})=>[(t(),a(Z(N),null,{"main-header":s(()=>[r(v,{title:e(F)||e(d)("menu.tags"),icon:e(u).icon||"i-ri-tag-line",color:e(u).color},null,8,["title","icon","color"])]),"main-content":s(()=>[c("div",ce,p(e(d)("counter.tags",Array.from(e(g)).length)),1),c("div",ue,[(t(!0),_(b,null,ee(Array.from(e(g)).sort(),([m,x])=>(t(),a(L,{key:m,title:m,count:x.count,style:te(e(T)(x.count)),onClick:me=>V(m.toString())},null,8,["title","count","style","onClick"]))),128))]),r(C)]),"main-nav-before":s(()=>[i.value?(t(),a(q,{key:0,ref_key:"collapse",ref:y,m:"t-4",w:"full"},{default:s(()=>[r(v,{title:i.value,icon:"i-ri-hashtag"},null,8,["title"]),r(R,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:Y.value},null,8,["posts"])]),_:1},512)):se("v-if",!0)]),_:2},1024))]),_:1})],64)}}});export{ge as default};