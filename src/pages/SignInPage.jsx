import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import useMyContext from "../context/MyContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import axios from "axios";
import { BackendBaseUrl } from "../config/BackendBaseUrl";
import PasswordInput from "../components/PasswordInput";

export default function SignInPage() {
  const { login } = useMyContext();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const response = await axios.post(`${BackendBaseUrl}/auth/login`, {
        username,
        password,
      });
      login(response.data.token, username);
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#060b1a] via-[#0d1225] to-[#060b1a] text-white font-sans flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
      {/* Animated glowing background orbs */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse delay-300"></div>
      
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 max-w-md w-full shadow-2xl hover:shadow-purple-500/30 transition duration-500 transform hover:-translate-y-1">
        
        <button
          onClick={() => navigate("/home")}
          className="flex items-center gap-2 mb-6 text-gray-300 hover:text-blue-400 transition-colors duration-300"
        >
          <FiArrowLeft /> Back to Home
        </button>

        <h2 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 text-transparent bg-clip-text drop-shadow-lg">
          Welcome Back
        </h2>

        <form onSubmit={handleSignIn} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <PasswordInput
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:scale-[1.03] shadow-purple-500/30"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Signing In...
              </div>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-400 hover:text-blue-300 underline transition-colors"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
