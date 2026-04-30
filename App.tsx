import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import AlertSigns from './components/AlertSigns';
import Features from './components/Features';
import Treatments from './components/Treatments';
import Marquee from './components/Marquee';
import Patients from './components/Patients';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Specialist from './components/Specialist';

function App() {
  const [isDark, setIsDark] = useState(false);

  // Update HTML class when state changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main className="hero-gradient relative overflow-hidden pt-28">
        <Hero />
        <Specialist />
        <HowItWorks />
        <AlertSigns />
        <Features />
        <Treatments />
        <Marquee />
        <Patients />
        <About />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;