import{_ as c}from"./ValaxyMain.vue_vue_type_style_index_0_lang-DBJlJlsu.js";import{c as p,w as l,u,a as k,p as r,o as _,e as g,d as t,f as s,g as i}from"./app-C3byl0xN.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-DXCwL9V3.js";import"./YunCard.vue_vue_type_script_setup_true_lang-pMiCul1u.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-Dwg2FlTu.js";import"./post-CA0i77Wc.js";const v=s("p",null,"最近因疫情闲在家，就折腾起了自己的旧手机",-1),F=s("h2",{id:"准备",tabindex:"-1"},[i("准备 "),s("a",{class:"header-anchor",href:"#准备","aria-label":'Permalink to "准备"'},"​")],-1),m=s("ol",null,[s("li",null,[i("一部已经获得root权限的手机 "),s("s",null,"若是ov华等无法获取root的手机，建议拿去换剪刀"),i(" ，本文以 redmi note7 pro 为例，已刷机安卓11类原生")]),s("li",null,"一台能够使用ssh终端的设备")],-1),y=s("h2",{id:"安装linuxdeploy并配置",tabindex:"-1"},[i("安装linuxdeploy并配置 "),s("a",{class:"header-anchor",href:"#安装linuxdeploy并配置","aria-label":'Permalink to "安装linuxdeploy并配置"'},"​")],-1),f=s("p",null,[i("下载 "),s("a",{href:"https://github.com/meefik/linuxdeploy/releases",target:"_blank",rel:"noreferrer"},"linuxdeploy"),i("，安装到旧手机")],-1),E=s("blockquote",null,[s("p",null,"请确保安装的linuxdeploy版本≥2.0，否则需要首先安装busybox。而2.0以上的linuxdeploy内置了busybox")],-1),b=s("p",null,"打开linuxdeploy软件，点击左上角按钮，选择设置，勾选【锁定wi-fi】与【CPU唤醒】，其他选项按需配置，亦可保持默认",-1),D=s("p",null,"回到上一级页面，点击右下角按钮，进行以下配置：",-1),C=s("h2",{id:"配置",tabindex:"-1"},[i("配置 "),s("a",{class:"header-anchor",href:"#配置","aria-label":'Permalink to "配置"'},"​")],-1),x=s("h3",{id:"引导设置",tabindex:"-1"},[i("引导设置 "),s("a",{class:"header-anchor",href:"#引导设置","aria-label":'Permalink to "引导设置"'},"​")],-1),A=s("ul",null,[s("li",null,"【发行版GNU/Linux】 建议选择Debian或centos，它们在linuxdeploy运行的兼容性更好"),s("li",null,"【架构】一般都选择arm64（Debian）或aarch64（centos），软件也会自动识别适合你的手机的架构，若特殊情况请搜索关键词 ‘{你手机的cpu}+架构’"),s("li",null,"【发行版GNU/Linux版本】按需选择，一般选择buster或stable"),s("li",null,[i("【源地址】建议改为国内源："),s("a",{href:"http://mirrors.163.com/debian",target:"_blank",rel:"noreferrer"},"http://mirrors.163.com/debian"),i(" ，保持默认亦可")]),s("li",null,"【安装类型】按需设置，建议选择镜像文件，因为它是一个单镜像文件"),s("li",null,[i("【安装路径】默认为"),s("code",null,"${EXTERNAL_STORAGE}/linux.img"),i("，一般保持默认即可")]),s("li",null,"【镜像大小】按需设置，若需搭建网盘服务，建议设置较大大小，可以使文件有足够的空间存储在linux镜像空间内，省去挂载手机存储的麻烦"),s("li",null,"【文件系统】ext4"),s("li",null,"【用户名】自行设置，建议设置为 root"),s("li",null,"【用户密码】自行设置"),s("li",null,"【特权用户】按需设置，一般保持默认"),s("li",null,"【本地化】简体中文选择zh_CN.UTF-8，按需设置"),s("li",null,"【DNS】按需设置，或保持默认")],-1),P=s("h3",{id:"初始化",tabindex:"-1"},[i("初始化 "),s("a",{class:"header-anchor",href:"#初始化","aria-label":'Permalink to "初始化"'},"​")],-1),w=s("ul",null,[s("li",null,"【启用】勾选以启用初始化功能"),s("li",null,"【初始化系统】选择sysv"),s("li",null,"【初始化设置】视情况设置，或保持默认")],-1),B=s("h3",{id:"挂载",tabindex:"-1"},[i("挂载 "),s("a",{class:"header-anchor",href:"#挂载","aria-label":'Permalink to "挂载"'},"​")],-1),T=s("p",null,"Source：手机目录 Target：Linux目录 使用能够查看到真实路径的文件浏览器，复制需要挂载的目录到挂载点列表，填入第一行即可",-1),$=s("h3",{id:"ssh",tabindex:"-1"},[i("SSH "),s("a",{class:"header-anchor",href:"#ssh","aria-label":'Permalink to "SSH"'},"​")],-1),N=s("p",null,"务必勾选启用SSH服务器，SSH设置按需配置",-1),S=s("h3",{id:"声音服务",tabindex:"-1"},[i("声音服务 "),s("a",{class:"header-anchor",href:"#声音服务","aria-label":'Permalink to "声音服务"'},"​")],-1),R=s("p",null,"按需配置",-1),z=s("h3",{id:"图形界面",tabindex:"-1"},[i("图形界面 "),s("a",{class:"header-anchor",href:"#图形界面","aria-label":'Permalink to "图形界面"'},"​")],-1),L=s("p",null,"按需配置",-1),O=s("hr",null,null,-1),V=s("p",null,[i("配置完成后，返回上一级，点击右上角按钮，点击安装，等待出现"),s("code",null,"<<< deploy"),i("即安装完成。")],-1),X=s("p",null,[i("点击停止按钮并确定，再点击启动，出现"),s("code",null,"<<< start"),i("即启动成功")],-1),H=s("p",null,"然后即可使用同一局域网下的ssh工具连接",-1),U=s("p",null,"为了防止旧手机的内网ip地址变更，在路由设置页面进行ip与MAC绑定，并把手机wifi连接中的隐私设置相关选项改为 使用设备MAC",-1),j=s("p",null,"连接后，安装常用工具",-1),I=s("p",null,[s("code",null,"apt install wget vim curl zip -y")],-1),G=s("p",null,[i("附： xshell工具家庭/学校版下载连接 "),s("a",{href:"https://www.xshell.com/zh/free-for-home-school/",target:"_blank",rel:"noreferrer"},"https://www.xshell.com/zh/free-for-home-school/")],-1),M=s("h2",{id:"安装并配置cloudreve",tabindex:"-1"},[i("安装并配置cloudreve "),s("a",{class:"header-anchor",href:"#安装并配置cloudreve","aria-label":'Permalink to "安装并配置cloudreve"'},"​")],-1),Y=s("p",null,[i("项目发行地址："),s("a",{href:"https://github.com/cloudreve/Cloudreve/releases",target:"_blank",rel:"noreferrer"},"cloudreve")],-1),Z=s("p",null,"截止到撰写本文（2022.01），最新版本为3.4.2",-1),q=s("p",null,"执行以下命令",-1),J=s("p",null,"切换到用户目录",-1),K=s("p",null,[s("code",null,"cd /opt")],-1),Q=s("p",null,"创建文件夹并切换",-1),W=s("p",null,[s("code",null,"mkdir cloudreve&&cd cloudreve")],-1),ss=s("p",null,"下载cloudreve",-1),is=s("p",null,[s("code",null,"wget https://github.com/cloudreve/Cloudreve/releases/download/3.4.2/cloudreve_3.4.2_linux_arm64.tar.gz")],-1),ls=s("p",null,"根据需求自行选择下载的版本并替换wget后的链接",-1),es=s("p",null,"解压",-1),ts=s("p",null,[s("code",null,"tar -zxvf cloudreve_3.4.2_linux_arm64.tar.gz")],-1),as=s("p",null,"赋予权限",-1),ns=s("p",null,[s("code",null,"chmod +x ./cloudreve")],-1),os=s("p",null,"启动",-1),rs=s("p",null,[s("code",null,"./cloudreve")],-1),hs=s("p",null,"在终端中会给出初始管理员账号与密码，使用该账号登录",-1),ds=s("p",null,"若无法访问，查看防火墙是否开放端口",-1),cs=s("p",null,[i("进入cloudreve后，点击右上角头像，进入管理面板，即可进行相关设置，具体参见"),s("a",{href:"https://docs.cloudreve.org/",target:"_blank",rel:"noreferrer"},"cloudreve官方文档")],-1),ps=s("p",null,"需要注意的是，在配置使用本机存储策略的用户组时，若存储目录在镜像空间内，要确保【初始容量】小于【镜像大小】，否则会无法上传任何文件",-1),us=s("h2",{id:"通过aria2实现离线下载",tabindex:"-1"},[i("通过aria2实现离线下载 "),s("a",{class:"header-anchor",href:"#通过aria2实现离线下载","aria-label":'Permalink to "通过aria2实现离线下载"'},"​")],-1),ks=s("p",null,"cloudreve内置了依赖于aria2的离线下载功能，因此需先进行aria2的配置",-1),_s=s("h3",{id:"安装并配置aria2",tabindex:"-1"},[i("安装并配置aria2 "),s("a",{class:"header-anchor",href:"#安装并配置aria2","aria-label":'Permalink to "安装并配置aria2"'},"​")],-1),gs=s("p",null,"安装",-1),vs=s("p",null,[s("code",null,"apt install aria2 -y")],-1),Fs=s("p",null,[i("下载由"),s("a",{href:"https://github.com/P3TERX",target:"_blank",rel:"noreferrer"},"P3TERX"),i("提供的aria2配置文件（亦可选择其他配置或参考"),s("a",{href:"https://aria2.github.io/",target:"_blank",rel:"noreferrer"},"aria2官方文档"),i("自行创建）")],-1),ms=s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light material-theme-darker vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#82AAFF"}},"cd")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#FFCB6B"}},"wget"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," https://github.com/P3TERX/aria2.conf/archive/master.zip")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#FFCB6B"}},"unzip"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," master.zip")])])]),s("button",{class:"collapse"})],-1),ys=s("p",null,"将解压出的文件夹重命名为.aria2",-1),fs=s("p",null,[s("code",null,"mv aria2.conf-master .aria2")],-1),Es=s("p",null,"修改aria2配置文件",-1),bs=s("p",null,[s("code",null,"cd .aria2&&vim aria2.conf")],-1),Ds=s("p",null,[s("a",{href:"https://github.com/P3TERX",target:"_blank",rel:"noreferrer"},"P3TERX"),i(" 的配置文件包含了中文注释，根据注释按需修改即可，一般需要改动的是"),s("strong",null,"下载目录"),i("、"),s("strong",null,"RPC密钥"),i("与"),s("strong",null,"BT监听端口"),i("，其他保持默认即可")],-1),Cs=s("p",null,[i("配置修改完成后，在.aria2目录内，执行"),s("code",null,"./tracker.sh"),i("即可更新tracker")],-1),xs=s("p",null,"若更新失败，可进行手动更新，参考以下tracker列表",-1),As=s("p",null,[s("a",{href:"https://trackerslist.com/all_aria2.txt",target:"_blank",rel:"noreferrer"},"https://trackerslist.com/all_aria2.txt")],-1),Ps=s("p",null,[i("将列表内容复制到"),s("code",null,"aria2.conf"),i("中的"),s("code",null,"bt-tracker"),i("参数后即可")],-1),ws=s("p",null,"创建aria2.session文件",-1),Bs=s("p",null,[s("code",null,"touch aria2.session")],-1),Ts=s("p",null,"测试aria2能否成功启动",-1),$s=s("p",null,[s("code",null,"aria2c --conf-path=/root/.aria2/aria2.conf")],-1),Ns=s("p",null,[i("第一次启动需要指定配置文件，日后启动只需使用"),s("code",null,"aria2c"),i("即可")],-1),Ss=s("p",null,"若启动成功，关闭即可，接下来进行进程保护配置，方便后续操作",-1),Rs=s("h3",{id:"守护cloudreve与aria2进程",tabindex:"-1"},[i("守护cloudreve与aria2进程 "),s("a",{class:"header-anchor",href:"#守护cloudreve与aria2进程","aria-label":'Permalink to "守护cloudreve与aria2进程"'},"​")],-1),zs=s("p",null,[i("cloudreve与aria2运行后，若关闭ssh终端，二者也会随之停止运行，因此需要进行进程守护，本文是使用 "),s("code",null,"supervisor")],-1),Ls=s("p",null,"安装",-1),Os=s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light material-theme-darker vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#FFCB6B"}},"apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," install"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," python-setuptools"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#C3E88D"}}," -y")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#FFCB6B"}},"apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," install"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," supervisor"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#C3E88D"}}," -y")])])]),s("button",{class:"collapse"})],-1),Vs=s("h4",{id:"cloudreve",tabindex:"-1"},[i("cloudreve "),s("a",{class:"header-anchor",href:"#cloudreve","aria-label":'Permalink to "cloudreve"'},"​")],-1),Xs=s("p",null,[i("为cloudreve创建配置并打开配置文件 "),s("code",null,"sudo vim /etc/supervisor/conf.d/cloudreve.conf")],-1),Hs=s("p",null,[i("将以下内容按需修改后，写入cloudreve的supervisor配置文件，具体参见"),s("a",{href:"http://supervisord.org/configuration.html",target:"_blank",rel:"noreferrer"},"supervisor官方文档")],-1),Us=s("div",{class:"language-ini vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ini"),s("pre",{class:"shiki shiki-themes github-light material-theme-darker vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#89DDFF"}},"[program:cloudreve]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"directory"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"/opt/cloudreve")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"command"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"/opt/cloudreve/cloudreve")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"autostart"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"autorestart"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"stderr_logfile"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"/var/log/supervisor/cloudreve.err")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"stdout_logfile"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"/var/log/supervisor/cloudreve.log")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"environment"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"CODENATION_ENV"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"prod")])])]),s("button",{class:"collapse"})],-1),js=s("p",null,"以上内容备注： 程序目录=/opt/cloudreve 运行命令(绝对路径)=/opt/cloudreve/cloudreve 自启动=true 自动重启=true 错误日志保存路径= 其他日志保存路径= 环境=",-1),Is=s("h4",{id:"aria2",tabindex:"-1"},[i("aria2 "),s("a",{class:"header-anchor",href:"#aria2","aria-label":'Permalink to "aria2"'},"​")],-1),Gs=s("p",null,"与上同理",-1),Ms=s("p",null,"为aria2创建配置并打开配置文件",-1),Ys=s("p",null,[s("code",null,"sudo vim /etc/supervisor/conf.d/aria2.conf")],-1),Zs=s("p",null,[i("将以下内容按需修改后，写入aria2的supervisor配置文件，具体参见"),s("a",{href:"http://supervisord.org/configuration.html",target:"_blank",rel:"noreferrer"},"supervisor官方文档")],-1),qs=s("div",{class:"language-ini vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ini"),s("pre",{class:"shiki shiki-themes github-light material-theme-darker vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#89DDFF"}},"[program:aria2]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"directory"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"/root/.aria2")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"command"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"aria2c --"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"conf-path"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"/root/.aria2/aria2.conf")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"autostart"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"autorestart"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"stderr_logfile"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"/var/log/supervisor/aria2.err")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"stdout_logfile"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"/var/log/supervisor/aria2.log")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"environment"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"CODENATION_ENV"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"prod")])])]),s("button",{class:"collapse"})],-1),Js=s("p",null,"以上内容备注： 程序目录=/root/.aria2 运行命令(绝对路径)=aria2c --conf-path=/root/.aria2/aria2.conf 自启动=true 自动重启=true 错误日志保存路径= 其他日志保存路径= 环境=",-1),Ks=s("hr",null,null,-1),Qs=s("p",null,"启动supervisor",-1),Ws=s("p",null,[s("code",null,"supervisord -c /etc/supervisor/supervisord.conf")],-1),si=s("p",null,"至此便完成了进程守护配置",-1),ii=s("p",null,"如需管理supervisor内进程，参考以下指令：",-1),li=s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light material-theme-darker vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#FFCB6B"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," supervisorctl"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," start"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," cloudreve"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#545454","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}}," #启动    ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#FFCB6B"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," supervisorctl"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," stop"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," cloudreve"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#545454","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}}," #停止    ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#FFCB6B"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," supervisorctl"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," status"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#C3E88D"}}," cloudreve"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#545454","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}}," #状态")])])]),s("button",{class:"collapse"})],-1),ei=s("p",null,"附.网页管理supervisor进程配置：",-1),ti=s("p",null,"在supervisor配置文件中（/etc/supervisor/supervisord.conf），添加以下内容",-1),ai=s("div",{class:"language-ini vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ini"),s("pre",{class:"shiki shiki-themes github-light material-theme-darker vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#89DDFF"}},"[inet_http_server]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"port"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#EEFFFF"}},"127.0.0.1:8888")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"username"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"=")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F07178"}},"password"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#89DDFF"}},"=")])])]),s("button",{class:"collapse"})],-1),ni=s("p",null,[i("其中port、username、password参数可自行设置，若需外部访问，可将port设置为 "),s("code",null,"0.0.0.0:8888")],-1),oi=s("h3",{id:"配置开机自启动",tabindex:"-1"},[i("配置开机自启动 "),s("a",{class:"header-anchor",href:"#配置开机自启动","aria-label":'Permalink to "配置开机自启动"'},"​")],-1),ri=s("p",null,"若在linuxdeploy中，初始化系统选择了sysv，则无需额外配置即可自启动supervisor及其中的程序 若使用run-parts初始化，需额外配置.",-1),hi=s("h2",{id:"配置cloudreve离线下载功能",tabindex:"-1"},[i("配置cloudreve离线下载功能 "),s("a",{class:"header-anchor",href:"#配置cloudreve离线下载功能","aria-label":'Permalink to "配置cloudreve离线下载功能"'},"​")],-1),di=s("p",null,[i("登录cloudreve管理页面，选择 离线下载节点 ，修改 主机（本机） 节点 "),s("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20220125103835.png",alt:""})],-1),ci=s("ol",null,[s("li",null,"启用离线下载"),s("li",null,"参考配置"),s("li",{prot:""},"RPC服务地址，由于cloudreve与aria2运行在同一台服务器（旧手机）上，故填写127.0.0.1:")],-1),pi=s("p",null,[s("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20220125103937.png",alt:""}),i(" 4. RPC令牌，与 Aria2 配置文件中rpc-secret保持一致 5. 临时下载目录，填写绝对路径，并保证cloudreve具有此目录的权限 6. 额外参数配置，一般保持默认")],-1),ui=s("p",null,"完成配置后，点击下一步，修改杂项信息，再点击下一步，即可保存该节点配置",-1),ki=s("p",null,[i("然后点击用户组，编辑用户组配置，允许进行离线下载 "),s("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20220125104705.png",alt:""})],-1),_i=s("hr",null,null,-1),gi=s("p",null,"至此，所有配置完成，可在同一局域网下，打开cloudreve页面测试是否成功实现了个人云盘与离线下载功能",-1),Ai={__name:"old-phone-become-server",setup(vi,{expose:h}){const a=JSON.parse('{"title":"将旧手机通过Linuxdeploy改造为linux服务器搭建cloudreve个人网盘实现离线下载","description":"","frontmatter":{"categories":"小技术","date":"2022-01-24T19:34:31.000Z","layout":"post","tags":["linux","DIY"],"title":"将旧手机通过Linuxdeploy改造为linux服务器搭建cloudreve个人网盘实现离线下载"},"headers":[{"level":2,"title":"准备","slug":"准备","link":"#准备","children":[]},{"level":2,"title":"安装linuxdeploy并配置","slug":"安装linuxdeploy并配置","link":"#安装linuxdeploy并配置","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"引导设置","slug":"引导设置","link":"#引导设置","children":[]},{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":3,"title":"挂载","slug":"挂载","link":"#挂载","children":[]},{"level":3,"title":"SSH","slug":"ssh","link":"#ssh","children":[]},{"level":3,"title":"声音服务","slug":"声音服务","link":"#声音服务","children":[]},{"level":3,"title":"图形界面","slug":"图形界面","link":"#图形界面","children":[]}]},{"level":2,"title":"安装并配置cloudreve","slug":"安装并配置cloudreve","link":"#安装并配置cloudreve","children":[]},{"level":2,"title":"通过aria2实现离线下载","slug":"通过aria2实现离线下载","link":"#通过aria2实现离线下载","children":[{"level":3,"title":"安装并配置aria2","slug":"安装并配置aria2","link":"#安装并配置aria2","children":[]},{"level":3,"title":"守护cloudreve与aria2进程","slug":"守护cloudreve与aria2进程","link":"#守护cloudreve与aria2进程","children":[]},{"level":3,"title":"配置开机自启动","slug":"配置开机自启动","link":"#配置开机自启动","children":[]}]},{"level":2,"title":"配置cloudreve离线下载功能","slug":"配置cloudreve离线下载功能","link":"#配置cloudreve离线下载功能","children":[]}],"relativePath":"pages/posts/old-phone-become-server.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/old-phone-become-server.md","lastUpdated":1719836457000}'),o=k(),n=a.frontmatter||{};return o.meta.frontmatter=Object.assign(o.meta.frontmatter||{},a.frontmatter||{}),r("pageData",a),r("valaxy:frontmatter",n),globalThis.$frontmatter=n,h({frontmatter:{categories:"小技术",date:"2022-01-24T19:34:31.000Z",layout:"post",tags:["linux","DIY"],title:"将旧手机通过Linuxdeploy改造为linux服务器搭建cloudreve个人网盘实现离线下载"}}),(e,mi)=>{const d=c;return _(),p(d,{frontmatter:u(n)},{"main-content-md":l(()=>[v,g(" more "),F,m,y,f,E,b,D,C,x,A,P,w,B,T,$,N,S,R,z,L,O,V,X,H,U,j,I,G,M,Y,Z,q,J,K,Q,W,ss,is,ls,es,ts,as,ns,os,rs,hs,ds,cs,ps,us,ks,_s,gs,vs,Fs,ms,ys,fs,Es,bs,Ds,Cs,xs,As,Ps,ws,Bs,Ts,$s,Ns,Ss,Rs,zs,Ls,Os,Vs,Xs,Hs,Us,js,Is,Gs,Ms,Ys,Zs,qs,Js,Ks,Qs,Ws,si,ii,li,ei,ti,ai,ni,oi,ri,hi,di,ci,pi,ui,ki,_i,gi]),"main-header":l(()=>[t(e.$slots,"main-header")]),"main-header-after":l(()=>[t(e.$slots,"main-header-after")]),"main-nav":l(()=>[t(e.$slots,"main-nav")]),"main-content":l(()=>[t(e.$slots,"main-content")]),"main-content-after":l(()=>[t(e.$slots,"main-content-after")]),"main-nav-before":l(()=>[t(e.$slots,"main-nav-before")]),"main-nav-after":l(()=>[t(e.$slots,"main-nav-after")]),comment:l(()=>[t(e.$slots,"comment")]),footer:l(()=>[t(e.$slots,"footer")]),aside:l(()=>[t(e.$slots,"aside")]),"aside-custom":l(()=>[t(e.$slots,"aside-custom")]),default:l(()=>[t(e.$slots,"default")]),_:3},8,["frontmatter"])}}};export{Ai as default};
