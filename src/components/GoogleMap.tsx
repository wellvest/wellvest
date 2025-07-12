const GoogleMap = () => {
  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl overflow-hidden shadow-hero animate-fade-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4034957150213!2d72.82291431490783!3d19.13467798705431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b88ff67733%3A0x7c1b7e6a8dbf7a3!2sSundervan%20Complex%2C%20Lokhandwala%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1657123456789!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="wellvest 10th Floor, Lokhandwala, 10th Floor, Sundervan Complex Road, Sundervan Complex, Shastri Nagar, Lokhandwala, Andheri West, Mumbai 400053"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;