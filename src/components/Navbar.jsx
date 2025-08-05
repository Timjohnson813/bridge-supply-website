import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ChevronDown 
} from 'lucide-react';
import logo from '../assets/Bridge_Supply_Co_Logo_Modern_V3.png';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const services = [
    { id: 'listing-creation', name: 'Amazon Listing Creation', path: '/services/listing-creation' },
    { id: 'amazon-advertising', name: 'Amazon Advertising', path: '/services/amazon-advertising' },
    { id: 'brand-management', name: 'Full Amazon Brand Management', path: '/services/brand-management' },
    { id: 'brand-protection', name: 'Brand Protection', path: '/services/brand-protection' },
    { id: 'logistics', name: 'Logistics & Inventory', path: '/services/logistics' },
    { id: 'distributor-search', name: 'Distributor Search', path: '/services/distributor-search' },
    { id: 'reputation-building', name: 'Brand Reputation Building', path: '/services/reputation-building' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Bridge Supply Co" className="h-10 w-10" />
            <span className="text-xl font-bold text-white">Bridge Supply Co.</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-white hover:text-purple-300 transition-colors ${isActive('/') ? 'text-purple-300' : ''}`}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className={`text-white hover:text-purple-300 transition-colors ${isActive('/about') ? 'text-purple-300' : ''}`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link 
                to="/services" 
                className={`flex items-center text-white hover:text-purple-300 transition-colors ${location.pathname.startsWith('/services') ? 'text-purple-300' : ''}`}
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-md rounded-lg border border-white/10 shadow-xl"
                >
                  <div className="py-2">
                    <Link 
                      to="/services" 
                      className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                    >
                      All Services
                    </Link>
                    <div className="border-t border-white/10 my-2"></div>
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={service.path}
                        className="block px-4 py-2 text-white hover:bg-white/10 transition-colors text-sm"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
            
            <Link 
              to="/case-studies" 
              className={`text-white hover:text-purple-300 transition-colors ${isActive('/case-studies') ? 'text-purple-300' : ''}`}
            >
              Case Studies
            </Link>
            
            <Link 
              to="/blog" 
              className={`text-white hover:text-purple-300 transition-colors ${isActive('/blog') ? 'text-purple-300' : ''}`}
            >
              Resources
            </Link>
            
            <Link 
              to="/contact" 
              className={`text-white hover:text-purple-300 transition-colors ${isActive('/contact') ? 'text-purple-300' : ''}`}
            >
              Contact
            </Link>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="ml-4 text-white hover:bg-white/10"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-6"
            >
              Let's Scale Your Brand
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/case-studies" 
                className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                to="/blog" 
                className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleDarkMode}
                  className="w-full justify-start text-white"
                >
                  {darkMode ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </Button>
              </div>
              <div className="px-3 py-2">
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full"
                >
                  Let's Scale Your Brand
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

