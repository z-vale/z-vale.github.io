# 写文章与发布

## 1. 创建文章

在 PowerShell 中进入博客目录，使用简短英文路径（例如 `git-notes`）：

```powershell
cd D:\develop\workspace\my-blog
.\scripts\hugo.ps1 new content posts/git-notes/index.md
```

编辑 `content/posts/git-notes/index.md`。文件顶部 `+++` 之间是文章信息：

```toml
+++
title = 'Git 学习笔记'
date = 2026-11-05T18:00:00+08:00
draft = true
description = '整理日常使用 Git 的常见操作。'
summary = '提交、分支与撤销操作的简要笔记。'
tags = ['Git', '工具']
categories = ['技术实践']
+++
```

新建时会自动填写当前时间；上面的日期只是格式示例。`title` 是中文标题，文件夹名决定文章网址。发布后尽量保持文件夹名不变，避免旧链接失效。

## 2. 写正文、放图片

在第二个 `+++` 下面写 Markdown。正文从 `## 二级标题` 开始，网站会自动生成目录。

```markdown
## 遇到的问题

这里写内容，**加粗重点**，也可以放 [链接](https://example.com)。

## 解决过程

- 第一步
- 第二步

![图片说明](example.png)
```

配图放在文章同一文件夹，使用英文文件名，例如 `content/posts/git-notes/example.png`。这篇文章和图片可以一起移动或备份。

## 3. 预览并发布

```powershell
.\scripts\hugo.ps1 server -D
```

打开 http://localhost:1313/ 检查标题、图片、目录和手机窄屏排版；按 `Ctrl+C` 停止。

准备发布时，将文章顶部改为 `draft = false`，确认日期不在未来，再执行：

```powershell
.\scripts\hugo.ps1 --gc --minify
git status
git add content
git commit -m "Publish Git notes"
git push
```

如果还修改了配置或样式，把对应路径一起 `git add`。提交前查看 `git status` 和 `git diff --cached`，确认只包含准备公开的文件。

到 GitHub 仓库的 **Actions → Deploy blog** 查看结果。构建和部署成功后访问 https://z-vale.github.io/ ，必要时刷新浏览器缓存。

## 修改、撤下与草稿

- 修改旧文章：直接编辑原来的 `index.md`，不要另建副本，也不要修改生成的 HTML。更新流程见下方示例。
- 撤下文章：设为 `draft = true`，提交并推送；已发布内容可能仍被外部缓存。
- 草稿：`draft = true`，仅在带 `-D` 的本地预览中展示。公开仓库中的草稿源码仍对外可见，私密内容不要提交。
- 未来日期：正式构建会跳过。当前工作流只在推送或手动运行时部署，到了日期不会自动上线，需要再次触发部署。

### 已发布文章再次修改

例如修改 IDEA 文章：

1. 编辑 `content/posts/idea-use/index.md`；新增或替换配图时，同步修改 `images/` 和正文中的图片路径。
2. 保持文件夹名不变，文章网址就保持不变。`date` 保留首次发布日期；需要记录更新时间时可添加 `lastmod`。
3. 本地预览确认，然后构建检查并上传：

   ```powershell
   .\scripts\hugo.ps1 server -D --port 1314
   # 预览后按 Ctrl+C 停止，再执行：
   .\scripts\hugo.ps1 --gc --minify
   python scripts/check_site.py public
   git status
   git add content/posts/idea-use
   git diff --cached
   git commit -m "Update IDEA notes"
   git push
   ```

4. 等待 GitHub Actions 中的构建和部署成功，刷新原文章网址即可。保存文件、提交、推送是不同步骤；只有在本地保存不会更新线上文章。

如果替换图片后仍显示旧图，可刷新缓存，或给新图片换文件名并更新引用。

## 为当前文章填写分类和标签

编辑这篇文章自己的 `content/posts/<英文短名>/index.md`，在文件最顶部两行 `+++` **之间**填写 `categories` 和 `tags`，不要放在第二个 `+++` 后的正文中。

例如 IDEA 文章的配置位置是 `content/posts/idea-use/index.md`，写法如下（日期等信息按文章实际情况填写）：

```toml
+++
title = 'Java开发利器：IDEA的安装与使用'
date = 2026-11-06T00:00:00+08:00
draft = false
categories = ['技术实践']
tags = ['Java', 'IDEA', '开发工具']
+++

## 正文从这里开始
```

- **分类 `categories`**：文章所属的大类，建议每篇选一个，例如“技术实践”或“生活记录”。支持多个时写成 `categories = ['技术实践', '学习笔记']`，文章会同时出现在这两个分类中。
- **标签 `tags`**：文章涉及的具体主题，可填多个，例如“Java”“IDEA”“开发工具”。每个名称加引号，用英文逗号分隔。
- 已有字段就修改原来的那一行，不要重复添加同名字段。沿用已有名称，避免把“Java”和“java”等大小写变体混用；需要清空时写 `categories = []` 或 `tags = []`。
- 新名称直接写入文章即可，无需另外创建分类、标签目录或修改导航。没有任何已发布文章使用的分类、标签，会从正式网页中消失。
- 文件夹只用于存放文章和图片，不会自动成为分类；正文中的 `#标题`、`#Java` 也不会自动成为分类或标签。

顶部导航保留“分类、标签、关于”，点击左上角“Vale Notes”返回首页。分类页和标签页默认显示第一个分类或标签的文章；进入任意一项后，全部同类入口仍会保留，下方标题显示当前选择，可直接切换，不设“全部文章”入口。

保存后可用 `.\scripts\hugo.ps1 server -D` 本地预览；正式发布需确认 `draft = false`、日期不在未来，再按前面的流程自行提交并推送。仅保存文件不会更新线上页面。

## 导入旧文档

建议每篇文章采用 `content/posts/<英文短名>/index.md`，图片放在同目录或 `images/` 子目录，以 `![说明](images/example.png)` 引用；网站会按原比例显示图片，点击可放大。

语雀等平台导出的文档需先整理：补齐文章信息、下载外链图片、清理 OCR 注释和不兼容的 `{width=…}` 标记。正文尽量使用标准 Markdown，避免依赖 `<font>` 颜色；原始文件可自行保留在项目外。IDEA 示例的图片来源记录在其文件夹中的 `image-sources.json`。

小标题必须单独占一行，例如 `### 5.10 修改类头的文档注释信息`。不要把标题文字接在图片语法后面，也不要留下只有 `###` 的空标题。右侧目录显示二至四级标题（`##`、`###`、`####`）。

文章目录使用 Blowfish 默认字号和外观。页面顶部进度条显示阅读进度；正文滚动时，目录自动高亮当前小节、展开所在分支，收起其他分支。长目录仍保留独立滚动条，但当前条目会自动滚入可见范围，不需要跟着正文反复拖动目录；也可手动滚动目录查找其他章节。点击条目可定位正文，移动端可展开或收起整个目录。

网站名、个人介绍和导航的修改位置见 [README](../README.md)。
