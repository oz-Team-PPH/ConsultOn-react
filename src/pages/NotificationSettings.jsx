// src/pages/NotificationSettings.jsx
import React, { useState } from "react";
import NotificationToggle from "../components/NotificationToggle";
import CalendarIntegration from "../components/CalendarIntegration";

export default function NotificationSettings() {
  const [pushEnabled, setPushEnabled] = useState(false);

  const handlePushToggle = (enabled) => {
    setPushEnabled(enabled);
    console.log("푸시 알림 설정:", enabled ? "ON" : "OFF");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="h3 mb-4">알림 설정</h2>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">푸시 알림</h5>
          <NotificationToggle
            enabled={pushEnabled}
            onToggle={handlePushToggle}
          />
          <small className="text-muted">
            상담 예약 및 진행 상황에 대한 푸시 알림을 받습니다.
          </small>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">캘린더 연동</h5>
          <CalendarIntegration />
          <small className="text-muted">
            구글 캘린더와 연동하여 상담 일정을 자동으로 관리합니다.
          </small>
        </div>
      </div>
    </div>
  );
}
