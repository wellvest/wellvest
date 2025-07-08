import contactHero from '@/assets/contact-hero.jpg';

const ContactHero = () => {
  return (
    <section className="relative h-96 bg-gradient-to-r from-navy-header to-navy-header/90">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={contactHero}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-header/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">Contact</h1>
          <nav className="text-lg">
            <span className="text-gray-300">Home</span>
            <span className="mx-2 text-orange-brand">/</span>
            <span className="text-white">Contact</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;