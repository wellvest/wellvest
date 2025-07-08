import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, PieChart, TrendingUp, Shield, Users, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useWaitlist } from '@/contexts/WaitlistContext';

const Services = () => {
  const navigate = useNavigate();
  const { openWaitlistModal } = useWaitlist();
  
  const handleConsultationClick = () => {
    navigate('/');
    // Use setTimeout to ensure navigation completes before opening modal
  };
  const services = [
    {
      title: "Investment Advisory",
      description: "Personalized investment strategies tailored to your financial goals, risk tolerance, and time horizon.",
      icon: <PieChart className="w-12 h-12 text-orange-brand" />,
      features: [
        "Comprehensive financial planning",
        "Risk assessment and management",
        "Portfolio diversification strategies",
        "Regular performance reviews"
      ],
      learnMoreLink: "https://www.investopedia.com/terms/i/investment-advice.asp"
    },
    {
      title: "Wealth Management",
      description: "Holistic wealth management solutions to grow and preserve your assets for generations to come.",
      icon: <BarChart2 className="w-12 h-12 text-blue-600" />,
      features: [
        "Asset allocation optimization",
        "Tax-efficient investment strategies",
        "Estate planning integration",
        "Wealth preservation techniques"
      ],
      learnMoreLink: "https://www.investopedia.com/terms/w/wealthmanagement.asp"
    },
    {
      title: "Retirement Planning",
      description: "Secure your financial future with our comprehensive retirement planning services.",
      icon: <Shield className="w-12 h-12 text-green-600" />,
      features: [
        "Retirement income projections",
        "Social security optimization",
        "Pension and 401(k) management",
        "Healthcare cost planning"
      ],
      learnMoreLink: "https://www.investopedia.com/retirement/retirement-planning-guide/"
    },
    {
      title: "Market Research",
      description: "Stay ahead with our in-depth market research and analysis of investment opportunities.",
      icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
      features: [
        "Sector-specific analysis",
        "Emerging market opportunities",
        "Economic trend forecasting",
        "Investment risk assessment"
      ],
      learnMoreLink: "https://www.investopedia.com/terms/m/market-research.asp"
    },
    {
      title: "Financial Education",
      description: "Empower yourself with knowledge through our comprehensive financial education programs.",
      icon: <Users className="w-12 h-12 text-amber-600" />,
      features: [
        "Investment workshops",
        "Personal finance seminars",
        "One-on-one coaching sessions",
        "Online learning resources"
      ],
      learnMoreLink: "https://www.investopedia.com/financial-term-dictionary-4769738"
    },
    {
      title: "Business Consulting",
      description: "Strategic financial consulting for businesses of all sizes to optimize growth and profitability.",
      icon: <Briefcase className="w-12 h-12 text-indigo-600" />,
      features: [
        "Capital structure optimization",
        "Merger and acquisition advisory",
        "Business valuation services",
        "Financial restructuring"
      ],
      learnMoreLink: "https://www.investopedia.com/terms/b/business-valuation.asp"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-navy-header to-navy-header/90">
        <div className="absolute inset-0 bg-navy-header/70"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">Our Services</h1>
            <nav className="text-lg">
              <span className="text-gray-300">Home</span>
              <span className="mx-2 text-orange-brand">/</span>
              <span className="text-white">Services</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-brand font-semibold text-lg">What We Offer</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-dark mb-6">
              Comprehensive Financial Services
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              At WellVest, we provide a wide range of financial services designed to help you achieve your financial goals and secure your future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-card overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <div className="p-8">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-text-dark mb-4">{service.title}</h3>
                  <p className="text-text-light mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-orange-brand mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-text-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="wellvest-outline" className="w-full" asChild>
                    <a 
                      href={service.learnMoreLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-brand font-semibold text-lg">Our Process</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-dark mb-6">
              How We Work With You
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Our client-centered approach ensures that we understand your unique needs and develop tailored solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-orange-brand/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-orange-brand">01</span>
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-4">Initial Consultation</h3>
              <p className="text-text-light">We begin by understanding your financial goals, risk tolerance, and time horizon.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">02</span>
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-4">Strategy Development</h3>
              <p className="text-text-light">Our team creates a personalized financial strategy aligned with your objectives.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-600">03</span>
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-4">Implementation</h3>
              <p className="text-text-light">We execute the strategy with precision, ensuring every detail is addressed.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-purple-600">04</span>
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-4">Ongoing Management</h3>
              <p className="text-text-light">Regular reviews and adjustments keep your financial plan on track as markets and goals evolve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-text-dark mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-text-light mb-8 max-w-3xl mx-auto">
            Take the first step toward achieving your financial goals. Contact us today for a personalized consultation with one of our expert advisors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="wellvest" size="lg" onClick={handleConsultationClick}>
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
