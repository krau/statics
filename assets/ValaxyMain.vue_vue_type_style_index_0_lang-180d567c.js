import{g as x,u as D,h as j,o as u,i as v,F as q,j as U,k as e,b as a,t as g,c as w,a as f,n as I,_ as G,l as W,m as E,q as J,s as K,v as Z,x as X,e as p,y as tt,z as et,A as nt,B as ot,r as d,C as st,D as at,E as F,w as $,G as L,H as rt,I as lt,J as P,K as it,L as ct,M as ut,N as dt,O as mt,P as _t,Q as R,R as ft,S as vt,T as pt,U as ht,V as yt,W as $t}from"./app-33d1cfaa.js";import{_ as gt}from"./YunFooter.vue_vue_type_script_setup_true_lang-070eacdb.js";import{_ as H}from"./YunCard.vue_vue_type_style_index_0_lang-cdbd5503.js";import{_ as kt}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-5dcc30b5.js";const wt=["lang"],xt=["href"],bt=x({__name:"YunOutlineItem",props:{headers:null,onClick:{type:Function},root:{type:Boolean}},setup(t){const{locale:n}=D();return(r,l)=>{const c=j("YunOutlineItem",!0);return u(),v("ul",{class:I(t.root?"root":"nested")},[(u(!0),v(q,null,U(t.headers,({children:o,link:_,title:i,lang:s})=>(u(),v("li",{key:_,class:"va-toc-item",lang:s||e(n)},[a("a",{class:"outline-link",href:_,onClick:l[0]||(l[0]=(...m)=>t.onClick&&t.onClick(...m))},g(i),9,xt),o!=null&&o.length?(u(),w(c,{key:0,headers:o,"on-click":t.onClick},null,8,["headers","on-click"])):f("v-if",!0)],8,wt))),128))],2)}}});const Ct=G(bt,[["__scopeId","data-v-00264c1d"]]),Yt=t=>(tt("data-v-3ec1ec4d"),t=t(),et(),t),Ot={class:"content"},Tt={class:"outline-title"},Mt={"aria-labelledby":"doc-outline-aria-label"},It=Yt(()=>a("span",{id:"doc-outline-aria-label",class:"visually-hidden"}," Table of Contents for current page ",-1)),St=x({__name:"YunOutline",setup(t){const n=W(),r=E(),l=E();J(r,l);const{headers:c,handleClick:o}=K();return(_,i)=>{const s=Ct;return Z((u(),v("div",{ref_key:"container",ref:r},[a("div",Ot,[a("div",Tt,g(e(n).outlineTitle||"On this page"),1),a("div",{ref_key:"marker",ref:l,class:"outline-marker"},null,512),a("nav",Mt,[It,p(s,{class:"va-toc relative z-1",headers:e(c),"on-click":e(o),root:""},null,8,["headers","on-click"])])])],512)),[[X,e(c).length]])}}});const Pt=G(St,[["__scopeId","data-v-3ec1ec4d"]]),Vt=a("div",{"i-ri-file-list-line":""},null,-1),At=[Vt],Nt={class:"aside-container",flex:"~ col",overflow:"auto"},Bt={key:0,m:"t-6 b-2",font:"serif black"},Et=a("div",{class:"flex-grow"},null,-1),Rt={key:2,class:"custom-container"},zt=x({__name:"YunAside",setup(t){const n=nt(),{t:r}=D(),l=ot();return(c,o)=>{const _=st,i=Pt;return u(),v(q,null,[a("button",{class:"xl:hidden toc-btn shadow fixed yun-icon-btn z-350",opacity:"75",right:"2",bottom:"19",onClick:o[0]||(o[0]=s=>e(l).toggleRightSidebar())},At),p(_,{show:e(l).isRightSidebarOpen,onClick:o[1]||(o[1]=s=>e(l).toggleRightSidebar())},null,8,["show"]),f("  "),a("aside",{class:I(["va-card aside",e(l).isRightSidebarOpen&&"open"]),m:"l-4",text:"center"},[a("div",Nt,[e(n).toc!==!1?(u(),v("h2",Bt,g(e(r)("sidebar.toc")),1)):f("v-if",!0),e(n).toc!==!1?(u(),w(i,{key:1})):f("v-if",!0),Et,c.$slots.default?(u(),v("div",Rt,[d(c.$slots,"default")])):f("v-if",!0)])],2)],64)}}});const Dt=x({__name:"YunComment",setup(t){const n=at(),r=n.value.addons["valaxy-addon-waline"]?F(()=>L(()=>import("./YunWaline-79c4db60.js"),["assets/YunWaline-79c4db60.js","assets/app-33d1cfaa.js","assets/index-0b2fc2af.css","assets/YunWaline-ff1b7c43.css"])):()=>null,l=n.value.addons["valaxy-addon-twikoo"]?F(()=>L(()=>import("./YunTwikoo-43ba699f.js"),["assets/YunTwikoo-43ba699f.js","assets/app-33d1cfaa.js","assets/index-0b2fc2af.css"])):()=>null;return(c,o)=>{const _=j("ClientOnly"),i=H;return u(),w(i,{w:"full",p:"4",class:"comment sm:p-6 lg:px-12 xl:px-16"},{default:$(()=>[p(_,null,{default:$(()=>[p(e(r)),p(e(l))]),_:1})]),_:1})}}}),jt={class:"post-nav"},Ft={class:"post-nav-item"},Lt=a("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1),qt={class:"title truncate",text:"sm"},Gt={class:"post-nav-item"},Ht={class:"title truncate",text:"sm"},Qt=a("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1),Ut=x({__name:"YunPostNav",setup(t){const[n,r]=rt();return(l,c)=>{const o=j("router-link");return u(),v("div",jt,[a("div",Ft,[e(n)?(u(),w(o,{key:0,class:"post-nav-prev",to:e(n).path||"",title:e(n).title},{default:$(()=>[Lt,a("span",qt,g(e(n).title),1)]),_:1},8,["to","title"])):f("v-if",!0)]),a("div",Gt,[e(r)?(u(),w(o,{key:0,to:e(r).path||"",title:e(r).title,class:"post-nav-next"},{default:$(()=>[a("span",Ht,g(e(r).title),1),Qt]),_:1},8,["to","title"])):f("v-if",!0)])])}}});var z={},Wt={get exports(){return z},set exports(t){z=t}};(function(t,n){(function(r,l){t.exports=l()})(lt,function(){return function(r,l,c){r=r||{};var o=l.prototype,_={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(m,h,k,Y){return o.fromToBase(m,h,k,Y)}c.en.relativeTime=_,o.fromToBase=function(m,h,k,Y,S){for(var O,b,T,V=k.$locale().relativeTime||_,A=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],Q=A.length,M=0;M<Q;M+=1){var y=A[M];y.d&&(O=Y?c(m).diff(k,y.d,!0):k.diff(m,y.d,!0));var C=(r.rounding||Math.round)(Math.abs(O));if(T=O>0,C<=y.r||!y.r){C<=1&&M>0&&(y=A[M-1]);var N=V[y.l];S&&(C=S(""+C)),b=typeof N=="string"?N.replace("%d",C):N(C,h,y.l,T);break}}if(h)return b;var B=T?V.future:V.past;return typeof B=="function"?B(b):B.replace("%s",b)},o.to=function(m,h){return i(m,h,this,!0)},o.from=function(m,h){return i(m,h,this)};var s=function(m){return m.$u?c.utc():c()};o.toNow=function(m){return this.to(s(this),m)},o.fromNow=function(m){return this.from(s(this),m)}}})})(Wt);const Jt=z,Kt={key:0,op:"80"},Zt={text:"center"},Xt=["href"],te={m:"y-4",class:"end flex justify-center items-center"},ee=a("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),ne={p:"x-4",font:"serif bold",class:"whitespace-nowrap"},oe=a("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),se=x({__name:"ValaxyMd",props:{frontmatter:null,excerpt:null},setup(t){const n=t;P.extend(Jt);const r=it("onContentUpdated"),{t:l}=D(),c=E();function o(){var i;ft(c.value),(i=r.value)==null||i.call(r)}ct(()=>{o()}),n.frontmatter.aplayer&&ut(),n.frontmatter.codepen&&dt(),mt(),(typeof n.frontmatter.medium_zoom>"u"||n.frontmatter.medium_zoom)&&_t();const _=R(()=>{const i=P().valueOf()-P(n.frontmatter.updated).valueOf();return typeof n.frontmatter.time_warning=="number"?i>n.frontmatter.time_warning:n.frontmatter.time_warning||i>30*24*60*60*1e3});return(i,s)=>i.$slots.default?(u(),v("article",{key:0,class:I(t.frontmatter.markdown!==!1&&"markdown-body")},[e(_)?(u(),v("blockquote",Kt,g(e(l)("post.time_warning",{ago:e(P)(t.frontmatter.updated).fromNow()})),1)):f("v-if",!0),d(i.$slots,"default",{ref_key:"content",ref:c,onVnodeUpdated:o}),a("div",Zt,[t.frontmatter.url?(u(),v("a",{key:0,href:t.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},g(e(l)("post.view_link")),9,Xt)):f("v-if",!0)]),t.frontmatter.end!==void 0?d(i.$slots,"end",{key:1},()=>[a("div",te,[ee,a("span",ne,g(t.frontmatter.end?"Q.E.D.":"To Be Continued."),1),oe])]):f("v-if",!0)],2)):f("v-if",!0)}});const ae={class:"yun-main lt-md:ml-0",flex:"~"},re={w:"full",flex:"~"},le={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},me=x({__name:"ValaxyMain",props:{frontmatter:null,data:null},setup(t){const n=t,r=vt(),{styles:l,icon:c,color:o}=pt(n.frontmatter.type),_=ht(R(()=>n.frontmatter)),i=R(()=>n.frontmatter.aside!==!1);return(s,m)=>{const h=kt,k=se,Y=H,S=Ut,O=Dt,b=gt,T=zt;return u(),v("main",ae,[a("div",re,[d(s.$slots,"main",{},()=>[a("div",{class:I(["content",!e(i)&&"no-aside"]),flex:"~ col grow",w:"full",p:"l-4 lt-md:0"},[p(Y,{cover:t.frontmatter.cover,m:"0",class:"relative",style:$t(e(l))},{default:$(()=>[d(s.$slots,"main-header",{},()=>[p(h,{title:e(_),icon:t.frontmatter.icon||e(c),color:t.frontmatter.color||e(o),cover:t.frontmatter.cover},null,8,["title","icon","color","cover"])]),d(s.$slots,"main-header-after"),a("div",le,[d(s.$slots,"main-content",{},()=>[p(yt,{appear:""},{default:$(()=>[p(k,{frontmatter:t.frontmatter},{default:$(()=>[d(s.$slots,"main-content-md"),d(s.$slots,"default")]),_:3},8,["frontmatter"])]),_:3})]),d(s.$slots,"main-content-after")])]),_:3},8,["cover","style"]),d(s.$slots,"main-nav-before"),d(s.$slots,"main-nav",{},()=>[t.frontmatter.nav!==!1?(u(),w(S,{key:0})):f("v-if",!0)]),d(s.$slots,"main-nav-after"),e(r).comment.enable&&t.frontmatter.comment!==!1?d(s.$slots,"comment",{key:0},()=>[p(O,{class:I(t.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):f("v-if",!0),d(s.$slots,"main-footer-before"),p(b),d(s.$slots,"main-footer-after")],2)]),d(s.$slots,"aside",{},()=>[e(i)?(u(),w(T,{key:0},{default:$(()=>[d(s.$slots,"aside-custom")]),_:3})):f("v-if",!0)])])])}}});export{me as _};
