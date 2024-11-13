import "./App.css";
import { Route, Routes } from "react-router-dom";
import Details from "../pages/details";
import LayoutDashboard from "../layouts/LayoutDashboard";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import LandingPage from "../pages/landing-page/landing-page";
import WalletPage from "../pages/wallet-page/wallet-page";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/details/:type/:symbol"
          element={LayoutDashboard(Details)}
        />
        <Route path="/" element={LayoutDashboard(LandingPage)} />
        <Route path="/wallet" element={LayoutDashboard(WalletPage)} />
      </Routes>
    </div>
  );
}

export default App;
