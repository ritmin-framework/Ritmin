export interface EventHandlers {
  mouse: (callback: (x: number, y: number) => void) => void;
  key: (callback: (key: KeyboardEvent) => void) => void;
}
export default class EventManager implements EventHandlers {
  mouse(callback: (x: number, y: number) => void): void;
  key(callback: (key: KeyboardEvent) => void): void;
}
