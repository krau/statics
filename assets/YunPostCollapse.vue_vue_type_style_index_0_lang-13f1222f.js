import{g as C,u as g,m as _,a9 as w,a1 as h,R as D,h as b,o as s,i as a,b as o,t as c,k as p,F as m,j as y,aa as B,a as N,e as V,w as E,d as F}from"./app-a1afda4c.js";const I={class:"post-collapse px-10 lt-sm:px-5"},L={w:"full",text:"center",class:"yun-text-light",p:"2"},M={class:"post-collapse-action",text:"center"},P={key:0,"i-ri-sort-desc":""},$={key:1,"i-ri-sort-asc":""},j={class:"collection-title"},R=["id"],S={class:"post-header"},T={class:"post-meta"},q={key:0,class:"post-time",font:"mono",opacity:"80"},z={class:"post-title",font:"serif black"},G=C({__name:"YunPostCollapse",props:{posts:{}},setup(f){const v=f,{t:k}=g(),d=_([]),i=_({});w(()=>v.posts,()=>{i.value={},d.value=[],v.posts.forEach(t=>{if(!(t.hide&&t.hide!=="index")&&t.date){const e=parseInt(h(t.date,"YYYY"));i.value[e]?i.value[e].push(t):(d.value.push(e),i.value[e]=[t])}})},{immediate:!0});const r=_(!0),x=D(()=>{const e=d.value.sort((u,n)=>n-u);return r.value?e:e.reverse()});return(t,e)=>{const u=b("router-link");return s(),a("div",I,[o("div",L,c(p(k)("counter.archives",t.posts.length)),1),o("div",M,[o("button",{class:"yun-icon-btn shadow hover:shadow-md",onClick:e[0]||(e[0]=n=>r.value=!r.value)},[r.value?(s(),a("div",P)):(s(),a("div",$))])]),(s(!0),a(m,null,y(x.value,n=>(s(),a("div",{key:n,m:"b-6"},[o("div",j,[o("h2",{id:`#archive-year-${n}`,class:"archive-year",text:"4xl",p:"y-2"},c(n),9,R)]),(s(!0),a(m,null,y(p(B)(i.value[n],r.value),(l,Y)=>(s(),a("article",{key:Y,class:"post-item"},[o("header",S,[o("div",T,[l.date?(s(),a("time",q,c(p(h)(l.date,"MM-DD")),1)):N("v-if",!0)]),o("h2",z,[V(u,{to:l.path||"",class:"post-title-link"},{default:E(()=>[F(c(l.title),1)]),_:2},1032,["to"])])])]))),128))]))),128))])}}});export{G as _};
