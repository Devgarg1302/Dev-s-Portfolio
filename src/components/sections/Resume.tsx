import { ResumeHeader } from '../ui/ResumeHeader';
import { ResumeViewer } from '../ui/ResumeViewer';
import { TimelineSection } from '../ui/TimelineSection';
import { experience, education } from '../../data/resume';

export const Resume = () => {
  return (
    <section id="resume" className="py-20 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ResumeHeader />
        <ResumeViewer />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <TimelineSection
            title="Experience"
            items={experience}
            icon="briefcase"
            delay={200}
          />
          <TimelineSection
            title="Education"
            items={education}
            icon="graduation"
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;