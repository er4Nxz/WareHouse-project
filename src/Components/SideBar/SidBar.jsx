import { useEffect, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  const [warehouse1, setWarehouse1] = useState(false);
  const [warehouse2, setWarehouse2] = useState(false);
  const [warehouse3, setWarehouse3] = useState(false);
  const [warehouse4, setWarehouse4] = useState(false);
  const [warehouse5, setWarehouse5] = useState(false);
  return (
    <>
      <div className="hidden md:block md:w-80 p-4 bg-slate-900 sticky top-0 h-screen border-r border-purple-700 shadow-lg">
        <aside className="bg-slate-800 border border-purple-500 rounded-2xl p-6 text-white shadow-md">
          <h5 className="text-xl font-bold text-white mb-4 border-b border-pink-500 pb-2">
            فیلترها
          </h5>
          <ul className="space-y-3">
            <li>
              <Link
                className="block px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white hover:text-pink-400 font-medium"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  setWarehouse1(true);
                }}
              >
                انبار ۱
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                className="block px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white hover:text-pink-400 font-medium"
                onClick={() => {
                  setWarehouse2(true);
                }}
              >
                انبار ۲
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                className="block px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white hover:text-pink-400 font-medium"
                onClick={() => {
                  setWarehouse3(true);
                }}
              >
                انبار ۳
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                className="block px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white hover:text-pink-400 font-medium"
                onClick={() => {
                  setWarehouse4(true);
                }}
              >
                انبار ۴
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                className="block px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white hover:text-pink-400 font-medium"
                onClick={() => {
                  setWarehouse5(true);
                }}
              >
                انبار ۵
              </Link>
            </li>
          </ul>
        </aside>
      </div>
      <button
        className="md:hidden gap-1 hover:text-pink-400 font-medium flex items-center mx-2 px-3 py-1 absolute bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white"
        style={{ borderRadius: "14px", marginTop: "90px" }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <AiFillCaretRight />
        فیلترها
      </button>
      {open && (
        <div className="md:hidden block w-full p-4 bg-slate-900 absolute h-full border-r border-purple-700 shadow-lg">
          <aside className="bg-slate-800 border border-purple-500 rounded-2xl p-6 text-white shadow-md">
            <h5 className="text-xl font-bold text-white mb-4 border-b border-pink-500 pb-2">
              فیلترها
            </h5>
            <ul className="space-y-3">
              <li>
                <Link
                  className="block px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white hover:text-pink-400 font-medium"
                  style={{ textDecoration: "none" }}
                >
                  انبار ۱
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  className="block px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white hover:text-pink-400 font-medium"
                >
                  انبار ۲
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  className="block px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white hover:text-pink-400 font-medium"
                >
                  انبار ۳
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  className="block px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white hover:text-pink-400 font-medium"
                >
                  انبار ۴
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  className="block px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white hover:text-pink-400 font-medium"
                >
                  انبار ۵
                </Link>
              </li>
            </ul>
          </aside>
          <button
            className="md:hidden gap-3 hover:text-pink-400 font-medium flex items-center m-3 px-4 py-3 absolute bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white"
            style={{ borderRadius: "14px" }}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <AiFillCaretLeft />
            بستن
          </button>
        </div>
      )}
    </>
  );
};

export default SideBar;
