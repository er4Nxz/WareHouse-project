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
      setError("");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return [state, loading, error, fetchData];
};

export default useFetch;
