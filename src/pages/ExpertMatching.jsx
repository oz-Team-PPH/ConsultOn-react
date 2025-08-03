// src/pages/ExpertMatching.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ExpertMatching() {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadExperts = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setExperts([
          {
            id: 1,
            name: "김마케팅",
            specialty: "디지털 마케팅",
            category: "marketing",
            rate: 50000,
            rating: 4.8,
            experience: "10년",
            description: "브랜드 전략 및 디지털 마케팅 전문가",
            image: "https://via.placeholder.com/150",
          },
          {
            id: 2,
            name: "이전략",
            specialty: "브랜드 전략",
            category: "strategy",
            rate: 60000,
            rating: 4.9,
            experience: "15년",
            description: "기업 전략 및 브랜드 개발 전문가",
            image: "https://via.placeholder.com/150",
          },
          {
            id: 3,
            name: "박분석",
            specialty: "데이터 분석",
            category: "analytics",
            rate: 45000,
            rating: 4.7,
            experience: "8년",
            description: "데이터 기반 의사결정 및 분석 전문가",
            image: "https://via.placeholder.com/150",
          },
          {
            id: 4,
            name: "최디자인",
            specialty: "UI/UX 디자인",
            category: "design",
            rate: 55000,
            rating: 4.6,
            experience: "12년",
            description: "사용자 경험 및 인터페이스 디자인 전문가",
            image: "https://via.placeholder.com/150",
          },
        ]);
      } catch (error) {
        console.error("Experts Error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadExperts();
  }, []);

  const categories = [
    { value: "all", label: "전체" },
    { value: "marketing", label: "마케팅" },
    { value: "strategy", label: "전략" },
    { value: "analytics", label: "분석" },
    { value: "design", label: "디자인" },
  ];

  const filteredExperts = experts.filter((expert) => {
    const matchesCategory =
      selectedCategory === "all" || expert.category === selectedCategory;
    const matchesSearch =
      expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="container p-4">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">로딩 중...</span>
          </div>
          <p className="mt-2">전문가 목록을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-12">
          <h1 className="h2 mb-4">전문가 매칭</h1>
        </div>
      </div>

      {/* 검색 및 필터 */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label htmlFor="search" className="form-label">
                    검색
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="search"
                    placeholder="전문가 이름이나 전문분야로 검색"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label htmlFor="category" className="form-label">
                    카테고리
                  </label>
                  <select
                    className="form-select"
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 전문가 목록 */}
      <div className="row g-4">
        {filteredExperts.map((expert) => (
          <div key={expert.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h5 className="card-title mb-1">{expert.name}</h5>
                    <p className="card-text text-muted mb-0">
                      {expert.specialty}
                    </p>
                  </div>
                </div>
                <p className="card-text">{expert.description}</p>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary fw-bold">
                    ₩{expert.rate.toLocaleString()}/시간
                  </span>
                  <span className="badge bg-success">
                    ⭐ {expert.rating}
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">
                    경력: {expert.experience}
                  </small>
                  <Link
                    to={`/booking?expert=${expert.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    상담 예약
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredExperts.length === 0 && (
        <div className="text-center py-5">
          <p className="text-muted">검색 조건에 맞는 전문가가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
