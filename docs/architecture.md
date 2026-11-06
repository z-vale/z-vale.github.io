# 架构与编辑发布速查

## 为什么 Markdown 会显示成 HTML

`index.md` 是你编辑的文章源文件。Hugo 读取 Markdown，套用页面模板和样式，生成浏览器展示的 HTML。源文件仍然保留，不会被 HTML 替换。

例如 `content/posts/idea-use/index.md` 默认生成 `public/posts/idea-use/index.html`，公开地址是 `https://z-vale.github.io/posts/idea-use/`。浏览器省略了地址末尾的 `index.html`。

## 各部分的作用

| 部分 | 负责什么 | 本项目的位置 |
| --- | --- | --- |
| Markdown | 文章内容、标题、列表、代码和图片引用 | `content/posts/` |
| 本地图片 | 随文章保存和发布的配图 | 每篇文章的 `images/` 文件夹 |
| Hugo | 把文章、图片和模板生成完整静态网站，也提供本地预览 | 版本见 `.hugo-version`，入口是 `scripts/hugo.ps1` |
| Blowfish 主题 | 首页、文章页、分类页、样式和常用交互 | `themes/blowfish/`，设置在 `config/_default/params.toml` |
| 局部模板覆盖 | 分类切换和自定义图标，使用主题现有样式 | `layouts/partials/`、`layouts/categories/` |
| Git / GitHub 仓库 | 记录修改历史，保存上传的源码 | `z-vale/z-vale.github.io` |
| GitHub Actions | 推送后自动运行 Hugo，再部署生成结果 | `.github/workflows/hugo.yaml` |
| GitHub Pages | 托管生成的网页，提供公开访问地址 | `https://z-vale.github.io/` |

当前使用 Blowfish 提供页面模板、样式、目录和常用交互，项目内仅保留分类切换等少量模板调整，没有自定义 CSS 或目录脚本。Hugo 负责网站生成。网站不需要数据库，读者访问时直接读取已生成的文件。

## 整体流程

```text
Markdown + 本地图片 + Blowfish 主题 + 分类模板
                    ↓ Hugo 构建
             HTML + 图片 + CSS/JS
                    ↓ GitHub Pages
                浏览器展示
```

搜索使用构建时生成的 `index.json`，在浏览器内查找，不需要搜索服务器。

## 编辑与发布

1. **编辑源码**：修改 `content/posts/<短名>/index.md`，把配图放入旁边的 `images/`。不要编辑生成的 HTML。
2. **设置文章信息**：顶部 `+++` 之间填写标题、日期、`draft`、分类和标签；这部分是 TOML 格式，不属于正文。
3. **本地预览**：在项目目录运行以下命令，打开 http://localhost:1314/；修改文件后会自动更新，按 `Ctrl+C` 停止。

   ```powershell
   .\scripts\hugo.ps1 server -D --port 1314
   ```

4. **准备发布**：设置 `draft = false`，确认日期不在未来，运行构建检查。

   ```powershell
   .\scripts\hugo.ps1 --gc --minify
   ```

5. **上传源码**：查看改动后，只提交本次准备发布的文件。下面示例发布 IDEA 文章及其图片。

   ```powershell
   git status
   git add content/posts/idea-use
   git diff --cached
   git commit -m "Update IDEA notes"
   git push
   ```

6. **确认上线**：GitHub 仓库 → Actions → Deploy blog，等待构建和部署都成功，再检查公开网站。本地保存、本地预览、提交和推送是不同步骤；只有本地修改不会更新公开网站。

`public/` 是默认构建输出，`.local/` 保存本地工具和检查结果；两者都不上传源码仓库。`-D` 只用于预览草稿，正式工作流不会发布草稿。分类取自文章的 `categories` 字段，标签取自 `tags`，不是仅凭文件夹名自动生成。

详细操作见 [写文章与发布](writing.md)；环境恢复与故障处理见 [搭建与维护](deployment.md)。

## 官方说明

- [Hugo：静态网站生成器](https://gohugo.io/about/introduction/)
- [GitHub Pages：静态网站托管](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
