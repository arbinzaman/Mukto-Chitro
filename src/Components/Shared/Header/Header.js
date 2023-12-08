import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error("error"));
  };
  return (
    <div>
      <nav>
        <div className="navbar bg-base-300">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/packages">Packages</Link>
                </li>
                <li>
                  <Link to="/dashboard">DashBoard</Link>
                </li>
              </ul>
            </div>
            {location.pathname === "/dashboard" && (
              <label
                htmlFor="dashboardDrawer"
                tabIndex={2}
                className="btn btn-ghost xl:hidden "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  id="dashboard"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"></path>
                </svg>
              </label>
            )}
          </div>
          <div className="navbar-center">
            <Link to="/">
              <img
                src="https://i.ibb.co/3rLmrRK/chitrogolpo.jpg"
                className="h-20"
                alt=""
              />
            </Link>
          </div>
          <div className="navbar-end">
            {user?.uid ? (
              <>
                <span className="">
                  <img
                    src={user?.photoURL}
                    title={user?.displayName}
                    className=" ml-auto h-10 rounded-full"
                    alt=""
                  />
                </span>
                <button
                  onClick={handleLogOut}
                  className="btn btn-ghost normal-case text-xl"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-ghost normal-case text-xl">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-ghost normal-case text-xl"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
