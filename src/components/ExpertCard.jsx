// src/components/ExpertCard.jsx
import React from "react";

export default function ExpertCard({ expert, onSelect }) {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <div className="text-center mb-3">
          <img
            src={expert.avatar}
            alt={expert.name}
            className="rounded-circle"
            style={{ width: "64px", height: "64px" }}
          />
        </div>
        <h5 className="card-title text-center">{expert.name}</h5>
        <p className="card-text flex-grow-1">{expert.bio}</p>
        <p className="text-muted">요율: ₩{expert.rate}/분</p>
        <button
          onClick={() => onSelect(expert)}
          className="btn btn-primary w-100"
        >
          선택
        </button>
      </div>
    </div>
  );
}
