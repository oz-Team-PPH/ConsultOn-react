// src/pages/RecordingSummaryPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RecordingSummaryPage() {
  const [consultations, setConsultations] = useState([]);
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const [loading, setLoading] = useState(true);
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
    // 녹화 파일 다운로드 시뮬레이션
    console.log('다운로드:', consultation.recording.url);
    alert('녹화 파일 다운로드가 시작됩니다.');
  };

  const handleShareSummary = (consultation) => {
    // 요약 공유 시뮬레이션
    console.log('공유:', consultation.id);
    alert('요약이 클립보드에 복사되었습니다.');
  };

  const handleAddToTodo = (todoItem) => {
    // To-Do 추가 시뮬레이션
    console.log('To-Do 추가:', todoItem);
    alert('To-Do 목록에 추가되었습니다.');
  };

  if (loading) {
    return (
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-muted">상담 기록을 불러오는 중...</p>
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
              <h1 className="h2 fw-bold text-dark mb-2">녹화+요약</h1>
              <p className="text-muted mb-0">상담 내용을 자동으로 녹화하고 핵심 내용을 요약하여 언제든지 확인할 수 있습니다</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          {/* 상담 목록 */}
          <div className="col-12 col-lg-4 mb-4">
            <div className="card">
              <div className="card-header">
                <h3 className="h5 fw-semibold text-dark mb-0">상담 기록</h3>
              </div>
              <div className="card-body p-0">
                <div className="list-group list-group-flush">
                  {consultations.map((consultation) => (
                    <button
                      key={consultation.id}
                      onClick={() => handleConsultationSelect(consultation)}
                      className={`list-group-item list-group-item-action d-flex align-items-center gap-3 ${
                        selectedConsultation?.id === consultation.id ? 'active' : ''
                      }`}
                    >
                      <div className="flex-grow-1 text-start">
                        <div className="d-flex align-items-center gap-2 mb-1">
                          <h6 className="mb-0 fw-semibold">{consultation.expert}</h6>
                          <span className="badge bg-success bg-opacity-10 text-success">
                            완료
                          </span>
                        </div>
                        <p className="text-muted small mb-1">{consultation.category}</p>
                        <p className="text-muted small mb-0">
                          {consultation.date} • {consultation.time} • {consultation.duration}
                        </p>
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
              <div className="card">
                <div className="card-header">
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
                        className="btn btn-outline-primary btn-sm"
                      >
                        <i className="bi bi-download me-1"></i>
                        녹화 다운로드
                      </button>
                      <button
                        onClick={() => handleShareSummary(selectedConsultation)}
                        className="btn btn-outline-secondary btn-sm"
                      >
                        <i className="bi bi-share me-1"></i>
                        요약 공유
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  {/* 녹화 정보 */}
                  <div className="row mb-4">
                    <div className="col-12">
                      <h4 className="h6 fw-semibold text-dark mb-3">녹화 정보</h4>
                      <div className="d-flex align-items-center gap-3 p-3 bg-light rounded">
                        <i className="bi bi-camera-video text-primary fs-4"></i>
                        <div className="flex-grow-1">
                          <p className="mb-1 fw-semibold">상담 녹화 파일</p>
                          <p className="text-muted small mb-0">
                            {selectedConsultation.recording.duration} • {selectedConsultation.recording.size}
                          </p>
                        </div>
                        <button className="btn btn-primary btn-sm">
                          <i className="bi bi-play me-1"></i>
                          재생
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* AI 요약 */}
                  <div className="row">
                    <div className="col-12 col-md-6 mb-4">
                      <h4 className="h6 fw-semibold text-dark mb-3">핵심 내용</h4>
                      <ul className="list-group list-group-flush">
                        {selectedConsultation.summary.keyPoints.map((point, index) => (
                          <li key={index} className="list-group-item d-flex align-items-start gap-2">
                            <i className="bi bi-check-circle text-success mt-1"></i>
                            <span className="small">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-12 col-md-6 mb-4">
                      <h4 className="h6 fw-semibold text-dark mb-3">전문가 조언</h4>
                      <ul className="list-group list-group-flush">
                        {selectedConsultation.summary.expertAdvice.map((advice, index) => (
                          <li key={index} className="list-group-item d-flex align-items-start gap-2">
                            <i className="bi bi-lightbulb text-warning mt-1"></i>
                            <span className="small">{advice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 후속 조치 */}
                  <div className="row mb-4">
                    <div className="col-12">
                      <h4 className="h6 fw-semibold text-dark mb-3">후속 조치</h4>
                      <div className="row g-3">
                        {selectedConsultation.summary.followUpActions.map((action, index) => (
                          <div key={index} className="col-12 col-md-6">
                            <div className="card border-primary border-opacity-25">
                              <div className="card-body p-3">
                                <div className="d-flex align-items-start gap-2">
                                  <i className="bi bi-arrow-right-circle text-primary mt-1"></i>
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
                      <h4 className="h6 fw-semibold text-dark mb-3">To-Do 목록</h4>
                      <div className="list-group">
                        {selectedConsultation.summary.todoList.map((todo, index) => (
                          <div key={index} className="list-group-item d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-2">
                              <i className="bi bi-list-check text-primary"></i>
                              <span className="small">{todo}</span>
                            </div>
                            <button
                              onClick={() => handleAddToTodo(todo)}
                              className="btn btn-outline-primary btn-sm"
                            >
                              <i className="bi bi-plus me-1"></i>
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
              <div className="card">
                <div className="card-body text-center py-5">
                  <div className="text-muted mb-4">
                    <i className="bi bi-file-earmark-text fs-1"></i>
                  </div>
                  <h3 className="h5 fw-semibold text-dark mb-2">상담 기록을 선택하세요</h3>
                  <p className="text-muted">왼쪽에서 확인하고 싶은 상담 기록을 선택해주세요</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 