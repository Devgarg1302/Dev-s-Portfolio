
import { Code, Palette, Database } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillCard } from '../ui/SkillCard';
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import { SiGithubactions } from "react-icons/si";
import { FaDiagramProject } from "react-icons/fa6";

const skills = [
  {
    icon: <Code size={24} />,
    title: 'Frontend Development',
    description: 'Experience with React, TypeScript, and modern CSS frameworks',
    skill: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    icon: <Database size={24} />,
    title: 'Backend Development',
    description: 'Proficient in Node.js, Python, and database management',
    skill: ['Node.js', 'Express', 'MongoDB', 'MySql', 'Kafka'],
  },
  {
    icon: <Palette size={24} />,
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces',
    skill: ['Figma', 'Material UI', 'Bootstrap', 'Tailwind CSS'],
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Me"
          subtitle="I'm a passionate developer with a strong foundation in both frontend and backend technologies."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              {...skill}
              delay={index * 200}
            />
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading 
            title="Tools & Techniques"
            subtitle="Here are some of the tools and techniques I use in my development workflow."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            <SkillCard 
              icon={<FaGitAlt size={24} />}
              title="Version Control"
              description="Version Control with Git and GitHub" delay={0} skill={[]}            />
            <SkillCard 
              icon={<SiGithubactions size={24} />}
              title="CI/CD"
              description="Continuous Integration and Deployment with GitHub Actions" delay={0} skill={[]}            />
            <SkillCard 
              icon={<FaDocker size={24} />}
              title="Containerization"
              description="Containerization with Docker" delay={0} skill={[]}            />
            <SkillCard 
              icon={<GrTest size={24} />}
              title="Testing"
              description="Unit and Integration Testing with Jest and React Testing Library" delay={0} skill={[]}            />
            <SkillCard 
              icon={<FaDiagramProject size={24} />}
              title="Agile Methodologies"
              description="Agile Methodologies and Scrum" delay={0} skill={[]}            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;