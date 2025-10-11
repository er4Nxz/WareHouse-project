import useFetch from "../../../Hooks/useFetch/useFetch";
import { FiPackage } from "react-icons/fi";
import SideBar from "../../SideBar/SidBar";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Items from "./Items/Items";
const Index = () => {
  const [state, error, loading, refetch] = useFetch(
    "http://localhost:3000/Components"
  );
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const [warehouse, setWarehouse] = useState("");

  const filterFetch = state?.filter((item) => {
    const matchesWarehouse =
      warehouse === "all"
        ? true
        : warehouse === "coming-end"
        ? item.count <= 10
        : warehouse === ""
        ? true
        : item.location.place.trim().toLowerCase() ===
          warehouse.trim().toLowerCase();

    const matchesSearch =
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.descrption.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.place.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.position.toLowerCase().includes(searchTerm.toLowerCase());

    if (warehouse === "" || warehouse === "all") {
      return matchesSearch;
    } else if (warehouse === "coming-end") {
      return matchesWarehouse && matchesSearch;
    } else {
      return matchesWarehouse;
    }
  });
  return (
    <>
      {loading ? (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-300 text-lg">در حال بارگذاری...</p>
          </div>
        </div>
      ) : error ? (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
          <div className="text-center">
            <FiPackage className="text-6xl text-gray-500 mb-4 mx-auto" />
            <h1 className="text-2xl font-semibold text-white mb-2">
              خطا در بارگذاری
            </h1>
            <p className="text-gray-400 text-lg">{error}</p>
          </div>
        </div>
      ) : (
        <div className="flex">
          <SideBar
            filterFetch={filterFetch}
            warehouse={warehouse}
            setWarehouse={setWarehouse}
          />
          <div className="flex-1 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  انبار قطعات
                </h1>
                <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {filterFetch?.map((item) => {
                  return <Items key={item.id} item={item} refetch={refetch} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
