import{z as B,A as l,h,r as b,o as s,k as n,F as w,m as M,c as C,w as x,f as o,t as f,q as R,y as S,e as r,u as a,B as k,d as N}from"./app-D4mOEXGx.js";function $(m,t){const i=B(m);if(isNaN(i.getTime()))throw new RangeError("Invalid time value");const e=(t==null?void 0:t.format)??"extended",c=(t==null?void 0:t.representation)??"complete";let d="",_="";const v=e==="extended"?"-":"",D=e==="extended"?":":"";if(c!=="time"){const u=l(i.getDate(),2),p=l(i.getMonth()+1,2);d=`${l(i.getFullYear(),4)}${v}${p}${v}${u}`}if(c!=="date"){const u=i.getTimezoneOffset();if(u!==0){const y=Math.abs(u),j=l(Math.trunc(y/60),2),A=l(y%60,2);_=`${u<0?"+":"-"}${j}:${A}`}else _="Z";const p=l(i.getHours(),2),g=l(i.getMinutes(),2),L=l(i.getSeconds(),2),O=d===""?"":"T",T=[p,g,L].join(D);d=`${d}${O}${T}${_}`}return d}const Y={class:"post-tags inline-flex",items:"center",gap:"1",flex:"wrap 1",justify:"end"},me=h({__name:"YunPostTags",props:{tags:{}},setup(m){return(t,i)=>{const e=b("RouterLink");return s(),n("div",Y,[(s(!0),n(w,null,M(t.tags,(c,d)=>(s(),C(e,{key:d,to:{path:"/tags/",query:{tag:c}},class:"transition post-tag inline-flex-center text-xs border-$va-c-divider hover:text-blue-500 hover:border-blue-500","px-2":"",h:"7","rounded-full":"",border:"",bg:"hover:blue-500 hover:opacity-10"},{default:x(()=>[o("span",null,f(c),1)]),_:2},1032,["to"]))),128))])}}}),q=o("div",{m:"x-1","inline-flex":"","i-ri-folder-2-line":""},null,-1),_e=h({__name:"YunPostCategories",props:{categories:{}},setup(m){return(t,i)=>{const e=b("RouterLink");return s(),C(e,{to:{path:"/categories",query:{category:Array.isArray(t.categories)?t.categories.join("/"):t.categories}},class:"transition post-category inline-flex-center text-xs border-$va-c-divider hover:text-blue-500 hover:border-blue-500","px-2":"",h:"7",border:"","rounded-full":"",bg:"hover:blue-500 hover:opacity-10"},{default:x(()=>[q,o("span",null,f(Array.isArray(t.categories)?t.categories.join(" > "):t.categories),1)]),_:1},8,["to"])}}}),z={key:0,class:"post-draft-icon",title:"draft"},F=o("div",{"i-ri-draft-line":""},null,-1),I=[F],P=["title"],E={key:0,"i-ri-eye-close-line":""},V={key:1,"i-ri-eye-off-line":""},Z={key:2,class:"post-top-icon",color:"$va-c-warning"},H=o("div",{"i-ri-pushpin-line":""},null,-1),G=[H],J={key:3,class:"post-meta",flex:"~ col",justify:"center",items:"center",text:"sm",py:"1"},K={key:0,class:"post-time flex items-center"},Q=["title"],U=o("div",{class:"inline-block","i-ri-calendar-line":""},null,-1),W={m:"l-1"},X=["title"],ee=o("span",{m:"x-2"},"-",-1),te=o("div",{"i-ri-calendar-2-line":""},null,-1),se={m:"l-1"},oe={key:1,class:"post-counter flex items-center",mt:"2"},ne=["title"],ie=o("div",{class:"inline-block","i-ri-file-word-line":""},null,-1),re={m:"l-1"},ae=["title"],le=o("span",{m:"x-2"},"-",-1),de=o("div",{"i-ri-timer-line":""},null,-1),ce={m:"l-1"},pe=h({__name:"YunPostMeta",props:{frontmatter:{}},setup(m){const{t}=R(),i=S();return(e,c)=>(s(),n(w,null,[e.frontmatter.draft?(s(),n("div",z,I)):r("v-if",!0),e.frontmatter.hide?(s(),n("div",{key:1,class:"post-top-icon",color:"$va-c-danger",title:`hide:${e.frontmatter.hide}`},[e.frontmatter.hide==="index"?(s(),n("div",E)):(s(),n("div",V))],8,P)):r("v-if",!0),e.frontmatter.top?(s(),n("div",Z,G)):r("v-if",!0),e.frontmatter?(s(),n("div",J,[e.frontmatter.date?(s(),n("div",K,[o("span",{class:"posted-time inline-flex-center",title:a(t)("post.posted")+a($)(e.frontmatter.date)},[U,o("time",W,f(a(k)(e.frontmatter.date)),1)],8,Q),e.frontmatter.updated&&e.frontmatter.updated!==e.frontmatter.date?(s(),n("span",{key:0,class:"edited-time inline-flex-center",title:a(t)("post.edited")+a($)(e.frontmatter.updated)},[ee,te,o("time",se,f(a(k)(e.frontmatter.updated)),1)],8,X)):r("v-if",!0)])):r("v-if",!0),a(i).statistics.enable?(s(),n("div",oe,[e.frontmatter.wordCount?(s(),n("span",{key:0,class:"word-count inline-flex-center",title:a(t)("statistics.word")},[ie,o("span",re,f(e.frontmatter.wordCount),1)],8,ne)):r("v-if",!0),e.frontmatter.readingTime?(s(),n("span",{key:1,class:"reading-time inline-flex-center",title:a(t)("statistics.time")},[le,de,o("time",ce,f(e.frontmatter.readingTime)+"m",1)],8,ae)):r("v-if",!0)])):r("v-if",!0)])):r("v-if",!0),N(e.$slots,"default")],64))}});export{pe as _,_e as a,me as b};