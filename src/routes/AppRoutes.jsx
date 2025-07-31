import React from "react";
import { Routes, Route } from "react-router-dom";

// 기존 페이지들
import Home from "../pages/Home";
import About from "../pages/About";
import Features from "../pages/Features";
import Pricing from "../pages/Pricing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import VideoConsultation from "../pages/VideoConsultation";
import ConsultationBooking from "../pages/ConsultationBooking";
import ConsultationChat from "../pages/ConsultationChat";
import ConsultationSummary from "../pages/ConsultationSummary";
import ExpertMatching from "../pages/ExpertMatching";
import NotificationSettings from "../pages/NotificationSettings";
import Profile from "../pages/Profile";

// 새로 생성한 페이지들
import AIQAPage from "../pages/AIQAPage";
import ExpertSearchPage from "../pages/ExpertSearchPage";
import RecordingSummaryPage from "../pages/RecordingSummaryPage";
import TodoNotificationPage from "../pages/TodoNotificationPage";
import ExpertDashboardPage from "../pages/ExpertDashboardPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 기존 라우트들 */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/video" element={<VideoConsultation />} />
      <Route path="/booking" element={<ConsultationBooking />} />
      <Route path="/chat" element={<ConsultationChat />} />
      <Route path="/summary" element={<ConsultationSummary />} />
      <Route path="/expert-matching" element={<ExpertMatching />} />
      <Route path="/notifications" element={<NotificationSettings />} />
      <Route path="/profile" element={<Profile />} />

      {/* 새로 생성한 6개 기능 페이지들 */}
      <Route path="/ai-qa" element={<AIQAPage />} />
      <Route path="/expert-search" element={<ExpertSearchPage />} />
      <Route path="/recording-summary" element={<RecordingSummaryPage />} />
      <Route path="/todo-notification" element={<TodoNotificationPage />} />
      <Route path="/expert-dashboard" element={<ExpertDashboardPage />} />
      
      {/* 화상상담 페이지 (기존과 동일) */}
      <Route path="/video-consultation" element={<VideoConsultation />} />
    </Routes>
  );
};

export default AppRoutes;
