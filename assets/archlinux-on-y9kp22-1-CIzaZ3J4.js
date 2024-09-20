import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BpGoxE0S.js";import{c as v,w as a,f,e as b,p as d,o as g,g as n,v as k,h as i,r}from"./app-DYwnrrn0.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-BzH1ppc2.js";import"./YunCard.vue_vue_type_script_setup_true_lang-BeOWRhvZ.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-B_Gh7fdw.js";import"./post-DOrnddpB.js";const S={__name:"archlinux-on-y9kp22-1",setup(x,{expose:u}){const e=JSON.parse('{"title":"ArchLinux on Y9000P2022十分好用,就是有点难用","description":"","frontmatter":{"title":"ArchLinux on Y9000P2022十分好用,就是有点难用","date":"2023-02-20 21:51:21","updated":"2023-02-20 21:51:21","tags":["Linux"],"categories":["日常"],"excerpt_type":"md","cover":"https://s2.loli.net/2023/02/20/C2uoFdGhVQZrwvb.png"},"headers":[{"level":2,"title":"起因","slug":"起因","link":"#起因","children":[]},{"level":2,"title":"关于如何安装","slug":"关于如何安装","link":"#关于如何安装","children":[]},{"level":2,"title":"遇到的问题","slug":"遇到的问题","link":"#遇到的问题","children":[{"level":3,"title":"Nvidia显卡驱动","slug":"nvidia显卡驱动","link":"#nvidia显卡驱动","children":[]},{"level":3,"title":"Nvidia对wayland的兼容性","slug":"nvidia对wayland的兼容性","link":"#nvidia对wayland的兼容性","children":[]},{"level":3,"title":"多显示器无法正常使用","slug":"多显示器无法正常使用","link":"#多显示器无法正常使用","children":[]},{"level":3,"title":"蓝牙耳机无法连接","slug":"蓝牙耳机无法连接","link":"#蓝牙耳机无法连接","children":[]}]},{"level":2,"title":"体验","slug":"体验","link":"#体验","children":[{"level":3,"title":"聊天通讯","slug":"聊天通讯","link":"#聊天通讯","children":[]},{"level":3,"title":"浏览器","slug":"浏览器","link":"#浏览器","children":[]},{"level":3,"title":"游戏","slug":"游戏","link":"#游戏","children":[]},{"level":3,"title":"开发与运维","slug":"开发与运维","link":"#开发与运维","children":[]}]}],"relativePath":"pages/posts/archlinux-on-y9kp22-1.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/archlinux-on-y9kp22-1.md","lastUpdated":1726839524000}'),s=b(),o=e.frontmatter||{};return s.meta.frontmatter=Object.assign(s.meta.frontmatter||{},e.frontmatter||{}),d("pageData",e),d("valaxy:frontmatter",o),globalThis.$frontmatter=o,u({frontmatter:{title:"ArchLinux on Y9000P2022十分好用,就是有点难用",date:"2023-02-20 21:51:21",updated:"2023-02-20 21:51:21",tags:["Linux"],categories:["日常"],excerpt_type:"md",cover:"https://s2.loli.net/2023/02/20/C2uoFdGhVQZrwvb.png"}}),(t,l)=>{const m=p;return g(),v(m,{frontmatter:f(o)},{"main-content-md":a(()=>[l[0]||(l[0]=n("p",null,"受不了啦，给笔记本装上 Arch 折磨自己！",-1)),k(" more "),l[1]||(l[1]=n("h2",{id:"起因",tabindex:"-1"},[i("起因 "),n("a",{class:"header-anchor",href:"#起因","aria-label":'Permalink to "起因"'},"​")],-1)),l[2]||(l[2]=n("p",null,"突然想安装 Arch 的理由：",-1)),l[3]||(l[3]=n("ol",null,[n("li",null,"酷！不觉得这很酷吗，做为一个理科生我觉得用一个完全手动安装的Linux发行版真的太酷了，很符合我对带黑客的想象！"),n("li",null,"自由！不同于乌班图、opensuse、centos这些具有实体维护者（商业公司）的发行版，Arch是由社区驱动的，属于自由阵营！不会受到各种奇怪法律的管辖！"),n("li",null,"简洁！Arch连安装的gui图形界面都没有，需要什么都要自己手动安装，最后的系统组件和应用将会不多也不少，符合自己的需求。"),n("li",null,"软件丰富！绝大多数软件已经有其他人帮你打包好了，安装就是一条命令解决！"),n("li",null,"不想用win了！但是不想用乌班图，太臃肿了！也不想用debian，太土了！"),n("li",null,"编不动了")],-1)),l[4]||(l[4]=n("p",null,"电脑是拯救者Y9000P2022款，配置：",-1)),l[5]||(l[5]=n("ul",null,[n("li",null,"CPU：I7 12700H"),n("li",null,"GPU：RTX3060M")],-1)),l[6]||(l[6]=n("h2",{id:"关于如何安装",tabindex:"-1"},[i("关于如何安装 "),n("a",{class:"header-anchor",href:"#关于如何安装","aria-label":'Permalink to "关于如何安装"'},"​")],-1)),l[7]||(l[7]=n("p",null,[i("很简单，查 "),n("a",{href:"https://wiki.archlinux.org/",target:"_blank",rel:"noreferrer"},"Archlinux官方wiki"),i(" 就可以了。嫌官方的不够友好的话可以看这个："),n("a",{href:"https://arch.icekylin.online/",target:"_blank",rel:"noreferrer"},"ArchLinux简明指南")],-1)),l[8]||(l[8]=n("h2",{id:"遇到的问题",tabindex:"-1"},[i("遇到的问题 "),n("a",{class:"header-anchor",href:"#遇到的问题","aria-label":'Permalink to "遇到的问题"'},"​")],-1)),l[9]||(l[9]=n("h3",{id:"nvidia显卡驱动",tabindex:"-1"},[i("Nvidia显卡驱动 "),n("a",{class:"header-anchor",href:"#nvidia显卡驱动","aria-label":'Permalink to "Nvidia显卡驱动"'},"​")],-1)),l[10]||(l[10]=n("p",null,"SoNvidiaFUCKYOU! 折腾了很长时间，这n卡的驱动就是装不上，最后是重装了系统，然后安装开源版驱动解决了：",-1)),l[11]||(l[11]=n("p",null,[n("code",null,"sudo pacman -S nvidia-open")],-1)),l[12]||(l[12]=n("p",null,"安装之后的处理和wiki里是一样的，好像比较新的型号的显卡（30系）都是要安装这个驱动。",-1)),l[13]||(l[13]=n("p",null,"这个开源版并不是社区的那个逆向出来的开源版，而是nvidia官方给的，性能是没有太大问题的",-1)),l[14]||(l[14]=n("h3",{id:"nvidia对wayland的兼容性",tabindex:"-1"},[i("Nvidia对wayland的兼容性 "),n("a",{class:"header-anchor",href:"#nvidia对wayland的兼容性","aria-label":'Permalink to "Nvidia对wayland的兼容性"'},"​")],-1)),l[15]||(l[15]=n("p",null,"SoNvidiaFUCKYOU!",-1)),l[16]||(l[16]=n("p",null,"n卡+linux桌面=shit!N卡用户建议暂时不要用wayland，老老实实Xorg，兼容性比wayland好太多了。",-1)),l[17]||(l[17]=n("h3",{id:"多显示器无法正常使用",tabindex:"-1"},[i("多显示器无法正常使用 "),n("a",{class:"header-anchor",href:"#多显示器无法正常使用","aria-label":'Permalink to "多显示器无法正常使用"'},"​")],-1)),l[18]||(l[18]=n("p",null,"简单来说这还是N卡的锅，各种折腾尝试有可能会解决，玄学就是了。",-1)),l[19]||(l[19]=n("p",null,"我能正常使用多显示器的情景有两个：",-1)),l[20]||(l[20]=n("ol",null,[n("li",null,[i("BIOS设置混合模式，安装 "),n("code",null,"optimus-manager"),i(" 开核显模式。")]),n("li",null,[i("BIOS开独显直连，把nvidia驱动写进早加载，不要安装 "),n("code",null,"optimus-manager"),i("。")])],-1)),l[21]||(l[21]=n("p",null,"另外这两种模式都是Xorg，nvidia对wayland真的没啥兼容性，会出现一堆奇怪问题。",-1)),l[22]||(l[22]=n("h3",{id:"蓝牙耳机无法连接",tabindex:"-1"},[i("蓝牙耳机无法连接 "),n("a",{class:"header-anchor",href:"#蓝牙耳机无法连接","aria-label":'Permalink to "蓝牙耳机无法连接"'},"​")],-1)),l[23]||(l[23]=n("p",null,"安装这个就可以了",-1)),l[24]||(l[24]=n("p",null,[n("code",null,"sudo pacman -S bluez bluez-utils pulseaudio-bluetooth")],-1)),l[25]||(l[25]=n("h2",{id:"体验",tabindex:"-1"},[i("体验 "),n("a",{class:"header-anchor",href:"#体验","aria-label":'Permalink to "体验"'},"​")],-1)),l[26]||(l[26]=n("p",null,"太好用啦！所有软件都用pacman或者yay直接安装，并且能纳入滚动升级中。",-1)),l[27]||(l[27]=n("h3",{id:"聊天通讯",tabindex:"-1"},[i("聊天通讯 "),n("a",{class:"header-anchor",href:"#聊天通讯","aria-label":'Permalink to "聊天通讯"'},"​")],-1)),l[28]||(l[28]=n("p",null,"Telegram：字体有问题，安装了几个中文字体之后正常了，体验和win是一样的，tg官方对于linux平台也是下了精力的。实在不行还能用web端。",-1)),l[29]||(l[29]=n("p",null,"QQ：你没事吧？跟张小龙学会了登个号还得手机扫码？口区。而且登录的时候还会提示安全风险，难绷，不愧是腾讯。",-1)),l[30]||(l[30]=n("h3",{id:"浏览器",tabindex:"-1"},[i("浏览器 "),n("a",{class:"header-anchor",href:"#浏览器","aria-label":'Permalink to "浏览器"'},"​")],-1)),l[31]||(l[31]=n("p",null,"火狐，很不错。但是缩放有时候会出问题，打开的时候界面突然很小或者很大…应该是我多显示器的原因。",-1)),l[32]||(l[32]=n("p",null,"然后还试了试 brave，只能说好像没多好用，而且一股子去中心化web3区块链虚拟币的味道。",-1)),l[33]||(l[33]=n("h3",{id:"游戏",tabindex:"-1"},[i("游戏 "),n("a",{class:"header-anchor",href:"#游戏","aria-label":'Permalink to "游戏"'},"​")],-1)),l[34]||(l[34]=n("p",null,"出乎意料的流畅啊！谁说的linux打游戏是ppt的，体验和win没感知上的差距。当然可能是我不玩什么3a大作（实际上来说我几乎不玩游戏了），玩了 muse dash 这个音游试了下，体验真的和win没什么区别。",-1)),l[35]||(l[35]=n("h3",{id:"开发与运维",tabindex:"-1"},[i("开发与运维 "),n("a",{class:"header-anchor",href:"#开发与运维","aria-label":'Permalink to "开发与运维"'},"​")],-1)),l[36]||(l[36]=n("p",null,"终端软件用的是 Termius（学生包白嫖的不用白不用），IDE还是vscode。",-1)),l[37]||(l[37]=n("p",null,"好用！",-1)),l[38]||(l[38]=n("hr",null,null,-1)),l[39]||(l[39]=n("p",null,"快来加入Arch邪教吧！",-1)),l[40]||(l[40]=n("p",null,"顺便，Arch的图标真的是太好看啦！",-1)),l[41]||(l[41]=n("figure",null,[n("img",{src:"https://s2.loli.net/2023/02/20/C2uoFdGhVQZrwvb.png",alt:"图片.png",loading:"lazy",decoding:"async"})],-1))]),"main-header":a(()=>[r(t.$slots,"main-header")]),"main-header-after":a(()=>[r(t.$slots,"main-header-after")]),"main-nav":a(()=>[r(t.$slots,"main-nav")]),"main-content":a(()=>[r(t.$slots,"main-content")]),"main-content-after":a(()=>[r(t.$slots,"main-content-after")]),"main-nav-before":a(()=>[r(t.$slots,"main-nav-before")]),"main-nav-after":a(()=>[r(t.$slots,"main-nav-after")]),comment:a(()=>[r(t.$slots,"comment")]),footer:a(()=>[r(t.$slots,"footer")]),aside:a(()=>[r(t.$slots,"aside")]),"aside-custom":a(()=>[r(t.$slots,"aside-custom")]),default:a(()=>[r(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{S as default};