import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useMusicFetch = (initSearch: string) => {
  const [searchInput, setSearchInput] = useState<string>(initSearch);
  const [data, setData] = useState<any>("Loading");

  const options: any = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/search",
    params: { term: searchInput, locale: "en-US", offset: "0", limit: "20" },
    headers: {
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      "X-RapidAPI-Key": "d221422a63msh4d69698cb48726fp1f4795jsnc4bb3a295f05",
    },
  };

  const refetch = useCallback(async () => {
    await axios
    .request(options)
    .then(function (response) {
      setData(response.data)
    })
    .catch(function (error) {
      console.error(error);
    });
  }, [])

  useEffect(() => {
    refetch()
  }, [refetch])

  return {
    searchInput, setSearchInput, data, refetch, setData
  }
};

export default useMusicFetch;
