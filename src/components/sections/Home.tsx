import { Github, Linkedin, Mail } from 'lucide-react';
import Type from './Type';
import './Home.css';
import { useInView } from 'react-intersection-observer';
import dev from '../../Assets/images/Dev-removebg-preview.png';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
    };
    setShowModal(false);
    axios.post('https://adorable-golden-toque.glitch.me/save', formData)
      .then(() => {
        alert('Form submitted successfully');
      })
      .catch(error => {
        alert('There was an error submitting the form: ' + error.message);
      });
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-around bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl ml-32 px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 ref={ref} className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 ${inView ? 'animate-fadeIn' : ''}`}>
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Dev Inder Garg</span>{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <div ref={ref} className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 ${inView ? 'animate-fadeIn animate-delay-100' : ''}`}>
            <Type />
          </div>
          <div ref={ref} className={`flex justify-center space-x-6 mb-12 ${inView ? 'animate-fadeIn animate-delay-200' : ''}`}>
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
          <button
            ref={ref}
            className={`bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all hover:scale-105 ${inView ? 'animate-fadeIn animate-delay-300' : ''}`}
            onClick={() => setShowModal(true)}
          >
            Get in Touch
          </button>

          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-lg w-full">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact Me</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Phone: +1234567890</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Email: devgarg1302@gmail.com</p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4 text-left">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">Name</label>
                    <input onChange={(e)=>setName(e.target.value)} className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" type="text" id="name" name="name" required />
                  </div>
                  <div className="mb-4 text-left">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" type="email" id="email" name="email" required />
                  </div>
                  <div className="mb-4 text-left">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">Message</label>
                    <textarea onChange={(e)=>setMessage(e.target.value)} className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" id="message" name="message" rows={4} required></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2" onClick={() => setShowModal(false)}>Cancel</button>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='mr-32'>
        <img
          ref={ref}
          src={dev}
          alt="Dev Inder Garg"
          className={`w-9/12 h-9/12 rounded-full mx-auto mt-8 ${inView ? 'animate-fadeIn animate-delay-400' : ''}`}
        />
      </div>
    </section>
  );
};

export default Home;