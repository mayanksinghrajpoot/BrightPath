import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { authState, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  const changeTheme = () => {
    const themeToggle = document.getElementById('themetoggle');
    if (!themeToggle.checked) {
        document.documentElement.dataset.theme = 'dark';
    }
    else {
    document.documentElement.dataset.theme = 'black';
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 opacity-95 backdrop-blur-[90%] px-2 overflow-x-hidden">
        <div className="w-screen flex justify-between items-center py-4 px-2 sm:px-4">
          <div className='m-0 md:m-1 lg:m-2'><Link to={ "/"} className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
            BrightPath
          </Link></div>
      <div className=" px-2 sm:px-8">
          <div className="flex justify-evenly items-center space-x-1 sm:space-x-4 ">
            {/* <-- Theme Switcher  */}
                  <div>
    <label className="swap swap-rotate bg-white" >
  {/*                         ****** this hidden checkbox controls the state , using this to toggle between themes                 */}
  <input type="checkbox"onClick={changeTheme} id='themetoggle' />

  {/* sun icon */}
  <svg
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
                  </label></div>
            {authState.isAuthenticated ? (
              <>
                <span className="text-gray-700 hidden sm:block">Welcome, {authState.user?.name}!</span>
                <Link to="/dashboard" className="text-gray-600 hover:text-primary">Dashboard</Link>
                <Link to="/quiz" className="text-gray-600 hidden sm:block hover:text-primary">Quiz</Link>
                <button
                  onClick={handleLogout}
                  className="bg-primary-content px-1 sm:px-4 py-1 sm:py-2  rounded-md hover:bg-primary transition hover:text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-primary">Login</Link>
                <Link to="/signup" className="bg-primary-content btn btn-outlined text-gray-600 px-4 py-2 rounded-md hover:bg-primary transition hover:text-white">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


