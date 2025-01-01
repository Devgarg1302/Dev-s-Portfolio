import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { TimelineItem } from './TimelineItem';

interface TimelineSectionProps {
  title: string;
  items: Array<{
    title: string;
    organization: string;
    period: string;
    description: string;
  }>;
  icon: 'briefcase' | 'graduation';
  delay: number;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ 
  title, 
  items, 
  icon, 
  delay 
}) => {
  const Icon = icon === 'briefcase' ? Briefcase : GraduationCap;

  return (
    <div className="animate-slideIn" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center mb-6">
        <Icon size={24} className="text-blue-600 dark:text-blue-400 mr-2" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="space-y-8">
        {items.map((item, index) => (
          <TimelineItem 
            key={index} 
            {...item}
            className="animate-slideIn"
            style={{ animationDelay: `${(index + 2) * 200}ms` }}
          />
        ))}
      </div>
    </div>
  );
};