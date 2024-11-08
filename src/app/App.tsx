import "./App.css";
import { Route, Routes } from "react-router-dom";
import Details from "../pages/details";
import LayoutDashboard from "../layouts/LayoutDashboard";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/details/:symbol" element={LayoutDashboard(Details)} />
      </Routes>
    </div>
  );
}

export default App;
