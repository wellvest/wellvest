import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWaitlist } from '@/contexts/WaitlistContext';
import { motion, AnimatePresence } from 'framer-motion';
import heroFinancial from '@/assets/hero-financial.jpg';
import heroInvestment1 from '@/assets/hero-investment1.jpg';
import heroInvestment2 from '@/assets/hero-investment2.jpg';
import heroInvestment3 from '@/assets/hero-investment3.jpg';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openWaitlistModal } = useWaitlist();

  const slides = [
    {
      title: "Expert Team Dedicated to Your Financial Success",
      subtitle: "Strategic professionals helping you achieve financial goals on schedule. Maximize your investment returns through our proven expertise.",
      image: heroInvestment1
    },
    {
      title: "Build Wealth and Eliminate Financial Stress",
      subtitle: "Leverage our referral network to enhance your earnings. Refer others to our services and unlock additional savings for yourself.",
      image: heroInvestment2
    },
    {
      title: "Planting Seeds for Your Financial Independence",
      subtitle: "Secure lasting financial freedom by investing wisely today. Watch your financial portfolio grow steadily for a prosperous tomorrow.",
      image: heroInvestment3
    },
    {
      title: "Transform Your Investments for a Secure Future",
      subtitle: "Reshape your financial journey with our expert guidance and customized investment strategies designed for long-term prosperity.",
      image: heroFinancial
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-navy-header/80 to-navy-header/60 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlide}
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <motion.h1 
                  className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p 
                  className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.9 }}
                >
                  <Button 
                    variant="wellvest" 
                    className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
                    onClick={openWaitlistModal}
                  >
                    Start Investing
                  </Button>
                  <Button 
                    variant="outline" 
                    className="text-lg px-8 py-4 border-white text-black hover:bg-white hover:text-navy-header hover:scale-105 transition-all duration-300" 
                    asChild
                  >
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-orange-brand' : 'bg-white/50'
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: index === currentSlide ? 1.2 : 1,
              width: index === currentSlide ? '16px' : '12px'
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;