import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

// Components
import Layout from "./components/layout/Layout";
import AppRoutes from "./routes/AppRoutes";

// Video Consultation Components
import VideoConsultation from "./components/VideoConsultation";
import VideoGrid from "./components/VideoGrid";
import VideoControls from "./components/VideoControls";
import ParticipantVideo from "./components/ParticipantVideo";
import StatusIndicator from "./components/StatusIndicator";
import MuteButton from "./components/MuteButton";
import VideoToggleButton from "./components/VideoToggleButton";
import ScreenShareButton from "./components/ScreenShareButton";
import EndSessionButton from "./components/EndSessionButton";

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
