import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-yellow-400">Home</Link>
        </li>
        {!isAuthenticated && (
          <>
            <li>
              <Link to="/login" className="hover:text-yellow-400">Login</Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-yellow-400">Register</Link>
            </li>
          </>
        )}
        {isAuthenticated && (
          <>
            <li>
              <Link to="/dashboard" className="hover:text-yellow-400">Dashboard</Link>
            </li>
            <li>
              <button onClick={logout} className="text-yellow-400 hover:text-white">Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
