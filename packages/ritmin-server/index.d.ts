export interface RequestParams {
  [key: string]: string | any;
}
export interface ResponseData {
  [key: string]: string | any;
}
export default class ServerHandler {
  private baseURL;
  constructor(baseURL: string);
  get(endpoint: string, params?: RequestParams): Promise<ResponseData>;
  post(endpoint: string, data: string | any): Promise<ResponseData>;
}
