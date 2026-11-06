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

- 修改旧文章：直接编辑原文件，构建检查后提交并推送。
- 撤下文章：设为 `draft = true`，提交并推送；已发布内容可能仍被外部缓存。
- 草稿：`draft = true`，仅在带 `-D` 的本地预览中展示。公开仓库中的草稿源码仍对外可见，私密内容不要提交。
- 未来日期：正式构建会跳过。当前工作流只在推送或手动运行时部署，到了日期不会自动上线，需要再次触发部署。

网站名、个人介绍和导航的修改位置见 [README](../README.md)。
