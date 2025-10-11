import { useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch/useFetch";
import Update from "./Update";
const Edit = () => {
  const { id } = useParams();
  const [state] = useFetch(`http://localhost:3000/Components/${id}`);
  return (
    <>
      {state && <Update state={state} />}
    </>
  );
};

export default Edit;
