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
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 md:p-12">
        <div className="w-full max-w-sm sm:max-w-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black text-center md:text-left">
            Log in
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <div className="text-right">
              <a
                href="/forgot-password"
                className="text-blue-600 text-sm sm:text-base hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-3 px-6 rounded-md hover:bg-yellow-500 transition"
            >
              Log in
            </button>
          </form>
        </div>
      </div>

      {/* Right - Welcome Panel */}
      <div
        className="hidden md:flex flex-1 flex-col justify-center items-start p-8 lg:p-12 bg-cover bg-center rounded-t-3xl md:rounded-none md:rounded-l-3xl relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        {/* Logo */}
        <img
          src="/aurum-logo.png"
          alt="Aurum CoNexus"
          className="absolute top-4 right-4 w-24 lg:w-32"
        />
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
          Welcome back!
        </h2>
        <p className="text-base lg:text-xl max-w-lg text-white">
          Enter your credentials to access your account
        </p>
      </div>
    </div>
  );
}
