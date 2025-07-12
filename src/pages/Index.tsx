import Layout from '@/components/Layout';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import CallbackSection from '@/components/CallbackSection';
import FAQSection from '@/components/FAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <AboutSection />
      <StatsSection />
      <CallbackSection />
      <FAQSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
