import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [type, setType] = useState("user");

  const handleLogin = () => {
    login(type);
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        >
          <option value="user">User</option>
          <option value="business">Business</option>
          <option value="admin">Admin</option>
        </select>
        <button
          onClick={handleLogin}
          className="w-full py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
