import { Skill } from '../types';

export const skills: Skill[] = [
  {
    id: "1",
    name: "React",
    category: "frontend",
    level: 9
  },
  {
    id: "2",
    name: "TypeScript",
    category: "frontend",
    level: 8
  },
  {
    id: "3",
    name: "JavaScript",
    category: "frontend",
    level: 9
  },
  {
    id: "4",
    name: "HTML/CSS",
    category: "frontend",
    level: 9
  },
  {
    id: "5",
    name: "Tailwind CSS",
    category: "frontend",
    level: 8
  },
  {
    id: "6",
    name: "Node.js",
    category: "backend",
    level: 7
  },
  {
    id: "7",
    name: "Express",
    category: "backend",
    level: 7
  },
  {
    id: "8",
    name: "MongoDB",
    category: "database",
    level: 6
  },
  {
    id: "9",
    name: "PostgreSQL",
    category: "database",
    level: 6
  },
  {
    id: "10",
    name: "Git",
    category: "tool",
    level: 8
  },
  {
    id: "11",
    name: "Webpack",
    category: "tool",
    level: 7
  },
  {
    id: "12",
    name: "Jest",
    category: "tool",
    level: 7
  }
];

export const skillCategories = {
  frontend: "前端技术",
  backend: "后端技术", 
  database: "数据库",
  tool: "开发工具",
  other: "其他"
};