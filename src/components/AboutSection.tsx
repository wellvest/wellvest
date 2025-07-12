import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="text-orange-brand font-semibold text-lg">About Company</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-dark mb-6">
              Welcome to WellVest Consulting
            </h2>
            <h3 className="text-2xl font-semibold text-orange-brand mb-4 italic">
              Wellvest ke sath sabka vikas
            </h3>
            <div className="space-y-4 text-lg text-text-light leading-relaxed">
              <p>
                At WellVest Consulting, we deliver premium fund management expertise 
                specifically crafted to transform your financial aspirations into reality. Since our digital launch in December 2022, 
                we've successfully introduced comprehensive online financial services, strategically designed to 
                simplify wealth planning and reduce financial stress for our esteemed clients.
              </p>
              <p>
                Before this digital expansion, our expert team had already built a strong reputation as 
                financially savvy professionals, widely recognized for developing strategic investment solutions that 
                maximize growth opportunities while effectively mitigating risks in today's dynamic financial markets.
              </p>
              <p>
                Our unwavering dedication to excellence propels us to constantly innovate and refine our services 
                to address the specific requirements of each client, guaranteeing long-term financial stability and sustainable wealth growth.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button variant="wellvest">
                  Learn More About Us
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="wellvest-outline">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Company Info Card */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-2xl p-8 shadow-hero">
              <div className="text-center mb-8">
                <div className="inline-block bg-orange-brand text-white px-6 py-2 rounded-full font-semibold mb-4">
                  LAUNCHED - 12 FEB - 2025
                </div>
                <div className="text-sm text-text-light">
                  HEAD OFFICE - LOKHANDWALA, ANDHERI, MUMBAI
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-gradient-to-br from-orange-brand/10 to-orange-brand/5 rounded-xl p-6">
                  <div className="text-3xl font-bold text-orange-brand mb-2">2+</div>
                  <div className="text-sm text-text-light">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-xl p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-text-light">Happy Clients</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">₹10Cr+</div>
                  <div className="text-sm text-text-light">Funds Managed</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-xl p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-sm text-text-light">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;