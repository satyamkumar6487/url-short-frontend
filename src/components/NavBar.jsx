
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io"; 
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStoreContext } from "../contextApi/ContextApi";

const NavBar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  };

  return (
   <div className="h-16 bg-gradient-to-r from-purple-600 to-pink-500 z-50 flex items-center sticky top-0">

      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">
        <Link to="/">
          <h1 className="font-bold text-3xl text-white italic sm:mt-0 mt-2">
            Linklytics
          </h1>
        </Link>

        <ul
          className={`flex sm:gap-10 gap-4 sm:items-center sm:mt-1 sm:pt-0 pt-3 text-slate-800 sm:static absolute 
            ${navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"} 
            transition-all duration-100 sm:h-fit sm:bg-none bg-custom-gradient sm:w-fit w-full sm:flex-row flex-col`}
        >
          <li>
            <Link
              className={`${
                path === "/" ? "text-white font-semibold" : "text-gray-200"
              } hover:text-btnColor font-[500]`}
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className={`${
                path === "/about" ? "text-white font-semibold" : "text-gray-200"
              } hover:text-btnColor font-[500]`}
              to="/about"
            >
              About
            </Link>
          </li>

          {token && (
            <li>
              <Link
                className={`${
                  path === "/dashboard"
                    ? "text-white font-semibold"
                    : "text-gray-200"
                } hover:text-btnColor font-[500]`}
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
          )}

          {!token && (
            <Link to="/register">
              <li className="bg-rose-700 text-white cursor-pointer w-24 text-center font-semibold rounded-md">
                SignUp
              </li>
            </Link>
          )}







          {token && (
            <button
              onClick={onLogOutHandler}
              className="bg-rose-700 text-white cursor-pointer w-24 text-center font-semibold rounded-md"
            >
              LogOut
            </button>
          )}
        </ul>

        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden flex items-center sm:mt-0 mt-2"
        >
          {navbarOpen ? (
            <RxCross2 className="text-white text-3xl" />
          ) : (
            <IoIosMenu className="text-white text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default NavBar;































