export interface EventHandlers {
    mouse: (callback: (x: number, y: number) => void) => void;
    key: (callback: (key: KeyboardEvent) => void) => void;
}

export class EventManager implements EventHandlers {
    mouse(callback: (x: number, y: number) => void): void {
        document.addEventListener('mousemove', function(e: MouseEvent) {
            callback(e.clientX, e.clientY);
        });
    }

    key(callback: (key: KeyboardEvent) => void): void {
        document.addEventListener('keydown', function(event: KeyboardEvent) {
            callback(event);
        });
    }
}
