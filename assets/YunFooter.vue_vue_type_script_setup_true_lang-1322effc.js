import{g as w,u as V,m as h,L as D,o as i,i as c,r as T,b as o,t as s,k as e,X as L,S as F,l as H,Q as b,Y as v,a as g,d as l,F as S,n as M,Z as Y,c as B,w as x,e as N}from"./app-4d4a67d5.js";const I={class:"vc-site-live-time"},P={"mx-1":""},z={"mx-1":""},j={"mx-1":""},E={"mx-1":""},Q=w({__name:"VCLiveTime",props:{startTime:null},setup(y){const m=y,{t:a}=V(),r=h(0),t=h(0),u=h(0),d=h(0),k=()=>{const n=new Date(m.startTime),_=new Date().getTime()-n.getTime(),p=60*1e3,f=60*p,C=24*f;r.value=Math.floor(_/C),t.value=Math.floor(_%C/60/60/1e3),u.value=Math.floor(_%f/60/1e3),d.value=Math.floor(_%p/1e3)};return D(()=>{setInterval(k,1e3)}),(n,$)=>(i(),c("div",I,[T(n.$slots,"live-time-before"),o("span",P,s(e(a)("time.day",r.value)),1),o("span",z,s(e(a)("time.hour",t.value)),1),o("span",j,s(e(a)("time.minute",u.value)),1),o("span",E,s(e(a)("time.second",d.value)),1),T(n.$slots,"live-time-after")]))}}),X={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},Z={key:0,class:"beian",m:"y-2"},q={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},A={class:"copyright flex justify-center items-center gap-2",p:"1"},G=["href","title"],J={key:1,class:"powered",m:"2"},K=["innerHTML"],O=["href","title"],R=w({__name:"YunFooter",setup(y){const{t:m}=V(),a=L(),r=F(),t=H(),u=new Date().getFullYear(),d=b(()=>u===t.value.footer.since),k=b(()=>m("footer.powered",[`<a href="${v.repository}" target="_blank" rel="noopener">Valaxy</a> v${v.version}`])),n=b(()=>t.value.footer.icon||{url:v.repository,name:"i-ri-cloud-line",title:v.name});return($,_)=>{var p,f;return i(),c("footer",X,[(p=e(t).footer.beian)!=null&&p.enable&&e(t).footer.beian.icp?(i(),c("div",Z,[o("a",q,s(e(t).footer.beian.icp),1)])):g("v-if",!0),o("div",A,[o("span",null,[l(" © "),e(d)?g("v-if",!0):(i(),c(S,{key:0},[l(s(e(t).footer.since)+" - ",1)],64)),l(" "+s(e(u)),1)]),(f=e(t).footer.icon)!=null&&f.enable?(i(),c("a",{key:0,class:M(["inline-flex",e(t).footer.icon.animated?"animate-pulse":""]),href:e(n).url,target:"_blank",title:e(n).title},[o("div",{class:M(e(n).name)},null,2)],10,G)):g("v-if",!0),o("span",null,s(e(r).author.name),1)]),e(t).footer.powered?(i(),c("div",J,[o("span",{innerHTML:e(k)},null,8,K),l(" | "),o("span",null,[l(s(e(m)("footer.theme"))+" - ",1),o("a",{href:e(t).pkg.repository.url,title:e(t).pkg.name,target:"_blank"},s(Y(e(a).theme)),9,O),l(" v"+s(e(t).pkg.version),1)])])):g("v-if",!0),T($.$slots,"default")])}}}),U=o("span",null,"本站已勉强运行",-1),W=o("span",null,"(ノ｀Д)ノ",-1),te=w({__name:"YunFooter",setup(y){return(m,a)=>{const r=Q;return i(),B(R,null,{default:x(()=>[N(r,{"start-time":"2020-03-09"},{"live-time-before":x(()=>[U]),"live-time-after":x(()=>[W]),_:1})]),_:1})}}});export{te as _};
