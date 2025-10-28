import axios from "axios";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import useFetch from "../../Hooks/useFetch/useFetch";
import Items from "./Items/Items";

const RequirementList = () => {
  const input = useRef(null);
  const [needsComponent, setneedsComponent] = useState("");

  const submitNewComp = (e) => {
    e.preventDefault();
    if (!needsComponent.trim()) {
      Swal.fire({
        title: "خطا!",
        text: "لطفا عنوان نیاز را وارد کنید",
        icon: "error",
      });
      return;
    }
    const postData = async () => {
      try {
        await axios.post("http://localhost:3000/needsComponent", {
          needTitle: needsComponent,
        });
        Swal.fire({
          title: "موفقیت!",
          text: "نیاز جدید اضافه شد",
          icon: "success",
        });
        setneedsComponent("");
        if (refetch) refetch();
      } catch (error) {
        Swal.fire({
          title: "خطا!",
          text: "ارسال داده با مشکل مواجه شد",
          icon: "error",
        });
      }
    };
    postData();
  };

  const [state, loading, error, refetch] = useFetch(
    "http://localhost:3000/needsComponent"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-6 px-4">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            لیست نیازها
          </h1>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg">
          <form onSubmit={submitNewComp} className="space-y-4">
            <div>
              <label
                htmlFor="needTitle"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                عنوان
              </label>
              <input
                ref={input}
                type="text"
                id="needTitle"
                value={needsComponent}
                onChange={(e) => setneedsComponent(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="عنوان را وارد کنید"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-800"
            >
              اضافه کردن
            </button>
          </form>
          {loading ? (
            <div className="text-center mt-6">
              <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-gray-300 text-sm mt-2">در حال بارگذاری...</p>
            </div>
          ) : error ? (
            <div className="text-center mt-6">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          ) : (
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-white mb-4">
                ناموجود :
              </h2>
              {state && state.length > 0 ? (
                <ul className="space-y-2">
                  {state.map((item) => {
                    return (
                      <Items key={item.id} items={item} refetch={refetch} />
                    );
                  })}
                </ul>
              ) : (
                <p className="text-gray-400 text-sm">هیچ عنوانی وجود ندارد</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequirementList;
