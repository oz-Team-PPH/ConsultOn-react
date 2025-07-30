import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Pricing from "../pages/Pricing";
import Features from "../pages/Features";
import NotificationSettings from "../pages/NotificationSettings";
import ConsultationSummary from "../pages/ConsultationSummary";
import ExpertMatching from "../pages/ExpertMatching";
import ConsultationChat from "../pages/ConsultationChat";
import VideoConsultation from "../pages/VideoConsultation";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import ConsultationBooking from "../pages/ConsultationBooking";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/features" element={<Features />} />
      <Route path="/notifications" element={<NotificationSettings />} />
      <Route path="/summary" element={<ConsultationSummary />} />
      <Route path="/experts" element={<ExpertMatching />} />
      <Route path="/chat" element={<ConsultationChat />} />
      <Route path="/video" element={<VideoConsultation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/booking" element={<ConsultationBooking />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
