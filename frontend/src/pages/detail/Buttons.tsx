import { useMutation } from "@tanstack/react-query";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePlace } from "../../api";
import { toast } from "react-toastify";

const Buttons = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isPending, mutate } = useMutation({
    mutationKey: ["deletePlace"],
    mutationFn: () => deletePlace(id as string),

    onSuccess: () => {
      toast.info("Konaklama noktası akıştan kaldırıldı.");
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
      toast.error("Bir hata oldu.");
    },
  });
  return (
    <div className="flex justify-between mb-5">
      <Link to=".." className="btn">
        <MdKeyboardArrowLeft />
        Geri
      </Link>
      <button className="btn" onClick={() => mutate()} disabled={isPending}>
        <FaRegTrashAlt />
        Sil
      </button>
    </div>
  );
};

export default Buttons;
