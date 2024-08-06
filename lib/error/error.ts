export default class ErrorBoundary {
  private hasError: boolean;
  private errorMessage: string;

  public constructor() {
    this.hasError = false;
    this.errorMessage = 'Something went wrong.';
  }

  // يسجل الخطأ بدون store
  public logError(error: Error) {
    console.error(error.message); // استخدم console.error لتسجيل الأخطاء
    // لا حاجة لتحديث الحالة هنا بدون store
  }

  // يلتقط الأخطاء ويقوم بتحديث الحالة
  // @param error - كائن الخطأ الذي سيتم التقاطه
  public catchError(error: Error) {
    this.hasError = true;
    this.errorMessage = error.message || 'An error occurred.';

    // تسجيل الخطأ
    this.logError(error);
    // أزلت تحديث الحالة هنا
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
