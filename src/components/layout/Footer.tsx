import React from 'react';
import { SocialLink } from '../../types';

interface FooterProps {
  socialLinks: SocialLink[];
  email: string;
}

const Footer: React.FC<FooterProps> = ({ socialLinks, email }) => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">张伟</h3>
            <p className="text-gray-300">
              前端开发工程师，专注于构建现代化、用户友好的Web应用。
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">联系方式</h3>
            <p className="text-gray-300">{email}</p>
            <p className="text-gray-300">北京</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">关注我</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.platform}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 张伟. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;