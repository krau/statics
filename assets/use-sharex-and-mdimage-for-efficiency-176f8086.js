import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-af7dfedc.js";import{_ as c,p,c as h,w as s,o as f,b as e,d as a,e as r,a as u,r as t,f as g}from"./app-decf7611.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-d1b357f2.js";import"./YunCard.vue_vue_type_style_index_0_lang-d2b8fdc7.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-b4e508fb.js";const _="/photo/post-pics/use-sharex-and-mdimage-for-efficiency/use-sharex-and-mdimage-for-efficiency_01-16-19-19-40.webp",y="/photo/post-pics/use-sharex-and-mdimage-for-efficiency/use-sharex-and-mdimage-for-efficiency_01-16-19-24-22.webp",D="/photo/post-pics/use-sharex-and-mdimage-for-efficiency/use-sharex-and-mdimage-for-efficiency_01-16-19-26-14.webp",O=JSON.parse('{"title":"使用ShareX和Markdown Image自动压缩截图为WebP格式并一键插入Markdown文档","description":"","frontmatter":{"layout":"post","title":"使用ShareX和Markdown Image自动压缩截图为WebP格式并一键插入Markdown文档","date":"2023-01-16T18:04:11.000Z","tag":["博客","效率","安利"],"categories":["小技术"]},"headers":[{"level":2,"title":"配置 ShareX","slug":"配置-sharex","link":"#配置-sharex","children":[]},{"level":2,"title":"配置 Markdown Image","slug":"配置-markdown-image","link":"#配置-markdown-image","children":[]}],"relativePath":"pages/posts/use-sharex-and-mdimage-for-efficiency.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/use-sharex-and-mdimage-for-efficiency.md","lastUpdated":1686884068000}'),l=JSON.parse('{"title":"使用ShareX和Markdown Image自动压缩截图为WebP格式并一键插入Markdown文档","description":"","frontmatter":{"layout":"post","title":"使用ShareX和Markdown Image自动压缩截图为WebP格式并一键插入Markdown文档","date":"2023-01-16T18:04:11.000Z","tag":["博客","效率","安利"],"categories":["小技术"]},"headers":[{"level":2,"title":"配置 ShareX","slug":"配置-sharex","link":"#配置-sharex","children":[]},{"level":2,"title":"配置 Markdown Image","slug":"配置-markdown-image","link":"#配置-markdown-image","children":[]}],"relativePath":"pages/posts/use-sharex-and-mdimage-for-efficiency.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/use-sharex-and-mdimage-for-efficiency.md","lastUpdated":1686884068000}'),k={name:"pages/posts/use-sharex-and-mdimage-for-efficiency.md",data(){return{data:l,frontmatter:l.frontmatter}},setup(){p("pageData",l)}},w=e("p",null,[a("受某个友人影响，我也开始尝试 "),e("s",null,"拥抱 webp"),a("了，近期的文章内的图片都已经压缩成了 webp 格式。但是 PasteImage 却不支持 webp 格式，于是我又想办法整出了今天这个解决方案，实现完全自动化的 压缩+插入图片。")],-1),b={id:"配置-sharex",tabindex:"-1"},F=e("p",null,"然后在 sharex 的动作设置中，添加一个动作",-1),$=e("p",null,[e("img",{src:_,alt:"图 2"})],-1),x=e("ul",null,[e("li",null,"名称: 随意"),e("li",null,"文件路径: ffmpeg 的安装路径，要指定到 ffmpeg 可执行文件"),e("li",null,[a("参数: "),e("code",null,'-i "$input" -q 75 "$output"'),a(" 其中 -q 75 是以75%质量压缩")]),e("li",null,"输出文件扩展名: webp"),e("li",null,"扩展名筛选: png")],-1),C=e("p",null,"勾上下面的 隐藏窗口 和 删除输入文件",-1),v=e("p",null,[e("img",{src:y,alt:"图 3"}),a(" 然后在截图后的任务里选中这些项(添加图像特效可视情况自行添加)")],-1),M=e("p",null,[e("img",{src:D,alt:"图 4"})],-1),A={id:"配置-markdown-image",tabindex:"-1"},S=e("p",null,[a("我的博客的文章图片是按照 "),e("code",null,"/public/photo/post-pics/文章名/文章名_时间"),a(" 的格式和路径保存在本地的，所以按照下面这样配置")],-1),I=e("div",{class:"language-json"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"markdown-image.base.fileNameFormat"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#A6ACCD"}},": "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"${mdname}/${mdname}_${MM}-${DD}-${HH}-${mm}-${ss}"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#A6ACCD"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"markdown-image.local.path"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#A6ACCD"}},": "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"../../public/photo/post-pics/"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#A6ACCD"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"markdown-image.local.referencePath"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#A6ACCD"}},": "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"/photo/post-pics/${mdname}/"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#A6ACCD"}},",")]),a(`
`),e("span",{class:"line"})])])],-1),E=e("p",null,[a("这样就完成啦。现在使用 sharex 截屏时会自动调用 ffmpeg 将文件压缩为 webp 格式并保存在剪贴板中，然后在 VSCode 中使用 "),e("code",null,"Alt + Shift + V"),a(" 粘贴即可。")],-1);function P(o,V,N,X,i,W){const n=g,m=d;return f(),h(m,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":s(()=>[e("p",null,[a("之前我曾安利过 "),r(n,{href:"http://localhost:4859/posts/pasteimage-in-vs",target:"_blank",rel:"noreferrer"},{default:s(()=>[a("PasteImage")]),_:1}),a(" 这个插件，用 VSCode 写博客/文档的时候，用它可以很快捷地在md文档中插入图片。")]),w,u(" more "),e("h2",b,[a("配置 ShareX "),r(n,{class:"header-anchor",href:"#配置-sharex","aria-hidden":"true"},{default:s(()=>[a("#")]),_:1})]),e("p",null,[r(n,{href:"https://getsharex.com/",target:"_blank",rel:"noreferrer"},{default:s(()=>[a("sharex")]),_:1}),a(" 是一个强大的截屏、录屏、分享软件，开源免费，支持高度自定义的自动化，")]),e("p",null,[a("然后还要安装 "),r(n,{href:"https://ffmpeg.org/",target:"_blank",rel:"noreferrer"},{default:s(()=>[a("ffmpeg")]),_:1}),a(" ，它在本文的作用是通过命令调用来压缩图片。如果你没了解过它的话不妨去搜索一下，也是一个十分强大的工具。")]),F,$,x,C,v,M,e("h2",A,[a("配置 Markdown Image "),r(n,{class:"header-anchor",href:"#配置-markdown-image","aria-hidden":"true"},{default:s(()=>[a("#")]),_:1})]),e("p",null,[r(n,{href:"https://marketplace.visualstudio.com/items?itemName=hancel.markdown-image",target:"_blank",rel:"noreferrer"},{default:s(()=>[a("Markdown Image")]),_:1}),a(" 是一个 VSCode 插件，支持将剪贴板中的图片保存在指定路径下(或指定图床中)，并自动生成 markdown 格式的引用。")]),S,I,e("p",null,[a("更详细的配置，参照 "),r(n,{href:"https://github.com/imlinhanchao/vsc-markdown-image/blob/HEAD/README.zh-cn.md",target:"_blank",rel:"noreferrer"},{default:s(()=>[a("Markdown Image 的官方文档")]),_:1})]),E]),"main-header":s(()=>[t(o.$slots,"main-header")]),"main-header-after":s(()=>[t(o.$slots,"main-header-after")]),"main-nav":s(()=>[t(o.$slots,"main-nav")]),"main-content":s(()=>[t(o.$slots,"main-content")]),"main-content-after":s(()=>[t(o.$slots,"main-content-after")]),"main-nav-before":s(()=>[t(o.$slots,"main-nav-before")]),"main-nav-after":s(()=>[t(o.$slots,"main-nav-after")]),comment:s(()=>[t(o.$slots,"comment")]),footer:s(()=>[t(o.$slots,"footer")]),aside:s(()=>[t(o.$slots,"aside")]),"aside-custom":s(()=>[t(o.$slots,"aside-custom")]),default:s(()=>[t(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const U=c(k,[["render",P]]);export{O as __pageData,U as default};
