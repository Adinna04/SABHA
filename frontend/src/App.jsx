import { useState } from "react";
import "./App.css";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState("landing");

  const goDashboard = () => {
    setPage("dashboard");
  };

  const goLanding = () => {
    setPage("landing");
  };

  return (
    <>
      {page === "landing" && (
        <Landing onEnter={goDashboard} />
      )}

      {page === "dashboard" && (
        <Dashboard onBack={goLanding} />
      )}
    </>
  );
}

export default App;