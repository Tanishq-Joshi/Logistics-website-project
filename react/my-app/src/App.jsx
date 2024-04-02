import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import { register } from "./pages/Register.jsx";
import IntraCity from "./pages/IntraCity.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<register />} />
                <Route path="/checkout" element={<IntraCity />} />
            </Routes>
        </Router>
    )
}

export default App;