import "../styles/components/CTA.css";

const CTASection = () => {
  const handleStartFree = () => {
    console.log("무료로 시작하기 클릭");
  };

  return (
    <section
      className="cta-section w-100"
      style={{
        background: "linear-gradient(135deg, #7c3aed, #5d5fff)",
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        padding: "4rem 0",
        color: "white",
      }}
    >
      <div className="container text-center">
        <h2 className="display-4 fw-bold mb-3">
          지금 시작하고 15분만에 상담을 시작해보세요
        </h2>
        <p className="lead mb-4">간단히 AI와 대화나누고 고민을 해결해보세요</p>
        <button
          className="btn btn-light btn-lg px-4 py-2 fw-bold"
          onClick={handleStartFree}
          style={{
            fontSize: "1.1rem",
            borderRadius: "50px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
          }}
        >
          무료로 시작하기
        </button>
      </div>
    </section>
  );
};

export default CTASection;
