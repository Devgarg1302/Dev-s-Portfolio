import { Github, Linkedin, Mail } from 'lucide-react';
import Type from './Type';
import './Home.css';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });

  return (
    <section id="home" className="min-h-screen flex items-center justify-around bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl ml-32 px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 ref={ref} className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 ${inView ? 'animate-fadeIn': ''}`}>
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Dev Inder Garg</span>{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
          </h1>
          <div ref={ref} className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 ${inView ? 'animate-fadeIn animate-delay-100': ''}`}>
            <Type />
          </div>
          <div ref={ref} className={`flex justify-center space-x-6 mb-12 ${ inView ? 'animate-fadeIn animate-delay-200': ''}`}>
            <a href="https://github.com/Devgarg1302" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/devgarg13/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:devgarg1302@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
          <button ref={ref} className={`bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all hover:scale-105 ${inView? 'animate-fadeIn animate-delay-300':''}`}>
            Get in Touch
          </button>
          
        </div>
      </div>
      <div className='mr-32'>
          <img
            ref={ref}
            src="../src/Assets/images/Dev-removebg-preview.png"
            alt="Dev Inder Garg"
            className={`w-9/12 h-9/12 rounded-full mx-auto mt-8 ${inView? 'animate-fadeIn animate-delay-400':''}`}
          />
        </div>
    </section>
  );
};

export default Home;


