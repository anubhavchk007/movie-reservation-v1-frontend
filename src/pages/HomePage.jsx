import React from "react";
import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import useMyContext from "../context/MyContext";
import { useNavigate } from "react-router";

export default function HomePage() {
  const { isLoggedIn, usernameToDisplay, logout } = useMyContext();
  const navigate = useNavigate();

  const handleSignIn = () => navigate("/login");
  const handleSignOut = () => logout();
  const handleSignUp = () => navigate("/signup");

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#050a1f] via-[#0a0f2e] to-[#050a1f] text-white font-sans flex flex-col">
      {/* Navbar */}
      <header className="w-full px-8 py-4 flex justify-between items-center backdrop-blur-md bg-white/5 border-b border-white/10 shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-md"
        >
          🎬 CineBook
        </motion.h1>

        {isLoggedIn ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 items-center"
          >
            <span className="px-5 py-2 text-blue-400 font-medium tracking-wide">
              {usernameToDisplay}
            </span>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/40"
            >
              <FiLogOut /> Sign Out
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            <button
              onClick={handleSignIn}
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/40"
            >
              <FiLogIn /> Sign In
            </button>
            <button
              onClick={handleSignUp}
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/40"
            >
              <FiUserPlus /> Sign Up
            </button>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background floating shapes */}
        <motion.div
          className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"
        ></motion.div>
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-10 max-w-2xl w-full text-center shadow-2xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-extrabold mb-6 drop-shadow-lg"
          >
            Welcome to{" "}
            <span className="text-blue-400">CineBook</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 mb-8 text-lg"
          >
            Book your favorite movie tickets effortlessly and
            experience cinema like never before.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full text-lg font-semibold shadow-lg shadow-blue-500/30 transition-all"
          >
            Let’s Go!
          </motion.button>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-400 border-t border-white/10 bg-white/5 backdrop-blur-md">
        © {new Date().getFullYear()} CineBook. All rights reserved.
      </footer>
    </div>
  );
}
