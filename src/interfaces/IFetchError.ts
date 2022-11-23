import { AxiosError } from "axios";
export interface FetchError {
  data: {} | null;
  errorMsg: string | AxiosError;
  error: boolean;
}
