import { PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: "张伟",
  title: "前端开发工程师",
  bio: "热爱编程，专注于现代Web技术栈，拥有丰富的React和TypeScript开发经验。",
  email: "zhangwei@example.com",
  phone: "+86 138-0000-0000",
  location: "北京",
  profileImage: "/images/profile.jpg",
  socialLinks: [
    {
      platform: "github",
      url: "https://github.com/your-username",
      label: "GitHub"
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/your-profile",
      label: "LinkedIn"
    },
    {
      platform: "email",
      url: "mailto:zhangwei@example.com",
      label: "邮箱"
    }
  ]
};