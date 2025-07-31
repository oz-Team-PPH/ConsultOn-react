import React, { useState } from "react";

const LifeTipsSection = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(2); // 가운데 질문 인덱스

  const lifeTipsFeatures = [
    {
      id: 'necktie',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "넥타이 매는 법",
      description: "정장을 입을 때마다 고민이었던 넥타이 매기, 5분만에 완벽하게!",
      bgColor: "bg-primary"
    },
    {
      id: 'cooking',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "간단한 요리 팁",
      description: "요리 초보도 따라할 수 있는 10분 요리, 맛있고 건강하게!",
      bgColor: "bg-success"
    },
    {
      id: 'styling',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "스타일링 조언",
      description: "체형별 코디 팁, 나에게 맞는 스타일을 찾아보세요!",
      bgColor: "bg-warning"
    },
    {
      id: 'life-hacks',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "생활 꿀팁",
      description: "집 정리부터 시간 관리까지, 일상의 모든 궁금증 해결!",
      bgColor: "bg-info"
    }
  ];

  const questions = [
    "수많은 품목관리와 수량 확인에 지치셨나요?",
    "재고 부족으로 곤란하신 적 있나요?",
    "바코드 시스템 도입을 고려 중이신가요?",
    "아직도 판매 따로, 출고 따로 나눠서 관리하세요?",
    "넥타이 매는 법을 모르시나요?",
    "요리할 때 항상 맛이 없으신가요?",
    "스타일링에 고민이 많으신가요?",
    "집 정리가 어려우신가요?",
    "시간 관리가 어려우신가요?",
    "수많은 품목관리와 수량 확인에 지치셨나요?",
    "재고 부족으로 곤란하신 적 있나요?",
    "바코드 시스템 도입을 고려 중이신가요?",
    "아직도 판매 따로, 출고 따로 나눠서 관리하세요?",
    "넥타이 매는 법을 모르시나요?",
    "요리할 때 항상 맛이 없으신가요?",
    "스타일링에 고민이 많으신가요?",
    "집 정리가 어려우신가요?",
    "시간 관리가 어려우신가요?"
  ];

  return (
    <section className="life-tips-section py-5" style={{ backgroundColor: "#ffffff", marginBottom: "4rem" }}>
      <div className="container">
        <div className="text-center" style={{ marginTop: "3rem" }}>
          <h3 className="h2 fw-bold text-dark mb-3" style={{ fontSize: "2.5rem" }}>
            전문가가 아니어도 상담할 수 있어요
          </h3>
          <p className="text-muted fs-5" style={{ fontSize: "1.25rem", marginBottom: "3rem" }}>
            일상의 작은 궁금증부터 전문적인 조언까지, 다양한 분야의 전문가들이 기다리고 있습니다
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {lifeTipsFeatures.map((feature) => (
            <div key={feature.id} className="col-md-4 col-lg-3">
              <div className="text-center p-4 bg-light rounded-3 h-100">
                <div className="mb-3">
                  <div className={`${feature.bgColor} bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center`} style={{ width: '60px', height: '60px' }}>
                    {feature.icon}
                  </div>
                </div>
                <h5 className="fw-bold mb-2">{feature.title}</h5>
                <p className="text-muted small mb-0">
                  "{feature.description}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <div className="d-inline-flex align-items-center gap-2 bg-primary bg-opacity-10 px-4 py-2 rounded-pill mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="text-primary fw-semibold">5분 상담으로 해결되는 일상의 궁금증</span>
          </div>

          {/* 스크롤되는 질문 박스 */}
          <div className="question-scroll-container mx-auto" style={{ maxWidth: '800px' }}>
            <div className="question-scroll-box position-relative overflow-hidden" style={{ height: '200px', border: '2px solid #dee2e6', borderRadius: '8px', background: 'transparent' }}>
              <div className="question-scroll-content">
                {questions.map((question, index) => (
                  <div
                    key={index}
                    className={`question-item ${index % 9 === 2 ? 'highlighted' : 'text-muted small'}`}
                    style={{ 
                      height: '50px', 
                      display: 'flex', 
                      alignItems: 'center',
                      padding: '10px 20px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {question}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeTipsSection; 