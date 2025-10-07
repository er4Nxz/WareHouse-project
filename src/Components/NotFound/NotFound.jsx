const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="text-center">
        {/* 404 Number */}
        <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 mb-4 animate-pulse">
          404
        </div>

        {/* Loading Animation */}
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

        {/* Message */}
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
          صفحه مورد نظر پیدا نشد
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          متاسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد.
        </p>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          style={{ borderRadius: "16px" }}
        >
          بازگشت به صفحه قبلی
        </button>
      </div>
    </div>
  );
};

export default NotFound;
