import axios from "axios";

export abstract class HttpClient {
  axiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://api.nasa.gov",
      params: {
        api_key: "Dg4QIjP9sJePqHwajMZCThBPwHzqbNbuBJWmBMSg",
      },
    });
  }
}
