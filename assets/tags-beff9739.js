import{d as L,a1 as N,a0 as R,i as V,u as Y,y as j,ag as A,Q as d,Z as E,j as I,a7 as z,P as D,c as h,w as n,a4 as H,o,q as a,f as t,g as r,t as u,b as y,e as Q,R as Z,F as G,h as J,a as K}from"./app-2c61fca8.js";import{_ as M}from"./YunCard.vue_vue_type_style_index_0_lang-6b6a966c.js";import{_ as O}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-2a5d73d3.js";import{_ as U}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-9fb0f479.js";const W={class:"yun-text-light",text:"center",p:"2"},X={class:"justify-center items-end",flex:"~ wrap",gap:"1"},tt=["onClick"],et={"inline-flex":""},st={"inline-flex":"",text:"xs"},ct=L({__name:"tags",setup(nt){const x=N(),v=R(),C=V(),{t:m}=Y(),i=j(),{tags:_,getTagStyle:w}=A({primary:C.value.colors.primary}),s=d(()=>x.query.tag||""),S=E(),T=d(()=>S.postList.filter(e=>e.tags?typeof e.tags=="string"?e.tags===s.value:e.tags.includes(s.value):!1)),p=I(),{show:b}=z(p),k=l=>{v.push({query:{tag:l}}),b()},B=D(i);return(l,e)=>{const f=U,P=K("router-view"),$=O,q=M,F=H;return o(),h(F,null,{"main-header":n(()=>[a(f,{title:t(B)||t(m)("menu.tags"),icon:t(i).icon||"i-ri-tag-line",color:t(i).color},null,8,["title","icon","color"])]),"main-content":n(()=>[r("div",W,u(t(m)("counter.tags",Array.from(t(_)).length)),1),r("div",X,[(o(!0),y(G,null,Q(Array.from(t(_)).sort(),([c,g])=>(o(),y("span",{key:c,"inline-flex":"",my:"2",class:"post-tag cursor-pointer items-baseline leading-4",style:Z(t(w)(g.count)),p:"1",onClick:ot=>k(c.toString())},[r("span",et,"#"+u(c),1),r("span",st,"["+u(g.count)+"]",1)],12,tt))),128))]),a(P)]),"main-nav-before":n(()=>[t(s)?(o(),h(q,{key:0,ref_key:"collapse",ref:p,m:"t-4",w:"full"},{default:n(()=>[a(f,{title:t(s),icon:"i-ri-hashtag"},null,8,["title"]),a($,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:t(T)},null,8,["posts"])]),_:1},512)):J("v-if",!0)]),_:1})}}});export{ct as default};