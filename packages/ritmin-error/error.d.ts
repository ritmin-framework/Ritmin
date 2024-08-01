export default class ErrorBoundary {
    private hasError;
    private errorMessage;
    constructor();
    catchError(error: Error): void;
    render(children: string): string;
}
