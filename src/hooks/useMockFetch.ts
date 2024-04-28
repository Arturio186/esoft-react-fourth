import { useState, useEffect } from 'react'

type FetchingState<T> = {
  loading: boolean;
  error: string | null;
  data: T | null;
};

const useMockFetching = <T>(mockData: T, delay: number = 600): FetchingState<T> => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            await new Promise(resolve => setTimeout(resolve, delay));
            setData(mockData);
        } catch (error) {
            setError((error as Error).message);
        }
        finally {
            setLoading(false);
        }
    };

    fetchData();

  }, [mockData, delay]);

  return { loading, error, data };
};

export default useMockFetching;
