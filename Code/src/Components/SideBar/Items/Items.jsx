const Items = ({ item, setWarehouse, onSelect }) => {
  return (
    <>
      <li>
        <div
          className="block px-4 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white hover:text-pink-400 font-medium cursor-pointer"
          onClick={() => {
            setWarehouse(`${item.place}`);
            if (onSelect) onSelect();
          }}
        >
          {item.place}
        </div>
      </li>
    </>
  );
};

export default Items;
