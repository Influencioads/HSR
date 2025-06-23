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
import ProjectDetail from './components/ProjectDetail';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedProject(null);
    setMobileMenuOpen(false);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectView = (projectId: string) => {
    setSelectedProject(projectId);
    setCurrentPage('project-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromProject = () => {
    setSelectedProject(null);
    setCurrentPage('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    if (currentPage === 'project-detail' && selectedProject) {
      return <ProjectDetail projectId={selectedProject} onBack={handleBackFromProject} />;
    }

    switch (currentPage) {
      case 'about':
        return <About />;
      case 'directors':
        return <Directors />;
      case 'projects':
        return <Projects onProjectView={handleProjectView} />;
      case 'ongoing-projects':
        return <OngoingProjects onProjectView={handleProjectView} />;
      case 'finished-projects':
        return <FinishedProjects onProjectView={handleProjectView} />;
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
            <Projects onProjectView={handleProjectView} />
            <Investors />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {currentPage !== 'project-detail' && (
        <Header 
          currentPage={currentPage}
          onNavigate={handleNavigate}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )}
      
      <main className={currentPage !== 'project-detail' ? 'relative' : ''}>
        {renderCurrentPage()}
      </main>
      
      {currentPage !== 'project-detail' && <Footer />}
    </div>
  );
}

export default App;