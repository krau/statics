import{_ as l}from"./ValaxyMain.vue_vue_type_style_index_0_lang-37897892.js";import{_ as p,u as i,p as m,c,w as t,o as u,r as s,b as e,d as n}from"./app-6995c9ef.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-6f337824.js";import"./YunCard.vue_vue_type_script_setup_true_lang-bbccd67f.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-052d7f34.js";const U=JSON.parse('{"title":"过度信任开源的惨案？Edxposed Manager canary版本中被推送恶意代码","description":"","frontmatter":{"categories":"日常","date":"2020-05-17T06:31:45.000Z","layout":"post","tags":["xposed","杂谈"],"title":"过度信任开源的惨案？Edxposed Manager canary版本中被推送恶意代码","hide":"all"},"headers":[],"relativePath":"pages/posts/edxp-massacre.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/edxp-massacre.md","lastUpdated":1691822978000}'),o=JSON.parse('{"title":"过度信任开源的惨案？Edxposed Manager canary版本中被推送恶意代码","description":"","frontmatter":{"categories":"日常","date":"2020-05-17T06:31:45.000Z","layout":"post","tags":["xposed","杂谈"],"title":"过度信任开源的惨案？Edxposed Manager canary版本中被推送恶意代码","hide":"all"},"headers":[],"relativePath":"pages/posts/edxp-massacre.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/edxp-massacre.md","lastUpdated":1691822978000}'),f={name:"pages/posts/edxp-massacre.md",data(){return{data:o,frontmatter:o.frontmatter,$frontmatter:o.frontmatter}},setup(){const a=i();a.meta.frontmatter=Object.assign(a.meta.frontmatter,o.frontmatter),m("pageData",o)}},g=e("p",null,[n("2020.5.16，几个github账号向xposed模块管理器"),e("code",null,"Edxposed Manager"),n("pr了恶意代码（"),e("code",null,"rm -rf /data/media"),n("），在合并之前的代码会自动编译以供审核，而edxp把这类自动编译的文件（尚未经审核的）作为canary版本提供给用户，导致部分edxp用户刷入最新的canary版本后，数据被清空")],-1),h=e("p",null,"edxp的开发者在酷安的解释及道歉如下",-1),_=e("p",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/edxp1.jpeg",alt:"1"})],-1),x=e("p",null,"关于恶意代码",-1),v=e("p",null,[e("img",{src:"https://i.loli.net/2020/05/17/SjgxQ9tozwqvLnX.jpg",alt:"2"})],-1),$=e("p",null,"知乎上",-1),y=e("p",null,[e("img",{src:"https://i.loli.net/2020/05/17/2kVILUhiegad8my.jpg",alt:"3"})],-1),b=e("hr",null,null,-1),M=e("p",null,[n("此前，同为xposed管理器的"),e("code",null,"太极"),n("因为不开源而从Magisk下架 而如今，开源的edxp又历次风波 没有绝对的无风险，为了自己的数据安全，行事需慎重。如果此次受害者能认真看一下更新日志（clean your data folder）就能免遭数据清除")],-1);function j(a,k,w,E,r,N){const d=l;return u(),c(d,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":t(()=>[g,h,_,x,v,$,y,b,M]),"main-header":t(()=>[s(a.$slots,"main-header")]),"main-header-after":t(()=>[s(a.$slots,"main-header-after")]),"main-nav":t(()=>[s(a.$slots,"main-nav")]),"main-content":t(()=>[s(a.$slots,"main-content")]),"main-content-after":t(()=>[s(a.$slots,"main-content-after")]),"main-nav-before":t(()=>[s(a.$slots,"main-nav-before")]),"main-nav-after":t(()=>[s(a.$slots,"main-nav-after")]),comment:t(()=>[s(a.$slots,"comment")]),footer:t(()=>[s(a.$slots,"footer")]),aside:t(()=>[s(a.$slots,"aside")]),"aside-custom":t(()=>[s(a.$slots,"aside-custom")]),default:t(()=>[s(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const D=p(f,[["render",j]]);export{U as __pageData,D as default};