import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import "./styles/index.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="font-primary">
      <Header />
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/categories/:category"} element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
