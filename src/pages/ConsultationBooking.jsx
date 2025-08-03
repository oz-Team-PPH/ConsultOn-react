// src/pages/ConsultationBooking.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ConsultationBooking() {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [consultationType, setConsultationType] = useState("video");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [experts, setExperts] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 전문가 목록 로드
    const loadExperts = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setExperts([
          {
            id: 1,
            name: "김마케팅",
            specialty: "디지털 마케팅",
            rate: 50000,
            rating: 4.8,
            experience: "10년",
          },
          {
            id: 2,
            name: "이전략",
            specialty: "브랜드 전략",
            rate: 60000,
            rating: 4.9,
            experience: "15년",
          },
          {
            id: 3,
            name: "박분석",
            specialty: "데이터 분석",
            rate: 45000,
            rating: 4.7,
            experience: "8년",
          },
        ]);
      } catch (error) {
        console.error("Experts Error:", error);
      }
    };

    loadExperts();
  }, []);

  useEffect(() => {
    // 선택된 전문가의 가능한 시간대 로드
    if (selectedExpert && selectedDate) {
      const loadAvailableSlots = async () => {
        try {
          await new Promise((resolve) => setTimeout(resolve, 500));
          setAvailableSlots([
            "09:00",
            "10:00",
            "11:00",
            "14:00",
            "15:00",
            "16:00",
          ]);
        } catch (error) {
          console.error("Slots Error:", error);
        }
      };

      loadAvailableSlots();
    }
  }, [selectedExpert, selectedDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 예약 API 호출 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("예약 완료:", {
        expert: selectedExpert,
        date: selectedDate,
        time: selectedTime,
        type: consultationType,
        notes,
      });

      alert("상담이 성공적으로 예약되었습니다!");
      navigate("/dashboard");
    } catch (error) {
      alert("예약 중 오류가 발생했습니다.");
      console.error("Booking Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  return (
    <div className="container p-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="card shadow-lg">
            <div className="card-header">
              <h2 className="h3 mb-0">상담 예약</h2>
            </div>
            <div className="card-body p-4 p-lg-5">
              <form onSubmit={handleSubmit}>
                {/* 전문가 선택 */}
                <div className="mb-4">
                  <label className="form-label fw-bold">전문가 선택</label>
                  <div className="row g-3">
                    {experts.map((expert) => (
                      <div key={expert.id} className="col-12 col-md-6">
                        <div
                          className={`card h-100 cursor-pointer ${
                            selectedExpert?.id === expert.id
                              ? "border-primary"
                              : ""
                          }`}
                          onClick={() => setSelectedExpert(expert)}
                        >
                          <div className="card-body">
                            <h5 className="card-title">{expert.name}</h5>
                            <p className="card-text text-muted">
                              {expert.specialty}
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="text-primary fw-bold">
                                ₩{expert.rate.toLocaleString()}/시간
                              </span>
                              <span className="badge bg-success">
                                ⭐ {expert.rating}
                              </span>
                            </div>
                            <small className="text-muted">
                              경력: {expert.experience}
                            </small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 상담 유형 */}
                <div className="mb-4">
                  <label className="form-label fw-bold">상담 유형</label>
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="consultationType"
                          id="video"
                          value="video"
                          checked={consultationType === "video"}
                          onChange={(e) =>
                            setConsultationType(e.target.value)
                          }
                        />
                        <label className="form-check-label" htmlFor="video">
                          화상 상담
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="consultationType"
                          id="chat"
                          value="chat"
                          checked={consultationType === "chat"}
                          onChange={(e) =>
                            setConsultationType(e.target.value)
                          }
                        />
                        <label className="form-check-label" htmlFor="chat">
                          채팅 상담
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 날짜 선택 */}
                <div className="mb-4">
                  <label htmlFor="date" className="form-label fw-bold">
                    날짜 선택
                  </label>
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={getMinDate()}
                    required
                  />
                </div>

                {/* 시간 선택 */}
                {selectedDate && (
                  <div className="mb-4">
                    <label className="form-label fw-bold">시간 선택</label>
                    <div className="row g-2">
                      {availableSlots.map((slot) => (
                        <div key={slot} className="col-6 col-md-3">
                          <button
                            type="button"
                            className={`btn w-100 ${
                              selectedTime === slot
                                ? "btn-primary"
                                : "btn-outline-primary"
                            }`}
                            onClick={() => setSelectedTime(slot)}
                          >
                            {slot}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 메모 */}
                <div className="mb-4">
                  <label htmlFor="notes" className="form-label fw-bold">
                    상담 내용 (선택사항)
                  </label>
                  <textarea
                    className="form-control"
                    id="notes"
                    rows="4"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="상담하고 싶은 내용을 간단히 적어주세요."
                  />
                </div>

                {/* 예약 버튼 */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={
                      loading ||
                      !selectedExpert ||
                      !selectedDate ||
                      !selectedTime
                    }
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        예약 중...
                      </>
                    ) : (
                      "상담 예약하기"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
