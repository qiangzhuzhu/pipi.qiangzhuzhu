---
title: maven安装和配置
date: 2020-09-22
tags:
 - tag3
categories: 
 - category2
---

```
Tip:
个人理解maven主要是用来解决导入java类依赖的jar,编译java项目主要问题。
```

## Maven下载
---

官网下载地址 [点我](https://maven.apache.org/)

## 配置
---
### 1.配置环境变量
+ 创建一个文件夹(D:\maven)存放解压的文件

+ 将bin引到path中
```
变量名:MAVEN_HOME
变量值:D:\maven\apache-maven-3.6.3\bin
```

### 2.设置本地仓库
本地仓库默认的已经有了，这样做是为了查找方便设置自己指定的位置。

+ 设置存放仓库的路径
+ 打开`D:\maven\apache-maven-3.6.3\conf\settings.xml`，找到`localRepository`标签


```
1.存放路径:D:\maven\repository

2.localRepository标签中添加代码:    <localRepository>D:\maven\apache-maven-3.6.3\maven-repo</localRepository>
```
### 3.配置中央仓库镜像源
打开`D:\maven\apache-maven-3.5.4\conf\settings.xml`，找到`mirrors`标签，在标签内添加如下代码
```
<mirror>
          <id>nexus-aliyun</id>
          <mirrorOf>central</mirrorOf>
          <name>Nexus aliyun</name>
          <url>http://maven.aliyun.com/nexus/content/groups/public</url> 
</mirror>
```

