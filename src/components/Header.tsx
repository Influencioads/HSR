import React from 'react';
import { Building2, Phone, Mail, Menu, X, ChevronRight } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, mobileMenuOpen, setMobileMenuOpen }) => {
  const navigationItems = [
    { id: 'about', label: 'About', hasSubmenu: false },
    { id: 'directors', label: 'Directors', hasSubmenu: false },
    { id: 'ongoing-projects', label: 'Ongoing Projects', hasSubmenu: false },
    { id: 'finished-projects', label: 'Finished Projects', hasSubmenu: false },
    { id: 'awards', label: 'Awards', hasSubmenu: false },
    { id: 'events', label: 'Events', hasSubmenu: false },
    { id: 'career', label: 'Career', hasSubmenu: false },
    { id: 'faq', label: 'FAQ', hasSubmenu: false },
    { id: 'contact', label: 'Contact Us', hasSubmenu: false }
  ];

  const handleNavigation = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => handleNavigation('home')}
            >
              <div className="p-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg group-hover:shadow-lg transition-all duration-300">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">HSG Projects</h1>
                <p className="text-xs text-gray-500 leading-tight">Building Trust Since 2005</p>
              </div>
            </div>

            {/* Desktop Navigation - Simplified */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => handleNavigation('home')}
                className={`text-sm font-medium transition-colors duration-300 hover:text-amber-600 ${
                  currentPage === 'home' ? 'text-amber-600 border-b-2 border-amber-600 pb-1' : 'text-gray-700'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('about')}
                className={`text-sm font-medium transition-colors duration-300 hover:text-amber-600 ${
                  currentPage === 'about' ? 'text-amber-600 border-b-2 border-amber-600 pb-1' : 'text-gray-700'
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleNavigation('ongoing-projects')}
                className={`text-sm font-medium transition-colors duration-300 hover:text-amber-600 ${
                  currentPage === 'ongoing-projects' ? 'text-amber-600 border-b-2 border-amber-600 pb-1' : 'text-gray-700'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => handleNavigation('contact')}
                className={`text-sm font-medium transition-colors duration-300 hover:text-amber-600 ${
                  currentPage === 'contact' ? 'text-amber-600 border-b-2 border-amber-600 pb-1' : 'text-gray-700'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Contact Info & Menu Button */}
            <div className="flex items-center space-x-4">
              <div className="hidden xl:flex items-center space-x-4 text-sm">
                <a href="tel:9844028280" className="flex items-center space-x-1 text-gray-600 hover:text-amber-600 transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>9844 028 280</span>
                </a>
                <a href="mailto:hsgprojects@yahoo.co.in" className="flex items-center space-x-1 text-gray-600 hover:text-amber-600 transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>Get Quote</span>
                </a>
              </div>
              
              {/* Menu Button - Always visible */}
              <button
                className="p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Off-Canvas Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Off-Canvas Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">HSG Projects</h2>
                <p className="text-xs text-gray-500">Navigation Menu</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-1 px-4">
              {/* Home */}
              <button
                onClick={() => handleNavigation('home')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left font-medium transition-all duration-200 ${
                  currentPage === 'home' 
                    ? 'bg-amber-50 text-amber-700 border-l-4 border-amber-500' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-amber-600'
                }`}
              >
                <span>Home</span>
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Navigation Items */}
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left font-medium transition-all duration-200 ${
                    currentPage === item.id 
                      ? 'bg-amber-50 text-amber-700 border-l-4 border-amber-500' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-amber-600'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-100 p-6 bg-gray-50">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <a 
                href="tel:9844028280" 
                className="flex items-center space-x-3 text-sm text-gray-600 hover:text-amber-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>9844 028 280</span>
              </a>
              <a 
                href="mailto:hsgprojects@yahoo.co.in" 
                className="flex items-center space-x-3 text-sm text-gray-600 hover:text-amber-600 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>hsgprojects@yahoo.co.in</span>
              </a>
            </div>
            
            {/* WhatsApp CTA */}
            <div className="mt-4">
              <a
                href="https://wa.me/919844028280"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors text-sm"
              >
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;