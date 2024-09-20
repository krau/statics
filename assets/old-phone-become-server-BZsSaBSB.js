import{_ as k}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BpGoxE0S.js";import{c as h,w as r,f as g,e as v,p,o as F,g as l,v as m,h as s,r as t}from"./app-DYwnrrn0.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-BzH1ppc2.js";import"./YunCard.vue_vue_type_script_setup_true_lang-BeOWRhvZ.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-B_Gh7fdw.js";import"./post-DOrnddpB.js";const w={__name:"old-phone-become-server",setup(y,{expose:d}){const n=JSON.parse('{"title":"将旧手机通过Linuxdeploy改造为linux服务器搭建cloudreve个人网盘实现离线下载","description":"","frontmatter":{"categories":"小技术","date":"2022-01-24 19:34:31","layout":"post","tags":["linux","DIY"],"title":"将旧手机通过Linuxdeploy改造为linux服务器搭建cloudreve个人网盘实现离线下载"},"headers":[{"level":2,"title":"准备","slug":"准备","link":"#准备","children":[]},{"level":2,"title":"安装linuxdeploy并配置","slug":"安装linuxdeploy并配置","link":"#安装linuxdeploy并配置","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"引导设置","slug":"引导设置","link":"#引导设置","children":[]},{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":3,"title":"挂载","slug":"挂载","link":"#挂载","children":[]},{"level":3,"title":"SSH","slug":"ssh","link":"#ssh","children":[]},{"level":3,"title":"声音服务","slug":"声音服务","link":"#声音服务","children":[]},{"level":3,"title":"图形界面","slug":"图形界面","link":"#图形界面","children":[]}]},{"level":2,"title":"安装并配置cloudreve","slug":"安装并配置cloudreve","link":"#安装并配置cloudreve","children":[]},{"level":2,"title":"通过aria2实现离线下载","slug":"通过aria2实现离线下载","link":"#通过aria2实现离线下载","children":[{"level":3,"title":"安装并配置aria2","slug":"安装并配置aria2","link":"#安装并配置aria2","children":[]},{"level":3,"title":"守护cloudreve与aria2进程","slug":"守护cloudreve与aria2进程","link":"#守护cloudreve与aria2进程","children":[]},{"level":3,"title":"配置开机自启动","slug":"配置开机自启动","link":"#配置开机自启动","children":[]}]},{"level":2,"title":"配置cloudreve离线下载功能","slug":"配置cloudreve离线下载功能","link":"#配置cloudreve离线下载功能","children":[]}],"relativePath":"pages/posts/old-phone-become-server.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/old-phone-become-server.md","lastUpdated":1726839524000}'),o=v(),a=n.frontmatter||{};return o.meta.frontmatter=Object.assign(o.meta.frontmatter||{},n.frontmatter||{}),p("pageData",n),p("valaxy:frontmatter",a),globalThis.$frontmatter=a,d({frontmatter:{categories:"小技术",date:"2022-01-24 19:34:31",layout:"post",tags:["linux","DIY"],title:"将旧手机通过Linuxdeploy改造为linux服务器搭建cloudreve个人网盘实现离线下载"}}),(e,i)=>{const u=k;return F(),h(u,{frontmatter:g(a)},{"main-content-md":r(()=>[i[0]||(i[0]=l("p",null,"最近因疫情闲在家，就折腾起了自己的旧手机",-1)),m(" more "),i[1]||(i[1]=l("h2",{id:"准备",tabindex:"-1"},[s("准备 "),l("a",{class:"header-anchor",href:"#准备","aria-label":'Permalink to "准备"'},"​")],-1)),i[2]||(i[2]=l("ol",null,[l("li",null,[s("一部已经获得root权限的手机 "),l("s",null,"若是ov华等无法获取root的手机，建议拿去换剪刀"),s(" ，本文以 redmi note7 pro 为例，已刷机安卓11类原生")]),l("li",null,"一台能够使用ssh终端的设备")],-1)),i[3]||(i[3]=l("h2",{id:"安装linuxdeploy并配置",tabindex:"-1"},[s("安装linuxdeploy并配置 "),l("a",{class:"header-anchor",href:"#安装linuxdeploy并配置","aria-label":'Permalink to "安装linuxdeploy并配置"'},"​")],-1)),i[4]||(i[4]=l("p",null,[s("下载 "),l("a",{href:"https://github.com/meefik/linuxdeploy/releases",target:"_blank",rel:"noreferrer"},"linuxdeploy"),s("，安装到旧手机")],-1)),i[5]||(i[5]=l("blockquote",null,[l("p",null,"请确保安装的linuxdeploy版本≥2.0，否则需要首先安装busybox。而2.0以上的linuxdeploy内置了busybox")],-1)),i[6]||(i[6]=l("p",null,"打开linuxdeploy软件，点击左上角按钮，选择设置，勾选【锁定wi-fi】与【CPU唤醒】，其他选项按需配置，亦可保持默认",-1)),i[7]||(i[7]=l("p",null,"回到上一级页面，点击右下角按钮，进行以下配置：",-1)),i[8]||(i[8]=l("h2",{id:"配置",tabindex:"-1"},[s("配置 "),l("a",{class:"header-anchor",href:"#配置","aria-label":'Permalink to "配置"'},"​")],-1)),i[9]||(i[9]=l("h3",{id:"引导设置",tabindex:"-1"},[s("引导设置 "),l("a",{class:"header-anchor",href:"#引导设置","aria-label":'Permalink to "引导设置"'},"​")],-1)),i[10]||(i[10]=l("ul",null,[l("li",null,"【发行版GNU/Linux】 建议选择Debian或centos，它们在linuxdeploy运行的兼容性更好"),l("li",null,"【架构】一般都选择arm64（Debian）或aarch64（centos），软件也会自动识别适合你的手机的架构，若特殊情况请搜索关键词 ‘{你手机的cpu}+架构’"),l("li",null,"【发行版GNU/Linux版本】按需选择，一般选择buster或stable"),l("li",null,[s("【源地址】建议改为国内源："),l("a",{href:"http://mirrors.163.com/debian",target:"_blank",rel:"noreferrer"},"http://mirrors.163.com/debian"),s(" ，保持默认亦可")]),l("li",null,"【安装类型】按需设置，建议选择镜像文件，因为它是一个单镜像文件"),l("li",null,[s("【安装路径】默认为"),l("code",null,"${EXTERNAL_STORAGE}/linux.img"),s("，一般保持默认即可")]),l("li",null,"【镜像大小】按需设置，若需搭建网盘服务，建议设置较大大小，可以使文件有足够的空间存储在linux镜像空间内，省去挂载手机存储的麻烦"),l("li",null,"【文件系统】ext4"),l("li",null,"【用户名】自行设置，建议设置为 root"),l("li",null,"【用户密码】自行设置"),l("li",null,"【特权用户】按需设置，一般保持默认"),l("li",null,"【本地化】简体中文选择zh_CN.UTF-8，按需设置"),l("li",null,"【DNS】按需设置，或保持默认")],-1)),i[11]||(i[11]=l("h3",{id:"初始化",tabindex:"-1"},[s("初始化 "),l("a",{class:"header-anchor",href:"#初始化","aria-label":'Permalink to "初始化"'},"​")],-1)),i[12]||(i[12]=l("ul",null,[l("li",null,"【启用】勾选以启用初始化功能"),l("li",null,"【初始化系统】选择sysv"),l("li",null,"【初始化设置】视情况设置，或保持默认")],-1)),i[13]||(i[13]=l("h3",{id:"挂载",tabindex:"-1"},[s("挂载 "),l("a",{class:"header-anchor",href:"#挂载","aria-label":'Permalink to "挂载"'},"​")],-1)),i[14]||(i[14]=l("p",null,"Source：手机目录 Target：Linux目录 使用能够查看到真实路径的文件浏览器，复制需要挂载的目录到挂载点列表，填入第一行即可",-1)),i[15]||(i[15]=l("h3",{id:"ssh",tabindex:"-1"},[s("SSH "),l("a",{class:"header-anchor",href:"#ssh","aria-label":'Permalink to "SSH"'},"​")],-1)),i[16]||(i[16]=l("p",null,"务必勾选启用SSH服务器，SSH设置按需配置",-1)),i[17]||(i[17]=l("h3",{id:"声音服务",tabindex:"-1"},[s("声音服务 "),l("a",{class:"header-anchor",href:"#声音服务","aria-label":'Permalink to "声音服务"'},"​")],-1)),i[18]||(i[18]=l("p",null,"按需配置",-1)),i[19]||(i[19]=l("h3",{id:"图形界面",tabindex:"-1"},[s("图形界面 "),l("a",{class:"header-anchor",href:"#图形界面","aria-label":'Permalink to "图形界面"'},"​")],-1)),i[20]||(i[20]=l("p",null,"按需配置",-1)),i[21]||(i[21]=l("hr",null,null,-1)),i[22]||(i[22]=l("p",null,[s("配置完成后，返回上一级，点击右上角按钮，点击安装，等待出现"),l("code",null,"<<< deploy"),s("即安装完成。")],-1)),i[23]||(i[23]=l("p",null,[s("点击停止按钮并确定，再点击启动，出现"),l("code",null,"<<< start"),s("即启动成功")],-1)),i[24]||(i[24]=l("p",null,"然后即可使用同一局域网下的ssh工具连接",-1)),i[25]||(i[25]=l("p",null,"为了防止旧手机的内网ip地址变更，在路由设置页面进行ip与MAC绑定，并把手机wifi连接中的隐私设置相关选项改为 使用设备MAC",-1)),i[26]||(i[26]=l("p",null,"连接后，安装常用工具",-1)),i[27]||(i[27]=l("p",null,[l("code",null,"apt install wget vim curl zip -y")],-1)),i[28]||(i[28]=l("p",null,[s("附： xshell工具家庭/学校版下载连接 "),l("a",{href:"https://www.xshell.com/zh/free-for-home-school/",target:"_blank",rel:"noreferrer"},"https://www.xshell.com/zh/free-for-home-school/")],-1)),i[29]||(i[29]=l("h2",{id:"安装并配置cloudreve",tabindex:"-1"},[s("安装并配置cloudreve "),l("a",{class:"header-anchor",href:"#安装并配置cloudreve","aria-label":'Permalink to "安装并配置cloudreve"'},"​")],-1)),i[30]||(i[30]=l("p",null,[s("项目发行地址："),l("a",{href:"https://github.com/cloudreve/Cloudreve/releases",target:"_blank",rel:"noreferrer"},"cloudreve")],-1)),i[31]||(i[31]=l("p",null,"截止到撰写本文（2022.01），最新版本为3.4.2",-1)),i[32]||(i[32]=l("p",null,"执行以下命令",-1)),i[33]||(i[33]=l("p",null,"切换到用户目录",-1)),i[34]||(i[34]=l("p",null,[l("code",null,"cd /opt")],-1)),i[35]||(i[35]=l("p",null,"创建文件夹并切换",-1)),i[36]||(i[36]=l("p",null,[l("code",null,"mkdir cloudreve&&cd cloudreve")],-1)),i[37]||(i[37]=l("p",null,"下载cloudreve",-1)),i[38]||(i[38]=l("p",null,[l("code",null,"wget https://github.com/cloudreve/Cloudreve/releases/download/3.4.2/cloudreve_3.4.2_linux_arm64.tar.gz")],-1)),i[39]||(i[39]=l("p",null,"根据需求自行选择下载的版本并替换wget后的链接",-1)),i[40]||(i[40]=l("p",null,"解压",-1)),i[41]||(i[41]=l("p",null,[l("code",null,"tar -zxvf cloudreve_3.4.2_linux_arm64.tar.gz")],-1)),i[42]||(i[42]=l("p",null,"赋予权限",-1)),i[43]||(i[43]=l("p",null,[l("code",null,"chmod +x ./cloudreve")],-1)),i[44]||(i[44]=l("p",null,"启动",-1)),i[45]||(i[45]=l("p",null,[l("code",null,"./cloudreve")],-1)),i[46]||(i[46]=l("p",null,"在终端中会给出初始管理员账号与密码，使用该账号登录",-1)),i[47]||(i[47]=l("p",null,"若无法访问，查看防火墙是否开放端口",-1)),i[48]||(i[48]=l("p",null,[s("进入cloudreve后，点击右上角头像，进入管理面板，即可进行相关设置，具体参见"),l("a",{href:"https://docs.cloudreve.org/",target:"_blank",rel:"noreferrer"},"cloudreve官方文档")],-1)),i[49]||(i[49]=l("p",null,"需要注意的是，在配置使用本机存储策略的用户组时，若存储目录在镜像空间内，要确保【初始容量】小于【镜像大小】，否则会无法上传任何文件",-1)),i[50]||(i[50]=l("h2",{id:"通过aria2实现离线下载",tabindex:"-1"},[s("通过aria2实现离线下载 "),l("a",{class:"header-anchor",href:"#通过aria2实现离线下载","aria-label":'Permalink to "通过aria2实现离线下载"'},"​")],-1)),i[51]||(i[51]=l("p",null,"cloudreve内置了依赖于aria2的离线下载功能，因此需先进行aria2的配置",-1)),i[52]||(i[52]=l("h3",{id:"安装并配置aria2",tabindex:"-1"},[s("安装并配置aria2 "),l("a",{class:"header-anchor",href:"#安装并配置aria2","aria-label":'Permalink to "安装并配置aria2"'},"​")],-1)),i[53]||(i[53]=l("p",null,"安装",-1)),i[54]||(i[54]=l("p",null,[l("code",null,"apt install aria2 -y")],-1)),i[55]||(i[55]=l("p",null,[s("下载由"),l("a",{href:"https://github.com/P3TERX",target:"_blank",rel:"noreferrer"},"P3TERX"),s("提供的aria2配置文件（亦可选择其他配置或参考"),l("a",{href:"https://aria2.github.io/",target:"_blank",rel:"noreferrer"},"aria2官方文档"),s("自行创建）")],-1)),i[56]||(i[56]=l("div",{class:"language-shell vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"shell"),l("pre",{class:"shiki shiki-themes github-light material-theme-darker vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#82AAFF"}},"cd")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#FFCB6B"}},"wget"),l("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," https://github.com/P3TERX/aria2.conf/archive/master.zip")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#FFCB6B"}},"unzip"),l("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," master.zip")])])]),l("button",{class:"collapse"})],-1)),i[57]||(i[57]=l("p",null,"将解压出的文件夹重命名为.aria2",-1)),i[58]||(i[58]=l("p",null,[l("code",null,"mv aria2.conf-master .aria2")],-1)),i[59]||(i[59]=l("p",null,"修改aria2配置文件",-1)),i[60]||(i[60]=l("p",null,[l("code",null,"cd .aria2&&vim aria2.conf")],-1)),i[61]||(i[61]=l("p",null,[l("a",{href:"https://github.com/P3TERX",target:"_blank",rel:"noreferrer"},"P3TERX"),s(" 的配置文件包含了中文注释，根据注释按需修改即可，一般需要改动的是"),l("strong",null,"下载目录"),s("、"),l("strong",null,"RPC密钥"),s("与"),l("strong",null,"BT监听端口"),s("，其他保持默认即可")],-1)),i[62]||(i[62]=l("p",null,[s("配置修改完成后，在.aria2目录内，执行"),l("code",null,"./tracker.sh"),s("即可更新tracker")],-1)),i[63]||(i[63]=l("p",null,"若更新失败，可进行手动更新，参考以下tracker列表",-1)),i[64]||(i[64]=l("p",null,[l("a",{href:"https://trackerslist.com/all_aria2.txt",target:"_blank",rel:"noreferrer"},"https://trackerslist.com/all_aria2.txt")],-1)),i[65]||(i[65]=l("p",null,[s("将列表内容复制到"),l("code",null,"aria2.conf"),s("中的"),l("code",null,"bt-tracker"),s("参数后即可")],-1)),i[66]||(i[66]=l("p",null,"创建aria2.session文件",-1)),i[67]||(i[67]=l("p",null,[l("code",null,"touch aria2.session")],-1)),i[68]||(i[68]=l("p",null,"测试aria2能否成功启动",-1)),i[69]||(i[69]=l("p",null,[l("code",null,"aria2c --conf-path=/root/.aria2/aria2.conf")],-1)),i[70]||(i[70]=l("p",null,[s("第一次启动需要指定配置文件，日后启动只需使用"),l("code",null,"aria2c"),s("即可")],-1)),i[71]||(i[71]=l("p",null,"若启动成功，关闭即可，接下来进行进程保护配置，方便后续操作",-1)),i[72]||(i[72]=l("h3",{id:"守护cloudreve与aria2进程",tabindex:"-1"},[s("守护cloudreve与aria2进程 "),l("a",{class:"header-anchor",href:"#守护cloudreve与aria2进程","aria-label":'Permalink to "守护cloudreve与aria2进程"'},"​")],-1)),i[73]||(i[73]=l("p",null,[s("cloudreve与aria2运行后，若关闭ssh终端，二者也会随之停止运行，因此需要进行进程守护，本文是使用 "),l("code",null,"supervisor")],-1)),i[74]||(i[74]=l("p",null,"安装",-1)),i[75]||(i[75]=l("div",{class:"language-shell vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"shell"),l("pre",{class:"shiki shiki-themes github-light material-theme-darker vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#FFCB6B"}},"apt"),l("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," install"),l("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," python-setuptools"),l("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#C3E88D"}}," -y")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#FFCB6B"}},"apt"),l("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," install"),l("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," supervisor"),l("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#C3E88D"}}," -y")])])]),l("button",{class:"collapse"})],-1)),i[76]||(i[76]=l("h4",{id:"cloudreve",tabindex:"-1"},[s("cloudreve "),l("a",{class:"header-anchor",href:"#cloudreve","aria-label":'Permalink to "cloudreve"'},"​")],-1)),i[77]||(i[77]=l("p",null,[s("为cloudreve创建配置并打开配置文件 "),l("code",null,"sudo vim /etc/supervisor/conf.d/cloudreve.conf")],-1)),i[78]||(i[78]=l("p",null,[s("将以下内容按需修改后，写入cloudreve的supervisor配置文件，具体参见"),l("a",{href:"http://supervisord.org/configuration.html",target:"_blank",rel:"noreferrer"},"supervisor官方文档")],-1)),i[79]||(i[79]=l("div",{class:"language-ini vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"ini"),l("pre",{class:"shiki shiki-themes github-light material-theme-darker vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#89DDFF"}},"[program:cloudreve]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"directory"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"/opt/cloudreve")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"command"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"/opt/cloudreve/cloudreve")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"autostart"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"true")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"autorestart"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"true")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"stderr_logfile"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"/var/log/supervisor/cloudreve.err")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"stdout_logfile"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"/var/log/supervisor/cloudreve.log")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"environment"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"CODENATION_ENV"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"prod")])])]),l("button",{class:"collapse"})],-1)),i[80]||(i[80]=l("p",null,"以上内容备注： 程序目录=/opt/cloudreve 运行命令(绝对路径)=/opt/cloudreve/cloudreve 自启动=true 自动重启=true 错误日志保存路径= 其他日志保存路径= 环境=",-1)),i[81]||(i[81]=l("h4",{id:"aria2",tabindex:"-1"},[s("aria2 "),l("a",{class:"header-anchor",href:"#aria2","aria-label":'Permalink to "aria2"'},"​")],-1)),i[82]||(i[82]=l("p",null,"与上同理",-1)),i[83]||(i[83]=l("p",null,"为aria2创建配置并打开配置文件",-1)),i[84]||(i[84]=l("p",null,[l("code",null,"sudo vim /etc/supervisor/conf.d/aria2.conf")],-1)),i[85]||(i[85]=l("p",null,[s("将以下内容按需修改后，写入aria2的supervisor配置文件，具体参见"),l("a",{href:"http://supervisord.org/configuration.html",target:"_blank",rel:"noreferrer"},"supervisor官方文档")],-1)),i[86]||(i[86]=l("div",{class:"language-ini vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"ini"),l("pre",{class:"shiki shiki-themes github-light material-theme-darker vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#89DDFF"}},"[program:aria2]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"directory"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"/root/.aria2")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"command"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"aria2c --"),l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"conf-path"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"/root/.aria2/aria2.conf")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"autostart"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"true")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"autorestart"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"true")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"stderr_logfile"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"/var/log/supervisor/aria2.err")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"stdout_logfile"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"/var/log/supervisor/aria2.log")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"environment"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"CODENATION_ENV"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"prod")])])]),l("button",{class:"collapse"})],-1)),i[87]||(i[87]=l("p",null,"以上内容备注： 程序目录=/root/.aria2 运行命令(绝对路径)=aria2c --conf-path=/root/.aria2/aria2.conf 自启动=true 自动重启=true 错误日志保存路径= 其他日志保存路径= 环境=",-1)),i[88]||(i[88]=l("hr",null,null,-1)),i[89]||(i[89]=l("p",null,"启动supervisor",-1)),i[90]||(i[90]=l("p",null,[l("code",null,"supervisord -c /etc/supervisor/supervisord.conf")],-1)),i[91]||(i[91]=l("p",null,"至此便完成了进程守护配置",-1)),i[92]||(i[92]=l("p",null,"如需管理supervisor内进程，参考以下指令：",-1)),i[93]||(i[93]=l("div",{class:"language-shell vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"shell"),l("pre",{class:"shiki shiki-themes github-light material-theme-darker vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#FFCB6B"}},"sudo"),l("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," supervisorctl"),l("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," start"),l("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," cloudreve"),l("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#545454","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}}," #启动    ")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#FFCB6B"}},"sudo"),l("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," supervisorctl"),l("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," stop"),l("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," cloudreve"),l("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#545454","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}}," #停止    ")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#FFCB6B"}},"sudo"),l("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," supervisorctl"),l("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," status"),l("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," cloudreve"),l("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#545454","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}}," #状态")])])]),l("button",{class:"collapse"})],-1)),i[94]||(i[94]=l("p",null,"附.网页管理supervisor进程配置：",-1)),i[95]||(i[95]=l("p",null,"在supervisor配置文件中（/etc/supervisor/supervisord.conf），添加以下内容",-1)),i[96]||(i[96]=l("div",{class:"language-ini vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"ini"),l("pre",{class:"shiki shiki-themes github-light material-theme-darker vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#89DDFF"}},"[inet_http_server]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"port"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"127.0.0.1:8888")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"username"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"=")]),s(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"password"),l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"=")])])]),l("button",{class:"collapse"})],-1)),i[97]||(i[97]=l("p",null,[s("其中port、username、password参数可自行设置，若需外部访问，可将port设置为 "),l("code",null,"0.0.0.0:8888")],-1)),i[98]||(i[98]=l("h3",{id:"配置开机自启动",tabindex:"-1"},[s("配置开机自启动 "),l("a",{class:"header-anchor",href:"#配置开机自启动","aria-label":'Permalink to "配置开机自启动"'},"​")],-1)),i[99]||(i[99]=l("p",null,"若在linuxdeploy中，初始化系统选择了sysv，则无需额外配置即可自启动supervisor及其中的程序 若使用run-parts初始化，需额外配置.",-1)),i[100]||(i[100]=l("h2",{id:"配置cloudreve离线下载功能",tabindex:"-1"},[s("配置cloudreve离线下载功能 "),l("a",{class:"header-anchor",href:"#配置cloudreve离线下载功能","aria-label":'Permalink to "配置cloudreve离线下载功能"'},"​")],-1)),i[101]||(i[101]=l("p",null,[s("登录cloudreve管理页面，选择 离线下载节点 ，修改 主机（本机） 节点 "),l("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20220125103835.png",alt:""})],-1)),i[102]||(i[102]=l("ol",null,[l("li",null,"启用离线下载"),l("li",null,"参考配置"),l("li",{prot:""},"RPC服务地址，由于cloudreve与aria2运行在同一台服务器（旧手机）上，故填写127.0.0.1:")],-1)),i[103]||(i[103]=l("p",null,[l("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20220125103937.png",alt:""}),s(" 4. RPC令牌，与 Aria2 配置文件中rpc-secret保持一致 5. 临时下载目录，填写绝对路径，并保证cloudreve具有此目录的权限 6. 额外参数配置，一般保持默认")],-1)),i[104]||(i[104]=l("p",null,"完成配置后，点击下一步，修改杂项信息，再点击下一步，即可保存该节点配置",-1)),i[105]||(i[105]=l("p",null,[s("然后点击用户组，编辑用户组配置，允许进行离线下载 "),l("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20220125104705.png",alt:""})],-1)),i[106]||(i[106]=l("hr",null,null,-1)),i[107]||(i[107]=l("p",null,"至此，所有配置完成，可在同一局域网下，打开cloudreve页面测试是否成功实现了个人云盘与离线下载功能",-1))]),"main-header":r(()=>[t(e.$slots,"main-header")]),"main-header-after":r(()=>[t(e.$slots,"main-header-after")]),"main-nav":r(()=>[t(e.$slots,"main-nav")]),"main-content":r(()=>[t(e.$slots,"main-content")]),"main-content-after":r(()=>[t(e.$slots,"main-content-after")]),"main-nav-before":r(()=>[t(e.$slots,"main-nav-before")]),"main-nav-after":r(()=>[t(e.$slots,"main-nav-after")]),comment:r(()=>[t(e.$slots,"comment")]),footer:r(()=>[t(e.$slots,"footer")]),aside:r(()=>[t(e.$slots,"aside")]),"aside-custom":r(()=>[t(e.$slots,"aside-custom")]),default:r(()=>[t(e.$slots,"default")]),_:3},8,["frontmatter"])}}};export{w as default};