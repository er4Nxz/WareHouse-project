import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  FaTag,
  FaFileAlt,
  FaImage,
  FaMapMarkerAlt,
  FaWarehouse,
  FaSave,
  FaExclamationTriangle,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";
import useFetch from "../../Hooks/useFetch/useFetch";
import Items from "./Items/Items";
import { MdNotificationImportant } from "react-icons/md";
import { GoNumber } from "react-icons/go";

const Create = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  const [descrption, setDescrption] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState({
    place: "",
    position: "",
  });

  const navigate = useNavigate();

  const [state] = useFetch("http://localhost:3000/Place");

  const statusOptions = [
    { value: "خراب", label: "خراب" },
    { value: "قابل تعمیر", label: "قابل تعمیر" },
    { value: "سالم", label: "سالم" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !title ||
      !descrption ||
      !image ||
      !location.place ||
      !location.position ||
      !status
    ) {
      Swal.fire({
        title: "خطا!",
        text: "لطفا همه فیلدها را پر کنید",
        icon: "error",
      });
      return;
    }
    const postData = async () => {
      try {
        await axios.post("http://localhost:3000/Components", {
          title,
          image,
          descrption,
          location,
          count,
          status,
        });
      } catch (error) {
        Swal.fire({
          title: "خطا!",
          text: "ارسال داده با مشکل مواجه شد",
          icon: "error",
        });
      }
    };

    navigate("/Home");
    postData();

    Swal.fire({
      title: "موفقیت!",
      text: "محصول جدید ایجاد شد",
      icon: "success",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-6 px-4">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ایجاد محصول جدید
          </h1>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                <FaTag className="inline mr-1" /> عنوان محصول
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="عنوان محصول را وارد کنید"
                required
              />
            </div>
            <div>
              <label
                htmlFor="descrption"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                <FaFileAlt className="inline mr-1" /> توضیحات
              </label>
              <textarea
                id="descrption"
                value={descrption}
                onChange={(e) => setDescrption(e.target.value)}
                rows="3"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="توضیحات محصول را وارد کنید"
                required
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="count"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                <GoNumber className="inline mr-1" /> تعداد: {count}
              </label>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setCount(count - 1)}
                  className="md:px-4 md:py-2 py-2 px-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-lg text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={count === 0}
                >
                  -
                </button>
                <input
                  type="text"
                  value={count}
                  className="count-input"
                  onChange={(e) => {
                    setCount(Number(e.target.value));
                  }}
                />
                <button
                  type="button"
                  onClick={() => setCount(count + 1)}
                  className="md:px-4 md:py-2 py-2 px-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-lg text-white font-medium transition-all duration-300 "
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                <FaImage className="inline mr-1" /> لینک تصویر
              </label>
              <a
                href="https://imgbb.com/"
                target="_blank"
                className="imgbb-link "
              >
                <MdNotificationImportant className="inline mx-1" />
                تصویر خود را در این سایت تبدیل به لینک کنید
              </a>
              <input
                type="url"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="لینک تصویر محصول را وارد کنید"
                required
              />
              {image && (
                <img
                  src={image}
                  alt="پیش‌نمایش تصویر"
                  className="w-20 h-20 object-cover rounded mt-2 border border-slate-600"
                />
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-4">
                <FaWarehouse className="inline mr-1" /> انبار
              </label>
              <div className="flex flex-wrap justify-around  gap-2">
                {state?.map((item) => {
                  return (
                    <Items
                      item={item}
                      key={item.id}
                      setLocation={setLocation}
                      location={location}
                    />
                  );
                })}
              </div>
            </div>
            <div>
              <label
                htmlFor="detailLocaition"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                <FaMapMarkerAlt className="inline mr-1" /> ادرس دقیق تر
              </label>
              <input
                type="text"
                id="detailLocaition"
                value={location.position}
                onChange={(e) =>
                  setLocation({ ...location, position: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="آدرس دقیق تر را وارد کنید"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                وضعیت
              </label>
              <div className="flex flex-wrap justify-around gap-2">
                {statusOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`block cursor-pointer px-4 py-2 rounded-lg border-2 transition-all duration-300 text-center font-medium ${
                      status === option.value
                        ? "bg-purple-600 border-purple-500 text-white shadow-lg"
                        : "bg-slate-700 border-slate-600 text-gray-300 hover:bg-slate-600 hover:border-slate-500"
                    }`}
                  >
                    {status === option.value && (
                      <>
                        {option.value === "خراب" && (
                          <FaExclamationTriangle className="inline m-1 text-red-400" />
                        )}
                        {option.value === "قابل تعمیر" && (
                          <FaTools className="inline m-1 text-orange-400" />
                        )}
                        {option.value === "سالم" && (
                          <FaCheckCircle className="inline m-1 text-green-400" />
                        )}
                      </>
                    )}
                    <input
                      type="radio"
                      name="status"
                      value={option.value}
                      checked={status === option.value}
                      onChange={(e) => setStatus(e.target.value)}
                      className="hidden"
                      required
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-800"
            >
              <FaSave className="inline ml-1" /> ایجاد محصول
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
