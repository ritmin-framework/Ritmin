import ServerHandler, { RequestParams, ResponseData } from './index';
export default class APIClient extends ServerHandler {
  private resource;
  constructor(baseURL: string, resource: string);
  getAll(params?: RequestParams): Promise<ResponseData[]>;
  getById(id: number): Promise<ResponseData>;
  create(data: string | any): Promise<ResponseData>;
}
