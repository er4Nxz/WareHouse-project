import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import useFetch from "../../Hooks/useFetch/useFetch";
import Items from "./Items/Items";

const SideBar = ({ setWarehouse }) => {
  const [open, setOpen] = useState(false);

  const [state, error, loading] = useFetch("http://localhost:3000/Place");

  if (loading || error) {
    return (
      <div className="hidden md:block md:w-80 p-4 bg-slate-900 sticky top-0 h-screen border-r border-purple-700 shadow-lg">
        <aside className="bg-slate-800 border border-purple-500 rounded-2xl p-6 text-white shadow-md">
          <h5 className="text-xl font-bold text-white mb-4 border-b border-pink-500 pb-2">
            فیلترها
          </h5>

          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-4 h-4 bg-pink-400 rounded-full animate-bounce"></div>
            <div
              className="w-4 h-4 bg-purple-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-4 h-4 bg-indigo-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </aside>
      </div>
    );
  }
  return (
    <>
      <div className="hidden md:block md:w-80 p-4 bg-slate-900 sticky top-0 h-screen border-r border-purple-700 shadow-lg">
        <aside className="bg-slate-800 border border-purple-500 rounded-2xl p-6 text-white shadow-md">
          <h5 className="text-xl font-bold text-white mb-4 border-b border-pink-500 pb-2">
            فیلترها
          </h5>
          <ul className="space-y-3">
            <li>
              <div
                className="block px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white hover:text-pink-400 font-medium cursor-pointer"
                onClick={() => setWarehouse("all")}
              >
                همه ی قطعات
              </div>
            </li>
            {state?.map((item) => {
              return (
                <Items key={item.id} item={item} setWarehouse={setWarehouse} />
              );
            })}
            <li>
              <div
                className="block px-4 py-3 rounded-lg text-red-500 hover:text-red-400 transition-all duration-300  bg-slate-700 hover:bg-slate-600 font-medium cursor-pointer"
                onClick={() => setWarehouse("coming-end")}
              >
                قطعات رو به اتمام
              </div>
            </li>
            <li>
              <div
                className="block px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white hover:text-pink-400 font-medium cursor-pointer"
                onClick={() => setWarehouse("خراب")}
              >
                خراب
              </div>
            </li>
            <li>
              <div
                className="block px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white hover:text-pink-400 font-medium cursor-pointer"
                onClick={() => setWarehouse("قابل تعمیر")}
              >
                قابل تعمیر
              </div>
            </li>
            <li>
              <div
                className="block px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white hover:text-pink-400 font-medium cursor-pointer"
                onClick={() => setWarehouse("سالم")}
              >
                سالم
              </div>
            </li>
          </ul>
        </aside>
      </div>
      <button
        className="md:hidden  m-2 hover:text-pink-400 font-medium flex items-center fixed px-2 py-1 bg-slate-800 hover:bg-slate-700 border border-purple-500 rounded-xl shadow-lg transition-all duration-300 text-white z-10"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <AiFillCaretRight />
        فیلترها
      </button>
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <aside
            className="bg-slate-800 border border-purple-500 rounded-2xl p-6 text-white shadow-md max-w-sm w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h5 className="text-xl font-bold text-white mb-4 border-b border-pink-500 pb-2">
              فیلترها
            </h5>
            <ul className="space-y-3">
              
              <li>
                <div
                  className="block px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white hover:text-pink-400 font-medium cursor-pointer"
                  onClick={() => {
                    setWarehouse("all");
                    setOpen(false);
                  }}
                >
                  همه ی قطعات
                </div>
              </li>
              <li>
                <div
                  className="block px-4 py-3 rounded-lg text-red-500 hover:text-red-400 transition-all duration-300 bg-slate-700 hover:bg-slate-600 font-medium cursor-pointer"
                  onClick={() => {
                    setWarehouse("coming-end");
                    setOpen(false);
                  }}
                >
                  قطعات رو به اتمام
                </div>
              </li>
              {state?.map((item) => {
                return (
                  <Items
                    key={item.id}
                    item={item}
                    setWarehouse={setWarehouse}
                    onSelect={() => setOpen(false)}
                  />
                );
              })}
              <li>
                <div
                  className="block px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white hover:text-pink-400 font-medium cursor-pointer "
                  onClick={() => {
                    setWarehouse("خراب");
                    setOpen(false);
                  }}
                >
                  خراب
                </div>
              </li>
              <li>
                <div
                  className="block px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white hover:text-pink-400 font-medium cursor-pointer"
                  onClick={() => {
                    setWarehouse("قابل تعمیر");
                    setOpen(false);
                  }}
                >
                  قابل تعمیر
                </div>
              </li>
              <li>
                <div
                  className="block px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white hover:text-pink-400 font-medium cursor-pointer"
                  onClick={() => {
                    setWarehouse("سالم");
                    setOpen(false);
                  }}
                >
                  سالم
                </div>
              </li>
            </ul>
          </aside>
        </div>
      )}
    </>
  );
};

export default SideBar;
