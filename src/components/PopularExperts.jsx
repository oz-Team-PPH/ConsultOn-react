import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PopularExperts = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();

  // 인기 전문가 데이터
  const popularExperts = [
    {
      id: 1,
      name: '김상담',
      department: '임상심리학과',
      experience: '15년차',
      specialty: '멘토링/코칭',
      consultations: 234,
      rating: 4.9,
      category: '심리상담',
      description: '임상심리학 박사, 다양한 심리 문제에 대한 전문적인 상담을 제공합니다.'
    },
    {
      id: 2,
      name: '이전문',
      department: 'HR컨설팅',
      experience: '12년차',
      specialty: '커리어코칭',
      consultations: 189,
      rating: 4.8,
      category: '커리어상담',
      description: 'HR 전문가, 커리어 개발과 이직 준비에 대한 실질적인 조언을 제공합니다.'
    },
    {
      id: 3,
      name: '박가족',
      department: '가족치료센터',
      experience: '18년차',
      specialty: '가족상담',
      consultations: 156,
      rating: 4.7,
      category: '가족상담',
      description: '가족치료 전문가, 가족 간 소통과 관계 개선에 특화되어 있습니다.'
    },
    {
      id: 4,
      name: '최청소년',
      department: '청소년상담센터',
      experience: '10년차',
      specialty: '청소년상담',
      consultations: 203,
      rating: 4.6,
      category: '청소년상담',
      description: '청소년 전문 상담사, 10대들의 고민을 이해하고 공감하는 상담을 제공합니다.'
    },
    {
      id: 5,
      name: '정건강',
      department: '건강관리센터',
      experience: '8년차',
      specialty: '건강코칭',
      consultations: 78,
      rating: 4.5,
      category: '건강상담',
      description: '건강관리 전문가, 개인 맞춤형 운동과 영양 상담을 제공합니다.'
    },
    {
      id: 6,
      name: '한교육',
      department: '교육컨설팅',
      experience: '14년차',
      specialty: '교육상담',
      consultations: 134,
      rating: 4.8,
      category: '교육상담',
      description: '교육 전문가, 효과적인 학습 방법과 진학 준비를 도와드립니다.'
    },
    {
      id: 7,
      name: '조법률',
      department: '법무법인',
      experience: '20년차',
      specialty: '법률상담',
      consultations: 89,
      rating: 4.9,
      category: '법률상담',
      description: '변호사, 다양한 법률 문제에 대한 전문적인 상담을 제공합니다.'
    },
    {
      id: 8,
      name: '윤재무',
      department: '재무컨설팅',
      experience: '16년차',
      specialty: '재무상담',
      consultations: 145,
      rating: 4.7,
      category: '재무상담',
      description: '재무 전문가, 투자와 자산 관리에 대한 실질적인 조언을 제공합니다.'
    }
  ];

  // 카테고리 데이터
  const categories = [
    { id: 1, name: '인사노무', icon: '👥', count: 156 },
    { id: 2, name: '기획전략', icon: '📊', count: 234 },
    { id: 3, name: 'IT개발', icon: '💻', count: 189 },
    { id: 4, name: '데이터', icon: '📈', count: 98 },
    { id: 5, name: '생산', icon: '🏭', count: 145 },
    { id: 6, name: '진학상담', icon: '🎓', count: 267 },
    { id: 7, name: '자소서', icon: '📝', count: 178 }
  ];

  // 무한 루프를 위한 전문가 데이터 복제 (3번 반복)
  const duplicatedExperts = [...popularExperts, ...popularExperts, ...popularExperts];

  // 자동 스크롤 (무한 루프)
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const cardWidth = 350; // 카드 너비 + 간격
        const maxScroll = popularExperts.length * cardWidth; // 원본 데이터 길이만큼만 스크롤
        
        if (prev >= maxScroll) {
          // 끝에 도달하면 처음으로 순간 이동 (부드러운 전환을 위해)
          return 0;
        }
        return prev + 1;
      });
    }, 50); // 부드러운 스크롤을 위해 빠른 간격

    return () => clearInterval(interval);
  }, [popularExperts.length]);

  const handleExpertClick = (expert) => {
    navigate('/expert-search', { 
      state: { selectedExpert: expert } 
    });
  };

  const handleCategoryClick = (category) => {
    navigate('/expert-search', { 
      state: { selectedCategory: category } 
    });
  };

  const handleMoreCategories = () => {
    navigate('/expert-search');
  };

  return (
    <section
      id="popular-experts"
      className="py-5"
      style={{
        backgroundColor: "#ffffff",
        marginBottom: "4rem"
      }}
    >
      <div className="container">
        {/* 타이틀 */}
        <div className="text-center" style={{ marginTop: "3rem" }}>
          <h2 className="fw-bold text-dark mb-3" style={{ fontSize: "2.5rem" }}>인기 전문가들을 만나보세요</h2>
          <p className="text-muted mb-0" style={{ fontSize: "1.25rem", marginBottom: "3rem" }}>
            다양한 분야의 전문가들이 여러분을 기다리고 있습니다
          </p>
        </div>

        {/* 전문가 파노라마 */}
        <div className="position-relative overflow-hidden">
          <div 
            className="d-flex gap-4"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              transition: 'transform 0.1s linear',
              width: `${duplicatedExperts.length * 350}px`, // 복제된 데이터 길이
            }}
          >
            {duplicatedExperts.map((expert, index) => (
              <div 
                key={`${expert.id}-${index}`} 
                className="expert-card-wrapper"
                style={{ width: '320px', flexShrink: 0 }}
              >
                <div 
                  className="card h-100 cursor-pointer"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleExpertClick(expert)}
                >
                  <div className="card-body p-3">
                    <div className="text-start">
                      {/* 전문가 정보 */}
                      <div className="mb-2">
                        <div className="d-flex align-items-center gap-2 mb-1">
                          <h6 className="fw-bold text-dark mb-0">{expert.name}</h6>
                          <span className="badge bg-primary bg-opacity-10 text-primary">
                            {expert.specialty}
                          </span>
                        </div>
                        
                        <p className="text-muted small mb-2">
                          {expert.department} {expert.experience}
                        </p>
                        
                        <p className="text-muted small mb-2">
                          {expert.description}
                        </p>

                        {/* 배지 - 가로 나열 */}
                        <div className="d-flex align-items-center gap-3">
                          <div className="d-flex align-items-center gap-1">
                            <span className="fw-bold text-primary small">{expert.consultations}</span>
                            <span className="text-muted small">건</span>
                          </div>
                          <div className="text-muted small">|</div>
                          <div className="d-flex align-items-center gap-1">
                            <span className="fw-bold text-warning small">★ {expert.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 프로필보기 버튼 */}
                  <div className="card-footer bg-transparent border-0 p-3">
                    <button 
                      className="btn btn-modern w-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleExpertClick(expert);
                      }}
                    >
                      프로필보기
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 그라데이션 오버레이 */}
          <div 
            className="position-absolute top-0 start-0 h-100"
            style={{
              width: '100px',
              background: 'linear-gradient(90deg, #ffffff 0%, transparent 100%)',
              zIndex: 1,
              pointerEvents: 'none'
            }}
          />
          <div 
            className="position-absolute top-0 end-0 h-100"
            style={{
              width: '100px',
              background: 'linear-gradient(90deg, transparent 0%, #ffffff 100%)',
              zIndex: 1,
              pointerEvents: 'none'
            }}
          />
        </div>

        {/* 카테고리 섹션 */}
        <div className="mt-5">
          <div className="text-center mb-4">
            <h5 className="fw-semibold text-dark mb-3">카테고리별 전문가</h5>
          </div>
          
          <div className="d-flex justify-content-center align-items-center gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                className="btn btn-category"
                onClick={() => handleCategoryClick(category)}
              >
                <span className="category-icon-small me-1">{category.icon}</span>
                <span className="category-name">{category.name}</span>
                <span className="category-count">({category.count})</span>
              </button>
            ))}
            <button
              className="btn btn-more-categories"
              onClick={handleMoreCategories}
            >
              ...
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularExperts;
