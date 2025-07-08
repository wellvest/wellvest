import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already joined the waitlist
    const hasJoinedWaitlist = localStorage.getItem('waitlistJoined');
    if (hasJoinedWaitlist) {
      setIsSubmitted(true);
      setEmail(localStorage.getItem('waitlistEmail') || '');
    }
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Import email service dynamically to avoid SSR issues
      const { emailService } = await import('@/lib/services/email');
      
      // Send email notifications using SMTP.js
      await emailService.sendWaitlistNotification(email);
      await emailService.sendWaitlistConfirmation(email);
      
      // In a real implementation, you would also make an API call here
      // await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify({ email }) });
      
      setIsSubmitted(true);
      // Store in localStorage
      localStorage.setItem('waitlistJoined', 'true');
      localStorage.setItem('waitlistEmail', email);
      localStorage.setItem('waitlistJoinedDate', new Date().toISOString());
      
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. Check your email for confirmation.",
      });
    } catch (error) {
      console.error('Waitlist submission error:', error);
      toast({
        title: "Error",
        description: "Failed to join the waitlist. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="bg-white rounded-lg shadow-xl max-w-md w-full"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <div className="flex justify-between items-center p-6 border-b">
            <motion.h2 
              className="text-2xl font-bold text-navy-header"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Join Our Waitlist
            </motion.h2>
            <motion.button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>
        
        <div className="p-6">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.p 
                  className="text-text-dark mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Our portfolio dashboard is coming soon! Join our waitlist to be the first to know when it launches.
                </motion.p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-brand focus:border-transparent transition-all duration-300"
                      disabled={isSubmitting}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Button 
                      variant="wellvest" 
                      className="w-full relative overflow-hidden group"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      <span className="relative z-10">
                        {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                      </span>
                      <motion.span 
                        className="absolute inset-0 bg-orange-600 z-0" 
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                className="text-center py-6"
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
              >
                <motion.div 
                  className="mb-4 flex justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotateY: [0, 360] }}
                  transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                >
                  <div className="bg-green-100 p-3 rounded-full">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-navy-header mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Thank You!
                </motion.h3>
                <motion.p 
                  className="text-text-dark mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  You've been added to our waitlist. We'll send you an email when our portfolio dashboard launches.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Button 
                    variant="wellvest" 
                    onClick={onClose}
                    className="hover:scale-105 transition-transform duration-300"
                  >
                    Close
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
    </AnimatePresence>
  );
};

export default WaitlistModal;
