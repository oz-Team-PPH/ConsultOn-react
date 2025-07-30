// src/components/ExpertList.jsx
import React from "react";
import ExpertCard from "./ExpertCard";

export default function ExpertList({ experts, onSelect }) {
  return (
    <div className="row g-4">
      {experts.map((expert) => (
        <div key={expert.id} className="col-12 col-md-6 col-lg-4">
          <ExpertCard expert={expert} onSelect={onSelect} />
        </div>
      ))}
    </div>
  );
}
