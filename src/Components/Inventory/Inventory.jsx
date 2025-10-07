import useFetch from "../../Hooks/useFetch/useFetch";
import { FiPackage, FiMapPin } from "react-icons/fi";
import SideBar from "../SideBar/SidBar";
const Inventory = () => {
  const [state, error, loading] = useFetch(
    "https://685c4d07769de2bf085c58e4.mockapi.io/Product"
  );
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">در حال بارگذاری...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
        <div className="text-center">
          <FiPackage className="text-6xl text-gray-500 mb-4 mx-auto" />
          <h1 className="text-2xl font-semibold text-white mb-2">
            خطا در بارگذاری
          </h1>
          <p className="text-gray-400 text-lg">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              انبار قطعات
            </h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {state
              ?.filter((item) => item.id >= 1 && item.id <= 10)
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="z-20 aspect-square mb-6 overflow-hidden rounded-xl bg-slate-700">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain z-20 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {item.descrption}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-300">
                        <FiPackage className="text-purple-400" />
                        <span>تعداد:</span>
                      </div>
                      <span className="text-white font-medium bg-slate-700 px-3 py-1 rounded-full">
                        {item.count || "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-300">
                        <FiMapPin className="text-purple-400" />
                        <span>مکان:</span>
                      </div>
                      <span className="text-white font-medium bg-slate-700 px-3 py-1 rounded-full">
                        {item.location || "N/A"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
