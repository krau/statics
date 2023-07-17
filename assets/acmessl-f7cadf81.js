import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-80fbe896.js";import{_ as d,p as h,c as C,w as l,o as m,b as s,d as e,e as o,a as u,r as t,f as y}from"./app-f4422726.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-6e145f56.js";import"./YunCard.vue_vue_type_script_setup_true_lang-205234ed.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-dbb65843.js";const _="/photo/post-pics/acmessl/acmessl1.webp",rs=JSON.parse('{"title":"使用ACME脚本申请并配置SSL证书","description":"","frontmatter":{"categories":"小技术","date":"2022-04-22T16:48:01.000Z","layout":"post","tags":["SSL"],"title":"使用ACME脚本申请并配置SSL证书","updated":"2022-04-22T16:48:01.000Z"},"headers":[{"level":2,"title":"前言|为什么选择ACME方法","slug":"前言-为什么选择acme方法","link":"#前言-为什么选择acme方法","children":[]},{"level":2,"title":"准备工作与脚本安装","slug":"准备工作与脚本安装","link":"#准备工作与脚本安装","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]}]},{"level":2,"title":"证书申请","slug":"证书申请","link":"#证书申请","children":[{"level":3,"title":"监听80端口申请证书","slug":"监听80端口申请证书","link":"#监听80端口申请证书","children":[]},{"level":3,"title":"通过Nginx服务申请","slug":"通过nginx服务申请","link":"#通过nginx服务申请","children":[]}]},{"level":2,"title":"安装证书到指定路径","slug":"安装证书到指定路径","link":"#安装证书到指定路径","children":[]},{"level":2,"title":"善后工作","slug":"善后工作","link":"#善后工作","children":[]}],"relativePath":"pages/posts/acmessl.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/acmessl.md","lastUpdated":1689574017000}'),c=JSON.parse('{"title":"使用ACME脚本申请并配置SSL证书","description":"","frontmatter":{"categories":"小技术","date":"2022-04-22T16:48:01.000Z","layout":"post","tags":["SSL"],"title":"使用ACME脚本申请并配置SSL证书","updated":"2022-04-22T16:48:01.000Z"},"headers":[{"level":2,"title":"前言|为什么选择ACME方法","slug":"前言-为什么选择acme方法","link":"#前言-为什么选择acme方法","children":[]},{"level":2,"title":"准备工作与脚本安装","slug":"准备工作与脚本安装","link":"#准备工作与脚本安装","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]}]},{"level":2,"title":"证书申请","slug":"证书申请","link":"#证书申请","children":[{"level":3,"title":"监听80端口申请证书","slug":"监听80端口申请证书","link":"#监听80端口申请证书","children":[]},{"level":3,"title":"通过Nginx服务申请","slug":"通过nginx服务申请","link":"#通过nginx服务申请","children":[]}]},{"level":2,"title":"安装证书到指定路径","slug":"安装证书到指定路径","link":"#安装证书到指定路径","children":[]},{"level":2,"title":"善后工作","slug":"善后工作","link":"#善后工作","children":[]}],"relativePath":"pages/posts/acmessl.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/acmessl.md","lastUpdated":1689574017000}'),A={name:"pages/posts/acmessl.md",data(){return{data:c,frontmatter:c.frontmatter}},setup(){h("pageData",c)}},D={id:"前言-为什么选择acme方法",tabindex:"-1"},g=s("p",null,"要想通过TLS/https协议访问自己域名下的服务，就必须申请SSL证书。类似宝塔这种面板提供了简单快捷的方法一键申请，但终究不是良好的解决方案。一来宝塔过于臃肿，二来其需要手机实名验证。使用各大云服务商提供的【免费证书】则还需要登录网页、申请、导入证书，未免操作繁琐。更何况这些云服务商提供的ssl证书只能给你很少的自由选择性。",-1),f=s("p",null,"而ACME则很好地解决了这些问题。",-1),E=s("p",null,"系统环境：Debian",-1),v={id:"准备工作与脚本安装",tabindex:"-1"},k=s("p",null,"在开始之前，首先将域名解析到服务器的ip上。",-1),x={id:"安装",tabindex:"-1"},F=s("p",null,"首先安装socat，它是acme所需的组件",-1),b=s("div",{class:"language-shell"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"apt"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"update")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"apt"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"install"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"socat"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-y")]),e(`
`),s("span",{class:"line"})])])],-1),B=s("p",null,"然后安装acme脚本",-1),S=s("div",{class:"language-shell"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"curl"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"https://get.acme.sh"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"|"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"sh")]),e(`
`),s("span",{class:"line"})])])],-1),$=s("p",null,[e("脚本安装在用户目录下的"),s("code",null,".acme.sh"),e("（隐藏）文件夹内，使用 "),s("code",null,". .bashrc"),e(" 让acme.sh命令生效")],-1),L=s("p",null,"接下来使用脚本申请证书",-1),M={id:"证书申请",tabindex:"-1"},N=s("p",null,"首先注册CA账户，将下列命令中的邮箱改为自己的邮箱地址",-1),T=s("div",{class:"language-shell"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"acme.sh"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"--register-account"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-m"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"xxxx@xxxx.com")]),e(`
`),s("span",{class:"line"})])])],-1),w=s("p",null,"注册成功的输出结果如下",-1),V=s("p",null,[s("img",{src:_,alt:"1"}),e("_注册成功")],-1),Z=s("p",null,"然后申请证书，接下来的方法有多种，根据自己情况选择可用的一种即可",-1),J={id:"监听80端口申请证书",tabindex:"-1"},O=s("p",null,"如果服务器的80端口空闲，且能够访问，可以让acme临时监听80端口，完成验证。执行以下命令即可。将domain.com改为自己的域名",-1),P=s("div",{class:"language-shell"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"acme.sh"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"--issue"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-d"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"domain.com"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"--standalone")]),e(`
`),s("span",{class:"line"})])])],-1),U={id:"通过nginx服务申请",tabindex:"-1"},j=s("p",null,"如果服务器上已经安装了nginx，且网页能够正常打开，执行以下命令即可通过nginx验证并申请证书。",-1),q=s("div",{class:"language-shell"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"acme.sh"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"--issue"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-d"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"mydomain.com"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"--nginx")]),e(`
`),s("span",{class:"line"})])])],-1),z=s("hr",null,null,-1),G=s("p",null,"如果成功申请了证书，将会看到的输出结果是一长串自己的证书和证书文件存放路径。",-1),H={id:"安装证书到指定路径",tabindex:"-1"},I=s("p",null,"生成的证书文件默认存放在与acme.sh脚本相同文件夹内，大多数情况下不应直接使用该路径下的证书文件，而使用以下命令安装证书到指定路径。",-1),K=s("div",{class:"language-shell"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"acme.sh"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"--install-cert"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"-d"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"domain.com"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"--key-file"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#C3E88D"}},"pat"),s("span",{style:{color:"#A6ACCD"}},"h"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#C3E88D"}},"privkey.pem"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"--fullchain-file"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#C3E88D"}},"pat"),s("span",{style:{color:"#A6ACCD"}},"h"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#C3E88D"}},"fullchain.pem")]),e(`
`),s("span",{class:"line"})])])],-1),Q=s("p",null,[e("其中"),s("code",null,"--key-file <path>privkey.pem"),e("指定的为私钥文件，"),s("code",null,"--fullchain-file <path>fullchain.pem"),e("为证书文件。")],-1),R=s("p",null,"done",-1),W={id:"善后工作",tabindex:"-1"},X=s("div",{class:"language-shell"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"acme.sh"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"--upgrade"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"--auto-upgrade"),s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#676E95","font-style":"italic"}},"#开启acme的自动更新")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"acme.sh"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"--upgrade"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"--auto-upgrade"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#676E95","font-style":"italic"}},"#关闭自动更新")]),e(`
`),s("span",{class:"line"})])])],-1);function Y(a,ss,es,ls,i,as){const n=y,r=p;return m(),C(r,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":l(()=>[s("h2",D,[e("前言|为什么选择ACME方法 "),o(n,{class:"header-anchor",href:"#前言-为什么选择acme方法","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),g,f,u(" more "),E,s("h2",v,[e("准备工作与脚本安装 "),o(n,{class:"header-anchor",href:"#准备工作与脚本安装","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),k,s("h3",x,[e("安装 "),o(n,{class:"header-anchor",href:"#安装","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),F,b,B,S,$,L,s("h2",M,[e("证书申请 "),o(n,{class:"header-anchor",href:"#证书申请","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),N,T,w,V,Z,s("h3",J,[e("监听80端口申请证书 "),o(n,{class:"header-anchor",href:"#监听80端口申请证书","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),O,P,s("h3",U,[e("通过Nginx服务申请 "),o(n,{class:"header-anchor",href:"#通过nginx服务申请","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),j,q,z,G,s("h2",H,[e("安装证书到指定路径 "),o(n,{class:"header-anchor",href:"#安装证书到指定路径","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),I,K,Q,R,s("h2",W,[e("善后工作 "),o(n,{class:"header-anchor",href:"#善后工作","aria-hidden":"true"},{default:l(()=>[e("#")]),_:1})]),s("p",null,[e("在安装acme.sh脚本时，它自动为创建 cronjob, 每天 0:00 点自动检测所有的证书, 如果快过期了, 需要更新, 则会自动更新证书。 但由于acme 协议和 letsencrypt CA 都在频繁的更新, 因此 "),o(n,{href:"http://acme.sh",target:"_blank",rel:"noreferrer"},{default:l(()=>[e("acme.sh")]),_:1}),e(" 也应当经常更新以保持同步。参考以下命令")]),X]),"main-header":l(()=>[t(a.$slots,"main-header")]),"main-header-after":l(()=>[t(a.$slots,"main-header-after")]),"main-nav":l(()=>[t(a.$slots,"main-nav")]),"main-content":l(()=>[t(a.$slots,"main-content")]),"main-content-after":l(()=>[t(a.$slots,"main-content-after")]),"main-nav-before":l(()=>[t(a.$slots,"main-nav-before")]),"main-nav-after":l(()=>[t(a.$slots,"main-nav-after")]),comment:l(()=>[t(a.$slots,"comment")]),footer:l(()=>[t(a.$slots,"footer")]),aside:l(()=>[t(a.$slots,"aside")]),"aside-custom":l(()=>[t(a.$slots,"aside-custom")]),default:l(()=>[t(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const ps=d(A,[["render",Y]]);export{rs as __pageData,ps as default};
