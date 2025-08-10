import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function PasswordInput({ placeholder, value, onChange }) {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="px-4 py-3 pr-10 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          value={value}
          onChange={onChange}
          autoComplete="current-password"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
    );
  }