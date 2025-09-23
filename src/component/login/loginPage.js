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
        <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#fff" }}>
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
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px", color: "black" }}>Log in</h2>
                    <form onSubmit={handleSubmit}>
                        <TextBox
                            label="Email address"
                            color="black"
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
                                textAlign: "end",
                                width: "135%",
                                marginBottom: "20px",
                                marginTop: "-10px"
                            }}
                        >
                            <a href="/forgot-password" style={{ fontSize: "14px", color: "blue", textAlign:"end" }}>
                                Forgot password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            style={{
                                width: "135%",
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
                    backgroundImage: "url('https://picsum.photos/id/1015/800/600')", // ✅ Correct URL
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    padding: "40px",
                    borderRadius: "25px 0px 0px 25px",
                }}
            >

                <img
                    src="/aurum-logo.png" // put your logo inside /public folder
                    alt="Aurum CoNexus "
                    style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        width: "120px"
                    }}
                />


                <h2 style={{ fontSize: "50px", fontWeight: "bold", marginBottom: "16px" }}>Welcome back!</h2>
                <p style={{ fontSize: "25px", textAlign: "center", maxWidth: "400px" }}>
                    Enter your Credentials to access your account
                </p>
            </div>
        </div>
    );
}


