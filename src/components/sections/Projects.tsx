import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';
import { useInView } from 'react-intersection-observer';

export const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="Here are some of my recent projects that showcase my skills and experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              ref={ref}
              key={index}
              className={`transition-opacity duration-500 ${
                inView ? 'opacity-100' : 'opacity-0 fadeIn'
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards',
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;