declare const dataErr: string[];
export default class ErrorBoundary {
  private hasError;
  private errorMessage;
  constructor();
  logError(error: Error): void;
  catchError(error: Error): void;
  render(children: string): string;
}
export { dataErr };
