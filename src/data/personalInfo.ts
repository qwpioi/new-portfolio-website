import { PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: "您的姓名",
  title: "您的职位",
  bio: "关于您的简短介绍，描述您的专业技能和经验。",
  email: "your-email@example.com",
  phone: "+86 123-4567-8901",
  location: "您的城市",
  profileImage: "/images/profile.jpg",
  socialLinks: [
    {
      platform: "github",
      url: "https://github.com/您的GitHub用户名",
      label: "GitHub"
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/您的LinkedIn用户名",
      label: "LinkedIn"
    },
    {
      platform: "email",
      url: "mailto:your-email@example.com",
      label: "邮箱"
    }
  ]
};