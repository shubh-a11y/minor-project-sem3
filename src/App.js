import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home.jsx";
import Search from "./Pages/Search.jsx";
import Services from "./Pages/Services.jsx";
import ServiceGuide from "./Pages/ServiceGuide.jsx";
import FAQ from "./Pages/FAQ.jsx";
import { LanguageProvider } from "./Components/contexts/LanguageContext";
import { ThemeProvider } from "./Components/contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service-guide" element={<ServiceGuide />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </Layout>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
