import{g as b,h as K,i as ot,o as l,j as _,F as Ct,k as ae,l as c,b as i,t as E,c as I,a as f,n as D,_ as Et,m as re,q as S,s as ce,v as ie,x as It,y as le,e as h,z as de,A as ue,B as $t,C as _e,r as u,D as fe,E as pe,G as vt,H as mt,w,I as ve,J as me,K as st,L as he,M as ge,d as ye,N as M,O as be,P as Lt,Q as St,R as ke,S as we,T as Ce,U as Ee,V as Ie,W,X as $e,Y as tt,Z as Le,$ as Se,u as Oe,a0 as Ae,a1 as xe,a2 as Te,a3 as Ve}from"./app-5d529213.js";import{_ as Ne}from"./YunFooter.vue_vue_type_script_setup_true_lang-02cc783c.js";import{_ as Ot}from"./YunCard.vue_vue_type_script_setup_true_lang-5be1cd61.js";import{_ as De}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-a4e979ed.js";import{s as ht}from"./index-463abdac.js";const ze=["lang"],Re=["href"],Me=b({__name:"YunOutlineItem",props:{headers:{},onClick:{type:Function},root:{type:Boolean}},setup(t){const{locale:e}=K();return(o,s)=>{const n=ot("YunOutlineItem",!0);return l(),_("ul",{class:D(o.root?"root":"nested")},[(l(!0),_(Ct,null,ae(o.headers,({children:r,link:d,title:m,lang:g})=>(l(),_("li",{key:d,class:"va-toc-item",lang:g||c(e)},[i("a",{class:"outline-link",href:d,onClick:s[0]||(s[0]=(...x)=>o.onClick&&o.onClick(...x))},E(m),9,Re),r!=null&&r.length?(l(),I(n,{key:0,headers:r,"on-click":o.onClick},null,8,["headers","on-click"])):f("v-if",!0)],8,ze))),128))],2)}}});const Ye=Et(Me,[["__scopeId","data-v-00264c1d"]]),Pe=t=>(de("data-v-75b693dc"),t=t(),ue(),t),He={class:"content"},Be={class:"outline-title"},Fe={"aria-labelledby":"doc-outline-aria-label"},Ue=Pe(()=>i("span",{id:"doc-outline-aria-label",class:"visually-hidden"}," Table of Contents for current page ",-1)),We=b({__name:"YunOutline",setup(t){const e=re(),o=S(),s=S();ce(o,s);const{headers:n,handleClick:r}=ie();return(d,m)=>{const g=Ye;return It((l(),_("div",{ref_key:"container",ref:o},[i("div",He,[i("div",Be,E(c(e).outlineTitle||"On this page"),1),i("div",{ref_key:"marker",ref:s,class:"outline-marker"},null,512),i("nav",Fe,[Ue,h(g,{class:"va-toc relative z-1 css-i18n-toc",headers:c(n),"on-click":c(r),root:""},null,8,["headers","on-click"])])])],512)),[[le,c(n).length]])}}});const Ge=Et(We,[["__scopeId","data-v-75b693dc"]]),Ke=i("div",{"i-ri-file-list-line":""},null,-1),je=[Ke],qe={class:"aside-container",flex:"~ col"},Je={key:0,m:"t-6 b-2",font:"serif black"},Ze=i("div",{class:"flex-grow"},null,-1),Qe={key:2,class:"custom-container"},Xe=b({__name:"YunAside",setup(t){const e=$t(),{t:o}=K(),s=_e();return(n,r)=>{const d=fe,m=Ge;return l(),_(Ct,null,[i("button",{class:"xl:hidden toc-btn shadow fixed yun-icon-btn z-350",opacity:"75",right:"2",bottom:"19",onClick:r[0]||(r[0]=g=>c(s).toggleRightSidebar())},je),h(d,{show:c(s).isRightSidebarOpen,onClick:r[1]||(r[1]=g=>c(s).toggleRightSidebar())},null,8,["show"]),f("  "),i("aside",{class:D(["va-card yun-aside",c(s).isRightSidebarOpen&&"open"]),m:"l-4",text:"center",overflow:"auto"},[i("div",qe,[c(e).toc!==!1?(l(),_("h2",Je,E(c(o)("sidebar.toc")),1)):f("v-if",!0),c(e).toc!==!1?(l(),I(m,{key:1})):f("v-if",!0),Ze,n.$slots.default?(l(),_("div",Qe,[u(n.$slots,"default")])):f("v-if",!0)])],2)],64)}}});const to=b({__name:"YunComment",setup(t){const e=pe(),o=e.value.addons["valaxy-addon-waline"]?vt(()=>mt(()=>import("./YunWaline-2d3f4a4a.js"),["assets/YunWaline-2d3f4a4a.js","assets/app-5d529213.js","assets/index-220cb191.css","assets/YunWaline-3426aaa8.css"])):()=>null,s=e.value.addons["valaxy-addon-twikoo"]?vt(()=>mt(()=>import("./YunTwikoo-b0b51499.js"),["assets/YunTwikoo-b0b51499.js","assets/app-5d529213.js","assets/index-220cb191.css"])):()=>null;return(n,r)=>{const d=ot("ClientOnly"),m=Ot;return l(),I(m,{w:"full",p:"4",class:"comment sm:p-6 lg:px-12 xl:px-16"},{default:w(()=>[h(d,null,{default:w(()=>[h(c(o)),h(c(s))]),_:1})]),_:1})}}});const eo={class:"post-nav"},oo={class:"post-nav-item"},so=i("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1),no={class:"title truncate",text:"sm"},ao={class:"post-nav-item"},ro={class:"title truncate",text:"sm"},co=i("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1),io=b({__name:"YunPostNav",setup(t){const[e,o]=ve();return(s,n)=>{const r=ot("router-link");return l(),_("div",eo,[i("div",oo,[c(e)?(l(),I(r,{key:0,class:"post-nav-prev",to:c(e).path||"",title:c(e).title},{default:w(()=>[so,i("span",no,E(c(e).title),1)]),_:1},8,["to","title"])):f("v-if",!0)]),i("div",ao,[c(o)?(l(),I(r,{key:0,to:c(o).path||"",title:c(o).title,class:"post-nav-next"},{default:w(()=>[i("span",ro,E(c(o).title),1),co]),_:1},8,["to","title"])):f("v-if",!0)])])}}});const lo={key:0,"w-full":"","pt-14":"","pb-10":""},uo={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},_o=["onKeyup"],fo={key:0,class:"-bottom-6",absolute:"","text-xs":"",op:"50"},po=i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",target:"_blank"},[i("span",null,"Web Crypto API")],-1),vo={key:1},mo=b({__name:"ValaxyDecrypt",props:{encryptedContent:{}},setup(t){const e=t,o=S(""),s=S(""),n=S(!1),{decrypt:r}=me();async function d(){const a=e.encryptedContent;if(a)try{const p=await r(o.value,a);s.value=p||"",setTimeout(()=>{M()},16)}catch{n.value=!0}}function m(){s.value="",o.value="",setTimeout(()=>{M()},16)}const g=b({name:"ValaxyDeprecatedContent",props:{html:String},render(){const a=`<div>${this.html}</div>`;return be({setup:()=>({frontmatter:$t()}),template:a})}}),x=S(!1);return st(()=>{location.protocol!=="https:"&&(x.value=!0)}),(a,p)=>(l(),_("div",null,[s.value?(l(),_("div",vo,[h(c(g),{html:s.value},null,8,["html"]),i("div",{"w-full":"","text-center":"","mt-8":""},[i("button",{"m-auto":"",class:"btn","font-bold":"",onClick:m}," Encrypt Again ")])])):(l(),_("div",lo,[i("div",uo,[It(i("input",{"onUpdate:modelValue":p[0]||(p[0]=T=>o.value=T),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:D(n.value&&"border-red"),onInput:p[1]||(p[1]=T=>n.value=!1),onKeyup:ge(d,["enter"])},null,42,_o),[[he,o.value]]),i("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:d}),x.value?(l(),_("div",fo,[po,ye(" Only works in HTTPS ")])):f("v-if",!0)])]))]))}}),$=typeof window<"u",At=$&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),xt=$&&"IntersectionObserver"in window,Tt=$&&"classList"in document.createElement("p"),Vt=$&&window.devicePixelRatio>1,ho={elements_selector:".lazy",container:At||$?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},Nt=t=>Object.assign({},ho,t),gt=function(t,e){let o;const s="LazyLoad::Initialized",n=new t(e);try{o=new CustomEvent(s,{detail:{instance:n}})}catch{o=document.createEvent("CustomEvent"),o.initCustomEvent(s,!1,!1,{instance:n})}window.dispatchEvent(o)},go=(t,e)=>{if(e)if(!e.length)gt(t,e);else for(let o=0,s;s=e[o];o+=1)gt(t,s)},k="src",nt="srcset",at="sizes",Dt="poster",P="llOriginalAttrs",zt="data",rt="loading",Rt="loaded",Mt="applied",yo="entered",ct="error",Yt="native",Pt="data-",Ht="ll-status",v=(t,e)=>t.getAttribute(Pt+e),bo=(t,e,o)=>{var s=Pt+e;if(o===null){t.removeAttribute(s);return}t.setAttribute(s,o)},H=t=>v(t,Ht),A=(t,e)=>bo(t,Ht,e),j=t=>A(t,null),it=t=>H(t)===null,ko=t=>H(t)===rt,wo=t=>H(t)===ct,lt=t=>H(t)===Yt,Co=[rt,Rt,Mt,ct],Eo=t=>Co.indexOf(H(t))>=0,L=(t,e,o,s)=>{if(t){if(s!==void 0){t(e,o,s);return}if(o!==void 0){t(e,o);return}t(e)}},R=(t,e)=>{if(Tt){t.classList.add(e);return}t.className+=(t.className?" ":"")+e},y=(t,e)=>{if(Tt){t.classList.remove(e);return}t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},Io=t=>{t.llTempImage=document.createElement("IMG")},$o=t=>{delete t.llTempImage},Bt=t=>t.llTempImage,q=(t,e)=>{if(!e)return;const o=e._observer;o&&o.unobserve(t)},Lo=t=>{t.disconnect()},So=(t,e,o)=>{e.unobserve_entered&&q(t,o)},dt=(t,e)=>{t&&(t.loadingCount+=e)},Oo=t=>{t&&(t.toLoadCount-=1)},Ft=(t,e)=>{t&&(t.toLoadCount=e)},Ao=t=>t.loadingCount>0,xo=t=>t.toLoadCount>0,Ut=t=>{let e=[];for(let o=0,s;s=t.children[o];o+=1)s.tagName==="SOURCE"&&e.push(s);return e},ut=(t,e)=>{const o=t.parentNode;if(!o||o.tagName!=="PICTURE")return;Ut(o).forEach(e)},Wt=(t,e)=>{Ut(t).forEach(e)},J=[k],Gt=[k,Dt],Y=[k,nt,at],Kt=[zt],Z=t=>!!t[P],jt=t=>t[P],qt=t=>delete t[P],z=(t,e)=>{if(Z(t))return;const o={};e.forEach(s=>{o[s]=t.getAttribute(s)}),t[P]=o},To=t=>{Z(t)||(t[P]={backgroundImage:t.style.backgroundImage})},Vo=(t,e,o)=>{if(!o){t.removeAttribute(e);return}t.setAttribute(e,o)},O=(t,e)=>{if(!Z(t))return;const o=jt(t);e.forEach(s=>{Vo(t,s,o[s])})},No=t=>{if(!Z(t))return;const e=jt(t);t.style.backgroundImage=e.backgroundImage},Jt=(t,e,o)=>{R(t,e.class_applied),A(t,Mt),o&&(e.unobserve_completed&&q(t,e),L(e.callback_applied,t,o))},Zt=(t,e,o)=>{R(t,e.class_loading),A(t,rt),o&&(dt(o,1),L(e.callback_loading,t,o))},C=(t,e,o)=>{o&&t.setAttribute(e,o)},yt=(t,e)=>{C(t,at,v(t,e.data_sizes)),C(t,nt,v(t,e.data_srcset)),C(t,k,v(t,e.data_src))},Do=(t,e)=>{ut(t,o=>{z(o,Y),yt(o,e)}),z(t,Y),yt(t,e)},zo=(t,e)=>{z(t,J),C(t,k,v(t,e.data_src))},Ro=(t,e)=>{Wt(t,o=>{z(o,J),C(o,k,v(o,e.data_src))}),z(t,Gt),C(t,Dt,v(t,e.data_poster)),C(t,k,v(t,e.data_src)),t.load()},Mo=(t,e)=>{z(t,Kt),C(t,zt,v(t,e.data_src))},Yo=(t,e,o)=>{const s=v(t,e.data_bg),n=v(t,e.data_bg_hidpi),r=Vt&&n?n:s;r&&(t.style.backgroundImage=`url("${r}")`,Bt(t).setAttribute(k,r),Zt(t,e,o))},Po=(t,e,o)=>{const s=v(t,e.data_bg_multi),n=v(t,e.data_bg_multi_hidpi),r=Vt&&n?n:s;r&&(t.style.backgroundImage=r,Jt(t,e,o))},Ho=(t,e,o)=>{const s=v(t,e.data_bg_set);if(!s)return;const n=s.split("|");let r=n.map(d=>`image-set(${d})`);t.style.backgroundImage=r.join(),t.style.backgroundImage===""&&(r=n.map(d=>`-webkit-image-set(${d})`),t.style.backgroundImage=r.join()),Jt(t,e,o)},Qt={IMG:Do,IFRAME:zo,VIDEO:Ro,OBJECT:Mo},Bo=(t,e)=>{const o=Qt[t.tagName];o&&o(t,e)},Fo=(t,e,o)=>{const s=Qt[t.tagName];s&&(s(t,e),Zt(t,e,o))},Uo=["IMG","IFRAME","VIDEO","OBJECT"],Wo=t=>Uo.indexOf(t.tagName)>-1,Xt=(t,e)=>{e&&!Ao(e)&&!xo(e)&&L(t.callback_finish,e)},bt=(t,e,o)=>{t.addEventListener(e,o),t.llEvLisnrs[e]=o},Go=(t,e,o)=>{t.removeEventListener(e,o)},_t=t=>!!t.llEvLisnrs,Ko=(t,e,o)=>{_t(t)||(t.llEvLisnrs={});const s=t.tagName==="VIDEO"?"loadeddata":"load";bt(t,s,e),bt(t,"error",o)},et=t=>{if(!_t(t))return;const e=t.llEvLisnrs;for(let o in e){const s=e[o];Go(t,o,s)}delete t.llEvLisnrs},te=(t,e,o)=>{$o(t),dt(o,-1),Oo(o),y(t,e.class_loading),e.unobserve_completed&&q(t,o)},jo=(t,e,o,s)=>{const n=lt(e);te(e,o,s),R(e,o.class_loaded),A(e,Rt),L(o.callback_loaded,e,s),n||Xt(o,s)},qo=(t,e,o,s)=>{const n=lt(e);te(e,o,s),R(e,o.class_error),A(e,ct),L(o.callback_error,e,s),o.restore_on_error&&O(e,Y),n||Xt(o,s)},ft=(t,e,o)=>{const s=Bt(t)||t;if(_t(s))return;Ko(s,d=>{jo(d,t,e,o),et(s)},d=>{qo(d,t,e,o),et(s)})},Jo=(t,e,o)=>{Io(t),ft(t,e,o),To(t),Yo(t,e,o),Po(t,e,o),Ho(t,e,o)},Zo=(t,e,o)=>{ft(t,e,o),Fo(t,e,o)},pt=(t,e,o)=>{Wo(t)?Zo(t,e,o):Jo(t,e,o)},Qo=(t,e,o)=>{t.setAttribute("loading","lazy"),ft(t,e,o),Bo(t,e),A(t,Yt)},kt=t=>{t.removeAttribute(k),t.removeAttribute(nt),t.removeAttribute(at)},Xo=t=>{ut(t,e=>{kt(e)}),kt(t)},ee=t=>{ut(t,e=>{O(e,Y)}),O(t,Y)},ts=t=>{Wt(t,e=>{O(e,J)}),O(t,Gt),t.load()},es=t=>{O(t,J)},os=t=>{O(t,Kt)},ss={IMG:ee,IFRAME:es,VIDEO:ts,OBJECT:os},ns=t=>{const e=ss[t.tagName];if(!e){No(t);return}e(t)},as=(t,e)=>{it(t)||lt(t)||(y(t,e.class_entered),y(t,e.class_exited),y(t,e.class_applied),y(t,e.class_loading),y(t,e.class_loaded),y(t,e.class_error))},rs=(t,e)=>{ns(t),as(t,e),j(t),qt(t)},cs=(t,e,o,s)=>{o.cancel_on_exit&&ko(t)&&t.tagName==="IMG"&&(et(t),Xo(t),ee(t),y(t,o.class_loading),dt(s,-1),j(t),L(o.callback_cancel,t,e,s))},is=(t,e,o,s)=>{const n=Eo(t);A(t,yo),R(t,o.class_entered),y(t,o.class_exited),So(t,o,s),L(o.callback_enter,t,e,s),!n&&pt(t,o,s)},ls=(t,e,o,s)=>{it(t)||(R(t,o.class_exited),cs(t,e,o,s),L(o.callback_exit,t,e,s))},ds=["IMG","IFRAME","VIDEO"],oe=t=>t.use_native&&"loading"in HTMLImageElement.prototype,us=(t,e,o)=>{t.forEach(s=>{ds.indexOf(s.tagName)!==-1&&Qo(s,e,o)}),Ft(o,0)},_s=t=>t.isIntersecting||t.intersectionRatio>0,fs=t=>({root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}),ps=(t,e,o)=>{t.forEach(s=>_s(s)?is(s.target,s,e,o):ls(s.target,s,e,o))},vs=(t,e)=>{e.forEach(o=>{t.observe(o)})},ms=(t,e)=>{Lo(t),vs(t,e)},hs=(t,e)=>{!xt||oe(t)||(e._observer=new IntersectionObserver(o=>{ps(o,t,e)},fs(t)))},se=t=>Array.prototype.slice.call(t),G=t=>t.container.querySelectorAll(t.elements_selector),gs=t=>se(t).filter(it),ys=t=>wo(t),bs=t=>se(t).filter(ys),wt=(t,e)=>gs(t||G(e)),ks=(t,e)=>{bs(G(t)).forEach(s=>{y(s,t.class_error),j(s)}),e.update()},ws=(t,e)=>{$&&(e._onlineHandler=()=>{ks(t,e)},window.addEventListener("online",e._onlineHandler))},Cs=t=>{$&&window.removeEventListener("online",t._onlineHandler)},B=function(t,e){const o=Nt(t);this._settings=o,this.loadingCount=0,hs(o,this),ws(o,this),this.update(e)};B.prototype={update:function(t){const e=this._settings,o=wt(t,e);if(Ft(this,o.length),At||!xt){this.loadAll(o);return}if(oe(e)){us(o,e,this);return}ms(this._observer,o)},destroy:function(){this._observer&&this._observer.disconnect(),Cs(this),G(this._settings).forEach(t=>{qt(t)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){const e=this._settings;wt(t,e).forEach(s=>{q(s,this),pt(s,e,this)})},restoreAll:function(){const t=this._settings;G(t).forEach(e=>{rs(e,t)})}};B.load=(t,e)=>{const o=Nt(e);pt(t,o)};B.resetStatus=t=>{j(t)};$&&go(B,window.lazyLoadOptions);function Es(t={}){return new B({elements_selector:".lazy",...t})}function Is(){const t=Lt();t.value.vanillaLazyload.enable&&st(()=>{Es(t.value.vanillaLazyload)})}const $s={key:2,text:"center"},Ls=["href"],Ss={m:"y-4",class:"end flex justify-center items-center"},Os=i("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),As={p:"x-4",font:"serif bold",class:"whitespace-nowrap"},xs=i("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),Ts=b({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(t){const e=t,{t:o}=K(),s=S();return St(()=>{ke(s.value)}),st(()=>{M()}),e.frontmatter.aplayer&&we(),e.frontmatter.codepen&&Ce(),Ee(),(typeof e.frontmatter.medium_zoom>"u"||e.frontmatter.medium_zoom)&&Ie(),Is(),(n,r)=>{const d=mo;return n.$slots.default?(l(),_("article",{key:0,class:D(n.frontmatter.markdown!==!1&&"markdown-body")},[n.frontmatter.encryptedContent?(l(),I(d,{key:0,"encrypted-content":n.frontmatter.encryptedContent},null,8,["encrypted-content"])):u(n.$slots,"default",{key:1,ref_key:"contentRef",ref:s,onVnodeUpdated:r[0]||(r[0]=(...m)=>c(M)&&c(M)(...m))}),n.frontmatter.url?(l(),_("div",$s,[i("a",{href:n.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},E(c(o)("post.view_link")),9,Ls)])):f("v-if",!0),n.frontmatter.end!==void 0?u(n.$slots,"end",{key:3},()=>[i("div",Ss,[Os,i("span",As,E(n.frontmatter.end?"Q.E.D.":"To Be Continued."),1),xs])]):f("v-if",!0)],2)):f("v-if",!0)}}});const Vs={key:0,op:"80"},Ns=b({__name:"YunMdTimeWarning",props:{frontmatter:{}},setup(t){const e=t;W.extend($e);const{t:o}=K(),s=tt(()=>{const n=W().valueOf()-W(e.frontmatter.updated).valueOf();return typeof e.frontmatter.time_warning=="number"?n>e.frontmatter.time_warning:e.frontmatter.time_warning||n>30*24*60*60*1e3});return(n,r)=>s.value?(l(),_("blockquote",Vs,E(c(o)("post.time_warning",{ago:c(W)(n.frontmatter.updated).fromNow()})),1)):f("v-if",!0)}}),Ds={class:"yun-main lt-md:ml-0",flex:"~"},zs={w:"full",flex:"~"},Rs={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},Fs=b({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(t){const e=t,o=Lt(),{styles:s,icon:n,color:r}=Le(e.frontmatter.type),d=Se(tt(()=>e.frontmatter)),m=tt(()=>e.frontmatter.aside!==!1),g=Oe(),x=Ae();return xe(()=>{g.hash&&setTimeout(()=>{ht(document.body,g.hash,!0)},0)}),St(()=>{window.addEventListener("click",async a=>{const p=a.target.closest("a");if(p){const{protocol:T,hostname:Q,pathname:F,hash:V,target:X}=p,N=window.location,U=F.match(/\.\w+$/);!a.ctrlKey&&!a.shiftKey&&!a.altKey&&!a.metaKey&&X!=="_blank"&&T===N.protocol&&Q===N.hostname&&!(U&&U[0]!==".html")&&F===N.pathname&&(a.preventDefault(),V&&V!==N.hash&&(await x.push({hash:V}),history.replaceState({...history.state},""),window.dispatchEvent(new Event("hashchange")),ht(p,V,p.classList.contains("header-anchor"))))}},{capture:!0})}),(a,p)=>{const T=De,Q=Ns,F=Ts,V=Ot,X=io,N=to,U=Ne,ne=Xe;return l(),_("main",Ds,[i("div",zs,[u(a.$slots,"main",{},()=>[i("div",{class:D(["content",!m.value&&"no-aside"]),flex:"~ col grow",w:"full",p:"l-4 lt-md:0"},[h(V,{cover:a.frontmatter.cover,m:"0",class:"relative",style:Ve(c(s))},{default:w(()=>[u(a.$slots,"main-header",{},()=>[h(T,{class:"mb-2",title:c(d),icon:a.frontmatter.icon||c(n),color:a.frontmatter.color||c(r),cover:a.frontmatter.cover},null,8,["title","icon","color","cover"])]),u(a.$slots,"main-header-after"),i("div",Rs,[u(a.$slots,"main-content",{},()=>[h(Te,{appear:""},{default:w(()=>[h(F,{frontmatter:a.frontmatter},{default:w(()=>[h(Q,{frontmatter:a.frontmatter},null,8,["frontmatter"]),u(a.$slots,"main-content-md"),u(a.$slots,"default")]),_:3},8,["frontmatter"])]),_:3})]),u(a.$slots,"main-content-after")])]),_:3},8,["cover","style"]),u(a.$slots,"main-nav-before"),u(a.$slots,"main-nav",{},()=>[a.frontmatter.nav!==!1?(l(),I(X,{key:0})):f("v-if",!0)]),u(a.$slots,"main-nav-after"),c(o).comment.enable&&a.frontmatter.comment!==!1?u(a.$slots,"comment",{key:0},()=>[h(N,{class:D(a.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):f("v-if",!0),u(a.$slots,"main-footer-before"),h(U),u(a.$slots,"main-footer-after")],2)]),u(a.$slots,"aside",{},()=>[m.value?(l(),I(ne,{key:0},{default:w(()=>[u(a.$slots,"aside-custom")]),_:3})):f("v-if",!0)])])])}}});export{Fs as _};