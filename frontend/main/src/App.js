import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./components/Payment";
import About from "./pages/AboutPage";
import DetailDonasi from "./pages/DetailDonasi/DetailDonasi";
import { DonasiPage } from "./pages/DonasiPage";
import LandingPage from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/notFoundPage";
import Profile from "./pages/Profilepage";
import SignUp from "./pages/SignUpPage";
import TutorialPage from "./pages/TutorialPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/donasi" element={<DonasiPage />} />
          <Route path="/donasi/detail/:id" element={<DetailDonasi />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/tutorial" element={<TutorialPage />} />
          <Route path="/test1" element={<Payment />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
