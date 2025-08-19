import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import { Toaster } from "react-hot-toast";
import Register from "./components/Register";
import NotFound from "./pages/NotFound";
import Likedimages from "./components/Likedimages";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import "./Firebase/Config";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/Config";
export default function App() {
  const location = useLocation();
  const login =
    location.pathname === "/Login" || location.pathname === "/register";

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (CurrentUser) => {
      setUser(CurrentUser);
    });

    return () => unsubscibe();
  }, []);
  return (
    <>
      {!login && <Navbar user={user} setUser={setUser} />}
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/Settings" element={<Settings />} />
        <Route
          path="/Login"
          element={user ? <Navigate to={"/"} /> : <Login setUser={setUser} />}
        />
        <Route
          path="/Register"
          element={user ? <Navigate to={"/"} /> : <Register setUser={setUser} />}
        />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="/Likedimages" element={<Likedimages />} />
      </Routes>
      {!login && <Footer />}
    </>
  );
}
