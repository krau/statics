import{g as w,u as V,m as d,J as D,o as i,i as c,r as T,b as o,t as s,k as e,X as F,S as H,l as L,R as b,Y as h,a as g,d as l,F as S,n as M,Z as Y,c as B,w as x,e as N}from"./app-6b3dfcab.js";const I={class:"vc-site-live-time"},P={"mx-1":""},z={"mx-1":""},j={"mx-1":""},E={"mx-1":""},J=w({__name:"VCLiveTime",props:{startTime:{}},setup(y){const u=y,{t:a}=V(),r=d(0),t=d(0),m=d(0),v=d(0),k=()=>{const n=new Date(u.startTime),_=new Date().getTime()-n.getTime(),p=60*1e3,f=60*p,C=24*f;r.value=Math.floor(_/C),t.value=Math.floor(_%C/60/60/1e3),m.value=Math.floor(_%f/60/1e3),v.value=Math.floor(_%p/1e3)};return D(()=>{setInterval(k,1e3)}),(n,$)=>(i(),c("div",I,[T(n.$slots,"live-time-before"),o("span",P,s(e(a)("time.day",r.value)),1),o("span",z,s(e(a)("time.hour",t.value)),1),o("span",j,s(e(a)("time.minute",m.value)),1),o("span",E,s(e(a)("time.second",v.value)),1),T(n.$slots,"live-time-after")]))}}),R={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},X={key:0,class:"beian",m:"y-2"},Z={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},q={class:"copyright flex justify-center items-center gap-2",p:"1"},A=["href","title"],G={key:1,class:"powered",m:"2"},K=["innerHTML"],O=["href","title"],Q=w({__name:"YunFooter",setup(y){const{t:u}=V(),a=F(),r=H(),t=L(),m=new Date().getFullYear(),v=b(()=>m===t.value.footer.since),k=b(()=>u("footer.powered",[`<a href="${h.repository}" target="_blank" rel="noopener">Valaxy</a> v${h.version}`])),n=b(()=>t.value.footer.icon||{url:h.repository,name:"i-ri-cloud-line",title:h.name});return($,_)=>{var p,f;return i(),c("footer",R,[(p=e(t).footer.beian)!=null&&p.enable&&e(t).footer.beian.icp?(i(),c("div",X,[o("a",Z,s(e(t).footer.beian.icp),1)])):g("v-if",!0),o("div",q,[o("span",null,[l(" © "),v.value?g("v-if",!0):(i(),c(S,{key:0},[l(s(e(t).footer.since)+" - ",1)],64)),l(" "+s(e(m)),1)]),(f=e(t).footer.icon)!=null&&f.enable?(i(),c("a",{key:0,class:M(["inline-flex",e(t).footer.icon.animated?"animate-pulse":""]),href:n.value.url,target:"_blank",title:n.value.title},[o("div",{class:M(n.value.name)},null,2)],10,A)):g("v-if",!0),o("span",null,s(e(r).author.name),1)]),e(t).footer.powered?(i(),c("div",G,[o("span",{innerHTML:k.value},null,8,K),l(" | "),o("span",null,[l(s(e(u)("footer.theme"))+" - ",1),o("a",{href:e(t).pkg.repository.url,title:e(t).pkg.name,target:"_blank"},s(Y(e(a).theme)),9,O),l(" v"+s(e(t).pkg.version),1)])])):g("v-if",!0),T($.$slots,"default")])}}}),U=o("span",null,"本站已勉强运行",-1),W=o("span",null,"(ノ｀Д)ノ",-1),te=w({__name:"YunFooter",setup(y){return(u,a)=>{const r=J;return i(),B(Q,null,{default:x(()=>[N(r,{"start-time":"2020-03-09"},{"live-time-before":x(()=>[U]),"live-time-after":x(()=>[W]),_:1})]),_:1})}}});export{te as _};
