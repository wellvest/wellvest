import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does WellVest ensure compliance with tax and legal requirements?",
      answer: "WellVest strictly adheres to all applicable tax and legal regulations. We deduct Tax Deducted at Source (TDS) at the applicable rates, not just on the interest component of monthly payouts but also on the incentives earned by channel partners. This ensures full compliance and transparency in all financial transactions, providing peace of mind to our partners."
    },
    {
      question: "What investment options does WellVest offer for beginners?",
      answer: "WellVest offers several beginner-friendly investment options with low entry barriers. Our starter portfolios require minimal initial investment and are designed with simplified asset allocation strategies. We provide comprehensive educational resources and personalized guidance to help new investors understand market fundamentals and make informed decisions."
    },
    {
      question: "How does WellVest's risk management strategy protect my investments?",
      answer: "WellVest employs a multi-layered risk management approach that includes diversification across asset classes, regular portfolio rebalancing, and continuous market monitoring. We conduct thorough risk assessments for each investment product and implement strict compliance protocols. Our investment committee regularly reviews all positions to ensure alignment with client risk profiles and market conditions."
    },
    {
      question: "What makes WellVest different from other investment advisors?",
      answer: "WellVest distinguishes itself through our client-centric approach, transparent fee structure, and innovative investment strategies. Unlike many advisors, we offer truly personalized investment plans rather than template solutions. Our advisors are compensated based on client satisfaction and portfolio performance, not commission-based sales, ensuring our interests are aligned with yours."
    },
    {
      question: "Can I access my investments or withdraw funds at any time?",
      answer: "Yes, WellVest prioritizes liquidity and flexibility. Most of our investment options allow for withdrawals with minimal or no exit fees, depending on the specific product terms. While some specialized investment vehicles may have lock-in periods for optimal returns, we always ensure clients have access to a portion of their portfolio for emergencies and maintain a balanced approach to liquidity management."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* FAQ Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-dark mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-card overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-text-dark pr-4">
                      {faq.question}
                    </span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-orange-brand flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-orange-brand flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-text-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src="/src/assets/hero-investment2.jpg"
                alt="WellVest FAQs"
                className="w-full rounded-2xl shadow-hero"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-brand/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;