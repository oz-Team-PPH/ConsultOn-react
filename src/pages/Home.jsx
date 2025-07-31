import Hero from "../components/Hero";
import PopularExperts from "../components/PopularExperts";
import FeaturesSection from "../components/FeaturesSection";
import LifeTipsSection from "../components/LifeTipsSection";
import PricingSection from "../components/PricingSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <PopularExperts />
      <FeaturesSection />
      <LifeTipsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Home;
