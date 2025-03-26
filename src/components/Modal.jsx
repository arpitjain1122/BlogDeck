import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose }) => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-container">
        <div className="bg-[#B36D6D] text-center p-5 h-96 w-[500px] rounded shadow-md">
          {/* Modal content, including login form */}
          {!isAuthenticated && (
            <h2 className="text-xl font-semibold mb-4 mt-6 mb-5 uppercase">
              Please Login Here!
            </h2>
          )}
          {!isAuthenticated && (
            <form className="px-4">
              {/* email */}
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              {/* password */}
              <div className="mb-5">
                <input
                  type="password"
                  name="emapasswordil"
                  id="password"
                  placeholder="type your password"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              {/* submit btn */}
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none">
                Login
              </button>
              &nbsp; &nbsp;
              <button
                className="hover:shadow-form rounded-md bg-[#6A64F1] hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none"
                onClick={() => loginWithRedirect()}
              >
                Sign in with
              </button>
            </form>
          )}
          {/* Add your login form here */}
          {isAuthenticated && (
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center mt-8"
              onClick={handleLogout}
            >
              Sign out
            </button>
          )}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center mt-8"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
