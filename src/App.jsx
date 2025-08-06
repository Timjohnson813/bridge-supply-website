import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import StrategicPartnership from './pages/StrategicPartnership';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

// Import article pages
import TopAmazonListingMistakes from './pages/articles/TopAmazonListingMistakes';
import RemoveUnauthorizedSellers from './pages/articles/RemoveUnauthorizedSellers';
import AmazonAdvertising from './pages/articles/AmazonAdvertising';
import ProductLaunchChecklist from './pages/articles/ProductLaunchChecklist';
import PPCCampaignTemplates from './pages/articles/PPCCampaignTemplates';
import AmazonProfitabilityCalculator from './pages/articles/AmazonProfitabilityCalculator';
import AmazonSellerHandbook from './pages/articles/AmazonSellerHandbook';
// import AmazonFBAvsF BM from './pages/articles/AmazonFBAvsF BM';

function App() {
  // Force dark mode always - no theme toggle
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="page-transition"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/strategic-partnership" element={<StrategicPartnership />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            
            {/* Article Routes */}
            <Route path="/articles/top-amazon-listing-mistakes" element={<TopAmazonListingMistakes />} />
            <Route path="/articles/remove-unauthorized-sellers" element={<RemoveUnauthorizedSellers />} />
            <Route path="/articles/amazon-advertising" element={<AmazonAdvertising />} />
            <Route path="/articles/product-launch-checklist" element={<ProductLaunchChecklist />} />
            <Route path="/articles/ppc-campaign-templates" element={<PPCCampaignTemplates />} />
            <Route path="/articles/amazon-profitability-calculator" element={<AmazonProfitabilityCalculator />} />
            <Route path="/articles/amazon-seller-handbook" element={<AmazonSellerHandbook />} />
            {/* <Route path="/articles/amazon-fba-vs-fbm" element={<AmazonFBAvsF BM />} /> */}
          </Routes>
        </motion.main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

