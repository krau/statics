import{g as w,h as V,q as d,K as D,o as i,j as c,r as T,b as o,t as s,l as e,a6 as F,P as H,m as L,$ as b,a7 as h,a as g,d as l,F as B,n as M,a8 as N,c as P,w as x,e as S}from"./app-4c727bde.js";const Y={class:"vc-site-live-time"},I={"mx-1":""},j={"mx-1":""},z={"mx-1":""},q={"mx-1":""},E=w({__name:"VCLiveTime",props:{startTime:{}},setup(y){const u=y,{t:a}=V(),r=d(0),t=d(0),m=d(0),v=d(0);function $(){const n=new Date(u.startTime),_=new Date().getTime()-n.getTime(),p=60*1e3,f=60*p,C=24*f;r.value=Math.floor(_/C),t.value=Math.floor(_%C/60/60/1e3),m.value=Math.floor(_%f/60/1e3),v.value=Math.floor(_%p/1e3)}return D(()=>{setInterval($,1e3)}),(n,k)=>(i(),c("div",Y,[T(n.$slots,"live-time-before"),o("span",I,s(e(a)("time.day",r.value)),1),o("span",j,s(e(a)("time.hour",t.value)),1),o("span",z,s(e(a)("time.minute",m.value)),1),o("span",q,s(e(a)("time.second",v.value)),1),T(n.$slots,"live-time-after")]))}}),K={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},A={key:0,class:"beian",m:"y-2"},G={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},J={class:"copyright flex justify-center items-center gap-2",p:"1"},O=["href","title"],Q={key:1,class:"powered",m:"2"},R=["innerHTML"],U=["href","title"],W=w({__name:"YunFooter",setup(y){const{t:u}=V(),a=F(),r=H(),t=L(),m=new Date().getFullYear(),v=b(()=>m===t.value.footer.since),$=b(()=>u("footer.powered",[`<a href="${h.repository}" target="_blank" rel="noopener">Valaxy</a> v${h.version}`])),n=b(()=>t.value.footer.icon||{url:h.repository,name:"i-ri-cloud-line",title:h.name});return(k,_)=>{var p,f;return i(),c("footer",K,[(p=e(t).footer.beian)!=null&&p.enable&&e(t).footer.beian.icp?(i(),c("div",A,[o("a",G,s(e(t).footer.beian.icp),1)])):g("v-if",!0),o("div",J,[o("span",null,[l(" © "),v.value?g("v-if",!0):(i(),c(B,{key:0},[l(s(e(t).footer.since)+" - ",1)],64)),l(" "+s(e(m)),1)]),(f=e(t).footer.icon)!=null&&f.enable?(i(),c("a",{key:0,class:M(["inline-flex",e(t).footer.icon.animated?"animate-pulse":""]),href:n.value.url,target:"_blank",title:n.value.title},[o("div",{class:M(n.value.name)},null,2)],10,O)):g("v-if",!0),o("span",null,s(e(r).author.name),1)]),e(t).footer.powered?(i(),c("div",Q,[o("span",{innerHTML:$.value},null,8,R),l(" | "),o("span",null,[l(s(e(u)("footer.theme"))+" - ",1),o("a",{href:e(t).pkg.repository.url,title:e(t).pkg.name,target:"_blank"},s(N(e(a).theme)),9,U),l(" v"+s(e(t).pkg.version),1)])])):g("v-if",!0),T(k.$slots,"default")])}}}),X=o("span",null,"本站已勉强运行",-1),Z=o("span",null,"(ノ｀Д)ノ",-1),te=w({__name:"YunFooter",setup(y){return(u,a)=>{const r=E;return i(),P(W,null,{default:x(()=>[S(r,{"start-time":"2020-03-09"},{"live-time-before":x(()=>[X]),"live-time-after":x(()=>[Z]),_:1})]),_:1})}}});export{te as _};
