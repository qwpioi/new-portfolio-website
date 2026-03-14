import React from 'react';
import { PersonalInfo } from '../../types';

interface HeroProps {
  personalInfo: PersonalInfo;
}

const Hero: React.FC<HeroProps> = ({ personalInfo }) => {
  return (
    <section className="section bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              你好，我是 <span className="text-blue-600">{personalInfo.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              {personalInfo.bio}
            </p>
            <div className="flex space-x-4">
              <a 
                href="#projects" 
                className="btn-primary inline-block"
              >
                查看我的项目
              </a>
              <a 
                href="#contact" 
                className="btn-secondary inline-block"
              >
                联系我
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-100 rounded-full overflow-hidden border-4 border-white shadow-xl">
                {personalInfo.profileImage ? (
                  <img 
                    src={personalInfo.profileImage} 
                    alt={`${personalInfo.name}`} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">头像</span>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <div className="bg-blue-100 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;