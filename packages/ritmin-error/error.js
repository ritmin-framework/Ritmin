export default class ErrorBoundary {
    constructor() {
        this.hasError = false;
        this.errorMessage = 'Something went wrong.';
    }
    catchError(error) {
        this.hasError = true;
        this.errorMessage = error.message || 'An error occurred.';
        console.error('Error caught:', error);
        window.location.href = './packages/ritmin-error/error.html';
    }
    render(children) {
        if (this.hasError) {
            console.log(this.errorMessage);
        }
        return children;
    }
}
//# sourceMappingURL=error.js.map