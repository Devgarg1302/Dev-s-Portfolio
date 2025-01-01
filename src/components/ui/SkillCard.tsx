import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  skill: string[];
}

export const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, delay, skill }) => {
  return (
    <div
      className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-blue-600 dark:text-blue-400 mb-4 transform transition-transform hover:scale-110 duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>      
      <div className="flex flex-wrap mt-[20px] gap-2">
        {skill.map((skill, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-sm mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-100">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};