import { useState, useEffect } from "react";

export const useFetchDocument = (url) => {
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("No error");

  useEffect(() => {
    loadData();
  }, [url]);

  async function loadData() {
    try {
      setLoading(true);
      const data = await fetch(url);
      const countriesData = await data.json();
      const countriesBody = await countriesData;
      setCountries([...countriesBody]);
      setLoading(false);
    } catch (err) {
      setLoading(true);
      setError(err);
      console.log(error);
      setLoading(false);
    }
  }
  return { countries, loading, error };
};
