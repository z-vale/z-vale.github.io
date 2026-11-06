+++
title = 'Java开发利器：IDEA的安装与使用'
date = 2026-11-06T00:00:00+08:00
draft = false
description = '从安装与基础配置，到项目管理、快捷键、调试和常用插件的 IDEA 学习笔记。'
summary = '整理 IDEA 安装、配置、工程管理与调试操作，配合本地截图，方便随时查阅。'
tags = ['Java', 'IDEA', '开发工具']
categories = ['技术实践']
aliases = ['/posts/idea-use/java开发利器idea的安装与使用/']
+++

> 课程笔记：原文包含尚硅谷宋红康老师的 IDEA 2022.x 教程内容，保留原课程说明与操作截图；其中软件版本与界面以课程记录为准。

**【本套课程适用人群】**

+ 初学Java语言，熟悉了记事本、EditPlus、NotePad++或Sublime  
Text3等简易开发工具的Java初学者
+ 熟练使用其他Java集成开发环境（IDE），需要转向IDEA工具的Java工程师们
+ 关注IDEA各方面特性的Java程序发烧友、爱好者

![IDEA 操作截图 001](images/idea-001.png)

---

**【Why IDEA?】**

![IDEA 操作截图 002](images/idea-002.png)

![IDEA 操作截图 003](images/idea-003.png)

> 【注】JetBrains官方说明：
>
> 尽管我们采取了多种措施确保受访者的代表性，但结果可能会略微偏向  
JetBrains 产品的用户，因 为这些用户更有可能参加调查。
>

此外，2022年，某美国软件开发商在对近千名专业的Java开发者调研后，发布了《2022年Java开发者生  
产力报告》。报告提到：JetBrains 的 IntelliJ IDEA是最受欢迎的 Java  
IDE，占 48% ，其次是 Eclipse，占 24%，Visual Studio Code 占 18%。

---

**【Why IDEA 2022.x】**

在Java 17正式发布之前，Java开发框架Spring率先在官博宣布，SpringFramework 6和Spring Boot 3计划  
在2022年第四季度实现总体可用性的高端基线：

+ Java 17+(来自Spring Framework 5.3.x 线中的Java 8-17)
+ Jakarta EE 9+（来自Spring框架5.3.x 线中的Java EE 7-8）

