import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { DataProvider } from "./Components/Context/AuthenticateInvestor";
import Register from "./Pages/register";
import Login from "./Pages/Login";
import Loading_components_of_dashboard from "./Pages/Loading_components_of_dashboard";

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Loading_components_of_dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={<Loading_components_of_dashboard />}
          />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
