import React, { useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { md3Theme } from './theme/md3Theme';
import './App.css';
import './styles/fonts.css';
import Header from './components/Header';
import HeroMD3 from './components/HeroMD3';
import AboutMD3 from './components/AboutMD3';
import Experience from './components/Experience';
import SkillsMD3 from './components/SkillsMD3';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider theme={md3Theme}>
      <CssBaseline />
      <div className=\"App\" style={{ backgroundColor: '#0D0D0D', minHeight: '100vh' }}>
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
