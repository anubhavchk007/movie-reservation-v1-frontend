import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import useMyContext from "../context/MyContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import axios from "axios";
import { BackendBaseUrl } from "../config/BackendBaseUrl";
import PasswordInput from "../components/PasswordInput";
import MainLayout from "../components/MainLayout";
import LoadingSpinner from "../components/LoadingSpinner";

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
    if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      }
      else if (err.request && !err.response) {
        toast.error("Server error. Please try again later.");
      }
      else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
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
            {loading ? <LoadingSpinner label="Signing In..." /> : "Sign In"}
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
    </MainLayout>
  );
}
