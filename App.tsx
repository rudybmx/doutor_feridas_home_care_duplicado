import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AlertSigns from './components/AlertSigns';
import HowItWorks from './components/HowItWorks';
import Treatments from './components/Treatments';
import Patients from './components/Patients';
import FAQ from './components/FAQ';
import Marquee from './components/Marquee';
import Footer from './components/Footer';

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
        <About />
        <AlertSigns />
        <HowItWorks />
        <Treatments />
        <Patients />
        <FAQ />
      </main>
      <Marquee />
      <Footer />
    </div>
  );
}

export default App;