import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import APropos from "./pages/aPropos";
import Home from "./pages/Home";
import Page404 from "./pages/page404/page404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
