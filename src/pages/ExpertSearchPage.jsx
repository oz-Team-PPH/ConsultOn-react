// src/pages/ExpertSearchPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExpertSearchPage() {
  const [experts, setExperts] = useState([]);
  const [filteredExperts, setFilteredExperts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 전문가 데이터 시뮬레이션
  useEffect(() => {
    const mockExperts = [
      {
        id: 1,
        name: '김상담',
        category: '심리상담',
        specialty: '우울증, 불안장애, 스트레스 관리',
        experience: '15년',
        rating: 4.8,
        reviewCount: 127,
        price: '50,000원/시간',
        image: 'https://via.placeholder.com/100x100/4F46E5/FFFFFF?text=김',
        description: '임상심리학 박사, 다양한 심리 문제에 대한 전문적인 상담을 제공합니다.',
        available: true,
        languages: ['한국어', '영어'],
        certifications: ['임상심리사', '상담심리사']
      },
      {
        id: 2,
        name: '이전문',
        category: '커리어상담',
        specialty: '이직, 진로상담, 면접 준비',
        experience: '12년',
        rating: 4.9,
        reviewCount: 89,
        price: '60,000원/시간',
        image: 'https://via.placeholder.com/100x100/059669/FFFFFF?text=이',
        description: 'HR 전문가, 커리어 개발과 이직 준비에 대한 실질적인 조언을 제공합니다.',
        available: true,
        languages: ['한국어'],
        certifications: ['HR 전문가', '커리어 코치']
      },
      {
        id: 3,
        name: '박가족',
        category: '가족상담',
        specialty: '부부상담, 자녀교육, 가족 갈등',
        experience: '18년',
        rating: 4.7,
        reviewCount: 156,
        price: '55,000원/시간',
        image: 'https://via.placeholder.com/100x100/DC2626/FFFFFF?text=박',
        description: '가족치료 전문가, 가족 간 소통과 관계 개선에 특화되어 있습니다.',
        available: false,
        languages: ['한국어'],
        certifications: ['가족치료사', '부부상담사']
      },
      {
        id: 4,
        name: '최청소년',
        category: '청소년상담',
        specialty: '학교생활, 진로고민, 대인관계',
        experience: '10년',
        rating: 4.6,
        reviewCount: 203,
        price: '45,000원/시간',
        image: 'https://via.placeholder.com/100x100/7C3AED/FFFFFF?text=최',
        description: '청소년 전문 상담사, 10대들의 고민을 이해하고 공감하는 상담을 제공합니다.',
        available: true,
        languages: ['한국어'],
        certifications: ['청소년상담사', '학교상담사']
      },
      {
        id: 5,
        name: '정건강',
        category: '건강상담',
        specialty: '운동, 영양, 생활습관',
        experience: '8년',
        rating: 4.5,
        reviewCount: 78,
        price: '40,000원/시간',
        image: 'https://via.placeholder.com/100x100/F59E0B/FFFFFF?text=정',
        description: '건강관리 전문가, 개인 맞춤형 운동과 영양 상담을 제공합니다.',
        available: true,
        languages: ['한국어'],
        certifications: ['건강관리사', '운동처방사']
      },
      {
        id: 6,
        name: '한교육',
        category: '교육상담',
        specialty: '학습방법, 진학상담, 시험준비',
        experience: '14년',
        rating: 4.8,
        reviewCount: 134,
        price: '55,000원/시간',
        image: 'https://via.placeholder.com/100x100/10B981/FFFFFF?text=한',
        description: '교육 전문가, 효과적인 학습 방법과 진학 준비를 도와드립니다.',
        available: true,
        languages: ['한국어', '영어'],
        certifications: ['교육상담사', '학습코치']
      }
    ];

    setExperts(mockExperts);
    setFilteredExperts(mockExperts);
    setLoading(false);
  }, []);

  // 필터링 로직
  useEffect(() => {
    let filtered = experts;

    // 카테고리 필터
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(expert => expert.category === selectedCategory);
    }

    // 경력 필터
    if (selectedExperience !== 'all') {
      filtered = filtered.filter(expert => {
        const expYears = parseInt(expert.experience);
        if (selectedExperience === 'junior') return expYears < 5;
        if (selectedExperience === 'mid') return expYears >= 5 && expYears < 10;
        if (selectedExperience === 'senior') return expYears >= 10;
        return true;
      });
    }

    // 평점 필터
    if (selectedRating !== 'all') {
      filtered = filtered.filter(expert => {
        if (selectedRating === 'high') return expert.rating >= 4.5;
        if (selectedRating === 'mid') return expert.rating >= 4.0 && expert.rating < 4.5;
        if (selectedRating === 'low') return expert.rating < 4.0;
        return true;
      });
    }

    // 검색어 필터
    if (searchTerm) {
      filtered = filtered.filter(expert =>
        expert.name.includes(searchTerm) ||
        expert.specialty.includes(searchTerm) ||
        expert.description.includes(searchTerm)
      );
    }

    setFilteredExperts(filtered);
  }, [experts, selectedCategory, selectedExperience, selectedRating, searchTerm]);

  const categories = [
    { id: 'all', name: '전체' },
    { id: '심리상담', name: '심리상담' },
    { id: '커리어상담', name: '커리어상담' },
    { id: '가족상담', name: '가족상담' },
    { id: '청소년상담', name: '청소년상담' },
    { id: '건강상담', name: '건강상담' },
    { id: '교육상담', name: '교육상담' }
  ];

  const experienceOptions = [
    { id: 'all', name: '전체' },
    { id: 'junior', name: '5년 미만' },
    { id: 'mid', name: '5-10년' },
    { id: 'senior', name: '10년 이상' }
  ];

  const ratingOptions = [
    { id: 'all', name: '전체' },
    { id: 'high', name: '4.5점 이상' },
    { id: 'mid', name: '4.0-4.5점' },
    { id: 'low', name: '4.0점 미만' }
  ];

  const handleExpertSelect = (expert) => {
    navigate('/consultation-options', { 
      state: { selectedExpert: expert } 
    });
  };

  const handleStartVideoConsultation = (expert) => {
    navigate('/video', { 
      state: { expert: expert, mode: 'immediate' } 
    });
  };

  const handleBookConsultation = (expert) => {
    navigate('/consultation-booking', { 
      state: { expert: expert } 
    });
  };

  if (loading) {
    return (
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-muted">전문가를 찾고 있습니다...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-light">
      {/* 헤더 */}
      <div className="bg-white shadow-sm border-bottom">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-3 mb-lg-0">
              <h1 className="h2 fw-bold text-dark mb-2">전문가 검색</h1>
              <p className="text-muted mb-0">다양한 분야의 전문가를 쉽게 검색하고 원하는 조건에 맞는 상담자를 찾을 수 있습니다</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* 필터 영역 */}
        <div className="card mb-4">
          <div className="card-body p-4">
            <div className="row g-3">
              {/* 검색 */}
              <div className="col-12 col-lg-6">
                <label className="form-label fw-semibold">검색</label>
                <input
                  type="text"
                  placeholder="전문가 이름, 전문분야로 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control"
                />
              </div>

              {/* 카테고리 필터 */}
              <div className="col-12 col-md-4 col-lg-2">
                <label className="form-label fw-semibold">카테고리</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="form-select"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* 경력 필터 */}
              <div className="col-12 col-md-4 col-lg-2">
                <label className="form-label fw-semibold">경력</label>
                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="form-select"
                >
                  {experienceOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* 평점 필터 */}
              <div className="col-12 col-md-4 col-lg-2">
                <label className="form-label fw-semibold">평점</label>
                <select
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(e.target.value)}
                  className="form-select"
                >
                  {ratingOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* 전문가 목록 */}
        <div className="row g-4">
          {filteredExperts.map((expert) => (
            <div key={expert.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100">
                {/* 전문가 정보 */}
                <div className="card-body">
                  <div className="d-flex align-items-start gap-3">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="rounded-circle"
                      width="64"
                      height="64"
                    />
                    <div className="flex-grow-1">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <h5 className="card-title mb-0">{expert.name}</h5>
                        {expert.available && (
                          <span className="badge bg-success">상담 가능</span>
                        )}
                      </div>
                      <p className="text-muted small mb-1">{expert.category}</p>
                      <p className="text-muted small mb-2">{expert.specialty}</p>
                      
                      {/* 평점 */}
                      <div className="d-flex align-items-center gap-2 mb-3">
                        <div className="d-flex align-items-center">
                          <span className="text-warning">★</span>
                          <span className="fw-semibold ms-1">
                            {expert.rating}
                          </span>
                        </div>
                        <span className="text-muted small">
                          ({expert.reviewCount}리뷰)
                        </span>
                      </div>

                      <p className="card-text small mb-3">{expert.description}</p>
                      
                      <div className="d-flex align-items-center justify-content-between small text-muted mb-3">
                        <span>경력 {expert.experience}</span>
                        <span className="fw-semibold text-dark">{expert.price}</span>
                      </div>

                      {/* 자격증 */}
                      <div className="d-flex flex-wrap gap-1 mb-3">
                        {expert.certifications.map((cert, index) => (
                          <span key={index} className="badge bg-primary bg-opacity-10 text-primary">
                            {cert}
                          </span>
                        ))}
                      </div>

                      {/* 언어 */}
                      <div className="d-flex flex-wrap gap-1">
                        {expert.languages.map((lang, index) => (
                          <span key={index} className="badge bg-light text-dark">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 액션 버튼들 */}
                <div className="card-footer bg-light">
                  <div className="d-flex gap-2">
                    {expert.available ? (
                      <>
                        <button
                          onClick={() => handleStartVideoConsultation(expert)}
                          className="btn btn-primary btn-sm flex-fill"
                        >
                          실시간 상담
                        </button>
                        <button
                          onClick={() => handleBookConsultation(expert)}
                          className="btn btn-outline-secondary btn-sm flex-fill"
                        >
                          예약하기
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => handleBookConsultation(expert)}
                        className="btn btn-secondary btn-sm w-100"
                      >
                        예약하기
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredExperts.length === 0 && (
          <div className="text-center py-5">
            <div className="text-muted mb-4">
              <i className="bi bi-search fs-1"></i>
            </div>
            <h3 className="h5 fw-semibold text-dark mb-2">조건에 맞는 전문가가 없습니다</h3>
            <p className="text-muted">필터 조건을 변경해보세요</p>
          </div>
        )}
      </div>
    </div>
  );
} 