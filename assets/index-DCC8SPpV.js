import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BpGoxE0S.js";import{c as k,w as i,f as g,e as f,p as m,o as F,g as a,h as s,v as u,r}from"./app-DYwnrrn0.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-BzH1ppc2.js";import"./YunCard.vue_vue_type_script_setup_true_lang-BeOWRhvZ.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-B_Gh7fdw.js";import"./post-DOrnddpB.js";const y="/assets/use-sharex-and-mdimage-for-efficiency_01-16-19-19-40-Dq6pT-3E.webp",D="/assets/use-sharex-and-mdimage-for-efficiency_01-16-19-24-22-C94-chFp.webp",b="/assets/use-sharex-and-mdimage-for-efficiency_01-16-19-26-14-CIUICsW_.webp",S={__name:"index",setup(w,{expose:d}){const l=JSON.parse('{"title":"使用ShareX和Markdown Image自动压缩截图为WebP格式并一键插入Markdown文档","description":"","frontmatter":{"layout":"post","title":"使用ShareX和Markdown Image自动压缩截图为WebP格式并一键插入Markdown文档","date":"2023-01-16 18:04:11","tag":["博客","效率","安利"],"categories":["小技术"]},"headers":[{"level":2,"title":"配置 ShareX","slug":"配置-sharex","link":"#配置-sharex","children":[]},{"level":2,"title":"配置 Markdown Image","slug":"配置-markdown-image","link":"#配置-markdown-image","children":[]}],"relativePath":"pages/posts/use-sharex-and-mdimage-for-efficiency/index.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/use-sharex-and-mdimage-for-efficiency/index.md","lastUpdated":1726839524000}'),o=f(),n=l.frontmatter||{};return o.meta.frontmatter=Object.assign(o.meta.frontmatter||{},l.frontmatter||{}),m("pageData",l),m("valaxy:frontmatter",n),globalThis.$frontmatter=n,d({frontmatter:{layout:"post",title:"使用ShareX和Markdown Image自动压缩截图为WebP格式并一键插入Markdown文档",date:"2023-01-16 18:04:11",tag:["博客","效率","安利"],categories:["小技术"]}}),(t,e)=>{const p=h;return F(),k(p,{frontmatter:g(n)},{"main-content-md":i(()=>[e[0]||(e[0]=a("p",null,[s("之前我曾安利过 "),a("a",{href:"http://localhost:4859/posts/pasteimage-in-vs",target:"_blank",rel:"noreferrer"},"PasteImage"),s(" 这个插件，用 VSCode 写博客/文档的时候，用它可以很快捷地在md文档中插入图片。")],-1)),e[1]||(e[1]=a("p",null,[s("受某个友人影响，我也开始尝试 "),a("s",null,"拥抱 webp"),s("了，近期的文章内的图片都已经压缩成了 webp 格式。但是 PasteImage 却不支持 webp 格式，于是我又想办法整出了今天这个解决方案，实现完全自动化的 压缩+插入图片。")],-1)),u(" more "),e[2]||(e[2]=a("h2",{id:"配置-sharex",tabindex:"-1"},[s("配置 ShareX "),a("a",{class:"header-anchor",href:"#配置-sharex","aria-label":'Permalink to "配置 ShareX"'},"​")],-1)),e[3]||(e[3]=a("p",null,[a("a",{href:"https://getsharex.com/",target:"_blank",rel:"noreferrer"},"sharex"),s(" 是一个强大的截屏、录屏、分享软件，开源免费，支持高度自定义的自动化，")],-1)),e[4]||(e[4]=a("p",null,[s("然后还要安装 "),a("a",{href:"https://ffmpeg.org/",target:"_blank",rel:"noreferrer"},"ffmpeg"),s(" ，它在本文的作用是通过命令调用来压缩图片。如果你没了解过它的话不妨去搜索一下，也是一个十分强大的工具。")],-1)),e[5]||(e[5]=a("p",null,"然后在 sharex 的动作设置中，添加一个动作",-1)),e[6]||(e[6]=a("figure",null,[a("img",{src:y,alt:"图 2",loading:"lazy",decoding:"async"})],-1)),e[7]||(e[7]=a("ul",null,[a("li",null,"名称: 随意"),a("li",null,"文件路径: ffmpeg 的安装路径，要指定到 ffmpeg 可执行文件"),a("li",null,[s("参数: "),a("code",null,'-i "$input" -q 75 "$output"'),s(" 其中 -q 75 是以75%质量压缩")]),a("li",null,"输出文件扩展名: webp"),a("li",null,"扩展名筛选: png")],-1)),e[8]||(e[8]=a("p",null,"勾上下面的 隐藏窗口 和 删除输入文件",-1)),e[9]||(e[9]=a("p",null,[a("img",{src:D,alt:"图 3"}),s(" 然后在截图后的任务里选中这些项(添加图像特效可视情况自行添加)")],-1)),e[10]||(e[10]=a("figure",null,[a("img",{src:b,alt:"图 4",loading:"lazy",decoding:"async"})],-1)),e[11]||(e[11]=a("h2",{id:"配置-markdown-image",tabindex:"-1"},[s("配置 Markdown Image "),a("a",{class:"header-anchor",href:"#配置-markdown-image","aria-label":'Permalink to "配置 Markdown Image"'},"​")],-1)),e[12]||(e[12]=a("p",null,[a("a",{href:"https://marketplace.visualstudio.com/items?itemName=hancel.markdown-image",target:"_blank",rel:"noreferrer"},"Markdown Image"),s(" 是一个 VSCode 插件，支持将剪贴板中的图片保存在指定路径下(或指定图床中)，并自动生成 markdown 格式的引用。")],-1)),e[13]||(e[13]=a("p",null,[s("我的博客的文章图片是按照 "),a("code",null,"/public/photo/post-pics/文章名/文章名_时间"),s(" 的格式和路径保存在本地的，所以按照下面这样配置")],-1)),e[14]||(e[14]=a("div",{class:"language-json vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"json"),a("pre",{class:"shiki shiki-themes github-light material-theme-darker vp-code"},[a("code",{"v-pre":""},[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}},"markdown-image.base.fileNameFormat"),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},": "),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}},"${mdname}/${mdname}_${MM}-${DD}-${HH}-${mm}-${ss}"),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},",")]),s(`
`),a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}},"markdown-image.local.path"),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},": "),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}},"../../public/photo/post-pics/"),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},",")]),s(`
`),a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}},"markdown-image.local.referencePath"),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},": "),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}},"/photo/post-pics/${mdname}/"),a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#89DDFF"}},'"'),a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},",")])])]),a("button",{class:"collapse"})],-1)),e[15]||(e[15]=a("p",null,[s("更详细的配置，参照 "),a("a",{href:"https://github.com/imlinhanchao/vsc-markdown-image/blob/HEAD/README.zh-cn.md",target:"_blank",rel:"noreferrer"},"Markdown Image 的官方文档")],-1)),e[16]||(e[16]=a("p",null,[s("这样就完成啦。现在使用 sharex 截屏时会自动调用 ffmpeg 将文件压缩为 webp 格式并保存在剪贴板中，然后在 VSCode 中使用 "),a("code",null,"Alt + Shift + V"),s(" 粘贴即可。")],-1))]),"main-header":i(()=>[r(t.$slots,"main-header")]),"main-header-after":i(()=>[r(t.$slots,"main-header-after")]),"main-nav":i(()=>[r(t.$slots,"main-nav")]),"main-content":i(()=>[r(t.$slots,"main-content")]),"main-content-after":i(()=>[r(t.$slots,"main-content-after")]),"main-nav-before":i(()=>[r(t.$slots,"main-nav-before")]),"main-nav-after":i(()=>[r(t.$slots,"main-nav-after")]),comment:i(()=>[r(t.$slots,"comment")]),footer:i(()=>[r(t.$slots,"footer")]),aside:i(()=>[r(t.$slots,"aside")]),"aside-custom":i(()=>[r(t.$slots,"aside-custom")]),default:i(()=>[r(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{S as default};
