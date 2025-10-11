import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

const Delete = ({ id, refetch }) => {
  const deleteData = async () => {
    Swal.fire({
      title: "آیا از پاک کردن این قطعه اطمینان دارید ؟",
      text: "شما دیگر نمیتوانید این قطعه را برگردانید",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله پاک شود !",
      cancelButtonText: "لغو",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/needsComponent/${id}`).then(() => {
          Swal.fire({
            title: "حذف شد!",
            text: "قطعه شما با موفقیت حذف گردید.",
            icon: "success",
          }).then(() => {
            if (refetch) {
              refetch();
            }
          });
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "قطعه شما امن است!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <>
      <div
        className="p-2 bg-gradient-to-r from-red-400 to-red-500 hover:from-red-600 hover:to-red-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center w-fit h-fit"
        onClick={deleteData}
      >
        <MdDeleteOutline className="text-lg" />
      </div>
    </>
  );
};

export default Delete;
