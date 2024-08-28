import Home from "./pages/home/Home";
import Loading from "./components/loading/Loading";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Project from "./pages/projects/Project";
import Contact from "./pages/contact/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      )}
    </>
  );
}

export default App;
