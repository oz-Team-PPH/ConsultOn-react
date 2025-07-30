// src/pages/Profile.jsx
import React, { useState, useEffect } from "react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "김사용자",
    email: "test@example.com",
    phone: "010-1234-5678",
    company: "테스트 회사",
    position: "매니저",
    bio: "AI 기반 상담 서비스를 이용하고 있습니다.",
  });

  const [formData, setFormData] = useState({ ...userData });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 프로필 업데이트 API 호출 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setUserData(formData);
      setIsEditing(false);
      alert("프로필이 성공적으로 업데이트되었습니다!");
    } catch (error) {
      alert("프로필 업데이트 중 오류가 발생했습니다.");
      console.error("Profile Update Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData(userData);
    setIsEditing(false);
  };

  return (
    <div className="container-fluid p-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8 col-xl-6">
          <div className="card shadow-lg">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h2 className="h3 mb-0">프로필</h2>
              {!isEditing && (
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setIsEditing(true)}
                >
                  수정
                </button>
              )}
            </div>
            <div className="card-body p-4 p-lg-5">
              {isEditing ? (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label htmlFor="name" className="form-label">
                        이름
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="email" className="form-label">
                        이메일
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="phone" className="form-label">
                        전화번호
                      </label>
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="company" className="form-label">
                        회사
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="position" className="form-label">
                        직책
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="bio" className="form-label">
                        자기소개
                      </label>
                      <textarea
                        className="form-control form-control-lg"
                        id="bio"
                        name="bio"
                        rows="3"
                        value={formData.bio}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="d-flex gap-2 mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg flex-fill"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          저장 중...
                        </>
                      ) : (
                        "저장"
                      )}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-lg"
                      onClick={handleCancel}
                    >
                      취소
                    </button>
                  </div>
                </form>
              ) : (
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-bold">이름</label>
                    <p className="form-control-plaintext">{userData.name}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-bold">이메일</label>
                    <p className="form-control-plaintext">{userData.email}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-bold">전화번호</label>
                    <p className="form-control-plaintext">{userData.phone}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-bold">회사</label>
                    <p className="form-control-plaintext">{userData.company}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-bold">직책</label>
                    <p className="form-control-plaintext">
                      {userData.position}
                    </p>
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-bold">자기소개</label>
                    <p className="form-control-plaintext">{userData.bio}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
