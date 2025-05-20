import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Tech } from './components/Tech';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { StarsCanvas } from './components/canvas/Stars';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-0">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className="bg-primary">
            <Header />
            <Hero />
          </div>

          <About />
          <Experience />
          <Tech />
          <Projects />

          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </>
      )}
    </div>
  );
}

export default App;