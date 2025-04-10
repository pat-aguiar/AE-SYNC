import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuildPage from "./pages/BuildPage";
import LandingPage from "./pages/LandingPage";
import LearnPage from "./pages/LearnPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import TermsOfService from "./pages/TermsOfService";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/build" element={<BuildPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
