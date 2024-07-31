export interface RequestParams {
  [key: string]: string | any;
}
export interface ResponseData {
  [key: string]: string | any;
}

export default class ServerHandler {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get(
    endpoint: string,
    params: RequestParams = {},
  ): Promise<ResponseData> {
    const url = new URL(`${this.baseURL}${endpoint}`);
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key]),
    );

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    return response.json();
  }

  async post(endpoint: string, data: string | any): Promise<ResponseData> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to post: ${response.statusText}`);
    }
    return response.json();
  }

  // وظائف إضافية مثل put، delete يمكن إضافتها هنا
}

// استخدام المكون
// const api = new ServerHandler('https://api.example.com');

// api
//   .get('/data', { userId: 1 })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// api
//   .post('/data', { name: 'John Doe', age: 30 })
//   .then((response) => console.log(response))
//   .catch((error) => console.error(error));
