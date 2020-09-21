(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{493:function(a,e,s){"use strict";s.r(e);var n=s(4),t=Object(n.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Tip:\n个人理解maven主要是用来解决导入java类依赖的jar,编译java项目主要问题。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"maven下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven下载"}},[a._v("#")]),a._v(" Maven下载")]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("官网下载地址 "),s("a",{attrs:{href:"https://maven.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("点我"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),s("hr"),a._v(" "),s("h3",{attrs:{id:"_1-配置环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置环境变量"}},[a._v("#")]),a._v(" 1.配置环境变量")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("创建一个文件夹(D:\\maven)存放解压的文件")])]),a._v(" "),s("li",[s("p",[a._v("将bin引到path中")])])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("变量名:MAVEN_HOME\n变量值:D:\\maven\\apache-maven-3.6.3\\bin\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"_2-设置本地仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-设置本地仓库"}},[a._v("#")]),a._v(" 2.设置本地仓库")]),a._v(" "),s("p",[a._v("本地仓库默认的已经有了，这样做是为了查找方便设置自己指定的位置。")]),a._v(" "),s("ul",[s("li",[a._v("设置存放仓库的路径")]),a._v(" "),s("li",[a._v("打开"),s("code",[a._v("D:\\maven\\apache-maven-3.6.3\\conf\\settings.xml")]),a._v("，找到"),s("code",[a._v("localRepository")]),a._v("标签")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("1.存放路径:D:\\maven\\repository\n\n2.localRepository标签中添加代码:    <localRepository>D:\\maven\\apache-maven-3.6.3\\maven-repo</localRepository>\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"_3-配置中央仓库镜像源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置中央仓库镜像源"}},[a._v("#")]),a._v(" 3.配置中央仓库镜像源")]),a._v(" "),s("p",[a._v("打开"),s("code",[a._v("D:\\maven\\apache-maven-3.5.4\\conf\\settings.xml")]),a._v("，找到"),s("code",[a._v("mirrors")]),a._v("标签，在标签内添加如下代码")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("<mirror>\n          <id>nexus-aliyun</id>\n          <mirrorOf>central</mirrorOf>\n          <name>Nexus aliyun</name>\n          <url>http://maven.aliyun.com/nexus/content/groups/public</url> \n</mirror>\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);