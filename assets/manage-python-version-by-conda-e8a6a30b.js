import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang-428f7e38.js";import{_ as d,u as y,p as h,c as F,w as l,o as u,a as m,b as s,d as o,e as t,r as e,f as g}from"./app-d601d265.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-dfd1f211.js";import"./YunCard.vue_vue_type_script_setup_true_lang-cf3da215.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-6901ddba.js";import"./index-463abdac.js";const ls=JSON.parse('{"title":"使用conda安装和管理python多版本环境","description":"","frontmatter":{"title":"使用conda安装和管理python多版本环境","date":"2023-04-14T14:09:59.000Z","updated":"2023-04-14T14:09:59.000Z","tags":"Python","categories":"小技术","hide":null},"headers":[{"level":2,"title":"conda","slug":"conda","link":"#conda","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"relativePath":"pages/posts/manage-python-version-by-conda.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/manage-python-version-by-conda.md","lastUpdated":1699288219000}'),c=JSON.parse('{"title":"使用conda安装和管理python多版本环境","description":"","frontmatter":{"title":"使用conda安装和管理python多版本环境","date":"2023-04-14T14:09:59.000Z","updated":"2023-04-14T14:09:59.000Z","tags":"Python","categories":"小技术","hide":null},"headers":[{"level":2,"title":"conda","slug":"conda","link":"#conda","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"relativePath":"pages/posts/manage-python-version-by-conda.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/manage-python-version-by-conda.md","lastUpdated":1699288219000}'),E={name:"pages/posts/manage-python-version-by-conda.md",data(){return{data:c,frontmatter:c.frontmatter,$frontmatter:c.frontmatter}},setup(){const a=y();a.meta.frontmatter=Object.assign(a.meta.frontmatter,c.frontmatter),h("pageData",c)}},_=s("p",null,[s("s",null,"感觉不如编译安装")],-1),v={id:"conda",tabindex:"-1"},C=s("p",null,"即使你没有数据分析\\科学计算的需求, 也可以使用 conda 这个强大的工具来管理 python 环境",-1),k={id:"安装",tabindex:"-1"},D=s("div",{class:"language-shell"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("button",{class:"collapse"}),s("pre",{class:"shiki material-theme-darker vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"wget"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"https://repo.anaconda.com/archive/Anaconda3-2023.03-Linux-x86_64.sh")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"wget"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"https://repo.anaconda.com/archive/Anaconda3-2023.03-Linux-x86_64.sh")])])])],-1),b=s("p",null,[o("下载完成后, 执行 "),s("code",null,"bash Anaconda3-2023.03-Linux-x86_64.sh"),o(" 即可开始安装")],-1),f=s("p",null,"安装完成后, 重启终端, 即可使用 conda",-1),B={id:"使用",tabindex:"-1"},A=s("p",null,"更新",-1),$=s("div",{class:"language-shell"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("button",{class:"collapse"}),s("pre",{class:"shiki material-theme-darker vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"conda"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"update"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"--all")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"conda"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"update"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"--all")])])])],-1),w=s("p",null,"创建虚拟环境",-1),P=s("div",{class:"language-shell"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("button",{class:"collapse"}),s("pre",{class:"shiki material-theme-darker vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"conda"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"create"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"-n"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#C3E88D"}},"nam"),s("span",{style:{color:"#EEFFFF"}},"e"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"python="),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#C3E88D"}},"versio"),s("span",{style:{color:"#EEFFFF"}},"n"),s("span",{style:{color:"#89DDFF"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"conda"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"create"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"-n"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#032F62"}},"nam"),s("span",{style:{color:"#24292E"}},"e"),s("span",{style:{color:"#D73A49"}},">"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"python="),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#032F62"}},"versio"),s("span",{style:{color:"#24292E"}},"n"),s("span",{style:{color:"#D73A49"}},">")])])])],-1),x=s("p",null,"-n 后是虚拟环境的名字, python=version 指定要使用的 python 版本",-1),N=s("p",null,"激活环境",-1),V=s("div",{class:"language-shell"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("button",{class:"collapse"}),s("pre",{class:"shiki material-theme-darker vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"conda"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"activate"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#C3E88D"}},"nam"),s("span",{style:{color:"#EEFFFF"}},"e"),s("span",{style:{color:"#89DDFF"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"conda"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"activate"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#032F62"}},"nam"),s("span",{style:{color:"#24292E"}},"e"),s("span",{style:{color:"#D73A49"}},">")])])])],-1),T=s("p",null,"退出虚拟环境",-1),L=s("div",{class:"language-shell"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("button",{class:"collapse"}),s("pre",{class:"shiki material-theme-darker vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"conda"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"deactivate")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"conda"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"deactivate")])])])],-1),Z=s("p",null,"删除虚拟环境",-1),O=s("div",{class:"language-shell"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("button",{class:"collapse"}),s("pre",{class:"shiki material-theme-darker vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"conda"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"env"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"remove"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#C3E88D"}},"nam"),s("span",{style:{color:"#EEFFFF"}},"e"),s("span",{style:{color:"#89DDFF"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"conda"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"env"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"remove"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#032F62"}},"nam"),s("span",{style:{color:"#24292E"}},"e"),s("span",{style:{color:"#D73A49"}},">")])])])],-1),S=s("p",null,"列出虚拟环境",-1),J=s("div",{class:"language-shell"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("button",{class:"collapse"}),s("pre",{class:"shiki material-theme-darker vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"conda"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"env"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"list")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"conda"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"env"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"list")])])])],-1),M=s("p",null,"列出当前环境的包",-1),U=s("div",{class:"language-shell"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("button",{class:"collapse"}),s("pre",{class:"shiki material-theme-darker vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"conda"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"list")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"conda"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"list")])])])],-1),j=s("p",null,"安装包, 和 pip 一样",-1),R=s("div",{class:"language-shell"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("button",{class:"collapse"}),s("pre",{class:"shiki material-theme-darker vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#FFCB6B"}},"conda"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#C3E88D"}},"install"),s("span",{style:{color:"#EEFFFF"}}," "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#C3E88D"}},"packag"),s("span",{style:{color:"#EEFFFF"}},"e"),s("span",{style:{color:"#89DDFF"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"conda"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"install"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#032F62"}},"packag"),s("span",{style:{color:"#24292E"}},"e"),s("span",{style:{color:"#D73A49"}},">")])])])],-1);function q(a,z,G,H,r,I){const n=g,p=i;return u(),F(p,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":l(()=>[_,m(" more "),s("h2",v,[o("conda "),t(n,{class:"header-anchor",href:"#conda","aria-label":'Permalink to "conda"'},{default:l(()=>[o("​")]),_:1})]),s("p",null,[o("conda 是一个 python 的环境管理器, 它包含在 "),t(n,{href:"https://www.anaconda.com/",target:"_blank",rel:"noreferrer"},{default:l(()=>[o("Anaconda")]),_:1}),o(" 内, Anaconda 是专注于数据分析的Python发行版本.")]),C,s("p",null,[o("如果你不想安装这么大一个东西, 可以看我上次发的使用 "),t(n,{href:"./install-manage-python-version-on-linux"},{default:l(()=>[o("venv + 编译安装的方式管理python环境")]),_:1})]),s("h2",k,[o("安装 "),t(n,{class:"header-anchor",href:"#安装","aria-label":'Permalink to "安装"'},{default:l(()=>[o("​")]),_:1})]),s("p",null,[o("去"),t(n,{href:"https://www.anaconda.com/products/distribution#Downloads",target:"_blank",rel:"noreferrer"},{default:l(()=>[o("Anaconda官网")]),_:1}),o("下载")]),s("p",null,[o("或者你可以选择 "),t(n,{href:"https://docs.conda.io/en/latest/miniconda.html",target:"_blank",rel:"noreferrer"},{default:l(()=>[o("Miniconda")]),_:1})]),D,b,f,s("h2",B,[o("使用 "),t(n,{class:"header-anchor",href:"#使用","aria-label":'Permalink to "使用"'},{default:l(()=>[o("​")]),_:1})]),A,$,w,P,x,N,V,T,L,Z,O,S,J,M,U,j,R]),"main-header":l(()=>[e(a.$slots,"main-header")]),"main-header-after":l(()=>[e(a.$slots,"main-header-after")]),"main-nav":l(()=>[e(a.$slots,"main-nav")]),"main-content":l(()=>[e(a.$slots,"main-content")]),"main-content-after":l(()=>[e(a.$slots,"main-content-after")]),"main-nav-before":l(()=>[e(a.$slots,"main-nav-before")]),"main-nav-after":l(()=>[e(a.$slots,"main-nav-after")]),comment:l(()=>[e(a.$slots,"comment")]),footer:l(()=>[e(a.$slots,"footer")]),aside:l(()=>[e(a.$slots,"aside")]),"aside-custom":l(()=>[e(a.$slots,"aside-custom")]),default:l(()=>[e(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const os=d(E,[["render",q]]);export{ls as __pageData,os as default};
