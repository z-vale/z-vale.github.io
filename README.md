# Vale Notes

记录技术实践、学习笔记与生活。

- 网站：https://z-vale.github.io/
- 源码：https://github.com/z-vale/z-vale.github.io
- 本地目录：`D:\develop\workspace\my-blog`
- 方案：Hugo Extended + Blowfish + GitHub Pages；文章使用 Markdown，推送 `main` 后自动部署。

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
| 外观、目录、搜索等开关 | `config/_default/params.toml` |

## 操作指南

- [搭建、部署与维护](docs/deployment.md)
- [写文章与发布](docs/writing.md)

主题保留原作者署名；不直接修改 `themes/blowfish`，定制样式放在 `assets/css/custom.css`。
