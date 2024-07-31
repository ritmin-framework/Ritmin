import ServerHandler from './index';
export default class APIClient extends ServerHandler {
  constructor(baseURL, resource) {
    super(baseURL);
    this.resource = resource;
  }
  getAll(params) {
    return this.get(`/${this.resource}`, params);
  }
  getById(id) {
    return this.get(`/${this.resource}/${id}`);
  }
  create(data) {
    return this.post(`/${this.resource}`, data);
  }
}
//# sourceMappingURL=APIClient.js.map
