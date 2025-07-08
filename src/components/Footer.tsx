import { Phone, MessageCircle, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <footer className="bg-navy-header text-white pt-16 pb-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute w-64 h-64 rounded-full bg-orange-brand/5 -top-20 -right-20"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute w-96 h-96 rounded-full bg-orange-brand/5 -bottom-40 -left-20"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut"
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                WellVest
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-orange-brand" 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </h3>
              <p className="text-gray-300 mb-6">
                Your trusted partner for personalized investment strategies and wealth management solutions.
              </p>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  className="text-white hover:text-orange-brand transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-white hover:text-orange-brand transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-white hover:text-orange-brand transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-white hover:text-orange-brand transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Quick Links
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-orange-brand" 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </h3>
              <ul className="space-y-3">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About Us" },
                  { path: "/services", label: "Services" },
                  { path: "/legal", label: "Legal" },
                  { path: "/contact", label: "Contact" }
                ].map((link, index) => (
                  <motion.li 
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-orange-brand transition-colors inline-block hover:translate-x-1 duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Our Services
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-orange-brand" 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Investment Advisory", url: "https://www.investopedia.com/terms/i/investment-advice.asp" },
                  { name: "Wealth Management", url: "https://www.investopedia.com/terms/w/wealthmanagement.asp" },
                  { name: "Retirement Planning", url: "https://www.investopedia.com/retirement/retirement-planning-guide/" },
                  { name: "Market Research", url: "https://www.investopedia.com/terms/m/market-research.asp" },
                  { name: "Financial Education", url: "https://www.investopedia.com/financial-term-dictionary-4769738" }
                ].map((service, index) => (
                  <motion.li 
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-orange-brand transition-colors inline-block hover:translate-x-1 duration-300"
                    >
                      {service.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Contact Us
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-orange-brand" 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </h3>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 text-orange-brand mr-3 mt-0.5" />
                  <span className="text-gray-300">123 Investment Street, Financial District, 110001</span>
                </motion.li>
                <motion.li 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-5 h-5 text-orange-brand mr-3" />
                  <a href="tel:+919557042342" className="text-gray-300 hover:text-orange-brand transition-colors">+91 9557042342</a>
                </motion.li>
                <motion.li 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 text-orange-brand mr-3" />
                  <a href="mailto:wellvestltd@gmail.com" className="text-gray-300 hover:text-orange-brand transition-colors">wellvestltd@gmail.com</a>
                </motion.li>
                <motion.li 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <Clock className="w-5 h-5 text-orange-brand mr-3" />
                  <span className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className="border-t border-gray-700 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-400">
              © 2025 WellVest Pvt.Ltd All Rights Reserved. WellVest Consulting Pvt Ltd.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-50 bg-orange-brand text-white p-3 rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;