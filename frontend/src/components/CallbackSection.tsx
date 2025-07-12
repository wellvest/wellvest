import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { contactService } from '@/lib/services/contact';
import type { CallbackFormData } from '@/lib/services/contact';
import contactHero from '@/assets/contact-hero.jpg';

const CallbackSection = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await contactService.requestCallback({
        name: formData.name,
        phone: formData.phone,
        service: formData.service,
        preferredTime: formData.preferredTime,
        message: formData.message
      });
      
      toast({
        title: "Request Sent Successfully!",
        description: "We'll call you back as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        service: '',
        message: '',
        preferredTime: ''
      });
      
      // Show success message
      setIsSuccess(true);
      
      // Hide success message after 10 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 10000);
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "There was an error sending your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Form */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="text-orange-brand font-semibold text-lg">Get In Touch</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-dark mb-8">
              Request A Call-Back
            </h2>
            
            {isSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 animate-fade-in">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-green-800">Request Received!</h3>
                    <div className="mt-2 text-green-700">
                      <p>Thank you for your request. We'll call you back at your preferred time.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-white"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-white"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Select onValueChange={(value) => handleInputChange('service', value)}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="investment">Investment Service</SelectItem>
                    <SelectItem value="shopping">Online Shopping</SelectItem>
                    <SelectItem value="health">Health and checkup</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  placeholder="Preferred Time (e.g., 2 PM)"
                  value={formData.preferredTime}
                  onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                  className="bg-white"
                />
              </div>
              
              <Textarea
                placeholder="Additional Message (Optional)"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="bg-white min-h-[120px]"
              />
              
              <Button 
                type="submit" 
                variant="wellvest" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Request...' : 'Request Callback'}
              </Button>
            </form>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src={contactHero}
                alt="Home Contact Form Banner"
                className="w-full rounded-2xl shadow-hero"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-brand/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallbackSection;