# 搭建、部署与维护

## 方案

Markdown 文章 → Hugo 生成网页 → GitHub Actions 构建 → GitHub Pages 托管。

使用公开仓库 `z-vale/z-vale.github.io`，默认地址为 https://z-vale.github.io/ 。无需自行维护服务器或数据库；独立域名以后可以绑定。

Hugo 版本由 `.hugo-version` 固定；本地 `scripts/hugo.ps1` 和云端工作流共用它。当前为 Extended 0.167.0。页面模板位于 `layouts/`，样式和交互位于 `assets/`，不依赖第三方主题。

## 换电脑恢复

先安装 Git，然后在 PowerShell 中执行：

```powershell
cd D:\develop\workspace
git clone https://github.com/z-vale/z-vale.github.io.git my-blog
cd my-blog
.\scripts\hugo.ps1 server -D
```

首次运行下载 Hugo 并验证 SHA-256，保存到不上传的 `.local/` 文件夹。

若 Windows 提示下载的脚本被阻止，确认来源后可执行 `Unblock-File .\scripts\hugo.ps1`；不要为此修改整台电脑的脚本执行策略。公司策略禁止运行脚本时，使用符合 `.hugo-version` 的官方 Hugo Extended 程序执行文档中的 Hugo 参数。

## GitHub 发布配置

- 仓库 → Settings → Pages → Source：**GitHub Actions**。
- 工作流：`.github/workflows/hugo.yaml`。
- 触发：推送到 `main`，或 Actions → Deploy blog → Run workflow 手动触发。
- 成功标志：构建和部署均为绿色，Pages 页面显示网站地址。

工作流会获取源码，安装并校验固定版本的 Hugo，然后构建正式网页。`public/` 是生成结果，不提交到源码仓库。推送前先运行 `.\scripts\hugo.ps1 --gc --minify`，确认没有错误。

## 常见情况

| 情况 | 处理 |
| --- | --- |
| 本地能看见，线上没有文章 | 检查 `draft = false`，日期不要晚于当前时间，然后确认 Actions 成功 |
| 下载或上传失败 | 检查 GitHub 网络连接和登录状态，重试原操作 |
| Pages 配置或权限报错 | 检查 Source 为 GitHub Actions，查看失败步骤日志后重新运行 |
| 本地预览端口占用 | 执行 `.\scripts\hugo.ps1 server -D --port 1314` |

当前电脑的 Git 已在本仓库内接入系统现有代理；配置不随源码上传。如果以后停用代理，可执行 `git config --local --unset http.proxy`，恢复 Git 默认连接方式。

## 外观维护、回退与域名

修改外观时，编辑 `layouts/`、`assets/css/site.css` 和 `assets/js/site.js`，先本地预览，再构建并推送。需要升级 Hugo 时修改 `.hugo-version` 并检查页面。

回退已发布内容时，用 `git revert <有问题的提交号>` 创建撤销提交，再 `git push`；保留历史，不使用强制推送。

绑定独立域名时，先按 GitHub 文档验证域名并在 Pages 中填写，再设置 DNS、启用 HTTPS，同时更新 `config/_default/hugo.toml` 中的 `baseURL`。域名续费由注册商管理。

## 参考

- [Hugo 部署到 GitHub Pages](https://gohugo.io/host-and-deploy/deploy-to-github-pages/)
- [Hugo 文章与图片组织](https://gohugo.io/content-management/page-bundles/)
- [GitHub 自定义域名](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
