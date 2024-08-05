import { default as store } from '../store/api';
import pino from 'pino';

// إعداد سجل الأخطاء
const logger = pino({ level: 'error' });
const dataErr: string[] = [];

const err = store();

export default class ErrorBoundary {
  private hasError: boolean;
  private errorMessage: string;

  public constructor() {
    this.hasError = false;
    this.errorMessage = 'Something went wrong.';
  }

  // يسجل الخطأ باستخدام pino
  public logError(error: Error) {
    logger.error(error.message);
    err.add();
  }

  // يلتقط الأخطاء ويقوم بتحديث الحالة
  // @param error - كائن الخطأ الذي سيتم التقاطه
  public catchError(error: Error) {
    this.hasError = true;
    this.errorMessage = error.message || 'An error occurred.';

    // تسجيل الخطأ
    this.logError(error);
    err.updates((state) => {
      dataErr.push(`State Updated: ${JSON.stringify(state)}`);
    });
  }

  // يعرض المحتوى أو رسالة الخطأ
  // @param children - المحتوى الذي سيتم عرضه
  // @returns المحتوى إذا لم يكن هناك خطأ، وإلا يتم عرض رسالة الخطأ
  public render(children: string): string {
    if (this.hasError) {
      // عرض رسالة الخطأ
      console.log(this.errorMessage);
      return `Error: ${this.errorMessage}`;
    }
    return children;
  }
}
export { dataErr };
