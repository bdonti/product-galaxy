import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { GiGalaxy } from "react-icons/gi";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <Link
          rel="noopener noreferrer"
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2 text-3xl"
        >
          <div className="flex md:flex-col lg:flex-col flex-row">
            <GiGalaxy className="text-blue-500 text-center mx-auto" />
            <p className="font-semibold">
              <span className="text-sky-600 ml-2 lg:ml-0">Product</span> Galaxy
            </p>
          </div>
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex lg:justify-center lg:items-center lg:mx-auto">
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/"
              className={`flex items-center px-4 -mb-1 border-b-2 dark:border-${
                isActive("/") ? "violet-600 font-bold" : ""
              }`}
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/queries"
              className={`flex items-center px-4 -mb-1 border-b-2 dark:border-${
                isActive("/queries") ? "violet-600 font-bold" : ""
              }`}
            >
              Queries
            </NavLink>
          </li>
          {user && (
            <>
              <li className="flex">
                <NavLink
                  rel="noopener noreferrer"
                  to="/recommendations"
                  className={`flex items-center px-4 -mb-1 border-b-2 dark:border-${
                    isActive("/recommendations") ? "violet-600 font-bold" : ""
                  }`}
                >
                  Recommendations For Me
                </NavLink>
              </li>
              <li className="flex">
                <NavLink
                  rel="noopener noreferrer"
                  to="/myQueries"
                  className={`flex items-center px-4 -mb-1 border-b-2 dark:border-${
                    isActive("/myQueries") ? "violet-600 font-bold" : ""
                  }`}
                >
                  My Queries
                </NavLink>
              </li>
              <li className="flex">
                <NavLink
                  rel="noopener noreferrer"
                  to="/myRecommendations"
                  className={`flex items-center px-4 -mb-1 border-b-2 dark:border-${
                    isActive("/myRecommendations") ? "violet-600 font-bold" : ""
                  }`}
                >
                  My Recommendations
                </NavLink>
              </li>
            </>
          )}
        </ul>
        {loading && (
          <>
            <div className="items-center flex-shrink-0 hidden lg:flex">
              <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
            </div>
          </>
        )}
        {!loading && user ? (
          <>
            <div className="items-center flex-shrink-0 hidden lg:flex">
              <div className="flex flex-col items-center justify-center px-10">
                <div className="flex space-x-5">
                  <img
                    alt=""
                    className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <button
                onClick={logOut}
                className="px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            {!loading && (
              <div className="items-center flex-shrink-0 hidden lg:flex">
                <NavLink to="/login">
                  <button className="self-center px-8 py-3 rounded">
                    Sign in
                  </button>
                </NavLink>
                <NavLink
                  to="/register"
                  className="px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50"
                >
                  Sign up
                </NavLink>
              </div>
            )}
          </>
        )}
        <button className="p-4 lg:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {isMenuOpen && (
          <ul className="absolute top-16 left-0 right-0 bg-white shadow-lg rounded-lg lg:hidden">
            <li className="p-4">
              <NavLink
                rel="noopener noreferrer"
                to="/"
                className={`flex justify-center items-center px-4 -mb-1 border-b-2 dark:border-${
                  isActive("/") ? "violet-600 font-bold" : ""
                }`}
              >
                Home
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink
                rel="noopener noreferrer"
                to="/queries"
                className={`flex justify-center items-center px-4 -mb-1 border-b-2 dark:border-${
                  isActive("/queries") ? "violet-600 font-bold" : ""
                }`}
              >
                Queries
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink
                rel="noopener noreferrer"
                to="/recommendations"
                className={`flex justify-center items-center px-4 -mb-1 border-b-2 dark:border-${
                  isActive("/recommendations") ? "violet-600 font-bold" : ""
                }`}
              >
                Recommendations
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink
                rel="noopener noreferrer"
                to="/myQueries"
                className={`flex justify-center items-center px-4 -mb-1 border-b-2 dark:border-${
                  isActive("/myQueries") ? "violet-600 font-bold" : ""
                }`}
              >
                My Queries
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink
                rel="noopener noreferrer"
                to="/myRecommendations"
                className={`flex justify-center items-center px-4 -mb-1 border-b-2 dark:border-${
                  isActive("/myRecommendations") ? "violet-600 font-bold" : ""
                }`}
              >
                My Recommendations
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
