import { useEffect, useState } from "react";
import { FiMapPin, FiPackage } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Delete from "../../Delete/Delete";
import { Link } from "react-router-dom";

const Items = ({ item, refetch }) => {
  const [title, setTitle] = useState(null);
  const [descrption, setDescrption] = useState(null);
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);
  const [count, setCount] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setTitle(item.title);
      setDescrption(item.descrption);
      setImage(item.image);
      setLocation(item.location);
      setCount(item.count);
    }, 1000);
  }, [item]);
  return (
    <SkeletonTheme baseColor="#475569" highlightColor="#64748b">
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-lg hover:shadow-xl hover:border-purple-500/50 transition-all duration-300 group flex flex-col justify-around">
        {image ? (
          <div className="h-32 mb-4 overflow-hidden rounded-lg bg-slate-700">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <Skeleton
            height={128}
            width="100%"
            baseColor="#475569"
            highlightColor="#64748b"
          />
        )}
        {title ? (
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
            {title}
          </h3>
        ) : (
          <Skeleton
            width={120}
            height={24}
            baseColor="#475569"
            highlightColor="#64748b"
          />
        )}
        {descrption ? (
          <p className="text-gray-400 text-xs mb-3 line-clamp-2">
            {descrption}
          </p>
        ) : (
          <Skeleton
            width="100%"
            height={32}
            baseColor="#475569"
            highlightColor="#64748b"
          />
        )}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1 text-gray-300">
              <FiPackage className="text-purple-400" />
              <span>تعداد:</span>
            </div>
            {count ? (
              <span className="text-white font-medium bg-slate-700 px-2 py-1 rounded-full">
                {count || "N/A"}
              </span>
            ) : (
              <Skeleton
                width={50}
                height={20}
                baseColor="#475569"
                highlightColor="#64748b"
              />
            )}
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1 text-gray-300">
              <FiMapPin className="text-purple-400" />
              <span>مکان:</span>
            </div>
            {location ? (
              <span className="text-white font-medium bg-slate-700 px-2 py-1 rounded-full">
                {location.place + "/" + (location.position || "") || "N/A"}
              </span>
            ) : (
              <Skeleton
                width={80}
                height={20}
                baseColor="#475569"
                highlightColor="#64748b"
              />
            )}
          </div>
          <div className="flex gap-2 mt-3">
            <Link
              className="flex-1 p-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center"
              style={{ textDecoration: "none" }}
              to={`/Home/Edit/${item.id}`}
            >
              <MdEdit className="text-lg" />
            </Link>
            <Delete id={item.id} item={item} key={item.id} refetch={refetch} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default Items;
