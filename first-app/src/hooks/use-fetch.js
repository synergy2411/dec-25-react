import { useEffect, useState } from "react";

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        setLoading(true);
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }, [url]);

  return [data, loading];
}

export default useFetchData;
