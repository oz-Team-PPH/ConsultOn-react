import Hero from "../components/Hero";
import HowToVideo from "../components/HowToVideo";
import FeaturesSection from "../components/FeaturesSection";
import PricingSection from "../components/PricingSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <HowToVideo />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Home;
