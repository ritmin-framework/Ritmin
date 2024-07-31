import ServerHandler, { ResponseData } from './index';

interface LoginCredentials {
  username: string;
  password: string;
}

class AuthHandler {
  private serverHandler: ServerHandler;

  constructor(serverHandler: ServerHandler) {
    this.serverHandler = serverHandler;
  }

  async login(credentials: LoginCredentials): Promise<ResponseData> {
    try {
      const response = await this.serverHandler.post(
        '/auth/login',
        credentials,
      );
      // يمكنك إضافة منطق هنا لتخزين الـ token أو البيانات الأخرى
      return response;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  logout(): void {
    // Implement logout logic, e.g., clear tokens
  }
}

// استخدام المكون
const api = new ServerHandler('https://api.example.com');
const auth = new AuthHandler(api);
auth
  .login({ username: 'user', password: 'pass' })
  .then((response) => console.log('Login successful:', response))
  .catch((error) => console.error('Error during login:', error));
