import { useState } from 'react';
import { useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setIsLoading(false);
        setData(data);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('the fetch was aborted');
        } else {
          setIsLoading(false);
          setError('Could not fetch the data');
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
