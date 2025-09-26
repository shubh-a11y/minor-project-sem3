import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home.jsx";
import Search from "./Pages/Search.jsx";
import Services from "./Pages/Services.jsx";
import ServiceGuide from "./Pages/ServiceGuide.jsx";
import { LanguageProvider } from "./Components/contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-guide" element={<ServiceGuide />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;
