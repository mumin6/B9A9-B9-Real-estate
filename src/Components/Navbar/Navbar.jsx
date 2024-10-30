import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/update_profile">Update Profile</NavLink>
      </li>
    </>
  );
  const { logOut, user } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <NavLink to="/">
          <a className="btn btn-ghost md:text-2xl text-base">Luxury Estate</a>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end flex items-center">
            <div
              className="tooltip tooltip-bottom "
              data-tip={user.displayName}
            >
              <div
                className="btn btn-ghost btn-circle avatar tooltip-bottom  "
              >
                <img alt="Tailwind CSS Navbar component" className="rounded-full" src={user.photoURL} />
              </div>
            </div>

            <button onClick={() => logOut()} className="btn btn-ghost mx-1">
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button className="btn btn-ghost">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
