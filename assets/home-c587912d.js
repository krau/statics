import{_ as H}from"./YunFooter.vue_vue_type_script_setup_true_lang-6f337824.js";import{g as b,o as n,j as s,b as _,r as k,m as x,q as w,L as M,t as f,a as h,_ as C,ak as L,W as m,F as S,k as z,n as B,a0 as Y,l as v,c as y,e as g,al as A,C as F,am as V,u as j,i as D,an as E}from"./app-6995c9ef.js";const G={class:"yun-notice"},P=["innerHTML"],R=b({__name:"YunNotice",props:{content:{}},setup(p){return(e,o)=>(n(),s("div",G,[_("span",{innerHTML:e.content},null,8,P),k(e.$slots,"default")]))}});const W={class:"say"},q={key:0,class:"say-content animate-fade-in animate-iteration-1"},O={key:1,class:"say-author"},I={key:2,class:"say-from"},J=b({__name:"YunSay",setup(p){const e=x(),o=w(""),a=w(""),u=w("");function l(){const t=e.value.say.hitokoto.enable?e.value.say.hitokoto.api:e.value.say.api;t&&fetch(t).then(c=>{if(c.ok)c.json().then(i=>{if(e.value.say.hitokoto.enable)o.value=i.hitokoto,a.value=i.from_who,u.value=i.from;else{const r=i[Math.floor(Math.random()*i.length)];r.content?(o.value=r.content,a.value=r.author,u.value=r.from):o.value=r}});else throw new Error(`${e.value.say.api}, HTTP error, status = ${c.status}`)}).catch(c=>{console.error(c.message)})}return M(()=>{l()}),(t,c)=>(n(),s("div",W,[o.value?(n(),s("span",q,f(o.value),1)):h("v-if",!0),a.value?(n(),s("span",O,f(a.value),1)):h("v-if",!0),u.value?(n(),s("span",I,f(u.value),1)):h("v-if",!0)]))}});const K={},Q={class:"go-down","aria-label":"go-down",href:"javascript:window.scrollTo(0, window.banner.clientHeight);"},U=_("div",{"i-ri-arrow-down-s-line":"","inline-flex":""},null,-1),X=[U];function Z(p,e){return n(),s("a",Q,X)}const ee=C(K,[["render",Z]]);const ne={},te={class:"yun-cloud"},se=L('<svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" fill="var(--yun-c-cloud)"></path></defs><g class="parallax"><use xlink:href="#gentle-wave" x="48" y="0"></use><use xlink:href="#gentle-wave" x="48" y="3"></use><use xlink:href="#gentle-wave" x="48" y="5"></use><use xlink:href="#gentle-wave" x="48" y="7"></use></g></svg>',1),oe=[se];function ae(p,e){return n(),s("div",te,oe)}const ce=C(ne,[["render",ae]]),re=_("div",{class:"banner-line-container"},[_("div",{class:"banner-line vertical-line-top"})],-1),le={class:"banner-char-container"},ie={class:"char"},_e=_("div",{class:"banner-line-container bottom"},[_("div",{class:"banner-line vertical-line-bottom"})],-1),ue=b({__name:"YunBanner",setup(p){const e=x(),o=m(()=>{const l=[];for(let t=0;t<e.value.banner.title.length;t++){const c=A(1.5,3.5);l.push(c)}return l}),a=m(()=>o.value.reduce((l,t)=>l+t,0)/2),u=m(()=>({"--banner-line-height":`calc(var(--banner-height, 100vh) / 2 - ${a.value}rem)`}));return(l,t)=>{var r;const c=ce,i=ee;return n(),s("div",{id:"banner",style:Y(u.value)},[re,_("div",le,[(n(!0),s(S,null,z(v(e).banner.title,($,d)=>(n(),s("div",{key:d,class:"char-box"},[_("span",{class:B([d%2!==0?"char-right":"char-left"]),style:Y({"--banner-char-size":`${o.value[d]}rem`})},[_("span",ie,f($),1)],6)]))),128))]),_e,(r=v(e).banner.cloud)!=null&&r.enable?(n(),y(c,{key:0})):h("v-if",!0),g(i)],4)}}});const pe=b({__name:"home",setup(p){const e=F(),o=V("home"),a=x(),u=j(),l=m(()=>u.path.startsWith("/page"));return(t,c)=>{const i=E,r=ue,$=J,d=R,N=D("router-view"),T=H;return n(),s("main",{class:B(["yun-main flex-center",v(o)&&!v(e).isSidebarOpen&&"pl-0"]),flex:"~ col",w:"full"},[g(i),l.value?h("v-if",!0):(n(),s(S,{key:0},[v(a).banner.enable?(n(),y(r,{key:0})):h("v-if",!0),v(a).say.enable?(n(),y($,{key:1,w:"full"})):h("v-if",!0)],64)),v(a).notice.enable?(n(),y(d,{key:1,content:v(a).notice.content,mt:"4"},null,8,["content"])):h("v-if",!0),k(t.$slots,"board"),k(t.$slots,"default",{},()=>[g(N)]),g(T)],2)}}});export{pe as default};