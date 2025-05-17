import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>
        </li>

        {!isAuthenticated && (
          <>
            <li>
              <Link to="/login" className="hover:text-yellow-400">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-yellow-400">
                Register
              </Link>
            </li>
          </>
        )}

        {isAuthenticated && (
          <>
            <li>
              <Link to="/dashboard" className="hover:text-yellow-400">
                Dashboard
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={logout}
                className="text-yellow-400 hover:text-white"
                aria-label="Logout"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>

      {isAuthenticated && user && (
        <div className="text-yellow-400 font-semibold">
          Welcome, {user.name || user.email}!
        </div>
      )}
    </nav>
  );
}

export default Navbar;
