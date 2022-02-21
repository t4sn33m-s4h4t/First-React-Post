import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login-signup";
import { useState } from "react";
import Welcome from "./components/Welcome/welcome";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let [singedInUser, setsingedInUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: ""
  });
  return (
    <Router>
      <Header />
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Welcome />} />
        )}
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={
            <Login
              setsingedInUser={setsingedInUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              singedInUser={singedInUser}
            />
          }
        />
      </Routes>
    </Router>
  );
}
