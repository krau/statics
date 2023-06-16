import{g as h,u as $,S as x,R as f,o as a,i as r,b as s,t as m,k as n,a as c,m as Y,F as z,j as P,W as V,n as k,c as d,a4 as B,D as L,A as T,al as M,a9 as j,am as A,w as g,e as y,r as F,a8 as N}from"./app-decf7611.js";import{a as R,b as U,_ as W}from"./YunPostMeta.vue_vue_type_style_index_0_lang-c1df9db0.js";const H={class:"post-copyright"},q={class:"post-copyright-author"},D={key:0,class:"post-copyright-link"},E=["href"],I={class:"post-copyright-license"},O=["innerHTML"],Q=h({__name:"ValaxyCopyright",props:{url:{default:""}},setup(v){const{t:e,locale:o}=$(),t=x(),l=t.value.license.type==="zero"?"1.0":"4.0",_=t.value.license.type==="zero"?"publicdomain":"licenses",p=f(()=>{const u=t.value.license.language?t.value.license.language:o.value==="zh-CN"?"zh":"en";return`https://creativecommons.org/${_}/${t.value.license.type}/${l}/deed.${u}`}),i=f(()=>e("post.copyright.license_content",[`<a href="${p.value}" target="_blank" rel="noopener" title="CC ${`${t.value.license.type.toUpperCase()} ${l}`} ">CC ${t.value.license.type.toUpperCase()}</a>`]));return(u,C)=>(a(),r("ul",H,[s("li",q,[s("strong",null,m(n(e)("post.copyright.author")+n(e)("symbol.colon")),1),s("span",null,m(n(t).author.name),1)]),u.url?(a(),r("li",D,[s("strong",null,m(n(e)("post.copyright.link")+n(e)("symbol.colon")),1),s("a",{href:u.url},m(u.url),9,E)])):c("v-if",!0),s("li",I,[s("strong",null,m(n(e)("post.copyright.license_title")+n(e)("symbol.colon")),1),s("span",{innerHTML:i.value},null,8,O)])]))}});const G={class:"yun-sponsor-container flex-center flex-col"},J=["title"],K=s("div",{"i-ri-heart-line":""},null,-1),X=[K],Z={key:0,class:"sponsor-description",mb:"4",text:"sm"},ee={class:"flex justify-around"},te=["href"],ne=["src","title"],se=h({__name:"YunSponsor",setup(v){const{t:e}=$(),o=x(),t=Y(!1),l=f(()=>{var _;return((_=o.value.sponsor)==null?void 0:_.title)??e("reward.donate")});return(_,p)=>(a(),r("div",G,[s("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:l.value,text:"red-400",onClick:p[0]||(p[0]=i=>t.value=!t.value)},X,8,J),s("div",{class:k(["qrcode-container qrcode flex-center flex-col",t.value&&"show"]),m:"y-4"},[n(o).sponsor.description?(a(),r("div",Z,m(n(o).sponsor.description),1)):c("v-if",!0),s("div",ee,[(a(!0),r(z,null,P(n(o).sponsor.methods,(i,u)=>(a(),r("a",{key:u,class:"flex-center flex-col animate-iteration-1 animate-fade-in",href:i.url,target:"_blank",style:V(`color:${i.color}`)},[s("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:i.url,title:i.name},null,8,ne),s("div",{text:"xl",m:"2",class:k(i.icon)},null,2)],12,te))),128))])],2)]))}});const oe={class:"inline-flex",text:"sm",py:"1"},ae={key:1,mx:"2"},le=h({__name:"YunPostCategoriesAndTags",props:{frontmatter:{}},setup(v){return(e,o)=>{const t=R,l=U;return a(),r("div",oe,[e.frontmatter.categories?(a(),d(t,{key:0,categories:e.frontmatter.categories},null,8,["categories"])):c("v-if",!0),e.frontmatter.categories&&e.frontmatter.tags?(a(),r("span",ae,"-")):c("v-if",!0),e.frontmatter.tags?(a(),d(l,{key:2,tags:e.frontmatter.tags},null,8,["tags"])):c("v-if",!0)])}}}),re={key:0,flex:"~",text:"sm",py:"1"},ie=["title"],ce=s("div",{"inline-flex":"","i-ri-eye-line":""},null,-1),ue=["data-path"],_e=["title"],pe=s("div",{"inline-flex":"","i-ri-chat-4-line":""},null,-1),me=["data-path"],de=h({__name:"YunWalineMeta",setup(v){const e=B(),o=L(),t=f(()=>o.value.addons["valaxy-addon-waline"]),{t:l}=$();return(_,p)=>t.value&&t.value.options?(a(),r("div",re,[t.value.options.pageview?(a(),r("div",{key:0,"inline-flex":"",justify:"center",items:"center",mx:"2",title:n(l)("post.pageview_count")},[ce,s("span",{"ml-1":"","inline-flex":"",class:"waline-pageview-count","data-path":n(e).path},null,8,ue)],8,ie)):c("v-if",!0),t.value.options.comment?(a(),r("div",{key:1,"inline-flex":"",justify:"center",items:"center",mx:"2",title:n(l)("post.comment_count")},[pe,s("span",{"ml-1":"","inline-flex":"",class:"waline-comment-count","data-path":n(e).path},null,8,me)],8,_e)):c("v-if",!0)])):c("v-if",!0)}}),ve=h({__name:"post",setup(v){const e=x(),o=T(),t=M(),l=f(()=>typeof o.value.sponsor=="boolean"?o.value.sponsor:e.value.sponsor.enable);return j(A({"@type":"BlogPosting",headline:o.value.title,description:o.value.description,author:[{name:e.value.author.name,url:e.value.author.link}]})),(_,p)=>{const i=W,u=de,C=le,b=se,w=Q,S=N;return a(),d(S,null,{"main-header-after":g(()=>[y(i,{frontmatter:n(o)},null,8,["frontmatter"]),y(u),y(C,{frontmatter:n(o)},null,8,["frontmatter"])]),"main-content-after":g(()=>[l.value?(a(),d(b,{key:0,m:"t-6"})):c("v-if",!0),n(o).copyright||n(e).license.enabled?(a(),d(w,{key:1,url:n(t),m:"y-4"},null,8,["url"])):c("v-if",!0)]),"aside-custom":g(()=>[F(_.$slots,"aside-custom")]),_:3})}}});export{ve as default};
