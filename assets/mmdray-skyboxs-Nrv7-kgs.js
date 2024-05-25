import{_ as c}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BfNpTPS4.js";import{c as m,w as a,u,a as f,p as r,o as _,d as i,f as e,g as l}from"./app-Cgare2Ex.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-fimdUO4R.js";import"./YunCard.vue_vue_type_script_setup_true_lang-Cxcd8PAd.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-DKh8ybrf.js";import"./index-C7yU5XnD.js";import"./post-C5_KJadb.js";const g=e("p",null,[l("完成ray渲染的基本流程后，就要开始调各种参数了，本篇介绍ray渲染内置的几个天空盒的参数 "),e("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20210812200556.png",alt:"内置天空盒"})],-1),p=e("p",null,[l("在"),e("code",null,"模型操作"),l("栏中，选择导入的天空盒，在表情栏即可进行其相关参数调整。")],-1),k=e("p",null,"以下介绍中，把表情四栏按从左到右，从上到下分成 第一栏、第二栏、第三栏、第四栏。",-1),b=e("h2",{id:"helipad-goldenhour",tabindex:"-1"},[l("Helipad GoldenHour "),e("a",{class:"header-anchor",href:"#helipad-goldenhour","aria-label":'Permalink to "Helipad GoldenHour"'},"​")],-1),y=e("h3",{id:"第一栏",tabindex:"-1"},[l("第一栏 "),e("a",{class:"header-anchor",href:"#第一栏","aria-label":'Permalink to "第一栏"'},"​")],-1),v=e("ul",null,[e("li",null,"Balance 可以看到该栏中有BalanceR±/G±/B±以及Gray+的调整，它们即对应色调红绿蓝（RGB）三色以及灰色的调整。 例如，调高BalanceR+栏，画面将偏红色")],-1),P=e("h3",{id:"第二栏",tabindex:"-1"},[l("第二栏 "),e("a",{class:"header-anchor",href:"#第二栏","aria-label":'Permalink to "第二栏"'},"​")],-1),x=e("ul",null,[e("li",null,"EnvDiffLight 该参数为天空盒的光源强度，调高该参数，天空盒对模型的影响将会变亮"),e("li",null,"EnvSpecLight 该参数为漫反射强度，调高该参数，模型漫反射增强")],-1),S=e("h3",{id:"第三栏",tabindex:"-1"},[l("第三栏 "),e("a",{class:"header-anchor",href:"#第三栏","aria-label":'Permalink to "第三栏"'},"​")],-1),$=e("ul",null,[e("li",null,"Diffuse 该栏调整漫反射色调（RGB&Gray）")],-1),T=e("h3",{id:"第四栏",tabindex:"-1"},[l("第四栏 "),e("a",{class:"header-anchor",href:"#第四栏","aria-label":'Permalink to "第四栏"'},"​")],-1),H=e("ul",null,[e("li",null,"Specular 该栏调整镜面反射色调（与Diffuse同理）")],-1),B=e("h2",{id:"sky-hemisphere",tabindex:"-1"},[l("Sky Hemisphere "),e("a",{class:"header-anchor",href:"#sky-hemisphere","aria-label":'Permalink to "Sky Hemisphere"'},"​")],-1),D=e("p",null,"该天空盒初始为纯白背景，一般适用于实景合成/唯美风渲染",-1),G=e("h3",{id:"第一栏-1",tabindex:"-1"},[l("第一栏 "),e("a",{class:"header-anchor",href:"#第一栏-1","aria-label":'Permalink to "第一栏"'},"​")],-1),M=e("ul",null,[e("li",null,"Top 可以看到该栏中有TopH+/S+/V±，它们调整该天空盒的顶部色调效果")],-1),R=e("h3",{id:"第二栏-1",tabindex:"-1"},[l("第二栏 "),e("a",{class:"header-anchor",href:"#第二栏-1","aria-label":'Permalink to "第二栏"'},"​")],-1),E=e("ul",null,[e("li",null,"Medium 与第一栏同理，调整中部色调")],-1),L=e("h3",{id:"第三栏-1",tabindex:"-1"},[l("第三栏 "),e("a",{class:"header-anchor",href:"#第三栏-1","aria-label":'Permalink to "第三栏"'},"​")],-1),N=e("ul",null,[e("li",null,"Bottom 与上同理，调整底部色调")],-1),V=e("h3",{id:"第四栏-1",tabindex:"-1"},[l("第四栏 "),e("a",{class:"header-anchor",href:"#第四栏-1","aria-label":'Permalink to "第四栏"'},"​")],-1),w=e("ul",null,[e("li",null,"EnvDiffLight 该参数为天空盒的光源强度，调高该参数，天空盒对模型的影响将会变亮"),e("li",null,"EnvSpecLight 该参数为漫反射强度，调高该参数，模型漫反射增强")],-1),C=e("h2",{id:"sky-night",tabindex:"-1"},[l("Sky Night "),e("a",{class:"header-anchor",href:"#sky-night","aria-label":'Permalink to "Sky Night"'},"​")],-1),j=e("p",null,[l("该天空盒与"),e("code",null,"Sky Hemisphere"),l("几乎一样，区别是该天空盒带有夜晚的月亮和流星效果")],-1),F=e("h2",{id:"time-of-day",tabindex:"-1"},[l("Time of day "),e("a",{class:"header-anchor",href:"#time-of-day","aria-label":'Permalink to "Time of day"'},"​")],-1),O=e("h3",{id:"第一栏-2",tabindex:"-1"},[l("第一栏 "),e("a",{class:"header-anchor",href:"#第一栏-2","aria-label":'Permalink to "第一栏"'},"​")],-1),Z=e("ul",null,[e("li",null,"SunRadius 调整太阳半径大小")],-1),I=e("h3",{id:"第二栏-2",tabindex:"-1"},[l("第二栏 "),e("a",{class:"header-anchor",href:"#第二栏-2","aria-label":'Permalink to "第二栏"'},"​")],-1),J=e("ul",null,[e("li",null,"EnvDiffLight 该参数为天空盒的光源强度，调高该参数，天空盒对模型的影响将会变亮"),e("li",null,"EnvSpecLight 该参数为漫反射强度，调高该参数，模型漫反射增强")],-1),U=e("h3",{id:"第三栏-2",tabindex:"-1"},[l("第三栏 "),e("a",{class:"header-anchor",href:"#第三栏-2","aria-label":'Permalink to "第三栏"'},"​")],-1),q=e("ul",null,[e("li",null,"MiePhase 该参数可以影响丁达尔效应的强弱"),e("li",null,"FogRange 调整雾气距离"),e("li",null,"FogIntensity 该参数可以影响雾气效果强度")],-1),z=e("h3",{id:"第四栏-2",tabindex:"-1"},[l("第四栏 "),e("a",{class:"header-anchor",href:"#第四栏-2","aria-label":'Permalink to "第四栏"'},"​")],-1),A=e("ul",null,[e("li",null,"Cloud 云的密度，调高该参数，云将增多"),e("li",null,"CloudSpeed 云的流动速度")],-1),K=e("h2",{id:"time-of-night",tabindex:"-1"},[l("Time of night "),e("a",{class:"header-anchor",href:"#time-of-night","aria-label":'Permalink to "Time of night"'},"​")],-1),Q=e("p",null,[l("该天空盒具有夜间星空银河与流星效果，参数调整与"),e("code",null,"Time of day"),l("基本一致。 区别是该天空盒第四栏的参数为影响星星的效果")],-1),re={__name:"mmdray-skyboxs",setup(W,{expose:h}){const n=JSON.parse('{"title":"ray-mmd内置天空盒调整参数简介","description":"","frontmatter":{"categories":"小技术","date":"2021-08-12T19:57:39.000Z","layout":"post","tags":["MMD","3D"],"title":"ray-mmd内置天空盒调整参数简介"},"headers":[{"level":2,"title":"Helipad GoldenHour","slug":"helipad-goldenhour","link":"#helipad-goldenhour","children":[{"level":3,"title":"第一栏","slug":"第一栏","link":"#第一栏","children":[]},{"level":3,"title":"第二栏","slug":"第二栏","link":"#第二栏","children":[]},{"level":3,"title":"第三栏","slug":"第三栏","link":"#第三栏","children":[]},{"level":3,"title":"第四栏","slug":"第四栏","link":"#第四栏","children":[]}]},{"level":2,"title":"Sky Hemisphere","slug":"sky-hemisphere","link":"#sky-hemisphere","children":[{"level":3,"title":"第一栏","slug":"第一栏-1","link":"#第一栏-1","children":[]},{"level":3,"title":"第二栏","slug":"第二栏-1","link":"#第二栏-1","children":[]},{"level":3,"title":"第三栏","slug":"第三栏-1","link":"#第三栏-1","children":[]},{"level":3,"title":"第四栏","slug":"第四栏-1","link":"#第四栏-1","children":[]}]},{"level":2,"title":"Sky Night","slug":"sky-night","link":"#sky-night","children":[]},{"level":2,"title":"Time of day","slug":"time-of-day","link":"#time-of-day","children":[{"level":3,"title":"第一栏","slug":"第一栏-2","link":"#第一栏-2","children":[]},{"level":3,"title":"第二栏","slug":"第二栏-2","link":"#第二栏-2","children":[]},{"level":3,"title":"第三栏","slug":"第三栏-2","link":"#第三栏-2","children":[]},{"level":3,"title":"第四栏","slug":"第四栏-2","link":"#第四栏-2","children":[]}]},{"level":2,"title":"Time of night","slug":"time-of-night","link":"#time-of-night","children":[]}],"relativePath":"pages/posts/mmdray-skyboxs.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/mmdray-skyboxs.md","lastUpdated":1716651827000}'),s=f(),o=n.frontmatter||{};return s.meta.frontmatter=Object.assign(s.meta.frontmatter||{},n.frontmatter||{}),r("pageData",n),r("valaxy:frontmatter",o),globalThis.$frontmatter=o,h({frontmatter:{categories:"小技术",date:"2021-08-12T19:57:39.000Z",layout:"post",tags:["MMD","3D"],title:"ray-mmd内置天空盒调整参数简介"}}),(t,Y)=>{const d=c;return _(),m(d,{frontmatter:u(o)},{"main-content-md":a(()=>[g,p,k,b,y,v,P,x,S,$,T,H,B,D,G,M,R,E,L,N,V,w,C,j,F,O,Z,I,J,U,q,z,A,K,Q]),"main-header":a(()=>[i(t.$slots,"main-header")]),"main-header-after":a(()=>[i(t.$slots,"main-header-after")]),"main-nav":a(()=>[i(t.$slots,"main-nav")]),"main-content":a(()=>[i(t.$slots,"main-content")]),"main-content-after":a(()=>[i(t.$slots,"main-content-after")]),"main-nav-before":a(()=>[i(t.$slots,"main-nav-before")]),"main-nav-after":a(()=>[i(t.$slots,"main-nav-after")]),comment:a(()=>[i(t.$slots,"comment")]),footer:a(()=>[i(t.$slots,"footer")]),aside:a(()=>[i(t.$slots,"aside")]),"aside-custom":a(()=>[i(t.$slots,"aside-custom")]),default:a(()=>[i(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{re as default};
