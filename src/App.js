import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import CollectionsPage from "./pages/Collections";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/collections/:category" element={<CategoryPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
