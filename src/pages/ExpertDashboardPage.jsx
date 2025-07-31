// src/pages/ExpertDashboardPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExpertDashboardPage() {
  const [expert, setExpert] = useState(null);
  const [consultations, setConsultations] = useState([]);
  const [stats, setStats] = useState({});
  const [isOnline, setIsOnline] = useState(true);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 전문가 데이터 시뮬레이션
  useEffect(() => {
    const mockExpert = {
      id: 1,
      name: '김상담',
      category: '심리상담',
      specialty: '우울증, 불안장애, 스트레스 관리',
      experience: '15년',
      rating: 4.8,
      reviewCount: 127,
      hourlyRate: '50,000원',
      image: 'https://via.placeholder.com/100x100/4F46E5/FFFFFF?text=김',
      description: '임상심리학 박사, 다양한 심리 문제에 대한 전문적인 상담을 제공합니다.',
      languages: ['한국어', '영어'],
      certifications: ['임상심리사', '상담심리사'],
      availability: {
        monday: { start: '09:00', end: '18:00' },
        tuesday: { start: '09:00', end: '18:00' },
        wednesday: { start: '09:00', end: '18:00' },
        thursday: { start: '09:00', end: '18:00' },
        friday: { start: '09:00', end: '18:00' },
        saturday: { start: '10:00', end: '16:00' },
        sunday: { start: null, end: null }
      }
    };

    const mockConsultations = [
      {
        id: 1,
        clientName: '이고객',
        date: '2024-01-20',
        time: '14:00-15:00',
        type: 'video',
        status: 'upcoming',
        category: '스트레스 관리',
        duration: '60분',
        price: '50,000원'
      },
      {
        id: 2,
        clientName: '박고객',
        date: '2024-01-19',
        time: '10:00-11:30',
        type: 'video',
        status: 'completed',
        category: '불안장애',
        duration: '90분',
        price: '75,000원'
      },
      {
        id: 3,
        clientName: '최고객',
        date: '2024-01-18',
        time: '16:00-17:00',
        type: 'video',
        status: 'completed',
        category: '우울증',
        duration: '60분',
        price: '50,000원'
      },
      {
        id: 4,
        clientName: '정고객',
        date: '2024-01-17',
        time: '11:00-12:00',
        type: 'video',
        status: 'completed',
        category: '스트레스 관리',
        duration: '60분',
        price: '50,000원'
      },
      {
        id: 5,
        clientName: '한고객',
        date: '2024-01-16',
        time: '15:00-16:30',
        type: 'video',
        status: 'completed',
        category: '불안장애',
        duration: '90분',
        price: '75,000원'
      }
    ];

    const mockStats = {
      monthlyConsultations: 45,
      monthlyEarnings: 2250000,
      averageRating: 4.8,
      newClients: 12,
      totalConsultations: 127,
      totalEarnings: 6350000,
      completionRate: 98.5,
      clientSatisfaction: 96.2
    };

    setExpert(mockExpert);
    setConsultations(mockConsultations);
    setStats(mockStats);
    setLoading(false);
  }, []);

  const handleToggleOnlineStatus = () => {
    setIsOnline(!isOnline);
  };

  const handleStartConsultation = (consultation) => {
    navigate('/video-consultation', { 
      state: { 
        expert: expert, 
        consultation: consultation,
        mode: 'expert' 
      } 
    });
  };

  const handleViewSchedule = () => {
    navigate('/expert-schedule');
  };

  const handleViewHistory = () => {
    navigate('/expert-history');
  };

  const handleViewSettings = () => {
    navigate('/expert-settings');
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'upcoming': return 'primary';
      case 'completed': return 'success';
      case 'cancelled': return 'danger';
      default: return 'secondary';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'upcoming': return '예정';
      case 'completed': return '완료';
      case 'cancelled': return '취소';
      default: return '알 수 없음';
    }
  };

  if (loading) {
    return (
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-muted">대시보드를 불러오는 중...</p>
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
              <h1 className="h2 fw-bold text-dark mb-2">전문가 대시보드</h1>
              <p className="text-muted mb-0">상담 현황과 고객 관리를 한눈에 파악할 수 있는 맞춤형 대시보드</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex align-items-center justify-content-end gap-3">
                <div className="d-flex align-items-center gap-2">
                  <div className={`badge rounded-circle p-2 ${isOnline ? 'bg-success' : 'bg-secondary'}`}>
                    <i className="bi bi-circle-fill"></i>
                  </div>
                  <span className="small">{isOnline ? '온라인' : '오프라인'}</span>
                </div>
                <button
                  onClick={handleToggleOnlineStatus}
                  className={`btn btn-sm ${isOnline ? 'btn-outline-success' : 'btn-outline-secondary'}`}
                >
                  {isOnline ? '오프라인 전환' : '온라인 전환'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* 전문가 정보 */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="rounded-circle"
                      width="80"
                      height="80"
                    />
                  </div>
                  <div className="col">
                    <div className="row align-items-center">
                      <div className="col-lg-8">
                        <h3 className="h4 fw-bold text-dark mb-1">{expert.name}</h3>
                        <p className="text-muted mb-2">{expert.category} • {expert.experience} 경력</p>
                        <p className="text-muted small mb-0">{expert.specialty}</p>
                      </div>
                      <div className="col-lg-4 text-lg-end">
                        <div className="d-flex align-items-center justify-content-lg-end gap-2 mb-2">
                          <span className="text-warning">★</span>
                          <span className="fw-semibold">{expert.rating}</span>
                          <span className="text-muted small">({expert.reviewCount}리뷰)</span>
                        </div>
                        <p className="text-primary fw-semibold mb-0">{expert.hourlyRate}/시간</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 통계 카드 */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-primary border-opacity-25">
              <div className="card-body text-center">
                <div className="text-primary mb-2">
                  <i className="bi bi-calendar-check fs-1"></i>
                </div>
                <h4 className="h3 fw-bold text-dark mb-1">{stats.monthlyConsultations}</h4>
                <p className="text-muted small mb-0">이번 달 상담</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-success border-opacity-25">
              <div className="card-body text-center">
                <div className="text-success mb-2">
                  <i className="bi bi-currency-dollar fs-1"></i>
                </div>
                <h4 className="h3 fw-bold text-dark mb-1">
                  {(stats.monthlyEarnings / 10000).toFixed(0)}만원
                </h4>
                <p className="text-muted small mb-0">이번 달 수익</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-warning border-opacity-25">
              <div className="card-body text-center">
                <div className="text-warning mb-2">
                  <i className="bi bi-star fs-1"></i>
                </div>
                <h4 className="h3 fw-bold text-dark mb-1">{stats.averageRating}</h4>
                <p className="text-muted small mb-0">평균 평점</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-info border-opacity-25">
              <div className="card-body text-center">
                <div className="text-info mb-2">
                  <i className="bi bi-person-plus fs-1"></i>
                </div>
                <h4 className="h3 fw-bold text-dark mb-1">{stats.newClients}</h4>
                <p className="text-muted small mb-0">신규 고객</p>
              </div>
            </div>
          </div>
        </div>

        {/* 빠른 액션 */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="h5 fw-semibold text-dark mb-0">빠른 액션</h3>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-12 col-md-4">
                    <button
                      onClick={handleViewSchedule}
                      className="btn btn-outline-primary w-100 p-3"
                    >
                      <i className="bi bi-calendar-week fs-4 d-block mb-2"></i>
                      일정 관리
                    </button>
                  </div>
                  <div className="col-12 col-md-4">
                    <button
                      onClick={handleViewHistory}
                      className="btn btn-outline-secondary w-100 p-3"
                    >
                      <i className="bi bi-clock-history fs-4 d-block mb-2"></i>
                      상담 기록
                    </button>
                  </div>
                  <div className="col-12 col-md-4">
                    <button
                      onClick={handleViewSettings}
                      className="btn btn-outline-info w-100 p-3"
                    >
                      <i className="bi bi-gear fs-4 d-block mb-2"></i>
                      설정
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* 예정된 상담 */}
          <div className="col-12 col-lg-6 mb-4">
            <div className="card">
              <div className="card-header">
                <h3 className="h5 fw-semibold text-dark mb-0">예정된 상담</h3>
              </div>
              <div className="card-body p-0">
                <div className="list-group list-group-flush">
                  {consultations
                    .filter(consultation => consultation.status === 'upcoming')
                    .map((consultation) => (
                      <div key={consultation.id} className="list-group-item">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="flex-grow-1">
                            <div className="d-flex align-items-center gap-2 mb-1">
                              <h6 className="mb-0 fw-semibold">{consultation.clientName}</h6>
                              <span className={`badge bg-${getStatusBadge(consultation.status)}`}>
                                {getStatusText(consultation.status)}
                              </span>
                            </div>
                            <p className="text-muted small mb-1">{consultation.category}</p>
                            <p className="text-muted small mb-0">
                              {consultation.date} • {consultation.time} • {consultation.duration}
                            </p>
                          </div>
                          <div className="text-end">
                            <p className="text-primary fw-semibold mb-1">{consultation.price}</p>
                            <button
                              onClick={() => handleStartConsultation(consultation)}
                              className="btn btn-primary btn-sm"
                            >
                              상담 시작
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                {consultations.filter(c => c.status === 'upcoming').length === 0 && (
                  <div className="text-center py-4">
                    <div className="text-muted mb-3">
                      <i className="bi bi-calendar-x fs-1"></i>
                    </div>
                    <h4 className="h6 fw-semibold text-dark mb-2">예정된 상담이 없습니다</h4>
                    <p className="text-muted">새로운 상담 예약을 기다리고 있습니다</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 최근 상담 */}
          <div className="col-12 col-lg-6 mb-4">
            <div className="card">
              <div className="card-header">
                <h3 className="h5 fw-semibold text-dark mb-0">최근 상담</h3>
              </div>
              <div className="card-body p-0">
                <div className="list-group list-group-flush">
                  {consultations
                    .filter(consultation => consultation.status === 'completed')
                    .slice(0, 3)
                    .map((consultation) => (
                      <div key={consultation.id} className="list-group-item">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="flex-grow-1">
                            <div className="d-flex align-items-center gap-2 mb-1">
                              <h6 className="mb-0 fw-semibold">{consultation.clientName}</h6>
                              <span className={`badge bg-${getStatusBadge(consultation.status)}`}>
                                {getStatusText(consultation.status)}
                              </span>
                            </div>
                            <p className="text-muted small mb-1">{consultation.category}</p>
                            <p className="text-muted small mb-0">
                              {consultation.date} • {consultation.time} • {consultation.duration}
                            </p>
                          </div>
                          <div className="text-end">
                            <p className="text-primary fw-semibold mb-0">{consultation.price}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                {consultations.filter(c => c.status === 'completed').length === 0 && (
                  <div className="text-center py-4">
                    <div className="text-muted mb-3">
                      <i className="bi bi-clock-history fs-1"></i>
                    </div>
                    <h4 className="h6 fw-semibold text-dark mb-2">완료된 상담이 없습니다</h4>
                    <p className="text-muted">상담 기록이 여기에 표시됩니다</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 추가 통계 */}
        <div className="row">
          <div className="col-12 col-lg-6 mb-4">
            <div className="card">
              <div className="card-header">
                <h3 className="h5 fw-semibold text-dark mb-0">전체 통계</h3>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="text-center p-3 bg-light rounded">
                      <h4 className="h5 fw-bold text-dark mb-1">{stats.totalConsultations}</h4>
                      <p className="text-muted small mb-0">총 상담 수</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center p-3 bg-light rounded">
                      <h4 className="h5 fw-bold text-dark mb-1">
                        {(stats.totalEarnings / 10000).toFixed(0)}만원
                      </h4>
                      <p className="text-muted small mb-0">총 수익</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center p-3 bg-light rounded">
                      <h4 className="h5 fw-bold text-dark mb-1">{stats.completionRate}%</h4>
                      <p className="text-muted small mb-0">완료율</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center p-3 bg-light rounded">
                      <h4 className="h5 fw-bold text-dark mb-1">{stats.clientSatisfaction}%</h4>
                      <p className="text-muted small mb-0">고객 만족도</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-4">
            <div className="card">
              <div className="card-header">
                <h3 className="h5 fw-semibold text-dark mb-0">자격 및 언어</h3>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <h6 className="fw-semibold text-dark mb-2">자격증</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {expert.certifications.map((cert, index) => (
                      <span key={index} className="badge bg-primary bg-opacity-10 text-primary">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h6 className="fw-semibold text-dark mb-2">사용 언어</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {expert.languages.map((lang, index) => (
                      <span key={index} className="badge bg-light text-dark">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 