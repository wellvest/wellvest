const GoogleMap = () => {
  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl overflow-hidden shadow-hero animate-fade-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.4063475625208!2d78.09662117554866!3d29.910201774991418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909491f485dd999%3A0x7f417c753c0e944a!2swellvest!5e0!3m2!1sen!2sin!4v1716727514586!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="wellvest Office Location"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;