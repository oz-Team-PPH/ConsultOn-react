import FeaturesSection from "../components/FeaturesSection";

const Features = () => {
  return (
    <main>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">서비스 기능</h1>
          <p className="lead text-muted">
            Consul+On의 다양한 기능들을 살펴보세요
          </p>
        </div>
      </div>
      <FeaturesSection />
    </main>
  );
};

export default Features;
