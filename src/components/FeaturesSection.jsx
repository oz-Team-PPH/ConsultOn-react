import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const featureCardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // 초기 카드 상태 설정 및 Observer 적용
    featureCardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.4s ease, transform 0.4s ease";

        // 지연된 애니메이션
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 100 + index * 100);

        observer.observe(card);
      }
    });

    return () => {
      featureCardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  const handleFeatureClick = (featureId) => {
    switch (featureId) {
      case 'ai-qa':
        navigate('/ai-qa');
        break;
      case 'expert-search':
        navigate('/expert-search');
        break;
      case 'video-consultation':
        navigate('/video-consultation');
        break;
      case 'recording-summary':
        navigate('/recording-summary');
        break;
      case 'todo-notification':
        navigate('/todo-notification');
        break;
      case 'expert-dashboard':
        navigate('/expert-dashboard');
        break;
      default:
        break;
    }
  };

  const features = [
    {
      id: 'ai-qa',
      icon: (
        <svg
          width="24"
          height="24"
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
      ),
      title: "AI Q&A",
      description:
        "인공지능이 사용자의 질문에 즉시 답변하여 빠르고 정확한 정보를 제공합니다.",
      gradientClass: "gradient-1",
    },
    {
      id: 'expert-search',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "전문가 검색",
      description:
        "다양한 분야의 전문가를 쉽게 검색하고 원하는 조건에 맞는 상담자를 찾을 수 있습니다.",
      gradientClass: "gradient-2",
    },
    {
      id: 'video-consultation',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "화상 상담",
      description:
        "고화질 화상 통화를 통해 실시간으로 전문가와 직접 상담할 수 있습니다.",
      gradientClass: "gradient-3",
    },
    {
      id: 'recording-summary',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "녹화+요약",
      description:
        "상담 내용을 자동으로 녹화하고 핵심 내용을 요약하여 언제든지 확인할 수 있습니다.",
      gradientClass: "gradient-4",
    },
    {
      id: 'todo-notification',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "To-Do 알림",
      description:
        "중요한 일정과 할 일을 자동으로 관리하고 알림을 통해 놓치지 않도록 도와줍니다.",
      gradientClass: "gradient-5",
    },
    {
      id: 'expert-dashboard',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "전문가 대시보드",
      description:
        "전문가가 상담 현황과 고객 관리를 한눈에 파악할 수 있는 맞춤형 대시보드를 제공합니다.",
      gradientClass: "gradient-6",
    },
  ];

  return (
    <section
      className="features-section"
      style={{
        backgroundColor: "#f8f9fa",
        marginBottom: "4rem"
      }}
    >
      <div className="container">
        <div className="text-center" style={{ marginTop: "3rem" }}>
          <h2 className="main-title" style={{ fontSize: "2.5rem" }}>강력한 AI기반 상담 도구</h2>
          <p className="main-subtitle" style={{ fontSize: "1.25rem", marginBottom: "3rem" }}>
            복잡한 과정없이 전문적인 상담을 받을 수 있습니다
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureCardsRef.current[index] = el)}
              className="feature-card cursor-pointer"
              onClick={() => handleFeatureClick(feature.id)}
            >
              <div className={`feature-icon ${feature.gradientClass}`}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
