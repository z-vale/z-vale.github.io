# Vale Notes

记录技术实践、学习笔记与生活。

- 网站：https://z-vale.github.io/
- 源码：https://github.com/z-vale/z-vale.github.io
- 本地目录：`D:\develop\workspace\my-blog`
- 方案：Hugo + Blowfish 主题 + GitHub Pages；文章使用 Markdown，推送 `main` 后自动部署。

## 本地预览

在 PowerShell 中执行（需 Git，首次运行需联网下载已校验的 Hugo）：

```powershell
cd D:\develop\workspace\my-blog
.\scripts\hugo.ps1 server -D
```

打开 http://localhost:1313/ ，按 `Ctrl+C` 停止。`-D` 包含草稿；正式部署不包含草稿和未来日期的文章。

## 常用位置

| 内容 | 位置 |
| --- | --- |
| 文章及配图 | `content/posts/<英文短名>/` |
| 关于我 | `content/about/index.md` |
| 网站名、个人介绍 | `config/_default/languages.zh-cn.toml` |
| 导航 | `config/_default/menus.zh-cn.toml` |
| 主题布局、搜索、图片放大等开关 | `config/_default/params.toml` |
| 目录模板的局部覆盖 | `layouts/partials/toc.html` |
| 目录字号与样式 | `assets/css/custom.css` |
| 子目录展开、收起 | `assets/js/toc.js` |

## 操作指南

- [架构与编辑发布速查](docs/architecture.md)
- [搭建、部署与维护](docs/deployment.md)
- [写文章与发布](docs/writing.md)

网站使用 Blowfish 的悬浮导航、居中个人介绍和文章列表布局，参考 XeriChen 博客的简洁风格。主题通过 Git 子模块固定版本，目录使用项目内的小范围扩展，保留 14px 字号与分级折叠。IDEA 文章和 236 张本地配图保存在同一文件夹。
