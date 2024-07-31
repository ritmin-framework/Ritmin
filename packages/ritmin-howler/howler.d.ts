export default class AudioController {
  private audioContext;
  private gainNode;
  private audioElement;
  private sourceNode;
  constructor(audioSrc: string);
  play(): void;
  stop(): void;
  pause(): void;
  increaseVolume(amount: number): void;
  decreaseVolume(amount: number): void;
}
