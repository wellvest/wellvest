import Layout from '@/components/Layout';
import ContactHero from '@/components/ContactHero';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import CallbackSection from '@/components/CallbackSection';
import GoogleMap from '@/components/GoogleMap';

const Contact = () => {
  return (
    <Layout>
      <ContactHero />
      <ContactInfo />
      <CallbackSection />
      <ContactForm />
      <GoogleMap />
    </Layout>
  );
};

export default Contact;