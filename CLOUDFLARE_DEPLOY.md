# Cloudflare Pages 部署指南

本文档提供了将AI图像生成器项目部署到Cloudflare Pages的详细指南。

## 前提条件

1. 一个Cloudflare账户
2. 一个包含项目代码的Git仓库（GitHub、GitLab或Bitbucket）
3. 已完成项目配置，确保适用于静态部署

## 部署步骤

### 1. 准备您的代码

确保您的代码已经推送到Git仓库。如果还没有，请执行以下步骤：

```bash
# 初始化Git仓库（如果尚未初始化）
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 添加远程仓库
git remote add origin https://github.com/yourusername/your-repo.git

# 推送到主分支
git push -u origin main
```

### 2. 登录Cloudflare

- 访问[Cloudflare Dashboard](https://dash.cloudflare.com/)
- 使用您的凭据登录

### 3. 创建新的Pages项目

1. 在侧边栏菜单中，点击"Pages"
2. 点击"创建应用程序"按钮
3. 选择"连接到Git"

### 4. 连接您的Git仓库

1. 选择您的Git提供商（GitHub、GitLab或Bitbucket）
2. 授权Cloudflare访问您的仓库
3. 选择包含AI图像生成器项目的仓库

### 5. 配置您的构建设置

使用以下设置：

- **项目名称**: ai-image-generator（或您喜欢的名称）
- **生产分支**: main（或您的主分支名称）
- **构建命令**: `npm run build`
- **构建输出目录**: `out`
- **根目录**: (留空)

### 6. 添加环境变量

在"环境变量"部分，添加以下变量：

- `NODE_VERSION`: 16
- `NEXT_PUBLIC_API_URL`: 您的API URL（例如Cloudflare Worker API）

### 7. 部署

点击"保存并部署"按钮。Cloudflare将开始构建和部署您的网站。这可能需要几分钟时间。

### 8. 使用自定义域（可选）

部署完成后，您可以为您的应用程序添加自定义域：

1. 在项目页面上，点击"自定义域"选项卡
2. 点击"设置自定义域"
3. 输入您想要使用的域名
4. 按照页面上的DNS配置说明进行操作

## 故障排除

### 构建失败

如果构建失败，检查以下事项：

1. **依赖问题**: 确保package.json中列出了所有必要的依赖
2. **Node.js版本**: 尝试更改NODE_VERSION环境变量
3. **构建命令**: 确保您的构建命令是正确的
4. **构建日志**: 检查构建日志以获取具体错误信息

### 路由问题

如果部署后遇到404错误或路由问题：

1. 确保_redirects文件存在且配置正确
2. 检查next.config.js中的配置，确保已正确设置`output: 'export'`

### API连接问题

如果您的应用无法连接到API：

1. 确保Content-Security-Policy头正确配置
2. 验证API端点是否可访问
3. 检查前端代码中的API URL是否正确

## 后续步骤

1. **设置Cloudflare Workers**: 如果您需要服务器功能，请创建Cloudflare Workers来处理API请求
2. **配置Cloudflare Functions**: 考虑使用Pages Functions处理简单的API需求
3. **监控**: 使用Cloudflare分析工具监控您的应用性能

---

如有任何问题，请参考[Cloudflare Pages文档](https://developers.cloudflare.com/pages/)或联系Cloudflare支持。 