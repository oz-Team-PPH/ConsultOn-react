// src/components/SummaryCard.jsx
import React from "react";

export default function SummaryCard({ data }) {
  return (
    <div className="border rounded p-4 mb-4 bg-white">
      <h3 className="fw-semibold mb-2">핵심 요약</h3>
      <ul className="list-group list-group-flush">
        {data.map((point, i) => (
          <li key={i} className="list-group-item">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
