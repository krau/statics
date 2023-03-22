import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang-ceb608e2.js";import{_ as c,c as u,w as n,o as _,a as p,b as e,d as l,e as i,r as s,f as v,p as m}from"./app-4c751754.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-775bfc7e.js";import"./YunCard.vue_vue_type_style_index_0_lang-71b468dd.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-d191c0e7.js";const ve=JSON.parse('{"title":"ArchLinux on Y9000P2022十分好用,就是有点难用","description":"","frontmatter":{"title":"ArchLinux on Y9000P2022十分好用,就是有点难用","date":"2023-02-20T21:51:21.000Z","updated":"2023-02-20T21:51:21.000Z","tags":["Linux"],"categories":["日常"],"excerpt_type":"md","cover":"https://s2.loli.net/2023/02/20/C2uoFdGhVQZrwvb.png"},"headers":[{"level":2,"title":"起因","slug":"起因","link":"#起因","children":[]},{"level":2,"title":"关于如何安装","slug":"关于如何安装","link":"#关于如何安装","children":[]},{"level":2,"title":"遇到的问题","slug":"遇到的问题","link":"#遇到的问题","children":[{"level":3,"title":"Nvidia显卡驱动","slug":"nvidia显卡驱动","link":"#nvidia显卡驱动","children":[]},{"level":3,"title":"Nvidia对wayland的兼容性","slug":"nvidia对wayland的兼容性","link":"#nvidia对wayland的兼容性","children":[]},{"level":3,"title":"多显示器无法正常使用","slug":"多显示器无法正常使用","link":"#多显示器无法正常使用","children":[]},{"level":3,"title":"蓝牙耳机无法连接","slug":"蓝牙耳机无法连接","link":"#蓝牙耳机无法连接","children":[]}]},{"level":2,"title":"体验","slug":"体验","link":"#体验","children":[{"level":3,"title":"聊天通讯","slug":"聊天通讯","link":"#聊天通讯","children":[]},{"level":3,"title":"浏览器","slug":"浏览器","link":"#浏览器","children":[]},{"level":3,"title":"游戏","slug":"游戏","link":"#游戏","children":[]},{"level":3,"title":"开发与运维","slug":"开发与运维","link":"#开发与运维","children":[]}]}],"relativePath":"pages/posts/archlinux-on-y9kp22-1.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/archlinux-on-y9kp22-1.md","lastUpdated":1679447870000}'),d=JSON.parse('{"title":"ArchLinux on Y9000P2022十分好用,就是有点难用","description":"","frontmatter":{"title":"ArchLinux on Y9000P2022十分好用,就是有点难用","date":"2023-02-20T21:51:21.000Z","updated":"2023-02-20T21:51:21.000Z","tags":["Linux"],"categories":["日常"],"excerpt_type":"md","cover":"https://s2.loli.net/2023/02/20/C2uoFdGhVQZrwvb.png"},"headers":[{"level":2,"title":"起因","slug":"起因","link":"#起因","children":[]},{"level":2,"title":"关于如何安装","slug":"关于如何安装","link":"#关于如何安装","children":[]},{"level":2,"title":"遇到的问题","slug":"遇到的问题","link":"#遇到的问题","children":[{"level":3,"title":"Nvidia显卡驱动","slug":"nvidia显卡驱动","link":"#nvidia显卡驱动","children":[]},{"level":3,"title":"Nvidia对wayland的兼容性","slug":"nvidia对wayland的兼容性","link":"#nvidia对wayland的兼容性","children":[]},{"level":3,"title":"多显示器无法正常使用","slug":"多显示器无法正常使用","link":"#多显示器无法正常使用","children":[]},{"level":3,"title":"蓝牙耳机无法连接","slug":"蓝牙耳机无法连接","link":"#蓝牙耳机无法连接","children":[]}]},{"level":2,"title":"体验","slug":"体验","link":"#体验","children":[{"level":3,"title":"聊天通讯","slug":"聊天通讯","link":"#聊天通讯","children":[]},{"level":3,"title":"浏览器","slug":"浏览器","link":"#浏览器","children":[]},{"level":3,"title":"游戏","slug":"游戏","link":"#游戏","children":[]},{"level":3,"title":"开发与运维","slug":"开发与运维","link":"#开发与运维","children":[]}]}],"relativePath":"pages/posts/archlinux-on-y9kp22-1.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/archlinux-on-y9kp22-1.md","lastUpdated":1679447870000}'),f={name:"pages/posts/archlinux-on-y9kp22-1.md",data(){return{data:d,frontmatter:d.frontmatter}},setup(){m("pageData",d)}},g=e("p",null,"受不了啦，给笔记本装上 Arch 折磨自己！",-1),k={id:"起因",tabindex:"-1"},b=e("p",null,"突然想安装 Arch 的理由：",-1),x=e("ol",null,[e("li",null,"酷！不觉得这很酷吗，做为一个理科生我觉得用一个完全手动安装的Linux发行版真的太酷了，很符合我对带黑客的想象！"),e("li",null,"自由！不同于乌班图、opensuse、centos这些具有实体维护者（商业公司）的发行版，Arch是由社区驱动的，属于自由阵营！不会受到各种奇怪法律的管辖！"),e("li",null,"简洁！Arch连安装的gui图形界面都没有，需要什么都要自己手动安装，最后的系统组件和应用将会不多也不少，符合自己的需求。"),e("li",null,"软件丰富！绝大多数软件已经有其他人帮你打包好了，安装就是一条命令解决！"),e("li",null,"不想用win了！但是不想用乌班图，太臃肿了！也不想用debian，太土了！"),e("li",null,"编不动了")],-1),w=e("p",null,"电脑是拯救者Y9000P2022款，配置：",-1),y=e("ul",null,[e("li",null,"CPU：I7 12700H"),e("li",null,"GPU：RTX3060M")],-1),N={id:"关于如何安装",tabindex:"-1"},$={id:"遇到的问题",tabindex:"-1"},A={id:"nvidia显卡驱动",tabindex:"-1"},L=e("p",null,"SoNvidiaFUCKYOU! 折腾了很长时间，这n卡的驱动就是装不上，最后是重装了系统，然后安装开源版驱动解决了：",-1),P=e("p",null,[e("code",null,"sudo pacman -S nvidia-open")],-1),S=e("p",null,"安装之后的处理和wiki里是一样的，好像比较新的型号的显卡（30系）都是要安装这个驱动。",-1),C=e("p",null,"这个开源版并不是社区的那个逆向出来的开源版，而是nvidia官方给的，性能是没有太大问题的",-1),T={id:"nvidia对wayland的兼容性",tabindex:"-1"},U=e("p",null,"SoNvidiaFUCKYOU!",-1),V=e("p",null,"n卡+linux桌面=shit!N卡用户建议暂时不要用wayland，老老实实Xorg，兼容性比wayland好太多了。",-1),Y={id:"多显示器无法正常使用",tabindex:"-1"},O=e("p",null,"简单来说这还是N卡的锅，各种折腾尝试有可能会解决，玄学就是了。",-1),Z=e("p",null,"我能正常使用多显示器的情景有两个：",-1),B=e("ol",null,[e("li",null,[l("BIOS设置混合模式，安装 "),e("code",null,"optimus-manager"),l(" 开核显模式。")]),e("li",null,[l("BIOS开独显直连，把nvidia驱动写进早加载，不要安装 "),e("code",null,"optimus-manager"),l("。")])],-1),F=e("p",null,"另外这两种模式都是Xorg，nvidia对wayland真的没啥兼容性，会出现一堆奇怪问题。",-1),Q={id:"蓝牙耳机无法连接",tabindex:"-1"},G=e("p",null,"安装这个就可以了",-1),I=e("p",null,[e("code",null,"sudo pacman -S bluez bluez-utils pulseaudio-bluetooth")],-1),D={id:"体验",tabindex:"-1"},X=e("p",null,"太好用啦！所有软件都用pacman或者yay直接安装，并且能纳入滚动升级中。",-1),z={id:"聊天通讯",tabindex:"-1"},J=e("p",null,"Telegram：字体有问题，安装了几个中文字体之后正常了，体验和win是一样的，tg官方对于linux平台也是下了精力的。实在不行还能用web端。",-1),K=e("p",null,"QQ：你没事吧？跟张小龙学会了登个号还得手机扫码？口区。而且登录的时候还会提示安全风险，难绷，不愧是腾讯。",-1),M={id:"浏览器",tabindex:"-1"},E=e("p",null,"火狐，很不错。但是缩放有时候会出问题，打开的时候界面突然很小或者很大...应该是我多显示器的原因。",-1),H=e("p",null,"然后还试了试 brave，只能说好像没多好用，而且一股子去中心化web3区块链虚拟币的味道。",-1),R={id:"游戏",tabindex:"-1"},j=e("p",null,"出乎意料的流畅啊！谁说的linux打游戏是ppt的，体验和win没感知上的差距。当然可能是我不玩什么3a大作（实际上来说我几乎不玩游戏了），玩了 muse dash 这个音游试了下，体验真的和win没什么区别。",-1),q={id:"开发与运维",tabindex:"-1"},W=e("p",null,"终端软件用的是 Termius（学生包白嫖的不用白不用），IDE还是vscode。",-1),ee=e("p",null,"好用！",-1),le=e("hr",null,null,-1),ne=e("p",null,"快来加入Arch邪教吧！",-1),te=e("p",null,"顺便，Arch的图标真的是太好看啦！",-1),ie=e("p",null,[e("img",{src:"https://s2.loli.net/2023/02/20/C2uoFdGhVQZrwvb.png",alt:"图片.png"})],-1);function ae(a,se,de,oe,o,re){const t=v,r=h;return _(),u(r,{frontmatter:o.frontmatter,data:o.data},{"main-content-md":n(()=>[g,p(" more "),e("h2",k,[l("起因 "),i(t,{class:"header-anchor",href:"#起因","aria-hidden":"true"},{default:n(()=>[l("#")]),_:1})]),b,x,w,y,e("h2",N,[l("关于如何安装 "),i(t,{class:"header-anchor",href:"#关于如何安装","aria-hidden":"true"},{default:n(()=>[l("#")]),_:1})]),e("p",null,[l("很简单，查 "),i(t,{href:"https://wiki.archlinux.org/",target:"_blank",rel:"noreferrer"},{default:n(()=>[l("Archlinux官方wiki")]),_:1}),l(" 就可以了。嫌官方的不够友好的话可以看这个："),i(t,{href:"https://arch.icekylin.online/",target:"_blank",rel:"noreferrer"},{default:n(()=>[l("ArchLinux简明指南")]),_:1})]),e("h2",$,[l("遇到的问题 "),i(t,{class:"header-anchor",href:"#遇到的问题","aria-hidden":"true"},{default:n(()=>[l("#")]),_:1})]),e("h3",A,[l("Nvidia显卡驱动 "),i(t,{class:"header-anchor",href:"#nvidia显卡驱动","aria-hidden":"true"},{default:n(()=>[l("#")]),_:1})]),L,P,S,C,e("h3",T,[l("Nvidia对wayland的兼容性 "),i(t,{class:"header-anchor",href:"#nvidia对wayland的兼容性","aria-hidden":"true"},{default:n(()=>[l("#")]),_:1})]),U,V,e("h3",Y,[l("多显示器无法正常使用 "),i(t,{class:"header-anchor",href:"#多显示器无法正常使用","aria-hidden":"true"},{default:n(()=>[l("#")]),_:1})]),O,Z,B,F,e("h3",Q,[l("蓝牙耳机无法连接 "),i(t,{class:"header-anchor",href:"#蓝牙耳机无法连接","aria-hidden":"true"},{default:n(()=>[l("#")]),_:1})]),G,I,e("h2",D,[l("体验 "),i(t,{class:"header-anchor",href:"#体验","aria-hidden":"true"},{default:n(()=>[l("#")]),_:1})]),X,e("h3",z,[l("聊天通讯 "),i(t,{class:"header-anchor",href:"#聊天通讯","aria-hidden":"true"},{default:n(()=>[l("#")]),_:1})]),J,K,e("h3",M,[l("浏览器 "),i(t,{class:"header-anchor",href:"#浏览器","aria-hidden":"true"},{default:n(()=>[l("#")]),_:1})]),E,H,e("h3",R,[l("游戏 "),i(t,{class:"header-anchor",href:"#游戏","aria-hidden":"true"},{default:n(()=>[l("#")]),_:1})]),j,e("h3",q,[l("开发与运维 "),i(t,{class:"header-anchor",href:"#开发与运维","aria-hidden":"true"},{default:n(()=>[l("#")]),_:1})]),W,ee,le,ne,te,ie]),"main-header":n(()=>[s(a.$slots,"main-header")]),"main-header-after":n(()=>[s(a.$slots,"main-header-after")]),"main-nav":n(()=>[s(a.$slots,"main-nav")]),"main-content":n(()=>[s(a.$slots,"main-content")]),"main-content-after":n(()=>[s(a.$slots,"main-content-after")]),"main-nav-before":n(()=>[s(a.$slots,"main-nav-before")]),"main-nav-after":n(()=>[s(a.$slots,"main-nav-after")]),comment:n(()=>[s(a.$slots,"comment")]),footer:n(()=>[s(a.$slots,"footer")]),aside:n(()=>[s(a.$slots,"aside")]),"aside-custom":n(()=>[s(a.$slots,"aside-custom")]),default:n(()=>[s(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const me=c(f,[["render",ae]]);export{ve as __pageData,me as default};
