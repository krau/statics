import{g as f,u as x,S as $,Q as g,o as s,i as c,b as o,t as m,k as e,a as u,m as Y,F as z,j as P,W as V,n as k,c as d,a3 as L,D as j,A as B,aj as M,a7 as T,ak as A,w as y,a6 as F,e as v,r as N}from"./app-4d4a67d5.js";import{a as U,b as W,_ as H}from"./YunPostMeta.vue_vue_type_style_index_0_lang-7b3188f9.js";const R={class:"post-copyright"},q={class:"post-copyright-author"},D={key:0,class:"post-copyright-link"},Q=["href"],E={class:"post-copyright-license"},I=["innerHTML"],O=f({__name:"ValaxyCopyright",props:{url:{default:""}},setup(l){const{t:n,locale:a}=x(),t=$(),i=t.value.license.type==="zero"?"1.0":"4.0",_=t.value.license.type==="zero"?"publicdomain":"licenses",r=g(()=>{const h=t.value.license.language?t.value.license.language:a.value==="zh-CN"?"zh":"en";return`https://creativecommons.org/${_}/${t.value.license.type}/${i}/deed.${h}`}),p=g(()=>n("post.copyright.license_content",[`<a href="${r.value}" target="_blank" rel="noopener" title="CC ${`${t.value.license.type.toUpperCase()} ${i}`} ">CC ${t.value.license.type.toUpperCase()}</a>`]));return(h,C)=>(s(),c("ul",R,[o("li",q,[o("strong",null,m(e(n)("post.copyright.author")+e(n)("symbol.colon")),1),o("span",null,m(e(t).author.name),1)]),l.url?(s(),c("li",D,[o("strong",null,m(e(n)("post.copyright.link")+e(n)("symbol.colon")),1),o("a",{href:l.url},m(l.url),9,Q)])):u("v-if",!0),o("li",E,[o("strong",null,m(e(n)("post.copyright.license_title")+e(n)("symbol.colon")),1),o("span",{innerHTML:e(p)},null,8,I)])]))}});const G={class:"yun-sponsor-container flex-center flex-col"},J=["title"],K=o("div",{"i-ri-heart-line":""},null,-1),X=[K],Z=["href"],ee=["src","title"],te=f({__name:"YunSponsor",setup(l){const{t:n}=x(),a=$(),t=Y(!1);return(i,_)=>(s(),c("div",G,[o("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:e(n)("reward.donate"),text:"red-400",onClick:_[0]||(_[0]=r=>t.value=!t.value)},X,8,J),o("div",{class:k(["qrcode-container qrcode flex justify-around",t.value&&"show"]),m:"y-4"},[(s(!0),c(z,null,P(e(a).sponsor.methods,(r,p)=>(s(),c("a",{key:p,class:"flex-center flex-col animate-iteration-1 animate-fade-in",href:r.url,target:"_blank",style:V(`color:${r.color}`)},[o("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:r.url,title:r.name},null,8,ee),o("div",{text:"xl",m:"2",class:k(r.icon)},null,2)],12,Z))),128))],2)]))}});const ne={class:"inline-flex",text:"sm",py:"1"},oe={key:1,mx:"2"},se=f({__name:"YunPostCategoriesAndTags",props:{frontmatter:null},setup(l){return(n,a)=>{const t=U,i=W;return s(),c("div",ne,[l.frontmatter.categories?(s(),d(t,{key:0,categories:l.frontmatter.categories},null,8,["categories"])):u("v-if",!0),l.frontmatter.categories&&l.frontmatter.tags?(s(),c("span",oe,"-")):u("v-if",!0),l.frontmatter.tags?(s(),d(i,{key:2,tags:l.frontmatter.tags},null,8,["tags"])):u("v-if",!0)])}}}),ae={key:0,flex:"~",text:"sm",py:"1"},le=["title"],ie=o("div",{"inline-flex":"","i-ri-eye-line":""},null,-1),re=["data-path"],ce=["title"],ue=o("div",{"inline-flex":"","i-ri-chat-4-line":""},null,-1),_e=["data-path"],pe=f({__name:"YunWalineMeta",setup(l){const n=L(),a=j(),t=g(()=>a.value.addons["valaxy-addon-waline"]),{t:i}=x();return(_,r)=>e(t)&&e(t).options?(s(),c("div",ae,[e(t).options.pageview?(s(),c("div",{key:0,"inline-flex":"",justify:"center",items:"center",mx:"2",title:e(i)("post.pageview_count")},[ie,o("span",{"ml-1":"","inline-flex":"",class:"waline-pageview-count","data-path":e(n).path},null,8,re)],8,le)):u("v-if",!0),e(t).options.comment?(s(),c("div",{key:1,"inline-flex":"",justify:"center",items:"center",mx:"2",title:e(i)("post.comment_count")},[ue,o("span",{"ml-1":"","inline-flex":"",class:"waline-comment-count","data-path":e(n).path},null,8,_e)],8,ce)):u("v-if",!0)])):u("v-if",!0)}}),fe=f({__name:"post",setup(l){const n=$(),a=B(),t=M(),i=g(()=>typeof a.value.sponsor=="boolean"?a.value.sponsor:n.value.sponsor.enable);return T(A({"@type":"BlogPosting",headline:a.value.title,description:a.value.description,author:[{name:n.value.author.name,url:n.value.author.link}]})),(_,r)=>{const p=H,h=pe,C=se,b=te,w=O,S=F;return s(),d(S,null,{"main-header-after":y(()=>[v(p,{frontmatter:e(a)},null,8,["frontmatter"]),v(h),v(C,{frontmatter:e(a)},null,8,["frontmatter"])]),"main-content-after":y(()=>[e(i)?(s(),d(b,{key:0,m:"t-6"})):u("v-if",!0),e(a).copyright||e(n).license.enabled?(s(),d(w,{key:1,url:e(t),m:"y-4"},null,8,["url"])):u("v-if",!0)]),"aside-custom":y(()=>[N(_.$slots,"aside-custom")]),_:3})}}});export{fe as default};