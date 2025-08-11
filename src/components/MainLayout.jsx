import React from "react";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#060b1a] via-[#0d1225] to-[#060b1a] text-white font-sans relative overflow-hidden">
      
      {/* Background orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-pulse delay-300"></div>

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center px-4 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-400 border-t border-white/10 bg-white/5 backdrop-blur-md relative z-10">
        © {new Date().getFullYear()} CineBook. All rights reserved.
      </footer>
    </div>
  );
}
