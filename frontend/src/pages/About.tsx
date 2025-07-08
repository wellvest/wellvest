import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-navy-header to-navy-header/90">
        <div className="absolute inset-0 bg-navy-header/70"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">About</h1>
            <nav className="text-lg">
              <span className="text-gray-300">Home</span>
              <span className="mx-2 text-orange-brand">/</span>
              <span className="text-white">About</span>
            </nav>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="text-orange-brand font-semibold text-lg">About Company</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-text-dark mb-8">
              About Us
            </h2>

            <div className="space-y-6 text-lg text-text-light leading-relaxed">
              <p>
                Welcome to <strong>WellVest</strong>, a financial solutions provider dedicated to empowering individuals and fostering transparent, sustainable growth. With a robust foundation built on integrity, trust, and innovation, we aim to redefine financial partnerships and set a benchmark for excellence in fund management.
              </p>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-text-dark mb-4">Our Mission</h3>
                <p>
                  At WellVest, our mission is clear: to create opportunities for individuals to achieve their financial goals through structured, secure, and compliant financial plans. We believe in empowering our patrons and channel partners with tailored solutions that prioritize both growth and security.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-text-dark mb-6">Our Core Values</h3>
                <div className="grid gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-card">
                    <h4 className="text-xl font-semibold text-text-dark mb-3">Transparency</h4>
                    <p>Open and honest communication is at the heart of everything we do. Our plans are straightforward, and our processes are designed to ensure clarity at every step.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-card">
                    <h4 className="text-xl font-semibold text-text-dark mb-3">Legal Compliance</h4>
                    <p>We adhere strictly to all applicable laws and regulations, including tax laws and anti-money laundering measures. This unwavering commitment ensures that all financial activities conducted through wellvest are ethical and lawful.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-card">
                    <h4 className="text-xl font-semibold text-text-dark mb-3">Integrity</h4>
                    <p>Our reputation is built on trust. We maintain the highest standards of integrity in every interaction and transaction.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-card">
                    <h4 className="text-xl font-semibold text-text-dark mb-3">Accountability</h4>
                    <p>At WellVest, we take full responsibility for our actions, ensuring that our partners and patrons receive the highest level of service and support.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-text-dark mb-4">Our Commitment to Ethical Practices</h3>
                <p>
                  We take a <strong>stern stance against money laundering and tainted funds</strong>. Every transaction is vetted and processed in strict compliance with regulatory standards to ensure that only legitimate funds flow through our systems. By implementing rigorous checks and protocols, we safeguard the financial ecosystem for all our stakeholders.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-text-dark mb-6">Why Choose WellVest?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-orange-brand/10 to-orange-brand/5 p-6 rounded-xl">
                    <h4 className="text-xl font-semibold text-text-dark mb-3">Personalized Investment Strategies</h4>
                    <p>Our carefully crafted financial plans are tailored to your unique goals and risk tolerance, designed to deliver attractive and reliable returns through diversified investment portfolios.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-6 rounded-xl">
                    <h4 className="text-xl font-semibold text-text-dark mb-3">Compliance-First Approach</h4>
                    <p>From <strong>TDS deductions</strong> on payouts to thorough vetting of all contributions, we leave no stone unturned in meeting legal requirements.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-6 rounded-xl">
                    <h4 className="text-xl font-semibold text-text-dark mb-3">Partner Empowerment</h4>
                    <p>We empower our channel partners with the tools, resources, and incentives needed to thrive and achieve their goals.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-6 rounded-xl">
                    <h4 className="text-xl font-semibold text-text-dark mb-3">Sustainability</h4>
                    <p>Our financial solutions are designed for long-term viability, ensuring that your growth is consistent and secure.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-text-dark mb-4">Our Vision</h3>
                <p>
                  We envision a world where financial growth is accessible, transparent, and ethical. By staying true to our values and prioritizing compliance and integrity, we aim to build a legacy of trust and excellence in the financial industry.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-text-dark mb-4">Join Us</h3>
                <p className="mb-8">
                  When you choose wellvest, you're not just opting for a financial plan—you're partnering with a company that values integrity, transparency, and your success. Together, we can achieve sustainable growth and make a meaningful impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-text-dark mb-4">
            Are You Ready? Start Investing
          </h2>
          <p className="text-xl text-text-light mb-8">
            Get your Quote or Call <a href="tel:+91 9557042342" className="text-orange-brand hover:underline">+91 9557042342</a>
          </p>
          <Button variant="wellvest" size="lg">
            Start Now
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;