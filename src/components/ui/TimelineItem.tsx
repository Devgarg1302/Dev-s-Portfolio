
interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export function TimelineItem({ title, organization, period, description }: TimelineItemProps) {
  return (
    <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 animate-slideIn">
      <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full -left-[9px] top-0 transition-transform hover:scale-125"></div>
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{organization} | {period}</p>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}