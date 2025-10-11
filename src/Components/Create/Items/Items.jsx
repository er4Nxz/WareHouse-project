const Items = ({ item, setLocation, location }) => {
  return (
    <label
      className={`block cursor-pointer p-2 rounded-lg border-2 transition-all duration-300 text-center font-medium ${
        location.place === item.place
          ? "bg-purple-600 border-purple-500 text-white shadow-lg"
          : "bg-slate-700 border-slate-600 text-gray-300 hover:bg-slate-600 hover:border-slate-500"
      }`}
    >
      <input
        type="radio"
        value={item.place}
        onChange={(e) => setLocation({ ...location, place: e.target.value })}
        name="location"
        className="hidden"
        required
      />
      {item.place}
    </label>
  );
};

export default Items;
