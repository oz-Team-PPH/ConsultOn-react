const PricingSection = () => {
  const plans = [
    {
      name: "무료 플랜",
      price: "₩0 /월",
      features: [
        { text: "고민 진단 설문 & AI 분석", enabled: true },
        { text: "선배/실무자 연결 (월 1회)", enabled: true },
        { text: "전문가 연결", enabled: false },
        { text: "PDF 리포트 다운로드", enabled: false },
        { text: "경험 콘텐츠 열람", enabled: false },
      ],
      buttonText: "무료로 시작",
      buttonClass: "default",
      recommend: false,
    },
    {
      name: "Starter 플랜",
      price: "₩9,900 /월",
      features: [
        { text: "고민 진단 설문 & AI 분석", enabled: true },
        { text: "선배/실무자 연결 (무제한)", enabled: true },
        { text: "PDF 리포트 다운로드", enabled: true },
        { text: "경험 콘텐츠 열람", enabled: true },
        { text: "전문가 연결", enabled: false },
      ],
      buttonText: "시작하기",
      buttonClass: "default",
      recommend: false,
    },
    {
      name: "Pro 플랜",
      price: "₩49,900 /월",
      features: [
        { text: "고민 진단 설문 & AI 분석", enabled: true },
        { text: "선배/실무자 연결 (무제한)", enabled: true },
        { text: "전문가 연결", enabled: true },
        { text: "PDF 리포트 다운로드", enabled: true },
        { text: "경험 콘텐츠 열람", enabled: true },
        { text: "우선 상담 예약 기능", enabled: true },
      ],
      buttonText: "업그레이드",
      buttonClass: "recommend",
      recommend: true,
    },
  ];

  const handlePlanSelect = (planName) => {
    console.log("선택된 플랜:", planName);
  };

  return (
    <section className="pricing-section">
      <div className="container">
        <h2 className="pricing-title">합리적인 가격으로 시작하세요</h2>
        <p className="pricing-subtitle">
          무료로 시작하고 필요에 따라 업그레이드하세요
        </p>

        <div className="plans">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`plan ${plan.recommend ? "recommend" : ""}`}
            >
              {plan.recommend && <div className="badge">추천</div>}
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={feature.enabled ? "enabled" : "disabled"}
                  >
                    {feature.text}
                  </li>
                ))}
              </ul>
              <button
                className={plan.buttonClass}
                onClick={() => handlePlanSelect(plan.name)}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
