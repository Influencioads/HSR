import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Directors from './components/Directors';
import Projects from './components/Projects';
import OngoingProjects from './components/OngoingProjects';
import FinishedProjects from './components/FinishedProjects';
import Awards from './components/Awards';
import Events from './components/Events';
import Career from './components/Career';
import FAQ from './components/FAQ';
import Investors from './components/Investors';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'directors':
        return <Directors />;
      case 'projects':
        return <Projects />;
      case 'ongoing-projects':
        return <OngoingProjects />;
      case 'finished-projects':
        return <FinishedProjects />;
      case 'awards':
        return <Awards />;
      case 'events':
        return <Events />;
      case 'career':
        return <Career />;
      case 'faq':
        return <FAQ />;
      case 'investors':
        return <Investors />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <About />
            <Projects />
            <Investors />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main className="relative">
        {renderCurrentPage()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;