import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm justify-between items-center space-x-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
          </ul>
        </div>
        <a className="btn btn-ghost w-20 hidden md:flex">
          <img src="/src/assets/logo.png" alt="" />
        </a>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
        </ul>
      </div>
      <a className="btn rounded-2xl">
        0 Coin <img src="/src/assets/dollar 1.png" alt="" />
      </a>
    </div>
  );
};

export default Navbar;
