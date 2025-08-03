// src/pages/ConsultationSummary.jsx
import React, { useEffect, useState } from "react";
import SummaryCard from "../components/SummaryCard";
import ToDoList from "../components/ToDoList";

export default function ConsultationSummary() {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSummary() {
      try {
        setLoading(true);
        // 실제 API 대신 더미 데이터 사용
        const dummyData = {
          keyPoints: [
            "마케팅 전략 수립이 필요합니다",
            "타겟 고객 분석이 우선순위입니다",
            "예산 계획 수립이 필요합니다",
            "성과 측정 지표를 설정해야 합니다",
          ],
          actions: [
            "타겟 고객 페르소나 작성",
            "경쟁사 분석 보고서 작성",
            "마케팅 예산 계획 수립",
            "KPI 지표 설정",
          ],
        };

        // API 호출 시뮬레이션
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSummary(dummyData);
      } catch (err) {
        setError("데이터를 불러오는데 실패했습니다.");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchSummary();
  }, []);

  if (loading)
    return (
      <div className="container p-4">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">로딩 중...</span>
          </div>
          <p className="mt-2">로딩 중...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="container p-4">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );

  return (
    <div className="container p-4">
      <h2 className="h3 mb-4">상담 요약 & To-Do</h2>
      <SummaryCard data={summary.keyPoints} />
      <ToDoList items={summary.actions} />
    </div>
  );
}
