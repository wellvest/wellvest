import Layout from '@/components/Layout';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Legal = () => {
  const [openSection, setOpenSection] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const legalSections = [
    {
      title: "Terms of Service",
      content: (
        <div className="space-y-4">
          <p>
            These Terms of Service ("Terms") govern your access to and use of the WellVest website, services, and applications (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">1. Acceptance of Terms</h4>
          <p>
            By accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">2. Changes to Terms</h4>
          <p>
            WellVest reserves the right to modify these Terms at any time. We will provide notice of any material changes by posting the updated Terms on our website or through other communications. Your continued use of the Services after such changes constitutes your acceptance of the new Terms.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">3. Services Description</h4>
          <p>
            WellVest provides financial advisory and investment management services. Our Services are intended solely for informational purposes and should not be construed as financial, legal, or tax advice. We recommend consulting with qualified professionals before making any financial decisions.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">4. User Responsibilities</h4>
          <p>
            You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify WellVest immediately of any unauthorized use of your account or any other breach of security.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">5. Intellectual Property</h4>
          <p>
            All content, features, and functionality of the Services, including but not limited to text, graphics, logos, icons, and images, are the exclusive property of WellVest and are protected by copyright, trademark, and other intellectual property laws.
          </p>
        </div>
      )
    },
    {
      title: "Privacy Policy",
      content: (
        <div className="space-y-4">
          <p>
            At WellVest, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">1. Information We Collect</h4>
          <p>
            We may collect personal information that you voluntarily provide to us when you register for an account, express interest in obtaining information about us or our products and services, or otherwise contact us. The personal information we collect may include your name, email address, postal address, phone number, and financial information necessary to provide our services.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">2. How We Use Your Information</h4>
          <p>
            We use the information we collect to provide, maintain, and improve our Services, to process transactions, to send you related information, and to communicate with you. We may also use your information to personalize your experience and to monitor and analyze usage and trends to improve your experience with our Services.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">3. Disclosure of Your Information</h4>
          <p>
            We may share your information with third-party service providers to help us provide our Services, to comply with legal obligations, to protect and defend our rights and property, to prevent fraud, or with your consent or at your direction.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">4. Security of Your Information</h4>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">5. Your Choices</h4>
          <p>
            You may at any time review or change the information in your account or terminate your account by contacting us. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases.
          </p>
        </div>
      )
    },
    {
      title: "Anti-Money Laundering Policy",
      content: (
        <div className="space-y-4">
          <p>
            WellVest is committed to preventing money laundering and any activity that facilitates money laundering or the funding of terrorist or criminal activities. We implement and maintain robust anti-money laundering (AML) procedures to ensure compliance with applicable laws and regulations.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">1. Client Due Diligence</h4>
          <p>
            We conduct thorough due diligence on all clients before establishing a business relationship. This includes verifying client identity, assessing the nature of their business, and understanding the source of their funds.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">2. Monitoring Transactions</h4>
          <p>
            We continuously monitor client transactions for suspicious activities. Any unusual or potentially suspicious transactions are flagged for review and, if necessary, reported to the appropriate authorities.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">3. Record Keeping</h4>
          <p>
            We maintain records of all client identification documents, transaction histories, and due diligence findings for a minimum period as required by law.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">4. Staff Training</h4>
          <p>
            All WellVest employees receive regular training on AML policies and procedures, including how to identify and report suspicious activities.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">5. Prohibited Activities</h4>
          <p>
            WellVest explicitly prohibits the use of our services for money laundering, terrorist financing, tax evasion, or any other illegal activities. We reserve the right to refuse service, terminate accounts, and report suspicious activities to relevant authorities.
          </p>
        </div>
      )
    },
    {
      title: "Disclaimer",
      content: (
        <div className="space-y-4">
          <p>
            The information provided on the WellVest website and through our services is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">1. No Financial Advice</h4>
          <p>
            The content on our website is not intended to be a substitute for professional financial advice. Always seek the advice of qualified financial advisors with any questions you may have regarding financial decisions.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">2. Investment Risks</h4>
          <p>
            Investing involves risk, including the possible loss of principal. Past performance is not indicative of future results. Any investment information contained on our website or provided through our services is not a recommendation to buy or sell any securities.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">3. Third-Party Links</h4>
          <p>
            Our website may contain links to third-party websites. We have no control over the content, privacy policies, or practices of these websites and assume no responsibility for them.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">4. Limitation of Liability</h4>
          <p>
            In no event shall WellVest, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>
          
          <h4 className="text-lg font-semibold mt-4">5. Governing Law</h4>
          <p>
            These disclaimers and any disputes relating to these disclaimers are subject to the laws of India, without regard to its conflict of law provisions.
          </p>
        </div>
      )
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-navy-header to-navy-header/90">
        <div className="absolute inset-0 bg-navy-header/70"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">Legal</h1>
            <nav className="text-lg">
              <span className="text-gray-300">Home</span>
              <span className="mx-2 text-orange-brand">/</span>
              <span className="text-white">Legal</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Legal Content */}
      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-text-dark mb-6">
                Legal Information
              </h2>
              <p className="text-lg text-text-light">
                At WellVest, we are committed to transparency and compliance with all applicable laws and regulations. 
                Please review the following legal documents carefully to understand your rights and our obligations.
              </p>
            </div>

            <div className="space-y-6">
              {legalSections.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-card overflow-hidden">
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-2xl font-bold text-text-dark">
                      {section.title}
                    </h3>
                    {openSection === index ? (
                      <ChevronUp className="w-6 h-6 text-orange-brand" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-orange-brand" />
                    )}
                  </button>
                  
                  {openSection === index && (
                    <div className="px-6 py-6 border-t border-gray-100">
                      <div className="prose max-w-none text-text-light">
                        {section.content}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
