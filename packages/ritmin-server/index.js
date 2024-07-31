var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
export default class ServerHandler {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  get(endpoint_1) {
    return __awaiter(
      this,
      arguments,
      void 0,
      function* (endpoint, params = {}) {
        const url = new URL(`${this.baseURL}${endpoint}`);
        Object.keys(params).forEach((key) =>
          url.searchParams.append(key, params[key]),
        );
        const response = yield fetch(url.toString());
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        return response.json();
      },
    );
  }
  post(endpoint, data) {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield fetch(`${this.baseURL}${endpoint}`, {
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
    });
  }
}
//# sourceMappingURL=index.js.map
