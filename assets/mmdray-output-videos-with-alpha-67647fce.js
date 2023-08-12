import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-37897892.js";import{_ as m,u as h,p as c,c as u,w as e,o as f,b as t,d as o,e as r,r as s,f as g}from"./app-6995c9ef.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-6f337824.js";import"./YunCard.vue_vue_type_script_setup_true_lang-bbccd67f.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-052d7f34.js";const L=JSON.parse('{"title":"MMD中导出带alpha通道视频的方法","description":"","frontmatter":{"categories":"小技术","date":"2020-04-07T20:33:29.000Z","layout":"post","tags":["MMD","3D"],"title":"MMD中导出带alpha通道视频的方法"},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"通过一个MME实现","slug":"通过一个mme实现","link":"#通过一个mme实现","children":[]}],"relativePath":"pages/posts/mmdray-output-videos-with-alpha.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/mmdray-output-videos-with-alpha.md","lastUpdated":1691822978000}'),l=JSON.parse('{"title":"MMD中导出带alpha通道视频的方法","description":"","frontmatter":{"categories":"小技术","date":"2020-04-07T20:33:29.000Z","layout":"post","tags":["MMD","3D"],"title":"MMD中导出带alpha通道视频的方法"},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"通过一个MME实现","slug":"通过一个mme实现","link":"#通过一个mme实现","children":[]}],"relativePath":"pages/posts/mmdray-output-videos-with-alpha.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/mmdray-output-videos-with-alpha.md","lastUpdated":1691822978000}'),_={name:"pages/posts/mmdray-output-videos-with-alpha.md",data(){return{data:l,frontmatter:l.frontmatter,$frontmatter:l.frontmatter}},setup(){const a=h();a.meta.frontmatter=Object.assign(a.meta.frontmatter,l.frontmatter),c("pageData",l)}},M={id:"前言",tabindex:"-1"},v=t("p",null,"闲来无事在摸MMD，然后看到了这个",-1),b=t("p",null,[t("a",{href:"https://www.bilibili.com/video/BV1r7411u7ST",target:"_blank",rel:"noreferrer"},"【PV背景配布/动作配布】九尾三妈式初音 - お気に召すまま ")],-1),w=t("p",null,"感觉这个配布的挺不错，想摸一个。 但是碰到点问题：60fps的背景是单独的视频，需要通过后期软件把人物和背景的视频叠加起来，这就要一个带有alpha通道（透明）的人物视频，去网上找了一些方法，依旧踩了不少坑。",-1),$={id:"通过一个mme实现",tabindex:"-1"},y=t("p",null,[o("下载之后"),t("strong",null,"保持乱码状态解压")],-1),D=t("p",null,[o("然后在"),t("code",null,"RewriteAlpha"),o("文件夹中，往MMD里加入这个"),t("code",null,"RewriteAlpha.x")],-1),k=t("p",null,[o("在MMD>背景>绘制附件中，把"),t("code",null,"RewriteAlpha.x"),o("放到最后一位")],-1),E=t("p",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20200407205316.png",alt:""})],-1),V=t("p",null,[o("然后打开MME面板，找到"),t("code",null,"alphamap"),o("栏，把skybox和stage的渲染关闭（取消勾选），人物模型的渲染开启，并勾选上RewriteAlpha.x的渲染")],-1),x=t("p",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20200407205639.png",alt:""})],-1),A=t("p",null,[o("这样就算完成了，导出的时候将会导出只有人物渲染，且背景是透明通道的视频，也可以先导出一张png看看效果。"),t("s",null,"别渲染了半天发现不是透明通道，问就是血泪史")],-1),j=t("p",null,[t("img",{src:"https://img.asnet.top/i/2020/04/07/yrrxxj.png",alt:""})],-1),N=t("p",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/alphammd.png",alt:""})],-1);function R(a,B,O,S,i,T){const n=g,d=p;return f(),u(d,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":e(()=>[t("h2",M,[o("前言 "),r(n,{class:"header-anchor",href:"#前言","aria-hidden":"true"},{default:e(()=>[o("#")]),_:1})]),v,b,w,t("h2",$,[o("通过一个MME实现 "),r(n,{class:"header-anchor",href:"#通过一个mme实现","aria-hidden":"true"},{default:e(()=>[o("#")]),_:1})]),t("p",null,[o("找了很多方法，感觉就这个最简单方便。 首先去下载这个MME："),r(n,{href:"https://bowlroll.net/file/27004",target:"_blank",rel:"noreferrer"},{default:e(()=>[o("https://bowlroll.net/file/27004")]),_:1}),o(" 这个MME可以让你随心所欲的加花里花哨的全局MME，而不会丢失透明通道")]),y,D,k,E,V,x,A,j,N]),"main-header":e(()=>[s(a.$slots,"main-header")]),"main-header-after":e(()=>[s(a.$slots,"main-header-after")]),"main-nav":e(()=>[s(a.$slots,"main-nav")]),"main-content":e(()=>[s(a.$slots,"main-content")]),"main-content-after":e(()=>[s(a.$slots,"main-content-after")]),"main-nav-before":e(()=>[s(a.$slots,"main-nav-before")]),"main-nav-after":e(()=>[s(a.$slots,"main-nav-after")]),comment:e(()=>[s(a.$slots,"comment")]),footer:e(()=>[s(a.$slots,"footer")]),aside:e(()=>[s(a.$slots,"aside")]),"aside-custom":e(()=>[s(a.$slots,"aside-custom")]),default:e(()=>[s(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const W=m(_,[["render",R]]);export{L as __pageData,W as default};
