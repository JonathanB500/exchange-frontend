import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import LayoutDashboard from "../layouts/LayoutDashboard";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import LandingPage from "../pages/landing-page/landing-page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={LayoutDashboard(Home)} />
        <Route path="/landing-page" element={LayoutDashboard(LandingPage)} />
      </Routes>
    </div>
  );
}

export default App;
