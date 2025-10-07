import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      let response = await axios.get(url);
      setState(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return [state, loading, error];
};

export default useFetch;
