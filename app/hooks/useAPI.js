import React, { useState } from "react";

const useAPI = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessages, setErrorMessages] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) {
      setErrorMessages(response?.originalError?.response?.data?.error);
      setError(true);
      return null;
    }

    setError(false);
    setData(response.data);
  };

  return { data, error, loading, request, errorMessages };
};

export default useAPI;
