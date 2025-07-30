import { useState } from "react";

const Hero = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // AI 사전응답 로직 구현
    console.log("AI 사전응답 요청:", inputValue);
  };

  return (
    <section
      id="hero"
      className="text-center bg-light w-100"
      style={{
        minHeight: "100vh",
        paddingTop: "76px", // 네비게이션 바 높이만큼 상단 여백
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container">
        {/* 상단 배지 */}
        <span className="badge rounded-pill badge-gradient px-4 py-2 d-inline-flex align-items-center mb-3">
          <svg
            className="badge-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          AI기반 컨설팅 도구
        </span>

        {/* 메인 헤딩 */}
        <div className="mt-3 mb-5">
          <h1 className="display-4 fw-bold">
            <span className="gradient-text">AI와 함께</span>
            <br />
            <span className="subtext">전문가와 상담하세요</span>
          </h1>
        </div>

        {/* 서브 헤딩 */}
        <div className="mb-5">
          <p className="lead text-muted">
            AI와 미리 상담 후 전문가와 만나보세요.
          </p>
        </div>

        {/* 입력 그룹 (큰 사이즈) */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            <form onSubmit={handleSubmit}>
              <div className="input-group input-group-lg input-group-custom mb-4">
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="상담 주제를 간단히 입력하세요"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="btn btn-custom" type="submit">
                  AI 사전응답
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* 4단계 설명 헤딩 */}
        <div className="mb-4">
          <p className="fs-5 text-secondary">4단계로 진행되는 컨설팅 서비스</p>
        </div>

        {/* 4단계 카드 */}
        <div className="row gx-4 gy-4 justify-content-center mb-5">
          <div className="col-6 col-md-3">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <strong>1. 질문 입력</strong>
              <br />
              <small className="text-muted">
                "예) 마케팅 전략 어떻게 짜죠?"
              </small>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <strong>2. AI 사전응답</strong>
              <br />
              <small className="text-muted">
                "예) 타겟 분석 후 가이드 제공"
              </small>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <strong>3. 전문가 매칭</strong>
              <br />
              <small className="text-muted">"AI 추천 기반 매칭 서비스"</small>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <strong>4. 예약 &amp; 알림</strong>
              <br />
              <small className="text-muted">"예약 완료 후 푸시 알림"</small>
            </div>
          </div>
        </div>

        {/* 통계 섹션 */}
        <div className="row text-center mt-5 pt-4">
          <div className="col-4 col-md-4 mb-3">
            <h2 className="display-6 fw-bold">4300+</h2>
            <p className="text-muted small">이용자 수</p>
          </div>
          <div className="col-4 col-md-4 mb-3">
            <h2 className="display-6 fw-bold">15분</h2>
            <p className="text-muted small">평균 매칭시간</p>
          </div>
          <div className="col-4 col-md-4 mb-3">
            <h2 className="display-6 fw-bold">300+</h2>
            <p className="text-muted small">등록된 전문가 수</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
