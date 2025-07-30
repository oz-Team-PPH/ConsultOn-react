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
      <div className="container-fluid p-4">
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
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-12">
          <h1 className="h2 mb-4">전문가 매칭</h1>
        </div>
      </div>

      {/* 검색 및 필터 */}
      <div className="row mb-4">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="전문가 이름 또는 분야로 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-6">
          <select
            className="form-select form-select-lg"
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

      {/* 전문가 목록 */}
      <div className="row g-4">
        {filteredExperts.map((expert) => (
          <div key={expert.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="rounded-circle mb-3"
                  width="80"
                  height="80"
                />
                <h5 className="card-title">{expert.name}</h5>
                <p className="card-text text-muted">{expert.specialty}</p>
                <p className="card-text small">{expert.description}</p>
                <div className="mb-3">
                  <span className="text-warning">★</span> {expert.rating} (
                  {expert.experience})
                </div>
                <div className="mb-3">
                  <strong>₩{expert.rate.toLocaleString()}/분</strong>
                </div>
                <Link
                  to={`/booking?expert=${expert.id}`}
                  className="btn btn-primary w-100"
                >
                  상담 예약
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredExperts.length === 0 && (
        <div className="text-center py-5">
          <h5 className="text-muted">검색 결과가 없습니다.</h5>
          <p className="text-muted">다른 검색어를 시도해보세요.</p>
        </div>
      )}
    </div>
  );
}
