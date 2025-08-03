// src/pages/ConsultationChat.jsx
import React, { useState } from "react";
import QuestionInput from "../components/QuestionInput";
import ChatHistory from "../components/ChatHistory";

export default function ConsultationChat() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (question) => {
    setHistory((prev) => [...prev, { type: "user", text: question }]);
    setLoading(true);

    try {
      // AI API 호출 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 더미 응답 데이터
      const dummyResponses = {
        "마케팅 전략":
          "마케팅 전략 수립을 위해서는 먼저 타겟 고객을 명확히 정의하고, 경쟁사 분석을 진행해야 합니다.",
        "예산 계획":
          "마케팅 예산은 전체 매출의 5-10%를 권장하며, 채널별로 세분화하여 계획하는 것이 좋습니다.",
        브랜딩:
          "브랜드 아이덴티티는 일관성 있게 유지하면서도 시장 변화에 적응할 수 있어야 합니다.",
      };

      const response =
        dummyResponses[question] ||
        "죄송합니다. 해당 질문에 대한 답변을 준비 중입니다.";

      setHistory((prev) => [...prev, { type: "ai", text: response }]);
    } catch (error) {
      setHistory((prev) => [
        ...prev,
        { type: "ai", text: "죄송합니다. 일시적인 오류가 발생했습니다." },
      ]);
      console.error("AI API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container p-4">
      <h2 className="h3 mb-4">AI 사전 Q&A</h2>
      <ChatHistory history={history} />
      {loading && (
        <div className="text-center mt-2">
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">응답 중...</span>
          </div>
          <span className="ms-2">AI가 응답을 준비 중입니다...</span>
        </div>
      )}
      <QuestionInput onSend={handleSend} />
    </div>
  );
}
