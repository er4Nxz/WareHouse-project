import { useState } from "react";
import Delete from "./Delete/Delete";
import { FaClipboardCheck } from "react-icons/fa";

const Items = ({ items, refetch }) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <li className="bg-slate-700 border border-slate-600 rounded-lg p-3 text-white hover:bg-slate-600 transition-colors duration-300">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaClipboardCheck className="text-purple-400 mx-2" />
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="mx-2 w-4 h-4 text-purple-500 bg-slate-600 border border-slate-500 rounded focus:ring-purple-500 focus:ring-2 cursor-pointer accent-purple-500"
            />
            <span className={checked ? "line-through" : ""}>
              {items.needTitle}
            </span>
          </div>
          <Delete key={items.id} id={items.id} refetch={refetch} />
        </div>
      </li>
    </>
  );
};

export default Items;
