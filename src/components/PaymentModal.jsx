// src/components/PaymentModal.jsx
import React from "react";

export default function PaymentModal({ expert, onClose }) {
  const handlePayment = () => {
    // 결제 로직
    console.log("결제 처리:", expert.name);
    onClose();
  };

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{expert.name} 상담 결제</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>요율: ₩{expert.rate}/분</p>
          </div>
          <div className="modal-footer">
            <button onClick={handlePayment} className="btn btn-success">
              결제하기
            </button>
            <button onClick={onClose} className="btn btn-secondary">
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
