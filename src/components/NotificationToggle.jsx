// src/components/NotificationToggle.jsx
import React from "react";

export default function NotificationToggle({ enabled, onToggle }) {
  return (
    <div className="d-flex align-items-center gap-2 mb-4">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={enabled}
          onChange={(e) => onToggle(e.target.checked)}
          id="notificationToggle"
        />
        <label className="form-check-label" htmlFor="notificationToggle">
          푸시 알림 {enabled ? "ON" : "OFF"}
        </label>
      </div>
    </div>
  );
}
