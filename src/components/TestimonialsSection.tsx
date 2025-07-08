import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroFinancial from '@/assets/hero-financial.jpg';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Meerut",
      image: heroFinancial
    },
    {
      name: "Priya Patel",
      location: "Delhi",
      image: heroFinancial
    },
    {
      name: "Vikram Singh",
      location: "Saharanpur",
      image: heroFinancial
    },
    {
      name: "Ananya Gupta",
      location: "Muzaffarnagar",
      image: heroFinancial
    },
    {
      name: "Arjun Verma",
      location: "Baghpat",
      image: heroFinancial
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-brand font-semibold text-lg">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-dark mt-4">
            What Our Clients Says
          </h2>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-orange-brand hover:text-white transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-orange-brand hover:text-white transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 px-16">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${currentSlide}-${index}`}
                className="bg-light-bg rounded-2xl p-8 text-center animate-fade-in shadow-card hover:shadow-hero transition-all duration-300"
              >
                <div className="mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-orange-brand/20"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-text-dark mb-2">
                  {testimonial.name}
                </h3>
                
                {testimonial.location && (
                  <p className="text-text-light">
                    {testimonial.location}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-orange-brand'
                    : 'bg-gray-300 hover:bg-orange-brand/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;