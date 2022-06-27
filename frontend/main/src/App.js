import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./components/Payment";
import About from "./pages/AboutPage";
import { DonasiPage } from "./pages/DonasiPage";
import LandingPage from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/notFoundPage";
import SignUp from "./pages/SignUpPage";
import TutorialPage from "./pages/TutorialPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/donasi" element={<DonasiPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/tutorial" element={<TutorialPage/>} />
          <Route path="/test1" element={<Payment/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
