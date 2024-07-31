import ServerHandler, { RequestParams, ResponseData } from './index';
export default class APIClient extends ServerHandler {
  private resource: string;

  constructor(baseURL: string, resource: string) {
    super(baseURL);
    this.resource = resource;
  }
  getAll(params?: RequestParams): Promise<ResponseData[]> {
    return this.get(`/${this.resource}`, params) as Promise<ResponseData[]>; // تأكد من أن الترجمة الصحيحة هي مصفوفة
  }

  getById(id: number): Promise<ResponseData> {
    return this.get(`/${this.resource}/${id}`);
  }
  create(data: string | any): Promise<ResponseData> {
    return this.post(`/${this.resource}`, data);
  }
}

// استخدام المكون
// const api = new ServerHandler('https://api.example.com');
// const usersAPI = new APIClient('https://api.example.com', 'users');
// usersAPI
//   .getAll()
//   .then((users) => console.log(users))
//   .catch((error) => console.error(error));
