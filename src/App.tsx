import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Resume from './components/sections/Resume';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <main>
          <Home />
          <About />
          <Projects />
          <Resume />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;