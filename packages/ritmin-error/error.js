// Defines the ErrorBoundary class as provided
export class ErrorBoundary {
    constructor() {
        this.hasError = false;
        this.errorMessage = 'Something went wrong.';
    }
    // Catches errors and updates the state
    // @param error - The error object to catch
    catchError(error) {
        this.hasError = true;
        this.errorMessage = error.message || 'An error occurred.';
        console.error('Error caught:', error);
        window.location.href = './packages/ritmin-error/error.html';
    }
    // Renders the content or displays an error message
    // @param children - The content to render
    // @returns The content if no error, otherwise displays the error message
    render(children) {
        if (this.hasError) {
            console.log(this.errorMessage);
        }
        return children;
    }
}
