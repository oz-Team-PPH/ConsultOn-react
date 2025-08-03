// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 사용자 데이터 로드 시뮬레이션
    const loadUserData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setUserData({
          name: "김사용자",
          email: "test@example.com",
          consultations: [
            {
              id: 1,
              expert: "김마케팅",
              date: "2024-01-15",
              time: "14:00",
              status: "예약됨",
              type: "화상상담",
            },
            {
              id: 2,
              expert: "이전략",
              date: "2024-01-10",
              time: "10:00",
              status: "완료",
              type: "화상상담",
            },
          ],
          stats: {
            totalConsultations: 5,
            completedConsultations: 3,
            totalHours: 4.5,
            savedAmount: 150000,
          },
        });
      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  if (loading) {
    return (
      <div className="container p-4">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">로딩 중...</span>
          </div>
          <p className="mt-2">대시보드를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-12">
          <h1 className="h2 mb-4">안녕하세요, {userData?.name}님!</h1>
        </div>
      </div>

      {/* 통계 카드 */}
      <div className="row mb-4 g-3">
        <div className="col-6 col-md-3">
          <div className="card bg-primary text-white h-100">
            <div className="card-body text-center">
              <h5 className="card-title">총 상담 횟수</h5>
              <h2 className="card-text">
                {userData?.stats.totalConsultations}회
              </h2>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card bg-success text-white h-100">
            <div className="card-body text-center">
              <h5 className="card-title">완료된 상담</h5>
              <h2 className="card-text">
                {userData?.stats.completedConsultations}회
              </h2>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card bg-info text-white h-100">
            <div className="card-body text-center">
              <h5 className="card-title">총 상담 시간</h5>
              <h2 className="card-text">{userData?.stats.totalHours}시간</h2>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card bg-warning text-white h-100">
            <div className="card-body text-center">
              <h5 className="card-title">절약한 금액</h5>
              <h2 className="card-text">
                ₩{userData?.stats.savedAmount.toLocaleString()}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* 빠른 액션 */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">빠른 액션</h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-6 col-md-3">
                  <Link to="/chat" className="btn btn-primary w-100 h-100 d-flex flex-column align-items-center justify-content-center py-3">
                    <i className="bi bi-chat-dots mb-2 fs-4"></i>
                    <span>AI 사전 Q&A</span>
                  </Link>
                </div>
                <div className="col-6 col-md-3">
                  <Link to="/experts" className="btn btn-success w-100 h-100 d-flex flex-column align-items-center justify-content-center py-3">
                    <i className="bi bi-people mb-2 fs-4"></i>
                    <span>전문가 매칭</span>
                  </Link>
                </div>
                <div className="col-6 col-md-3">
                  <Link to="/video" className="btn btn-info w-100 h-100 d-flex flex-column align-items-center justify-content-center py-3">
                    <i className="bi bi-camera-video mb-2 fs-4"></i>
                    <span>화상 상담</span>
                  </Link>
                </div>
                <div className="col-6 col-md-3">
                  <Link to="/summary" className="btn btn-warning w-100 h-100 d-flex flex-column align-items-center justify-content-center py-3">
                    <i className="bi bi-file-text mb-2 fs-4"></i>
                    <span>상담 요약</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 최근 상담 */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">최근 상담</h5>
              <Link
                to="/consultations"
                className="btn btn-outline-primary btn-sm"
              >
                전체 보기
              </Link>
            </div>
            <div className="card-body">
              {userData?.consultations.map((consultation) => (
                <div key={consultation.id} className="border-bottom py-3">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3 mb-2 mb-md-0">
                      <strong>{consultation.expert}</strong>
                    </div>
                    <div className="col-12 col-md-3 mb-2 mb-md-0">
                      {consultation.date} {consultation.time}
                    </div>
                    <div className="col-6 col-md-2 mb-2 mb-md-0">
                      <span
                        className={`badge ${
                          consultation.status === "예약됨"
                            ? "bg-warning"
                            : "bg-success"
                        }`}
                      >
                        {consultation.status}
                      </span>
                    </div>
                    <div className="col-6 col-md-2 mb-2 mb-md-0">
                      {consultation.type}
                    </div>
                    <div className="col-12 col-md-2">
                      <Link
                        to={`/consultation/${consultation.id}`}
                        className="btn btn-outline-primary btn-sm w-100"
                      >
                        상세보기
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
