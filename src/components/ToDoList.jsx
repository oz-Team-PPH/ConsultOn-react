// src/components/ToDoList.jsx
import React from "react";

export default function ToDoList({ items }) {
  return (
    <div className="border rounded p-4 bg-white">
      <h3 className="fw-semibold mb-2">Action Items</h3>
      <ul className="list-group list-group-numbered">
        {items.map((item, i) => (
          <li key={i} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
