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
import ServerHandler from './index';
class AuthHandler {
  constructor(serverHandler) {
    this.serverHandler = serverHandler;
  }
  login(credentials) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const response = yield this.serverHandler.post(
          '/auth/login',
          credentials,
        );
        return response;
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    });
  }
  logout() {}
}
const api = new ServerHandler('https://api.example.com');
const auth = new AuthHandler(api);
auth
  .login({ username: 'user', password: 'pass' })
  .then((response) => console.log('Login successful:', response))
  .catch((error) => console.error('Error during login:', error));
//# sourceMappingURL=AuthHandler.js.map
