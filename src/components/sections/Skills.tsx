import React from 'react';
import { Skill, PersonalInfo } from '../../types';
import { skills, skillCategories } from '../../data/skills';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  // 按类别分组技能
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // 获取类别名称
  const getCategoryName = (category: string): string => {
    return skillCategories[category as keyof typeof skillCategories] || category;
  };

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">技能</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            我掌握的各种技术和工具，不断提升自己的专业能力
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-100">
                {getCategoryName(category)}
              </h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}/10</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.level * 10}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 雷达图或其他可视化图表的占位 */}
        <div className="mt-20 bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">技能概览</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {skills.slice(0, 6).map((skill) => (
              <div key={skill.id} className="text-center">
                <div className="mx-auto bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  <span className="text-blue-600 font-bold">{skill.level}</span>
                </div>
                <p className="text-gray-700">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;