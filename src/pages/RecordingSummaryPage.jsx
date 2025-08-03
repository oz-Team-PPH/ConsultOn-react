// src/pages/RecordingSummaryPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RecordingSummaryPage() {
  const [consultations, setConsultations] = useState([]);
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  // 상담 기록 데이터 시뮬레이션
  useEffect(() => {
    const mockConsultations = [
      {
        id: 1,
        date: '2024-01-15',
        time: '14:00-15:00',
        expert: '김상담',
        category: '심리상담',
        duration: '60분',
        status: 'completed',
        summary: {
          keyPoints: [
            '스트레스 관리 방법에 대한 상담',
            '일과 삶의 균형에 대한 고민',
            '휴식의 중요성에 대한 논의'
          ],
          expertAdvice: [
            '규칙적인 운동 습관 형성',
            '명상이나 요가 등 정신적 휴식 활동',
            '충분한 수면과 영양 섭취'
          ],
          followUpActions: [
            '주 3회 이상 운동 계획 수립',
            '일일 명상 10분 실천',
            '수면 시간 7-8시간 확보'
          ],
          todoList: [
            '운동 계획표 작성',
            '명상 앱 다운로드',
            '수면 일기 작성'
          ]
        },
        recording: {
          url: '/recordings/consultation-1.mp4',
          duration: '60:00',
          size: '45.2MB'
        }
      },
      {
        id: 2,
        date: '2024-01-10',
        time: '10:00-11:30',
        expert: '이전문',
        category: '커리어상담',
        duration: '90분',
        status: 'completed',
        summary: {
          keyPoints: [
            '이직 준비 전략 수립',
            '현재 회사에서의 성과 정리',
            '새로운 기회 탐색 방법'
          ],
          expertAdvice: [
            '이력서 업데이트 및 포트폴리오 준비',
            '네트워킹 활동 강화',
            '업계 동향 파악 및 정보 수집'
          ],
          followUpActions: [
            '이력서 및 자기소개서 작성',
            'LinkedIn 프로필 업데이트',
            '업계 컨퍼런스 참석 계획'
          ],
          todoList: [
            '이력서 작성 시작',
            '포트폴리오 정리',
            '네트워킹 이벤트 찾기'
          ]
        },
        recording: {
          url: '/recordings/consultation-2.mp4',
          duration: '90:00',
          size: '67.8MB'
        }
      },
      {
        id: 3,
        date: '2024-01-05',
        time: '16:00-17:00',
        expert: '박가족',
        category: '가족상담',
        duration: '60분',
        status: 'completed',
        summary: {
          keyPoints: [
            '부부 간 소통 개선 방법',
            '자녀와의 관계 개선',
            '가족 활동 계획 수립'
          ],
          expertAdvice: [
            '정기적인 부부 대화 시간 확보',
            '자녀와의 1:1 시간 가지기',
            '가족 활동 계획 및 실행'
          ],
          followUpActions: [
            '주간 부부 대화 시간 설정',
            '자녀와의 특별한 시간 계획',
            '가족 여행 계획 수립'
          ],
          todoList: [
            '부부 대화 일정표 작성',
            '자녀와의 활동 계획',
            '가족 여행지 조사'
          ]
        },
        recording: {
          url: '/recordings/consultation-3.mp4',
          duration: '60:00',
          size: '45.2MB'
        }
      }
    ];

    setConsultations(mockConsultations);
    setLoading(false);
  }, []);

  const handleConsultationSelect = (consultation) => {
    setSelectedConsultation(consultation);
  };

  const handleDownloadRecording = (consultation) => {
    console.log('다운로드:', consultation.recording.url);
    alert('녹화 파일 다운로드가 시작됩니다.');
  };

  const handleShareSummary = (consultation) => {
    console.log('공유:', consultation.id);
    alert('요약이 클립보드에 복사되었습니다.');
  };

  const handleAddToTodo = (todoItem) => {
    console.log('To-Do 추가:', todoItem);
    alert('To-Do 목록에 추가되었습니다.');
  };

  const handlePlayRecording = () => {
    setIsPlaying(!isPlaying);
    // 실제 재생 로직 구현
  };

  if (loading) {
    return (
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-dark">상담 기록을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-light">
      {/* 헤더 */}
      <div className="bg-white shadow-sm border-bottom position-sticky top-0 z-3">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-3 mb-lg-0">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" className="text-primary">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h1 className="h2 fw-bold text-dark mb-1">녹화+요약</h1>
                  <p className="text-muted mb-0">상담 내용을 자동으로 녹화하고 핵심 내용을 요약하여 언제든지 확인할 수 있습니다</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          {/* 상담 목록 */}
          <div className="col-12 col-lg-4 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-transparent border-0 p-4">
                <h3 className="h5 fw-semibold text-dark mb-0">
                  <svg className="me-2" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                  </svg>
                  상담 기록
                </h3>
              </div>
              <div className="card-body p-0">
                <div className="list-group list-group-flush">
                  {consultations.map((consultation) => (
                    <button
                      key={consultation.id}
                      onClick={() => handleConsultationSelect(consultation)}
                      className={`list-group-item list-group-item-action border-0 p-4 transition-all ${
                        selectedConsultation?.id === consultation.id ? 'bg-primary bg-opacity-10 border-start border-primary border-4' : ''
                      }`}
                      style={{
                        transition: 'all 0.3s ease',
                        transform: selectedConsultation?.id === consultation.id ? 'translateX(5px)' : 'translateX(0)'
                      }}
                    >
                      <div className="d-flex align-items-start gap-3">
                        <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px', flexShrink: 0}}>
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" className="text-primary">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-grow-1 text-start">
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <h6 className="mb-0 fw-semibold">{consultation.expert}</h6>
                            <span className="badge bg-success bg-opacity-10 text-success rounded-pill">
                              완료
                            </span>
                          </div>
                          <p className="text-muted small mb-1">{consultation.category}</p>
                          <p className="text-muted small mb-0">
                            {consultation.date} • {consultation.time} • {consultation.duration}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 상담 상세 */}
          <div className="col-12 col-lg-8">
            {selectedConsultation ? (
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-transparent border-0 p-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h3 className="h5 fw-semibold text-dark mb-1">
                        {selectedConsultation.expert} 전문가와의 상담
                      </h3>
                      <p className="text-muted small mb-0">
                        {selectedConsultation.date} • {selectedConsultation.time} • {selectedConsultation.duration}
                      </p>
                    </div>
                    <div className="d-flex gap-2">
                      <button
                        onClick={() => handleDownloadRecording(selectedConsultation)}
                        className="btn btn-outline-primary rounded-pill"
                      >
                        <svg className="me-2" width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        다운로드
                      </button>
                      <button
                        onClick={() => handleShareSummary(selectedConsultation)}
                        className="btn btn-outline-secondary rounded-pill"
                      >
                        <svg className="me-2" width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                        공유
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card-body p-4">
                  {/* 녹화 정보 */}
                  <div className="row mb-4">
                    <div className="col-12">
                      <h4 className="h6 fw-semibold text-dark mb-3">
                        <svg className="me-2" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        녹화 정보
                      </h4>
                      <div className="d-flex align-items-center gap-3 p-4 bg-light rounded-3">
                        <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                          <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20" className="text-primary">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                          </svg>
                        </div>
                        <div className="flex-grow-1">
                          <p className="mb-1 fw-semibold">상담 녹화 파일</p>
                          <p className="text-muted small mb-0">
                            {selectedConsultation.recording.duration} • {selectedConsultation.recording.size}
                          </p>
                        </div>
                        <button 
                          onClick={handlePlayRecording}
                          className="btn btn-primary rounded-pill"
                        >
                          <svg className="me-2" width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                            {isPlaying ? (
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            ) : (
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            )}
                          </svg>
                          {isPlaying ? '일시정지' : '재생'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* AI 요약 */}
                  <div className="row">
                    <div className="col-12 col-md-6 mb-4">
                      <h4 className="h6 fw-semibold text-dark mb-3">
                        <svg className="me-2" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        핵심 내용
                      </h4>
                      <div className="list-group list-group-flush">
                        {selectedConsultation.summary.keyPoints.map((point, index) => (
                          <div key={index} className="list-group-item border-0 d-flex align-items-start gap-3 p-3">
                            <div className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{width: '24px', height: '24px', flexShrink: 0}}>
                              <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20" className="text-success">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="small">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="col-12 col-md-6 mb-4">
                      <h4 className="h6 fw-semibold text-dark mb-3">
                        <svg className="me-2" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                        </svg>
                        전문가 조언
                      </h4>
                      <div className="list-group list-group-flush">
                        {selectedConsultation.summary.expertAdvice.map((advice, index) => (
                          <div key={index} className="list-group-item border-0 d-flex align-items-start gap-3 p-3">
                            <div className="bg-warning bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{width: '24px', height: '24px', flexShrink: 0}}>
                              <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20" className="text-warning">
                                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                              </svg>
                            </div>
                            <span className="small">{advice}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 후속 조치 */}
                  <div className="row mb-4">
                    <div className="col-12">
                      <h4 className="h6 fw-semibold text-dark mb-3">
                        <svg className="me-2" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                        </svg>
                        후속 조치
                      </h4>
                      <div className="row g-3">
                        {selectedConsultation.summary.followUpActions.map((action, index) => (
                          <div key={index} className="col-12 col-md-6">
                            <div className="card border-primary border-opacity-25 bg-primary bg-opacity-5">
                              <div className="card-body p-3">
                                <div className="d-flex align-items-start gap-3">
                                  <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{width: '24px', height: '24px', flexShrink: 0}}>
                                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20" className="text-primary">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <span className="small">{action}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* To-Do 목록 */}
                  <div className="row">
                    <div className="col-12">
                      <h4 className="h6 fw-semibold text-dark mb-3">
                        <svg className="me-2" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        To-Do 목록
                      </h4>
                      <div className="list-group">
                        {selectedConsultation.summary.todoList.map((todo, index) => (
                          <div key={index} className="list-group-item d-flex align-items-center justify-content-between border-0 bg-light rounded-3 mb-2">
                            <div className="d-flex align-items-center gap-3">
                              <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{width: '24px', height: '24px'}}>
                                <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20" className="text-primary">
                                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="small">{todo}</span>
                            </div>
                            <button
                              onClick={() => handleAddToTodo(todo)}
                              className="btn btn-outline-primary btn-sm rounded-pill"
                            >
                              <svg className="me-1" width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                              </svg>
                              추가
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center py-5">
                  <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <svg width="40" height="40" fill="currentColor" viewBox="0 0 20 20" className="text-muted">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="h5 fw-semibold text-dark mb-2">상담 기록을 선택하세요</h3>
                  <p className="text-muted">왼쪽에서 확인하고 싶은 상담 기록을 선택해주세요</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .transition-all {
          transition: all 0.3s ease;
        }
        
        @media (max-width: 768px) {
          .h2 { font-size: 1.5rem; }
        }
      `}</style>
    </div>
  );
} 