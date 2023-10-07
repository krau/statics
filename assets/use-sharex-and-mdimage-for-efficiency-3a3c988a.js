import{_ as c}from"./ValaxyMain.vue_vue_type_style_index_0_lang-e7d88808.js";import{_ as p,u as d,p as f,c as h,w as o,o as g,b as e,d as a,e as r,a as u,r as t,f as y}from"./app-4c727bde.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-33e96e55.js";import"./YunCard.vue_vue_type_script_setup_true_lang-2ef9f914.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-518a7645.js";import"./index-463abdac.js";const F="/photo/post-pics/use-sharex-and-mdimage-for-efficiency/use-sharex-and-mdimage-for-efficiency_01-16-19-19-40.webp",_="/photo/post-pics/use-sharex-and-mdimage-for-efficiency/use-sharex-and-mdimage-for-efficiency_01-16-19-24-22.webp",k="/photo/post-pics/use-sharex-and-mdimage-for-efficiency/use-sharex-and-mdimage-for-efficiency_01-16-19-26-14.webp",J=JSON.parse('{"title":"使用ShareX和Markdown Image自动压缩截图为WebP格式并一键插入Markdown文档","description":"","frontmatter":{"layout":"post","title":"使用ShareX和Markdown Image自动压缩截图为WebP格式并一键插入Markdown文档","date":"2023-01-16T18:04:11.000Z","tag":["博客","效率","安利"],"categories":["小技术"]},"headers":[{"level":2,"title":"配置 ShareX","slug":"配置-sharex","link":"#配置-sharex","children":[]},{"level":2,"title":"配置 Markdown Image","slug":"配置-markdown-image","link":"#配置-markdown-image","children":[]}],"relativePath":"pages/posts/use-sharex-and-mdimage-for-efficiency.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/use-sharex-and-mdimage-for-efficiency.md","lastUpdated":1696646616000}'),l=JSON.parse('{"title":"使用ShareX和Markdown Image自动压缩截图为WebP格式并一键插入Markdown文档","description":"","frontmatter":{"layout":"post","title":"使用ShareX和Markdown Image自动压缩截图为WebP格式并一键插入Markdown文档","date":"2023-01-16T18:04:11.000Z","tag":["博客","效率","安利"],"categories":["小技术"]},"headers":[{"level":2,"title":"配置 ShareX","slug":"配置-sharex","link":"#配置-sharex","children":[]},{"level":2,"title":"配置 Markdown Image","slug":"配置-markdown-image","link":"#配置-markdown-image","children":[]}],"relativePath":"pages/posts/use-sharex-and-mdimage-for-efficiency.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/use-sharex-and-mdimage-for-efficiency.md","lastUpdated":1696646616000}'),w={name:"pages/posts/use-sharex-and-mdimage-for-efficiency.md",data(){return{data:l,frontmatter:l.frontmatter,$frontmatter:l.frontmatter}},setup(){const s=d();s.meta.frontmatter=Object.assign(s.meta.frontmatter,l.frontmatter),f("pageData",l)}},b=e("p",null,[a("受某个友人影响，我也开始尝试 "),e("s",null,"拥抱 webp"),a("了，近期的文章内的图片都已经压缩成了 webp 格式。但是 PasteImage 却不支持 webp 格式，于是我又想办法整出了今天这个解决方案，实现完全自动化的 压缩+插入图片。")],-1),D={id:"配置-sharex",tabindex:"-1"},$=e("p",null,"然后在 sharex 的动作设置中，添加一个动作",-1),E=e("figure",null,[e("img",{src:F,alt:"图 2",loading:"lazy",decoding:"async"})],-1),v=e("ul",null,[e("li",null,"名称: 随意"),e("li",null,"文件路径: ffmpeg 的安装路径，要指定到 ffmpeg 可执行文件"),e("li",null,[a("参数: "),e("code",null,'-i "$input" -q 75 "$output"'),a(" 其中 -q 75 是以75%质量压缩")]),e("li",null,"输出文件扩展名: webp"),e("li",null,"扩展名筛选: png")],-1),x=e("p",null,"勾上下面的 隐藏窗口 和 删除输入文件",-1),M=e("p",null,[e("img",{src:_,alt:"图 3"}),a(" 然后在截图后的任务里选中这些项(添加图像特效可视情况自行添加)")],-1),S=e("figure",null,[e("img",{src:k,alt:"图 4",loading:"lazy",decoding:"async"})],-1),C={id:"配置-markdown-image",tabindex:"-1"},I=e("p",null,[a("我的博客的文章图片是按照 "),e("code",null,"/public/photo/post-pics/文章名/文章名_时间"),a(" 的格式和路径保存在本地的，所以按照下面这样配置")],-1),P=e("div",{class:"language-json"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"json"),e("pre",{class:"shiki material-theme-darker vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"markdown-image.base.fileNameFormat"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#EEFFFF"}},": "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"${mdname}/${mdname}_${MM}-${DD}-${HH}-${mm}-${ss}"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#EEFFFF"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"markdown-image.local.path"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#EEFFFF"}},": "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"../../public/photo/post-pics/"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#EEFFFF"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"markdown-image.local.referencePath"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#EEFFFF"}},": "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"/photo/post-pics/${mdname}/"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#EEFFFF"}},",")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#032F62"}},'"markdown-image.base.fileNameFormat"'),e("span",{style:{color:"#24292E"}},": "),e("span",{style:{color:"#032F62"}},'"${mdname}/${mdname}_${MM}-${DD}-${HH}-${mm}-${ss}"'),e("span",{style:{color:"#24292E"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#032F62"}},'"markdown-image.local.path"'),e("span",{style:{color:"#24292E"}},": "),e("span",{style:{color:"#032F62"}},'"../../public/photo/post-pics/"'),e("span",{style:{color:"#24292E"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#032F62"}},'"markdown-image.local.referencePath"'),e("span",{style:{color:"#24292E"}},": "),e("span",{style:{color:"#032F62"}},'"/photo/post-pics/${mdname}/"'),e("span",{style:{color:"#24292E"}},",")])])])],-1),N=e("p",null,[a("这样就完成啦。现在使用 sharex 截屏时会自动调用 ffmpeg 将文件压缩为 webp 格式并保存在剪贴板中，然后在 VSCode 中使用 "),e("code",null,"Alt + Shift + V"),a(" 粘贴即可。")],-1);function V(s,X,A,H,i,W){const n=y,m=c;return g(),h(m,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":o(()=>[e("p",null,[a("之前我曾安利过 "),r(n,{href:"http://localhost:4859/posts/pasteimage-in-vs",target:"_blank",rel:"noreferrer"},{default:o(()=>[a("PasteImage")]),_:1}),a(" 这个插件，用 VSCode 写博客/文档的时候，用它可以很快捷地在md文档中插入图片。")]),b,u(" more "),e("h2",D,[a("配置 ShareX "),r(n,{class:"header-anchor",href:"#配置-sharex","aria-label":'Permalink to "配置 ShareX"'},{default:o(()=>[a("​")]),_:1})]),e("p",null,[r(n,{href:"https://getsharex.com/",target:"_blank",rel:"noreferrer"},{default:o(()=>[a("sharex")]),_:1}),a(" 是一个强大的截屏、录屏、分享软件，开源免费，支持高度自定义的自动化，")]),e("p",null,[a("然后还要安装 "),r(n,{href:"https://ffmpeg.org/",target:"_blank",rel:"noreferrer"},{default:o(()=>[a("ffmpeg")]),_:1}),a(" ，它在本文的作用是通过命令调用来压缩图片。如果你没了解过它的话不妨去搜索一下，也是一个十分强大的工具。")]),$,E,v,x,M,S,e("h2",C,[a("配置 Markdown Image "),r(n,{class:"header-anchor",href:"#配置-markdown-image","aria-label":'Permalink to "配置 Markdown Image"'},{default:o(()=>[a("​")]),_:1})]),e("p",null,[r(n,{href:"https://marketplace.visualstudio.com/items?itemName=hancel.markdown-image",target:"_blank",rel:"noreferrer"},{default:o(()=>[a("Markdown Image")]),_:1}),a(" 是一个 VSCode 插件，支持将剪贴板中的图片保存在指定路径下(或指定图床中)，并自动生成 markdown 格式的引用。")]),I,P,e("p",null,[a("更详细的配置，参照 "),r(n,{href:"https://github.com/imlinhanchao/vsc-markdown-image/blob/HEAD/README.zh-cn.md",target:"_blank",rel:"noreferrer"},{default:o(()=>[a("Markdown Image 的官方文档")]),_:1})]),N]),"main-header":o(()=>[t(s.$slots,"main-header")]),"main-header-after":o(()=>[t(s.$slots,"main-header-after")]),"main-nav":o(()=>[t(s.$slots,"main-nav")]),"main-content":o(()=>[t(s.$slots,"main-content")]),"main-content-after":o(()=>[t(s.$slots,"main-content-after")]),"main-nav-before":o(()=>[t(s.$slots,"main-nav-before")]),"main-nav-after":o(()=>[t(s.$slots,"main-nav-after")]),comment:o(()=>[t(s.$slots,"comment")]),footer:o(()=>[t(s.$slots,"footer")]),aside:o(()=>[t(s.$slots,"aside")]),"aside-custom":o(()=>[t(s.$slots,"aside-custom")]),default:o(()=>[t(s.$slots,"default")]),_:3},8,["frontmatter","data"])}const R=p(w,[["render",V]]);export{J as __pageData,R as default};
