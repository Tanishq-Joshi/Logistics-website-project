import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import "../components/CSS/login.css";

function Login() {
  // Declare state variables for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let alreadyRegistered = false;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate username and password
    if (username === "admin" && password === "1234") {
      // Login successful
      alert("Welcome, admin!");
      alreadyRegistered = true;
    } else {
      // Login failed
      alert("Invalid credentials");
    }
  };

  return (
    <div>
        <div style={{ 
                backgroundImage: "url(https://4kwallpapers.com/images/wallpapers/dark-blue-pink-3840x2160-12661.jpg)",
                backgroundSize: "cover",
             }}>
                <Navbar />
            </div>
        <div className="login">
          <h1 style={{ fontFamily: "Comfortaa" }}>Login</h1>
          {(alreadyRegistered) ? (<h2>Already Logged In</h2>) : (
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username"></label>
              <input
                className="Input"
                type="text"
                id="username"
                value={username}
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password"></label>
              <input
                className="Input"
                placeholder="Enter Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="Submit" type="submit">Login</button>
          </form> )}
        </div>
    </div>
  );
}

export default Login;
