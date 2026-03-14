# 个人作品集网站

这是一个现代化的个人作品集网站，用于展示我的技能、项目和联系信息。

## 技术栈

- **前端框架**: React + TypeScript
- **样式**: Tailwind CSS
- **构建工具**: Vite
- **部署**: Vercel / Netlify

## 功能特性

- 响应式设计，支持移动端
- 现代化的UI设计
- 技能可视化展示
- 项目作品展示
- 联系表单
- 社交媒体集成

## 项目结构

```
portfolio-website/
├── public/                 # 静态资源
├── src/                    # 源代码
│   ├── assets/             # 图片、字体等静态资源
│   ├── components/         # 可复用组件
│   │   ├── layout/         # 布局组件
│   │   └── sections/       # 页面区域组件
│   ├── data/               # 静态数据
│   ├── styles/             # 样式文件
│   ├── types/              # TypeScript类型定义
│   ├── App.tsx             # 主应用组件
│   └── main.tsx            # 应用入口
├── README.md
└── package.json
```

## 安装与运行

1. 克隆项目：

```bash
git clone <repository-url>
cd portfolio-website
```

2. 安装依赖：

```bash
npm install
```

3. 启动开发服务器：

```bash
npm run dev
```

4. 在浏览器中访问 `http://localhost:5173`

## 自定义配置

要自定义此作品集网站，请修改以下文件中的数据：

- `src/data/personalInfo.ts` - 个人信息
- `src/data/skills.ts` - 技能数据
- `src/data/projects.ts` - 项目数据

## 部署

### 部署到 Vercel

1. 登录 [Vercel](https://vercel.com/)
2. 点击 "New Project"
3. 导入您的代码仓库
4. 点击 "Deploy"

### 部署到 Netlify

1. 登录 [Netlify](https://netlify.com/)
2. 点击 "New site from Git"
3. 选择您的代码仓库
4. 点击 "Deploy site"

## 贡献

欢迎提交 Issue 和 Pull Request 来改进此项目。

## 许可证

此项目仅供个人学习和参考使用。