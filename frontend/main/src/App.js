import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DonasiPage } from "./pages/DonasiPage";
import LandingPage from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/notFoundPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/donasi" element={<DonasiPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
