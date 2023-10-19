import{_ as H}from"./YunFooter.vue_vue_type_script_setup_true_lang-3fd30411.js";import{g as x,o as n,j as o,b as i,r as Y,m as C,q as f,K as M,t as y,a as v,_ as B,aq as L,$ as g,n as b,F as N,k as z,a5 as S,l as u,c as $,e as w,ar as A,C as F,as as V,u as j,i as D,ai as E}from"./app-656b4539.js";const q={class:"yun-notice m-auto"},G=["innerHTML"],P=x({__name:"YunNotice",props:{content:{}},setup(d){return(e,a)=>(n(),o("div",q,[i("span",{innerHTML:e.content},null,8,G),Y(e.$slots,"default")]))}});const R={class:"say"},K={key:0,class:"say-content animate-fade-in animate-iteration-1"},O={key:1,class:"say-author"},W={key:2,class:"say-from"},I=x({__name:"YunSay",setup(d){const e=C(),a=f(""),c=f(""),_=f("");function h(){const s=e.value.say.hitokoto.enable?e.value.say.hitokoto.api:e.value.say.api;s&&fetch(s).then(t=>{if(t.ok)t.json().then(r=>{if(e.value.say.hitokoto.enable)a.value=r.hitokoto,c.value=r.from_who,_.value=r.from;else{const l=r[Math.floor(Math.random()*r.length)];l.content?(a.value=l.content,c.value=l.author,_.value=l.from):a.value=l}});else throw new Error(`${e.value.say.api}, HTTP error, status = ${t.status}`)}).catch(t=>{console.error(t.message)})}return M(()=>{h()}),(s,t)=>(n(),o("div",R,[a.value?(n(),o("span",K,y(a.value),1)):v("v-if",!0),c.value?(n(),o("span",O,y(c.value),1)):v("v-if",!0),_.value?(n(),o("span",W,y(_.value),1)):v("v-if",!0)]))}});const J={},Q={class:"go-down","aria-label":"go-down",href:"javascript:window.scrollTo(0, window.banner.clientHeight);"},U=i("div",{"i-ri-arrow-down-s-line":"","inline-flex":""},null,-1),X=[U];function Z(d,e){return n(),o("a",Q,X)}const ee=B(J,[["render",Z]]);const ne={},te={class:"yun-cloud"},se=L('<svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" fill="var(--yun-c-cloud)"></path></defs><g class="parallax"><use xlink:href="#gentle-wave" x="48" y="0"></use><use xlink:href="#gentle-wave" x="48" y="3"></use><use xlink:href="#gentle-wave" x="48" y="5"></use><use xlink:href="#gentle-wave" x="48" y="7"></use></g></svg>',1),oe=[se];function ae(d,e){return n(),o("div",te,oe)}const ce=B(ne,[["render",ae]]),re={class:"banner-line-container"},le={class:"banner-char-container"},ie={class:"char"},_e={class:"banner-line-container bottom"},ue=x({__name:"YunBanner",setup(d){const e=C(),a=g(()=>{const s=[];for(let t=0;t<e.value.banner.title.length;t++){const r=A(1.5,3.5);s.push(r)}return s}),c=g(()=>a.value.reduce((s,t)=>s+t,0)/2),_=g(()=>({"--banner-line-height":`calc(var(--banner-height, 100vh) / 2 - ${c.value}rem)`})),h=f(!0);return(s,t)=>{var m;const r=ce,l=ee;return n(),o("div",{id:"yun-banner",style:S(_.value)},[i("div",re,[i("div",{class:b(["banner-line vertical-line-top",{active:h.value}])},null,2)]),i("div",le,[(n(!0),o(N,null,z(u(e).banner.title,(k,p)=>(n(),o("div",{key:p,class:"char-box"},[i("span",{class:b([p%2!==0?"char-right":"char-left"]),style:S({"--banner-char-size":`${a.value[p]}rem`})},[i("span",ie,y(k),1)],6)]))),128))]),i("div",_e,[i("div",{class:b(["banner-line vertical-line-bottom",{active:h.value}])},null,2)]),(m=u(e).banner.cloud)!=null&&m.enable?(n(),$(r,{key:0})):v("v-if",!0),w(l)],4)}}});const de=x({__name:"home",setup(d){const e=F(),a=V("home"),c=C(),_=j(),h=g(()=>_.path.startsWith("/page"));return(s,t)=>{const r=E,l=ue,m=I,k=P,p=D("router-view"),T=H;return n(),o("main",{class:b(["yun-main flex-center",u(a)&&!u(e).isSidebarOpen?"pl-0":"md:pl-$va-sidebar-width"]),flex:"~ col",w:"full"},[w(r,{"show-hamburger":!0}),h.value?v("v-if",!0):(n(),o(N,{key:0},[u(c).banner.enable?(n(),$(l,{key:0})):v("v-if",!0),u(c).say.enable?(n(),$(m,{key:1,w:"full"})):v("v-if",!0)],64)),u(c).notice.enable?(n(),$(k,{key:1,content:u(c).notice.content,mt:"4"},null,8,["content"])):v("v-if",!0),Y(s.$slots,"board"),Y(s.$slots,"default",{},()=>[w(p)]),w(T)],2)}}});export{de as default};
