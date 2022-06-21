import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path="/home" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/donasi" element={<DonasiPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/tutorial" element={<TutorialPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
