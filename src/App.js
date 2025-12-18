import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";

import Home from "./Pages/Home";
import About from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import ReturnPolicy from "./Pages/ReturnPolicy";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/return" element={<ReturnPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
