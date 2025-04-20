import { useEffect, useState } from "react";

export const useFetchAll = <T>(url: string) => {
  const [data, setData] = useState<StrapiRestApiAllResponse<T> | null>(null);
  const [error, setError] = useState<Error | string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = (await res.json()) as StrapiRestApiAllResponse<T>;

        setData(json);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(JSON.stringify(error));
        }

        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export const useFetchOne = <T>(url: string) => {
  const [data, setData] = useState<StrapiRestApiOneResponse<T> | null>(null);
  const [error, setError] = useState<Error | string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = (await res.json()) as StrapiRestApiOneResponse<T>;

        setData(json);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(JSON.stringify(error));
        }

        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};
