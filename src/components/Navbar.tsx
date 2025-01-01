import React from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ui/ThemeToggle';
import { useScrollTo } from '../hooks/useScrollTo';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const scrollTo = useScrollTo();

  const menuItems = [
    { title: 'Home', href: 'home' },
    { title: 'About', href: 'about' },
    { title: 'Projects', href: 'projects' },
    { title: 'Resume', href: 'resume' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
    setIsOpen(false);

    const target = e.currentTarget;
    target.classList.remove('animate');
    void target.offsetWidth;
    target.classList.add('animate');
  };

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => handleClick(e, 'home')}
              className="text-2xl font-bold text-gray-800 dark:text-white"
            >
              Portfolio
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={`#${item.href}`}
                  onClick={(e) => handleClick(e, item.href)}
                  className="transition-colors duration-[400ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] focus:outline-none group relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  {item.title}
                  <span className="absolute bottom-[-2px] left-1/2 w-0 h-[2px] bg-gray-500 h-[3px] rounded-full transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:w-full group-hover:left-0 group-focus:w-full group-focus:left-0 dark:bg-white"></span>
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={`#${item.href}`}
                onClick={(e) => handleClick(e, item.href)}
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;