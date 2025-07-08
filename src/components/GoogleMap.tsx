const GoogleMap = () => {
  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl overflow-hidden shadow-hero animate-fade-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3030245530825!2d77.11402491508555!3d28.647446982412186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0375c4bc3c7d%3A0x8b09b97a1afb71b4!2sRajouri%20Garden%2C%20Delhi!5e0!3m2!1sen!2sin!4v1657123456789!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="wellvest Rajouri Garden Office Location"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;