import { useEffect, useState } from "react";
import NasaApod from "../client/NasaApod";
import { getMonthAgo } from "../helpers/getMonthAgo";
import { ApodRequest } from "../interfaces/IApodResponse";
import { FetchError } from "../interfaces/IFetchError";

export function useApodApi() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<FetchError>({
    data: null,
    error: false,
    errorMsg: "",
  });
  const [data, setData] = useState<ApodRequest[]>();

  useEffect(() => {
    (async function () {
      const data: ApodRequest[] = JSON.parse(
        localStorage.getItem("apod-data") || "{}"
      );
      if (Object.keys(data).length !== 0 && data[0]?.date == getMonthAgo()) {
        setData(data);
        setIsLoading(false);
      } else {
        const response = await NasaApod.getApod();
        if (response instanceof Array<ApodRequest>) {
          setData(response);
          localStorage.setItem("apod-data", JSON.stringify(response));
          setIsLoading(false);
        } else {
          setError(response);
          setIsLoading(false);
        }
      }
    })();
  }, []);

  return {
    isLoading,
    error,
    data,
  };
}
