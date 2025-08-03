import React from 'react';

const PayPerUsePricing = () => {
  const pricingTiers = [
    {
      name: 'Standard',
      userPrice: 1800,
      description: '기본 티어',
      color: 'primary',
      recommend: false
    },
    {
      name: 'Senior',
      userPrice: 2500,
      description: '고급 티어',
      color: 'warning',
      recommend: true
    },
    {
      name: 'Premium',
      userPrice: 3500,
      description: '프리미엄 티어',
      color: 'danger',
      recommend: false
    }
  ];

  const calculateStudentPrice = (userPrice) => Math.round(userPrice * 0.8);
  const calculateExpertRevenue = (studentPrice) => Math.round(studentPrice * 0.9);
  const calculatePlatformFee = (studentPrice) => Math.round(studentPrice * 0.1);

  const handlePlanSelect = (planName) => {
    console.log("선택된 플랜:", planName);
  };

  return (
    <section className="pricing-section" style={{ backgroundColor: "#f8f9fa", marginBottom: "4rem" }}>
      <div className="container">
        <div className="text-center" style={{ marginTop: "3rem" }}>
          <h2 className="pricing-title" style={{ fontSize: "2.5rem" }}>Pay-Per-Use</h2>
          <p className="pricing-subtitle" style={{ fontSize: "1.25rem", marginBottom: "3rem" }}>
            즉시성과 유연성을 극대화, 전문가별 요율 차별화
          </p>
        </div>

        <div className="plans">
          {pricingTiers.map((tier, index) => {
            const studentPrice = calculateStudentPrice(tier.userPrice);
            const expertRevenue = calculateExpertRevenue(studentPrice);
            const platformFee = calculatePlatformFee(studentPrice);
            
            return (
              <div
                key={index}
                className={`plan ${tier.recommend ? "recommend" : ""}`}
              >
                {tier.recommend && <div className="badge">추천</div>}
                <h3>{tier.name}</h3>
                <p className="price">₩{tier.userPrice.toLocaleString()}/분</p>
                <ul>
                  <li className="enabled">
                    <strong>사용자 요율:</strong> ₩{tier.userPrice.toLocaleString()}/분
                  </li>
                  <li className="enabled">
                    <strong>학생 요율:</strong> ₩{studentPrice.toLocaleString()}/분 (20% 할인)
                  </li>
                  <li className="enabled">
                    <strong>전문가 실수령액:</strong> ₩{expertRevenue.toLocaleString()}/분 (90%)
                  </li>
                  <li className="enabled">
                    <strong>플랫폼 수수료:</strong> ₩{platformFee.toLocaleString()}/분 (10%)
                  </li>
                </ul>
                <button
                  className={tier.recommend ? "recommend" : "default"}
                  onClick={() => handlePlanSelect(tier.name)}
                >
                  선택하기
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-5">
          <div className="bg-white rounded-3 p-4 shadow-sm">
            <h5 className="fw-bold text-dark mb-3">투명한 가격 정책</h5>
            <p className="text-muted mb-0">
              모든 요금은 분 단위로 계산되며, 실제 상담 시간에만 비용이 발생합니다.
              학생 인증 시 20% 할인이 자동 적용됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayPerUsePricing; 