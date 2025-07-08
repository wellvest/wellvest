import { Phone, Mail, Facebook, Twitter, Instagram, Youtube, Linkedin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  return (
    <motion.div 
      className={`bg-navy-header text-white py-2 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Phone className="w-4 h-4 text-orange-brand" />
              <a href="tel:+91 9557042342" className="hover:text-orange-brand transition-colors">
                +91 9557042342
              </a>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Mail className="w-4 h-4 text-orange-brand" />
              <a href="mailto:wellvestltd@gmail.com" className="hover:text-orange-brand transition-colors">
                wellvestltd@gmail.com
              </a>
            </motion.div>
          </div>
          
          <div className="flex items-center space-x-4">
            <motion.a 
              href="#" 
              className="hover:text-orange-brand transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Facebook className="w-4 h-4" />
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-orange-brand transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter className="w-4 h-4" />
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-orange-brand transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="w-4 h-4" />
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-orange-brand transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Youtube className="w-4 h-4" />
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-orange-brand transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>
      
      {/* Fixed Contact Buttons */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col space-y-4">
        <motion.a 
          href="https://wa.me/918791584674" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
          whileHover={{ scale: 1.15, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 15 }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.a>
        <motion.a 
          href="tel:+919557042342" 
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg"
          whileHover={{ scale: 1.15, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 300, damping: 15 }}
        >
          <Phone className="w-6 h-6" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Header;