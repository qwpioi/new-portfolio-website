import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "1",
    title: "电商平台前端",
    description: "使用React和TypeScript构建的现代化电商平台前端界面",
    longDescription: "这是一个完整的电商平台前端项目，实现了商品浏览、购物车、订单管理等功能。采用了现代化的UI设计，响应式布局，以及良好的用户体验。",
    tags: ["React", "TypeScript", "Redux", "Tailwind CSS"],
    githubUrl: "https://github.com/your-username/ecommerce-frontend",
    demoUrl: "https://ecommerce-demo.example.com",
    imageUrl: "/images/ecommerce.jpg",
    featured: true
  },
  {
    id: "2",
    title: "任务管理系统",
    description: "基于React和Node.js的任务管理和团队协作工具",
    longDescription: "全栈任务管理系统，包含用户认证、任务分配、进度跟踪、团队协作等功能。使用了现代Web技术栈，提供了流畅的用户体验。",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/your-username/task-manager",
    demoUrl: "https://task-manager.example.com",
    imageUrl: "/images/task-manager.jpg",
    featured: true
  },
  {
    id: "3",
    title: "数据分析仪表板",
    description: "用于可视化展示数据的交互式仪表板应用",
    longDescription: "数据可视化仪表板，支持多种图表类型，实时数据更新，以及自定义报告功能。使用了D3.js和React进行开发。",
    tags: ["React", "D3.js", "Chart.js", "TypeScript"],
    githubUrl: "https://github.com/your-username/dashboard",
    demoUrl: "https://dashboard.example.com",
    imageUrl: "/images/dashboard.jpg"
  },
  {
    id: "4",
    title: "移动应用原型",
    description: "使用React Native开发的移动应用原型",
    longDescription: "移动应用原型，展示了完整的用户流程和交互设计。使用React Native实现了跨平台兼容性。",
    tags: ["React Native", "TypeScript", "Redux"],
    githubUrl: "https://github.com/your-username/mobile-app",
    imageUrl: "/images/mobile-app.jpg"
  }
];