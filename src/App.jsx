import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import { Toaster } from "react-hot-toast";
export default function App() {
  return <>
  <Navbar />
  <Toaster/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/Settings" element={<Settings />} />
  </Routes>
  <Footer/>

  </>;
}
