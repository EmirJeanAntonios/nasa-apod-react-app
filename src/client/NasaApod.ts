import { ApodRequest } from "../interfaces/IApodResponse";
import { FetchError } from "../interfaces/IFetchError";
import { HttpClient } from "./HttpClient";
import { AxiosError } from "axios";
import { getMonthAgo } from "../helpers/getMonthAgo";

class NasaApod extends HttpClient {
  constructor() {
    super();
  }

  async getApod(): Promise<Array<ApodRequest> | FetchError> {
    try {
      const res = await this.axiosInstance.get("/planetary/apod", {
        params: {
          start_date: getMonthAgo()
        },
      });
      return res.data;
    } catch (error) {
      return {
        data: null,
        errorMsg: error as AxiosError,
        error: true,
      };
    }
  }
}

export default new NasaApod();
