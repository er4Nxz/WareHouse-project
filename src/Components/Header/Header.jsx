import { NavLink } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FiHome, FiPlus, FiList, FiSearch } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="w-full px-6 py-4 bg-slate-900 fixed top-0 z-50 shadow-lg border-b border-purple-700">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleMenu}
              className="md:hidden text-white text-2xl focus:outline-none hover:text-purple-400 transition-colors"
            >
              {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </button>
            <div className="hidden md:flex gap-8 items-center">
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-lg text-lg transition-all duration-300 text-white${
                    isActive
                      ? "text-white bg-slate-700 border border-pink-500"
                      : " hover:text-white hover:bg-slate-700 hover:scale-105"
                  }`
                }
                style={{ textDecoration: "none" }}
                to={"/"}
              >
                <FiHome className="text-xl" />
                قطعات
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-lg text-lg transition-all duration-300 text-white${
                    isActive
                      ? "text-white bg-slate-700 border border-pink-500"
                      : " hover:text-white hover:bg-slate-700 hover:scale-105"
                  }`
                }
                to={"/Create"}
                style={{ textDecoration: "none" }}
              >
                <FiPlus className="text-xl" />
                اضافه کردن قطعه جدید
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-lg text-lg transition-all duration-300 text-white${
                    isActive
                      ? "text-white bg-slate-700 border border-pink-500"
                      : " hover:text-white hover:bg-slate-700 hover:scale-105"
                  }`
                }
                to={"/RequirementList"}
                style={{ textDecoration: "none" }}
              >
                <FiList className="text-xl" />
                قطعاتی که نیاز داریم
              </NavLink>
            </div>
          </div>
          <div className="relative">
            <FiSearch className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2  text-xl" />
            <input
              type="search"
              name="searchBar"
              className="pl-10 pr-4 py-2 rounded-lg bg-slate-800 text-white placeholder-gray-400 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-200"
              placeholder="جستجو..."
            />
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
            <div className="flex flex-col gap-4">
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-lg transition-all duration-300 text-white ${
                    isActive
                      ? "text-white bg-slate-700 border border-pink-500"
                      : " hover:text-white hover:bg-slate-700 hover:scale-105"
                  }`
                }
                style={{ textDecoration: "none" }}
                to={"/"}
                onClick={toggleMenu}
              >
                <FiHome className="text-xl" />
                قطعات
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-lg transition-all duration-300 text-white ${
                    isActive
                      ? "text-white bg-slate-700 border border-pink-500"
                      : " hover:text-white hover:bg-slate-700 hover:scale-105"
                  }`
                }
                to={"/Create"}
                style={{ textDecoration: "none" }}
                onClick={toggleMenu}
              >
                <FiPlus className="text-xl" />
                اضافه کردن قطعه جدید
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-lg transition-all duration-300 text-white ${
                    isActive
                      ? "text-white bg-slate-700 border border-pink-500"
                      : " hover:text-white hover:bg-slate-700 hover:scale-105"
                  }`
                }
                to={"/RequirementList"}
                style={{ textDecoration: "none" }}
                onClick={toggleMenu}
              >
                <FiList className="text-xl text-gray-400" />
                قطعاتی که نیاز داریم
              </NavLink>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
