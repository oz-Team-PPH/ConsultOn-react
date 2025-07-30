import PricingSection from "../components/PricingSection";

const Pricing = () => {
  return (
    <main>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">가격 정책</h1>
          <p className="lead text-muted">
            여러분의 필요에 맞는 플랜을 선택하세요
          </p>
        </div>
      </div>
      <PricingSection />
    </main>
  );
};

export default Pricing;
