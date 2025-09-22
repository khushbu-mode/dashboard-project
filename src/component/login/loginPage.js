"use client";

import { useState } from "react";
import TextBox from "../reusables/textBoxes/TextBox";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields!");
      return;
    }
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor:"#fff" }}>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <div style={{ width: "100%", maxWidth: "350px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px", color:"black"}}>Log in</h2>
          <form onSubmit={handleSubmit}>
            <TextBox
              label="Email address"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={setEmail}
              required
            />
            <TextBox    
              label="Password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={setPassword}
              required
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <a href="/forgot-password" style={{ fontSize: "14px", color: "blue" }}>
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#d4a017",
                color: "#fff",
                padding: "10px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Log in
            </button>
          </form>
        </div>
      </div>

      {/* Right side - Welcome panel */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(to bottom right, #0a2a66, #1c4c9a)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          borderRadius:"25px 0px 0px 25px"
        }}
      >
        <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px" }}>Welcome back!</h2>
        <p style={{ fontSize: "18px", textAlign: "center", maxWidth: "400px" }}>
          Enter your Credentials to access your account
        </p>
      </div>
    </div>
  );
}


/* import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", { email, password });
    // here you can call API or authentication service
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login to Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-indigo-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
 */