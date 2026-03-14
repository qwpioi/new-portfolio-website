// 个人信息类型
export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  location?: string;
  socialLinks: SocialLink[];
  profileImage?: string;
}

// 项目类型
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

// 技能类型
export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tool' | 'other';
  level: number; // 1-10 scale
  icon?: string;
}

// 社交链接类型
export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'dribbble' | 'behance';
  url: string;
  label: string;
}

// 导航项类型
export interface NavItem {
  name: string;
  href: string;
}