Spring 官方说明：[https://spring.io/blog/2022/01/20/spring-boot-3-0-0-m1-is-now-available](https://spring.io/blog/2022/01/20/spring-boot-3-0-0-m1-is-now-available)

![IDEA 操作截图 004](images/idea-004.png)

> 意味着：springboot3.0  
是需要用java17和spring6.0为基础建设。如果从企业选型最新springboot3.0  
作为架构来说，它搭配jdk17肯定是标配了。
>

---

本着"工欲善其事必先利其器"的精神，本套课程从IDEA的介绍、安装、设置入手，讲解IDEA中项目的创建、快捷键与模板的使用、断点调试、常用插件等。

## 1.认识IntelliJIDEA
---

### 1.1JetBrains公司介绍
IDEA，是 JetBrains([https://www.jetbrains.com/](https://www.jetbrains.com/))公司的产品，该公司成立于2000年，总部位于捷克的布拉格，致力于为开发者打造最高效智能的开发工具。

![IDEA 操作截图 005](images/idea-005.png)

公司旗下还有其它产品，比如：

+ WebStorm：用于开发JavaScript、HTML5、CSS3 等前端技术
+ PyCharm：用于开发python
+ PhpStorm：用于开发PHP RubyMine：用于开发Ruby/Rails
+ RubyMine：用于开发 Ruby/Rails  
+ AppCode：用于开发Objective - C/Swift CLion：用于开发C/C++
+ CLion：用于开发 C/C++  
+ DataGrip：用于开发数据库和SQL Rider：用于开发.NET
+ Rider：用于开发.NET  
+ GoLand：用于开发Go

![IDEA 操作截图 006](images/idea-006.png)

用于开发 Android的Android Studio，也是Google 基于 IDEA  
社区版进行迭代的。

### 1.2IntelliJIDEA介绍
IDEA，全称 IntelliJ IDEA ，是 Java 语言的集成开发环境，目前已经（基本）代替了Eclipse的使 用。IDEA 在业界被公认为是最好的 Java开发工具（之一），因其 功能强悍、 设置人性化，而深受Java、大数据、移动端程序员的喜爱。尤其在智能代码助手、代码自动提示、重构、J2EE支持、Ant、Unit、CVS 整合、代码审查、创新的 GUI 设计等方面的功能可以说是超常的。

IntelliJ IDEA 在 2015 年的官网上这样介绍自己：

> Excel at enterprise, mobile and web development with Java, Scala and  
Groovy,with all the latest modern technologies and frameworks  
available out of thebox.
>

![IDEA 操作截图 007](images/idea-007.png)

### 1.3IDEA的主要优势：(vsEclipse)
**功能强大：**

① 强大的整合能力。比如：Git、Maven、Spring等

![IDEA 操作截图 008](images/idea-008.png)

②开箱即用的体验（集成版本控制系统、多语言支持的框架随时可用，无需额外安装插件）

**符合人体工程学：**

**① 高度智能（快速的智能代码补全、实时代码分析、可靠的重构工具）**

![IDEA 操作截图 009](images/idea-009.png)

② 提示功能的快速、便捷、范围广

![IDEA 操作截图 010](images/idea-010.png)

  

![IDEA 操作截图 011](images/idea-011.png)

③ 好用的快捷键和代码模板

④ 精准搜索

### 1.4IDEA的下载
+ 下载网址：[https://www.jetbrains.com/idea/download/#section=windows](https://www.jetbrains.com/idea/download/#section=windows)
+ IDEA 分为两个版本： 旗舰版(Ultimate) 和 社区版(Community) 。
+ IDEA的大版本每年迭代一次，大版本下的小版本（如：2022.x）迭代时间不固定，一般每年3个小版本。

![IDEA 操作截图 012](images/idea-012.png)

两个不同版本的详细对比，可以参照官网: [https://www.jetbrains.com/idea/features/editions_comparison_matrix.html](https://www.jetbrains.com/idea/features/editions_comparison_matrix.html)

官网提供的详细使用文档: [https://www.jetbrains.com/help/idea/meet-intellj-idea.html](https://www.jetbrains.com/help/idea/getting-started.html)

## 2.卸载与安装
### 2.1卸载过程
这里以卸载2022.1.2版本为例说明。在【控制面板】找到【卸载程序】

![IDEA 操作截图 013](images/idea-013.png)

右键点击或左键双击IntelliJ IDEA 2022.1.2进行卸载：

![IDEA 操作截图 014](images/idea-014.png)

如果需要保留下述数据，就不要打√。如果想彻底删除IDEA所有数据，那就打上√。

![IDEA 操作截图 015](images/idea-015.png)

  

![IDEA 操作截图 016](images/idea-016.png)

![IDEA 操作截图 017](images/idea-017.png)

卸载完以后，还需要删除其它几个位置的残留：

![IDEA 操作截图 018](images/idea-018.png)

![IDEA 操作截图 019](images/idea-019.png)

软件

### 2.2安装前的准备

![IDEA 操作截图 020](images/idea-020.png)

+ 64 位Microsoft Windows 11、10、8
+ 最低2 GB 可用RAM，推荐8 GB 系统总RAM 
+ 2.5 GB 硬盘空间，推荐SSD
+ 最低屏幕分辨率1024x768

从安装上来看，IntelliJ IDEA 对硬件的要求似乎不是很高。可是在实际开发中并不是这样的，因为 IntelliJ IDEA执行时会有大量的缓存、索引文件，所以如果你正在使用 Eclipse /MyEclipse，想通过 IntelliJ IDEA来解决计算机的卡、慢等问题，这基本上是不可能的，本质上你应该对自己的硬件设备进行升级。

### 2.3安装过程
1、下载完安装包，双击直接安装

![IDEA 操作截图 021](images/idea-021.png)

2、欢迎安装

![IDEA 操作截图 022](images/idea-022.png)

3、是否删除电脑上低版本的IDEA（如果有，可以选择忽略）

![IDEA 操作截图 023](images/idea-023.png)

+ 如果电脑上有低版本的IDEA，可以选择删除或保留。
+ 这里没有卸载旧版本，如果需要卸载，记得勾选下面的保留旧的设置和配置。

4、选择安装目录

![IDEA 操作截图 024](images/idea-024.png)

  
选择安装目录，目录中要避免中文和空格。

5、创建桌面快捷图标等

![IDEA 操作截图 025](images/idea-025.png)

确认是否与.java、.groovy、.kt 格式文件进行关联。这里建议不关联。

6、在【开始】菜单新建一个文件夹（这里需要确认文件夹的名称），来管理IDEA的相关内容。

![IDEA 操作截图 026](images/idea-026.png)

![IDEA 操作截图 027](images/idea-027.png)

7、完成安装

![IDEA 操作截图 028](images/idea-028.png)

![IDEA 操作截图 029](images/idea-029.png)

重启以后，单击登录：

### 2.4注册
首先，需要通过用户协议：

![IDEA 操作截图 030](images/idea-030.png)

是否同意发送用户数据（特性、使用的插件、硬件与软件配置等），建议选择：不发送。

![IDEA 操作截图 031](images/idea-031.png)

接着，会提示我们进行注册。

选择1：适用30天。在IDEA2022.1.2版本中，需要先登录，才能开启适用。

![IDEA 操作截图 032](images/idea-032.png)

选择2：付费购买旗舰版

![IDEA 操作截图 033](images/idea-033.png)

  

![IDEA 操作截图 034](images/idea-034.png)

选择3：（推荐）

+ 大家参照《 .\03-资料\01-IDEA 2022.1 注册文档\IntelliJIDEA2022.1注册文档.docx 》操作即可。
+ 由于存在时效性，如果失效，大家可以自行搜索注册方式即可。

### 2.5闪退问题
问题描述1：2022.1启动不了，双击桌面图标，没有响应。

问题描述2：进入到安装目录...\IntelliJ IDEA2022.1.2\bin，打开CMD。输入idea，发现报错。

解决办法：

打开C:\Users\songhk\AppData\Roaming\JetBrains\IntelliJIdea2022.1\idea64.exe.vmoptions这个文件。

![IDEA 操作截图 035](images/idea-035.png)

内容如下所示：

![IDEA 操作截图 036](images/idea-036.png)

删除红框的数据以后，再登录即可正常进入。

![IDEA 操作截图 037](images/idea-037.png)

![IDEA 操作截图 038](images/idea-038.png)

原因：之前使用过的比如2021.2.2版本，pojie了。新版IEDA太智能了，把现有的启运参数也都复制过去  
了。又因为最新的IDEA，不兼容pojie程序-javaagent:D:\develop_tools\IDEA\IntelliJIDEA

2021.2.2\bin\jetbrains-agent.jar了，所以报错了，所以JVM结束了，所以没有启动画面，凉凉了。

## 3.HelloWorld的实现
### 3.1新建Project-Class
选择"New Project"：

![IDEA 操作截图 039](images/idea-039.png)

指名工程名、使用的JDK版本等信息。如下所示：

![IDEA 操作截图 040](images/idea-040.png)

接着创建Java类：

![IDEA 操作截图 041](images/idea-041.png)

  

![IDEA 操作截图 042](images/idea-042.png)

### 3.2编写代码
```java
public class HelloWorld {
public static void main(String[] args) {
    System.out.println("Hello,World!");
} }
```

### 3.3运行

![IDEA 操作截图 043](images/idea-043.png)

![IDEA 操作截图 044](images/idea-044.png)

## 4.JDK相关设置
### 4.1项目的JDK设置
File-->Project Structure...-->Platform Settings -->SDKs

![IDEA 操作截图 045](images/idea-045.png)

  

![IDEA 操作截图 046](images/idea-046.png)

+ 注1：SDKs全称是Software Development Kit，这里一定是选择JDK的安装根目录，不是JRE的目录。
+ 注2：这里还可以从本地添加多个JDK。使用"+"即可实现。

### 4.2out目录和编译版本
File-->Project Structure...-->Project Settings -->Project

![IDEA 操作截图 047](images/idea-047.png)

## 5.详细设置
### 5.1如何打开详细配置界面
1、显示工具栏

![IDEA 操作截图 048](images/idea-048.png)

2、选择详细配置菜单或按钮

![IDEA 操作截图 049](images/idea-049.png)

  

![IDEA 操作截图 050](images/idea-050.png)

### 5.2系统设置
**1、默认启动项目配置**

![IDEA 操作截图 051](images/idea-051.png)

启动IDEA时，默认自动打开上次开发的项目？还是自己选择？

如果去掉Reopen last project on startup前面的对勾，每次启动IDEA就会出现如下界面：

![IDEA 操作截图 052](images/idea-052.png)

**2、取消自动更新**

Settings-->Appearance & Behavior->System Settings -> Updates

![IDEA 操作截图 053](images/idea-053.png)

默认都打√了，建议检查IDE更新的√去掉，检查插件更新的√选上。

### 5.3设置整体主题
**1、选择主题**

![IDEA 操作截图 054](images/idea-054.png)

**2、设置菜单和窗口字体和大小**

![IDEA 操作截图 055](images/idea-055.png)

**3、设置IDEA背景图**

![IDEA 操作截图 056](images/idea-056.png)

选择一张合适的图片作为背景，即可。

![IDEA 操作截图 057](images/idea-057.png)

### 5.4设置编辑器主题样式
**1、编辑器主题**

![IDEA 操作截图 058](images/idea-058.png)

**2、字体大小**

![IDEA 操作截图 059](images/idea-059.png)

更详细的字体与颜色如下：

![IDEA 操作截图 060](images/idea-060.png)

> 温馨提示：如果选择某个font字体，中文乱码，可以在fallback font（备选字体）中选择一个支持中 文的字体。
>

**3、注释的字体颜色**

![IDEA 操作截图 061](images/idea-061.png)

Block comment：修改多行注释的字体颜色
+ Doc Comment --> Text：修改文档注释的字体颜色 Line
+ comment：修改单行注释的字体颜色

### 5.5显示行号与方法分隔符

![IDEA 操作截图 062](images/idea-062.png)

### 5.6代码智能提示功能

![IDEA 操作截图 063](images/idea-063.png)

IntelliJ IDEA 的代码提示和补充功能有一个特性： 区分大小写。如果想不区分大小写的话，就把这个对 勾去掉。 建议去掉勾选。

### 5.7自动导包配置
+ 默认需要自己手动导包，Alt+Enter快捷键

![IDEA 操作截图 064](images/idea-064.png)

+ 自动导包设置
    - 动态导入明确的包：Add unambiguous imports on thefly，该设置具有全局性；
    -  优化动态导入的包：Optimize imports on the fly，该设置只对当前项目有效；

![IDEA 操作截图 065](images/idea-065.png)

### 5.8设置项目文件编码（一定要改）

![IDEA 操作截图 066](images/idea-066.png)

说明： Transparent native-to-ascii conversion主要用于转换ascii，显式原生内容。一般都要勾选。

### 5.9设置控制台的字符编码
![IDEA 操作截图 067](images/idea-067.png)

### 5.10修改类头的文档注释信息

![IDEA 操作截图 068](images/idea-068.png)

比如：

```java
/**
* ClassName: ${NAME}
* Package: ${PACKAGE_NAME} * Description:
* @Author 尚硅谷-宋红康 
* @Create ${DATE} ${TIME} * @Version 1.0 
*/
```

常用的预设的变量，这里直接贴出官网给的：

```java
${PACKAGE_NAME} - the name of the target package where the new class or interface will be created.
${PROJECT_NAME} - the name of the current project. ${FILE_NAME} -
the name of the PHP file that will be created.
${NAME} - the name of the new file which you specify in the New File
dialog box during the file creation.
${USER} - the login name of the current user. ${DATE} - the current
system date.
${TIME} - the current system time. ${YEAR} - the current year.
${MONTH} - the current month.
${DAY} - the current day of the month. ${HOUR} - the current hour.
${MINUTE} - the current minute.
${PRODUCT_NAME} - the name of the IDE in which the file will be
created. ${MONTH_NAME_SHORT} - the first 3 letters of the month name.
Example: Jan, Feb, etc. ${MONTH_NAME_FULL} - full name of a month.
Example: January, February, etc.
```

### 5.11设置自动编译
Settings-->Build,Execution,Deployment-->Compiler

![IDEA 操作截图 069](images/idea-069.png)

### 5.12设置为省电模式(可忽略)

![IDEA 操作截图 070](images/idea-070.png)

IntelliJ IDEA 有一种叫做 省电模式的状态，开启这种模式之后 IntelliJ IDEA会 关掉代码检查和 代码提示等 功能。所以一般也可认为这是一种阅读模式，如果你在开发过程中遇到突然代码文件不能进行检查和提示，可以来看看这里是否有开启该功能。

### 5.13取消双击shift搜索
因为我们按shift切换中英文输入方式，经常被按到，总是弹出搜索框，太麻烦了。可以取消它。

![IDEA 操作截图 071](images/idea-071.png)

+ 方式1：适用于IDEA 2022.1.2版本

在2022.1版本中，采用如下方式消双击shift出现搜索框：搜索double即可，勾选Disable  
double modifier key shortcuts，禁用这个选项。

![IDEA 操作截图 072](images/idea-072.png)

+ 方式2：适用于IDEA 2022.1.2之前版本

双击shift 或 ctrl + shift + a，打开如下搜索窗口：

![IDEA 操作截图 073](images/idea-073.png)

选择registry...，找到"ide.suppress.double.click.handler"，把复选框打上勾就可以取消双击shift出现搜索  
框了。

![IDEA 操作截图 074](images/idea-074.png)

### 5.14是否在单行显式编辑器选项卡&显示的文件个数
+ 是否在单行显式编辑器选项卡（建议去掉勾选）

![IDEA 操作截图 075](images/idea-075.png)

+ 设置可以打开的文件个数

![IDEA 操作截图 076](images/idea-076.png)

### 5.15自动注释的缩进（避免添加注释自动到行首）
如图，打开设置界面，依次选择Editor-Code Style-Java，选择Code Generation，取消Line comment at first column和Block comment at first column的选中即可。

![IDEA 操作截图 077](images/idea-077.png)

### 5.16设置各工作区的背景颜色
快捷键 Ctrl+Alt+s或者选择File – Settings ，进入idea设置页面;

#### 左侧工作区（导航栏）背景颜色设置
选择File | Settings | Appearance & Behavior | File Colors，点击右侧添加设置自己的颜色即可

#### 代码区背景颜色设置
选择 File | Settings | Editor | Color Scheme | General Text | Default Text，选择右侧的Background设置自己的颜色即可

#### 控制台背景颜色设置
选择 File | Settings | Editor | Color Scheme | Console Colors | Console | Background，选择右侧的Background设置自己的颜色即可  
我的保护色是"#CCE8CF"/淡一点的绿色 或者 "#C7EDCC"/深一点的绿色;、

### 5.17 注释模板
```shell
接口/函数注释模板
**
 * $description$
 * 
 * @param $params$
 * @return $return$
 */
@return @date @time等选择idea默认的即可

@param的groovyScript为：
groovyScript("def result=''; def params=\"${_1}\".replaceAll('[\\\\[|\\\\]|\\\\s]', '').split(',').toList(); for(i = 0; i < params.size(); i++) {result+='' + params[i] + ((i < params.size() - 1) ? ' \\n ' + '* @param ' : '')};return result", methodParameters())

可以实现如下效果，@param生成的注释不加冒号，使用idea折叠后，param在一块，return在一块；

```

![IDEA 操作截图 078](images/idea-078.png)

![IDEA 操作截图 079](images/idea-079.png)

![IDEA 操作截图 080](images/idea-080.png)

## 6.工程与模块管理
### 6.1IDEA项目结构
**层级关系：**

```java
project(工程) - module(模块) - package(包) - class(类)
```

**具体的：**

```java
一个project中可以创建多个module
一个module中可以创建多个package
一个package中可以创建多个class
```

这些结构的划分，是为了方便管理功能代码。

### 6.2Project和Module的概念
在 IntelliJ IDEA 中，提出了Project和Module这两个概念。

![IDEA 操作截图 081](images/idea-081.png)

在 IntelliJ IDEA 中Project是最顶级的结构单元，然后就是Module。目前，主流的大型项目结构基本都是多Module的结构，这类项目一般是按功能划分的，比如：user-core-module、user-facade-module和user-hessian-module等等，模块之间彼此可以相互依赖，有着不可分割的业务关系。因此，对于一个Project 来说：

+ 当为单Module项目的时候，这个单独的Module实际上就是一个Project。
+ 当为多Module项目的时候，多个模块处于同一个Project之中，此时彼此之间具有  
互相依赖的关联 关系。
+ 当然多个模块没有建立依赖关系的话，也可以作为单独一个"小项目"运行。

### 6.3创建Module
建议创建"Empty空工程"，然后创建多模块，每一个模块可以独立运行，相当于一个小项目。JavaSE阶段  
不涉及到模块之间的依赖。后期再学习模块之间的依赖。

步骤：

（1）选择创建模块

![IDEA 操作截图 082](images/idea-082.png)

（2）选择模块类型：这里选择创建Java模块，给模块命名，确定存放位置

![IDEA 操作截图 083](images/idea-083.png)

  

（4）模块声明在工程下面

![IDEA 操作截图 084](images/idea-084.png)

### 6.4删除模块
（1）移除模块

![IDEA 操作截图 085](images/idea-085.png)

  

![IDEA 操作截图 086](images/idea-086.png)

（2）彻底删除模块

![IDEA 操作截图 087](images/idea-087.png)

### 6.5导入老师的模块
（1）将老师的模块 teacher_chapter04 整个的复制到自己IDEA项目的路径下

![IDEA 操作截图 088](images/idea-088.png)

接着打开自己IDEA的项目，会在项目目录下看到拷贝过来的module，只不过不是以模块的方式呈现。

![IDEA 操作截图 089](images/idea-089.png)

  
（2）查看Project Structure，选择import module

![IDEA 操作截图 090](images/idea-090.png)

![IDEA 操作截图 091](images/idea-091.png)

（3）选择要导入的module：

![IDEA 操作截图 092](images/idea-092.png)

![IDEA 操作截图 093](images/idea-093.png)

（4）接着可以一路Next下去，最后选择Overwrite

![IDEA 操作截图 094](images/idea-094.png)

![IDEA 操作截图 095](images/idea-095.png)

最后点击OK即可了。

### 6.6同时打开两个IDEA项目工程
**1、两个IDEA项目工程效果**

**有些同学想要把上课练习代码和作业代码分开两个IDEA项目工程。**

![IDEA 操作截图 096](images/idea-096.png)

![IDEA 操作截图 097](images/idea-097.png)

**2、新建一个IDEA项目**

**注意：第一次需要新建，之后直接打开项目工程即可**

![IDEA 操作截图 098](images/idea-098.png)

![IDEA 操作截图 099](images/idea-099.png)

![IDEA 操作截图 100](images/idea-100.png)

  
**3、打开两个IDEA项目**

![IDEA 操作截图 101](images/idea-101.png)

![IDEA 操作截图 102](images/idea-102.png)

![IDEA 操作截图 103](images/idea-103.png)

  

### 6.7导入前几章非IDEA工程代码
**1、创建chapter01、chapter02、chapter03等章节的module**

**将相应章节的源文件粘贴到module的src下。**

![IDEA 操作截图 104](images/idea-104.png)

![IDEA 操作截图 105](images/idea-105.png)

打开其中各个源文件，会发现有乱码。比如：  

![IDEA 操作截图 106](images/idea-106.png)

**2、设置编码**

当前项目是UTF-8。如果原来的.java文件都是GBK的（如果原来.java文件有的是GBK，有的是UTF-8就比较  
麻烦了）。

可以单独把这两个模块设置为GBK编码的。

![IDEA 操作截图 107](images/idea-107.png)

改为GBK，确认即可。如图：

![IDEA 操作截图 108](images/idea-108.png)

## 7.代码模板的使用
### 7.1查看PostfixCompletion模板(后缀补全)
![IDEA 操作截图 109](images/idea-109.png)

### 7.2查看LiveTemplates模板(实时模板)

![IDEA 操作截图 110](images/idea-110.png)

### 7.3常用代码模板
#### 1、非空判断
+ 变量.null：if(变量== null) 
+ 变量.nn：if(变量!= null)
+ 变量.notnull：if(变量!= null) 
+ ifn：if(xx == null)
+ inn：if(xx != null)

#### 2、遍历数组和集合
+ 数组或集合变量.fori：for循环 
+ 数组或集合变量.for：增强for循环
+ 数组或集合变量.forr：反向for循环
+ 数组或集合变量.iter：增强for循环遍历数组或集合

#### 3、输出语句
+ sout：相当于System.out.println 
+ soutm：打印当前方法的名称
+ soutp：打印当前方法的形参及形参对应的实参值
+ soutv：打印方法中声明的最近的变量的值 
+ 变量.sout：打印当前变量值
+ 变量.soutv：打印当前变量名及变量值

#### 4、对象操作
+ 创建对象
    - Xxx.new .var ：创建Xxx类的对象，并赋给相应的变量 
    - Xxx.new.field：会将方法内刚创建的Xxx对象抽取为一个属性
+ 强转
    - 对象.cast：将对象进行强转 
    - 对象.castvar：将对象强转后，并赋给一个变量

#### 5、静态常量声明
+ psf：public static final 
+ psfi：public static final int 
+ psfs：public static final String 
+ prsf：private static final

### 7.4自定义代码模板
#### 7.4.1自定义后缀补全模板

![IDEA 操作截图 111](images/idea-111.png)

![IDEA 操作截图 112](images/idea-112.png)

#### 7.4.2自定义Live Templates
**例如：定义sop代表System.out.print();语句**

①在Live Templates中增加模板

![IDEA 操作截图 113](images/idea-113.png)

②先定义一个模板的组，这样方便管理所有自定义的代码模板  

![IDEA 操作截图 114](images/idea-114.png)

③在模板组里新建模板

![IDEA 操作截图 115](images/idea-115.png)

④定义模板（以输出语句为例）

![IDEA 操作截图 116](images/idea-116.png)

+ Abbreviation：模板的缩略名称 
+ Description：模板的描述 
+ Template text：模板的代码片段
+ 模板应用范围。比如点击Define。选择如下：应用在java代码中。

![IDEA 操作截图 117](images/idea-117.png)

**其它模板1：单元测试模板：**

```java
@Test
public void test$var1$(){ 
    $var2$
}
```

![IDEA 操作截图 118](images/idea-118.png)

**其它模板2：创建多线程**

```java
new Thread(){
public void run(){ 
    $var$
} };
```

![IDEA 操作截图 119](images/idea-119.png)

**其它模板3：冒泡排序**

```java
for(int $INDEX$ = 1; $INDEX$ < $ARRAY$.length; $INDEX$++) {
for(int $INDEX2$ = 0; $INDEX2$ < $ARRAY$.length-$INDEX$;
$INDEX2$++) { if($ARRAY$[$INDEX2$] >
$ARRAY$[$INDEX2$+1]){
$ELEMENT_TYPE$ temp = $ARRAY$[$INDEX2$];
$ARRAY$[$INDEX2$] = $ARRAY$[$INDEX2$+1];
$ARRAY$[$INDEX2$+1] = temp;
} }
```

![IDEA 操作截图 120](images/idea-120.png)

## 8.快捷键的使用
### 8.1常用快捷键
见《 尚硅谷_宋红康_IntelliJ IDEA 常用快捷键一览表.md 》

[尚硅谷_宋红康_IntelliJ IDEA 常用快捷键一览表.pdf](https://www.yuque.com/attachments/yuque/0/2023/pdf/12824362/1693208945359-1a8042cf-3051-495a-bbf8-e3b9a02543f1.pdf)

### 8.2查看快捷键
#### 1、已知快捷键操作名，未知快捷键

![IDEA 操作截图 121](images/idea-121.png)

#### 2、已知快捷键，不知道对应的操作名
![IDEA 操作截图 122](images/idea-122.png)

### 8.3自定义快捷键

![IDEA 操作截图 123](images/idea-123.png)

### 8.4使用其它平台快捷键
苹果电脑或者是用惯Eclipse快捷的，可以选择其他快捷键插件。

![IDEA 操作截图 124](images/idea-124.png)

## 9.IDEA断点调试(Debug)
### 9.1为什么需要Debug
编好的程序在执行过程中如果出现错误，该如何查找或定位错误呢？简单的代码直接就可以看出来，但如果代码比较复杂，就需要借助程序调试来查找错误了。

```java
运行编写好的程序时，可能出现的几种情况： 
>情况1：没有任何bug,程序执行正确！
===============如果出现如下的三种情况，都又必要使用debug=========
>情况2：运行以后，出现了错误或异常信息。但是通过日志文件或控制台，显示了异常信息的位置。
>情况3：运行以后，得到了结果，但是结果不是我们想要的。
>情况4：运行以后，得到了结果，结果大概率是我们想要的。但是多次运行的话，可能会出现不是我们想要的情况。
		比如：多线程情况下，处理线程安全问题。
```

### 9.2Debug的步骤
Debug(调试)程序步骤如下：

1. 添加断点
2. 启动调试
3. 单步执行
4. 观察变量和执行流程，找到并解决问题

#### 1、添加断点
在源代码文件中，在想要设置断点的代码行的前面的标记行处，单击鼠标左键就可以设置断点，在相同位置再次单击即可取消断点。

![IDEA 操作截图 125](images/idea-125.png)

#### 2、启动调试
IDEA提供多种方式来启动程序(Launch)的调试，分别是通过菜单(Run--> Debug)、图标("绿色臭虫" 

![IDEA 操作截图 126](images/idea-126.png)

等等

![IDEA 操作截图 127](images/idea-127.png)

#### 3、单步调试工具介绍

![IDEA 操作截图 128](images/idea-128.png)

或

![IDEA 操作截图 129](images/idea-129.png)

![IDEA 操作截图 130](images/idea-130.png)

：Step Over（F8）：进入下一步，如果当前行断点是调用一个方法，则不进入当前方法体内

![IDEA 操作截图 131](images/idea-131.png)

：Step Into（F7）：进入下一步，如果当前行断点是调用一个自定义方法，则进入该方法体内

![IDEA 操作截图 132](images/idea-132.png)

：Force Step Into（Alt +Shift + F7）：进入下一步，如果当前行断点是调用一个核心类库方法，则进入该方法体内

![IDEA 操作截图 133](images/idea-133.png)

：Step Out（Shift + F8）：跳出当前方法体

![IDEA 操作截图 134](images/idea-134.png)

：Run to Cursor（Alt + F9）：直接跳到光标处继续调试

![IDEA 操作截图 135](images/idea-135.png)

：Resume Program（F9）：恢复程序运行，但如果该断点下面代码还有断点则停在下一个断点上

![IDEA 操作截图 136](images/idea-136.png)

：Stop（Ctrl + F2）：结束调试

![IDEA 操作截图 137](images/idea-137.png)

：View Breakpoints（Ctrl + Shift + F8）：查看所有断点

![IDEA 操作截图 138](images/idea-138.png)

：Mute Breakpoints：使得当前代码后面所有的断点失效， 一下执行到底

> 说明：在Debug过程中，可以动态的下断点。
>

### 9.3多种Debug情况介绍
#### 9.3.1行断点
+ 断点打在代码所在的行上。执行到此行时，会停下来。

![IDEA 操作截图 139](images/idea-139.png)

#### 9.3.2方法断点
+ 断点设置在方法的签名上，默认当进入时，断点可以被唤醒。
+ 也可以设置在方法退出时，断点也被唤醒

![IDEA 操作截图 140](images/idea-140.png)

+ **在多态的场景下，在父类或接口的方法上打断点，会自动调入到子类或实现类的方法**

![IDEA 操作截图 141](images/idea-141.png)

#### 9.3.3字段断点
+ 在类的属性声明上打断点，默认对属性的修改操作进行监控

![IDEA 操作截图 142](images/idea-142.png)

![IDEA 操作截图 143](images/idea-143.png)

![IDEA 操作截图 144](images/idea-144.png)

#### 9.3.4条件断点

![IDEA 操作截图 145](images/idea-145.png)

针对上述代码，在满足arr[i] % 3 == 0的条件下，执行断点。  

![IDEA 操作截图 146](images/idea-146.png)

#### 9.3.5异常断点
+ 对异常进行跟踪。如果程序出现指定异常，程序就会执行断点，自动停住。

![IDEA 操作截图 147](images/idea-147.png)

通过下图的方式，对指定的异常进行监控：

![IDEA 操作截图 148](images/idea-148.png)

#### 9.3.6线程调试

![IDEA 操作截图 149](images/idea-149.png)

![IDEA 操作截图 150](images/idea-150.png)

#### 9.3.7强制结束

![IDEA 操作截图 151](images/idea-151.png)

![IDEA 操作截图 152](images/idea-152.png)

#### 9.3.8断点回退
1、断点进入test()后，使用 Drop Frame 回退，可以重新回退到执行方法的行。

![IDEA 操作截图 153](images/idea-153.png)

![IDEA 操作截图 154](images/idea-154.png)

#### 9.3.9表达式执行
可以根据现有变量进行表达式修改,使用场景：

> 断点查看某种特定情况或者变量时....
>

![IDEA 操作截图 155](images/idea-155.png)

### 9.4自定义调试数据视图

![IDEA 操作截图 156](images/idea-156.png)

设置如下：

![IDEA 操作截图 157](images/idea-157.png)

![IDEA 操作截图 158](images/idea-158.png)

### 9.5常见问题
问题：使用Step Into时，会出现无法进入源码的情况。如何解决？

方案1：使用 force step into 即可

方案2：点击Setting -> Build,Execution,Deployment -> Debugger ->Stepping

把Do not step into the classess中的 java.* 、 javax.* 取消勾选即可。

![IDEA 操作截图 159](images/idea-159.png)

小结：

> 经验：初学者对于在哪里加断点，缺乏经验，这也是调试程序最麻烦的地方，需要一定的经验。
>
> 简单来说，在可能发生错误的代码的前面加断点。如果不会判断，就在程序执行的起点处加断点。
>

## 10.创建不同类型的工程
### 10.1创建Java工程
在工程上，右键- New - Module，如下：

![IDEA 操作截图 160](images/idea-160.png)

指明Java工程的名称及使用的JDK版本：

![IDEA 操作截图 161](images/idea-161.png)

创建包：

![IDEA 操作截图 162](images/idea-162.png)

  
提供包名：

![IDEA 操作截图 163](images/idea-163.png)

在包下创建类，即可：

![IDEA 操作截图 164](images/idea-164.png)

提供类名：

![IDEA 操作截图 165](images/idea-165.png)

测试代码：  

![IDEA 操作截图 166](images/idea-166.png)

点击运行即可：

![IDEA 操作截图 167](images/idea-167.png)

### 10.2创建Java Web工程
#### 10.2.1IDEA中配置Tomcat
**在IDEA中配置Tomcat之前，需要保证已经安装并配置了Tomcat的环境变量。如果没有安装并配置，可以  
**参考《 尚硅谷宋红康Tomcat8.5快速部署.docx》配置完成以后，在命令行输入：catalinarun 。能够启动tomcat，则证明安装配置成功。**

下面看如何在IDEA中配置：

![IDEA 操作截图 168](images/idea-168.png)

配置Tomcat Server的位置：

![IDEA 操作截图 169](images/idea-169.png)

这里配置Tomcat的名称以及配置应用服务器的位置。根据自己Tomcat的安装位置决定。

![IDEA 操作截图 170](images/idea-170.png)

配置好后，如下图所示：  

![IDEA 操作截图 171](images/idea-171.png)

#### 10.2.2创建Web工程

![IDEA 操作截图 172](images/idea-172.png)

选择New Module，指明当前工程的名称：

![IDEA 操作截图 173](images/idea-173.png)

选中当前创建的工程，添加框架支持：

![IDEA 操作截图 174](images/idea-174.png)

选择：Web Application，选择Create web.xml，如下：

![IDEA 操作截图 175](images/idea-175.png)

  
#### 10.2.3配置web工程并运行

![IDEA 操作截图 176](images/idea-176.png)

![IDEA 操作截图 177](images/idea-177.png)

  
部署当前的web项目：

![IDEA 操作截图 178](images/idea-178.png)

选择第2项：

![IDEA 操作截图 179](images/idea-179.png)

可以修改Application context，如下：

![IDEA 操作截图 180](images/idea-180.png)

配置当前web工程的详细信息，如下：

![IDEA 操作截图 181](images/idea-181.png)

配置好后，可以直接运行：

![IDEA 操作截图 182](images/idea-182.png)

#### 10.2.4乱码的解决
如果Tomcat日志出现乱码，需要配置：

![IDEA 操作截图 183](images/idea-183.png)

解决方案：

1) 点击Help => Edit custom VM Options，在最后面添加

> -Dfile.encoding=UTF-8
>

2) 在当前Tomcat实例中配置 VM option，添加

> -Dfile.encoding=UTF-8
>

在第二步的Startup/Connection页签的Run和Debug添加一个key为JAVA_TOOL_OPTIONS ， value为" -Dfile.encoding=UTF-8 "的环境变量

3) 保存后重启IDEA，可以发现控制台中文乱码显示正常了。

### 10.3创建MavenJava工程
#### 10.3.1Maven的介绍

![IDEA 操作截图 184](images/idea-184.png)

Maven是一款自动化构建工具，专注服务于Java平台的 项目构建和依赖管理。在JavaEE开发的历史上构建工具的发展也经历了一系列的演化和变迁：

> Make→Ant→Maven→Gradle→其他......
>

构建环节：

![IDEA 操作截图 185](images/idea-185.png)

> ①清理：删除以前的编译结果，为重新编译做好准备。
>
> ②编译：将Java源程序编译为字节码文件。
>
> ③测试：运行单元测试用例程序，确保项目在迭代开发过程中关键点的正确性。
>
> ④报告：测试程序的结果。
>
> ⑤打包：将java项目打成jar包；将Web项目打成war包。
>
> ⑥安装：将jar包或war包安装到本地仓库中。
>
> ⑦部署：将jar或war从Maven仓库中部署到Web服务器上运行。
>

#### 10.3.2Maven的配置
maven的下载 -- 解压 --环境变量的配置这里就不赘述了，需要的参考03-资料\05-Maven的配置中的《 尚硅谷_Maven的配置_V2.0.docx》。下面直接整合Maven。选择自己Maven的目录，和settings文件，然后配置自己的仓库reposiroty。

![IDEA 操作截图 186](images/idea-186.png)

#### 10.3.3MavenJava工程的创建

![IDEA 操作截图 187](images/idea-187.png)

指明当前maven工程的名称、模板等信息。这里要求一个项目组的jdk版本必须一致。

通过坐标，就可以定位仓库中具体的jar包。如下：

![IDEA 操作截图 188](images/idea-188.png)

新创建的maven 的java工程缺少相应的resources文件目录，需要创建如下：

![IDEA 操作截图 189](images/idea-189.png)

![IDEA 操作截图 190](images/idea-190.png)

指明main下resources的文件目录类型：

![IDEA 操作截图 191](images/idea-191.png)

类似的操作test目录下，提供resources即可。

这里说明Maven的java工程的目录结构：

> 工程名 
>
> src
>
> ----main
>
> --------java
>
> --------resources 
>
> ----test
>
> --------java
>
> --------resources 
>
> pom.xml
>

+ main目录用于存放主程序。 
+ test目录用于存放测试程序。
+ java目录用于存放源代码文件。 
+ resources目录用于存放配置文件和资源文件。

#### 10.3.4编写代码及测试
**第1步：创建Maven的核心配置文件pom.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
  http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.atguigu.maven</groupId>
  <artifactId>maven-01</artifactId>
  <version>1.0-SNAPSHOT</version>
  <dependencies> <dependency>
    <groupId>junit</groupId> <artifactId>junit</artifactId>
    <version>4.12</version> <scope>test</scope>
  </dependency>
    <dependency> <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
      <version>8.0.18</version>
    </dependency>
  </dependencies>
</project>
```

**第2步：编写主程序代码**

在src/main/java/com/atguigu/java目录下新建文件HelloMaven.java

```java
package com.atguigu.java;
/**
* ClassName: HelloMaven
* Package: com.atguigu.java * Description:
*
* @Author: 尚硅谷-宋红康
* @Create: 2022/10/20 18:20 * @Version 1.0 
*/
public class HelloMaven {
    public String sayHello(String message) { return "Hello, " +
                                            message + "!";
                                           } }
```

**第3步：编写测试代码**

在/src/test/java/com/atguigu/java目录下新建测试文件HelloMavenTest.java

![IDEA 操作截图 192](images/idea-192.png)

**第4步：运行几个基本的Maven命令**

![IDEA 操作截图 193](images/idea-193.png)

目录下也会有对应的生命周期。其中常用的是：clean、compile、package、install。

比如这里install，如果其他项目需要将这里的模块作为依赖使用，那就可以install。安装到本地仓库的位置。

![IDEA 操作截图 194](images/idea-194.png)

### 10.4创建MavenWeb工程
#### 10.4.1创建Maven的Web工程步骤

![IDEA 操作截图 195](images/idea-195.png)

指明Maven的web工程的名称和模板。如下：

![IDEA 操作截图 196](images/idea-196.png)

在Tomcat上进行部署：

![IDEA 操作截图 197](images/idea-197.png)

配置部署的详细信息：

![IDEA 操作截图 198](images/idea-198.png)

#### 10.4.2开发jsp依赖jar包
**1、找不到HttpServlet错误**

如果看到JSP报错： The superclass "javax.servlet.http.HttpServlet" was not found on the Java Build Path 可以加入如下依赖解决。

```xml
<dependency> 
  <groupId>javax.servlet</groupId>
  <artifactId>servlet-api</artifactId> <version>2.5</version>
  <scope>provided</scope>
</dependency>
```

**2、EL表达式没有提示问题**

${pageContext}这个EL表达式中通过pageContext对象访问reuqest属性时本身是应该有提示的，但如果没有的话加入下面依赖即可。

```xml
<dependency> 
<groupId>javax.servlet.jsp</groupId>
<artifactId>jsp-api</artifactId> <version>2.1.3-b06</version>
<scope>provided</scope>
</dependency>
```

同时，针对index.jsp文件，修改一下文件头信息为：

```xml
<%@page language="java" pageEncoding="utf-8"  contentType="text/html;UTF-8" %>
```

## 11.关联数据库
### 11.1关联方式
找到数据库选项：

![IDEA 操作截图 199](images/idea-199.png)

添加指定数据库：

![IDEA 操作截图 200](images/idea-200.png)

配置MySQL数据库的详细信息：

![IDEA 操作截图 201](images/idea-201.png)

表面上很多人认为配置 Database 就是为了有一个 GUI管理数据库功能，但是这并不是 IntelliJ IDEA 的 Database最重要特性。数据库的 GUI 工具有很多，IntelliJ IDEA 的 Database也没有太明显的优势。

IntelliJ IDEA 的 Database 最大特性就是对于 Java Web 项目来讲，常使用的ORM 框架，如 Hibernate、 Mybatis 有很好的支持，比如配置好了 Database之后，IntelliJ IDEA 会自动识别 domain 对象与数据表的 关系，也可以通过Database 的数据表直接生成 domain 对象等。

### 11.2常用操作

![IDEA 操作截图 202](images/idea-202.png)

>  图标1：同步当前的数据库连接。这个是最重要的操作。配置好连接以后或通过其他工具操作 
>
> 数据库以后，需要及时同步 
>
> 图标2：配置当前的连接 
>
> 图标3：断开当前的连接 
>
> 图标4：显示相应数据库对象的数据 
>
> 图标5：编辑修改当前数据库对象  
>

展示ER图：

![IDEA 操作截图 203](images/idea-203.png)

可以导出文件：

![IDEA 操作截图 204](images/idea-204.png)

  
  
  

## 12.IDEA常用插件
#### 推荐1：AlibabaJavaCodingGuidelines

![IDEA 操作截图 205](images/idea-205.png)

阿里巴巴Java编码规范检查插件，检测代码是否存在问题，以及是否符合规范。

使用：在类中，右键，选择编码规约扫描，在下方显示扫描规约和提示。根据提示规范代码，提高代码质量。

#### 推荐2：jclasslibbytecodeviewer

![IDEA 操作截图 206](images/idea-206.png)

可视化的字节码查看器。

使用：

1. 在IDEA 打开想研究的类。
2. 编译该类或者直接编译整个项目（如果想研究的类在jar包中，此步可略过）。 
3. 打开"view" 菜单，选择"Show Bytecode With jclasslib" 选项。
4.  选择上述菜单项后IDEA 中会弹出jclasslib 工具窗口。

![IDEA 操作截图 207](images/idea-207.png)

英文设置：

在 Help -> Edit Custom VM Options ...，加上

```xml
-Duser.language=en
```

#### 推荐3：Translation

![IDEA 操作截图 208](images/idea-208.png)

注册翻译服务（有道智云、百度翻译开放平台、阿里云机器翻译）帐号，开通翻译服务并获取其应用ID和密钥 绑定应用ID和密钥：偏好设置（设置） > 工具 > 翻译 > 常规 >翻译引擎 > 配置...

使用：鼠标选中文本，点击右键即可自动翻译成多国语言。

注：请注意保管好你的应用密钥，防止其泄露。

#### 推荐4：GenerateAllSetter

![IDEA 操作截图 209](images/idea-209.png)

实际开发中还有一个非常常见的场景： 我们创建一个对象后，想依次调用 Setter函数对属性赋值，如果 属性较多很容易遗漏或者重复。

![IDEA 操作截图 210](images/idea-210.png)

可以使用这 GenerateAllSetter 提供的功能，快速生成对象的所有 Setter函数（可填充默认值），然后自 己再跟进实际需求设置属性值。

#### 插件5：RainbowBrackets

![IDEA 操作截图 211](images/idea-211.png)

给括号添加彩虹色，使开发者通过颜色区分括号嵌套层级，便于阅读

![IDEA 操作截图 212](images/idea-212.png)

#### 推荐6：CodeGlancePro

![IDEA 操作截图 213](images/idea-213.png)

在编辑器右侧生成代码小地图，可以拖拽小地图光标快速定位代码，阅读行数很多的代码文件时非常实用。  

![IDEA 操作截图 214](images/idea-214.png)

#### 推荐7：Statistic

![IDEA 操作截图 215](images/idea-215.png)

代码统计工具。

![IDEA 操作截图 216](images/idea-216.png)

![IDEA 操作截图 217](images/idea-217.png)

#### 推荐8：PresentationAssistant

![IDEA 操作截图 218](images/idea-218.png)

显示快捷键操作的按键

#### 推荐9：KeyPromoterX

![IDEA 操作截图 219](images/idea-219.png)

快捷键提示插件。当你执行鼠标操作时，如果该操作可被快捷键代替，会给出提示，帮助你自然形成使  
用快捷键的习惯，告别死记硬背。

#### 推荐10：JavaDoc

![IDEA 操作截图 220](images/idea-220.png)

按 alt+insert ，执行操作：

![IDEA 操作截图 221](images/idea-221.png)

  
#### 推荐11：LeetCodeEditor

![IDEA 操作截图 222](images/idea-222.png)

![IDEA 操作截图 223](images/idea-223.png)

在 IDEA 里刷力扣算法题

#### 推荐12：GsonFormatPlus

![IDEA 操作截图 224](images/idea-224.png)

根据 json 生成对象。

使用：使用alt + s 或 alt + insert调取。

![IDEA 操作截图 225](images/idea-225.png)

举例：

```json
{
  "name": "tom", "age": "18", "gender": "man", "hometown":
  {
    "province": "河北省", "city": "石家庄市", "county":
    "正定县"
  } }
```

#### 插件13：MaterialThemeUI

![IDEA 操作截图 226](images/idea-226.png)

对于很多人而言，写代码时略显枯燥的，如果能够安装自己喜欢的主题将为开发工作带来些许乐趣。

IDEA 支持各种主题插件，其中最出名的当属 Material Theme UI。

![IDEA 操作截图 227](images/idea-227.png)

安装后，可以从该插件内置的各种风格个选择自己最喜欢的一种。

## 13.常用快捷键
```java
1.快速删除某一行  ctrl + y
2.IDEA查看函数的调用和被调用关系 ctrl + alt + h
3.返回上一步 ctrl + alt + ←（左右的左）
设置方式：搜索设置-keymap-back-修改设置
```

### IDEA如何查看类的层次关系(diagms/hierarchy/structure)
#### 一、diagram图的方式表示类的关系
调出diagram图：（快捷键Ctrl+alt+shift+U）

![IDEA 操作截图 228](images/idea-228.png)

上方的类被下方的类所继承或实现：  
（带箭头的实线表示继承extends，带箭头的虚线表示实现implements）

![IDEA 操作截图 229](images/idea-229.png)

  

![IDEA 操作截图 230](images/idea-230.png)

#### 二、hierarchy图表示类的关系
调出CrudRepository接口的hierarchy图:(快捷键Ctrl+H)

![IDEA 操作截图 231](images/idea-231.png)

下方的类是上方类的子类或实现类：

![IDEA 操作截图 232](images/idea-232.png)

#### 三、structure查看类或接口有哪些方法
调出UserRepository的structure：（快捷键Ctrl+F12）

![IDEA 操作截图 233](images/idea-233.png)

红框中列举该接口中所有的方法，绿框里的箭头指向方法的来源，比如第一个count()方法就是从CrudRepository接口中获得的，因为我们UserRepository接口继承了CrudRepository接口：

![IDEA 操作截图 234](images/idea-234.png)

原文地址：[https://segmentfault.com/a/1190000038327131?sort=votes](https://segmentfault.com/a/1190000038327131?sort=votes)

## 14.IDEA常用功能
### 1.远程debug
步骤：

1.首先点击idea上面的这个编辑配置的按钮

![IDEA 操作截图 235](images/idea-235.png)

2.然后添加一个远程Jvm debug的一个配置，然后启动这个配置，在本地debug就行了。

![IDEA 操作截图 236](images/idea-236.png)
