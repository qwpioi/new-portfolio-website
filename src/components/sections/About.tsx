import React from 'react';
import { PersonalInfo } from '../../types';

interface AboutProps {
  personalInfo: PersonalInfo;
}

const About: React.FC<AboutProps> = ({ personalInfo }) => {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">关于我</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
          </div>
          
          <div className="md:w-3/5">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">我是 {personalInfo.name}</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {personalInfo.bio}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">姓名</h4>
                <p className="text-gray-600">{personalInfo.name}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">邮箱</h4>
                <p className="text-gray-600">{personalInfo.email}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">电话</h4>
                <p className="text-gray-600">{personalInfo.phone}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">位置</h4>
                <p className="text-gray-600">{personalInfo.location}</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">教育背景</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">计算机科学学士学位，某大学，2016-2020</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">工作经验</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800">前端开发工程师</h5>
                    <p className="text-gray-600 text-sm">某科技公司 | 2020年6月 - 至今</p>
                    <p className="text-gray-600 mt-1">负责公司产品的前端开发和维护工作...</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;