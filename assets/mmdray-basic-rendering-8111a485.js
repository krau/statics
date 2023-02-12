import{_ as m}from"./ValaxyMain.vue_vue_type_style_index_0_lang-80fbe896.js";import{_ as c,p,c as h,w as a,o as g,a as f,b as t,d as e,e as r,r as s,f as _}from"./app-f4422726.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-6e145f56.js";import"./YunCard.vue_vue_type_script_setup_true_lang-205234ed.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-dbb65843.js";const K=JSON.parse('{"title":"ray-mmd渲染基本流程","description":"","frontmatter":{"categories":"小技术","date":"2020-07-17T16:48:46.000Z","layout":"post","tags":["3D","MMD"],"title":"ray-mmd渲染基本流程"},"headers":[{"level":2,"title":"Download","slug":"download","link":"#download","children":[]},{"level":2,"title":"渲染基本流程","slug":"渲染基本流程","link":"#渲染基本流程","children":[]}],"relativePath":"pages/posts/mmdray-basic-rendering.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/mmdray-basic-rendering.md","lastUpdated":1689574017000}'),i=JSON.parse('{"title":"ray-mmd渲染基本流程","description":"","frontmatter":{"categories":"小技术","date":"2020-07-17T16:48:46.000Z","layout":"post","tags":["3D","MMD"],"title":"ray-mmd渲染基本流程"},"headers":[{"level":2,"title":"Download","slug":"download","link":"#download","children":[]},{"level":2,"title":"渲染基本流程","slug":"渲染基本流程","link":"#渲染基本流程","children":[]}],"relativePath":"pages/posts/mmdray-basic-rendering.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/mmdray-basic-rendering.md","lastUpdated":1689574017000}'),u={name:"pages/posts/mmdray-basic-rendering.md",data(){return{data:i,frontmatter:i.frontmatter}},setup(){p("pageData",i)}},y=t("p",null,[t("img",{src:"https://pic.downk.cc/item/5f119a0214195aa59417256d.png",alt:"preview"})],-1),b={id:"download",tabindex:"-1"},w=t("p",null,[t("img",{src:"https://pic.downk.cc/item/5f116ea214195aa5940a510c.jpg",alt:""})],-1),k=t("p",null,"下载完成后解压ray和各个扩展，把扩展文件分别复制到ray主目录中对应的文件夹中",-1),v={id:"渲染基本流程",tabindex:"-1"},$=t("p",null,[e("载入人物，场景等数据后，就可以开始ray渲染了 但在这之前，还需要在mmd显示菜单中，关闭地面阴影显示，抗锯齿和各向异性过滤 "),t("img",{src:"https://pic.downk.cc/item/5f11705414195aa5940ae29c.jpg",alt:""}),t("em",null,"因为ray是自带抗锯齿和阴影的，如果不关则会导致一些难以名状的画面和性能问题")],-1),j=t("p",null,"第一步需要向mmd中丢入ray根目录下的ray.x和ray_controller.pmx，这两个分别是ray环境和ray控制器",-1),x=t("p",null,[t("img",{src:"https://pic.downk.cc/item/5f1171fa14195aa5940b7b3b.jpg",alt:""})],-1),D=t("p",null,[e("然后放入ray/skybox目录下的任意一个天空盒，它应该是以.pmx为后缀的文件。 此处以"),t("strong",null,"Time of day"),e("为例。 丢入之后在背景>模型描绘顺序中调整人物，场景，和skybox的顺序 这三个的正确相对顺序应为")],-1),M=t("p",null,"skybox stage（场景） model（人物）",-1),N=t("p",null,[t("img",{src:"https://pic.downk.cc/item/5f11739b14195aa5940c0ba1.jpg",alt:""})],-1),T=t("p",null,"然后在右上角MMEffect中添加渲染",-1),V=t("p",null,[e("在mian栏中，为场景和人物添加main文件夹内的main.fx（主渲染） "),t("img",{src:"https://pic.downk.cc/item/5f1174ee14195aa5940c6dbe.jpg",alt:""})],-1),B=t("p",null,[e("在Envlightmap（环境）栏中，为skybox添加渲染 "),t("img",{src:"https://pic.downk.cc/item/5f11767114195aa5940d1714.jpg",alt:""})],-1),S=t("p",null,[e("在Fogmap（雾气）栏中，为skybox添加雾气效果渲染 "),t("img",{src:"https://pic.downk.cc/item/5f1177b014195aa5940d801d.jpg",alt:""}),t("em",null,"用方框框起来的三个均为fogmap对应的渲染，只需要选择一个添加就可以，一般选择Time of fog with godray with cloud caster（名字越长越nb）")],-1),C=t("p",null,[e("在materials栏中，为skybox渲染正确的材质 "),t("img",{src:"https://pic.downk.cc/item/5f119aac14195aa59417535e.jpg",alt:""})],-1),E=t("p",null,"至此，再稍微调整一下打光和一些参数，就算完成了ray渲染的最基本步骤，现在的画面相较于未渲染的画面已经耐看多了",-1),J=t("p",null,[e("before： "),t("img",{src:"https://pic.downk.cc/item/5f119e2914195aa5941855c6.jpg",alt:""})],-1),O=t("p",null,[e("now： "),t("img",{src:"https://pic.downk.cc/item/5f119d2814195aa594180924.jpg",alt:""})],-1),P=t("p",null,"但这只是最基本的套用渲染的流程，相较于无渲染也就是从看不了提升为了勉强能看，要想做出真正好康的mmd，仅仅这些是完全不行的",-1),U=t("p",null,"对于接触mmd时间不长的新手来说，没必要去详细了解每个概念，需要的是自己不断尝试，去感受那些渲染功能的具体作用。所以一开始更好的学mmd方法是，什么都不管，跟着做就好了。",-1);function Z(o,A,F,L,l,R){const n=_,d=m;return g(),h(d,{frontmatter:l.frontmatter,data:l.data},{"main-content-md":a(()=>[y,f(" more "),t("h2",b,[e("Download "),r(n,{class:"header-anchor",href:"#download","aria-hidden":"true"},{default:a(()=>[e("#")]),_:1})]),t("p",null,[e("前往"),r(n,{href:"https://github.com/ray-cast/ray-mmd",target:"_blank",rel:"noreferrer"},{default:a(()=>[e("github")]),_:1}),e("下载最新版ray mmd 注意：不仅仅是打包下载code就完事的，还需要去下载各项扩展（详见github仓库下的readme）")]),w,k,t("h2",v,[e("渲染基本流程 "),r(n,{class:"header-anchor",href:"#渲染基本流程","aria-hidden":"true"},{default:a(()=>[e("#")]),_:1})]),$,j,x,D,M,N,T,V,B,S,C,E,J,O,P,U]),"main-header":a(()=>[s(o.$slots,"main-header")]),"main-header-after":a(()=>[s(o.$slots,"main-header-after")]),"main-nav":a(()=>[s(o.$slots,"main-nav")]),"main-content":a(()=>[s(o.$slots,"main-content")]),"main-content-after":a(()=>[s(o.$slots,"main-content-after")]),"main-nav-before":a(()=>[s(o.$slots,"main-nav-before")]),"main-nav-after":a(()=>[s(o.$slots,"main-nav-after")]),comment:a(()=>[s(o.$slots,"comment")]),footer:a(()=>[s(o.$slots,"footer")]),aside:a(()=>[s(o.$slots,"aside")]),"aside-custom":a(()=>[s(o.$slots,"aside-custom")]),default:a(()=>[s(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const Q=c(u,[["render",Z]]);export{K as __pageData,Q as default};