import PricingSection from "../components/PricingSection";

const Pricing = () => {
  return (
    <main>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">Pay-Per-Use 가격 정책</h1>
          <p className="lead text-muted">
            즉시성과 유연성을 극대화, 전문가별 요율 차별화
          </p>
        </div>
      </div>
      <PricingSection />
    </main>
  );
};

export default Pricing;
