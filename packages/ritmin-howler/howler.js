export default class AudioController {
  constructor(audioSrc) {
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.audioElement = new Audio(audioSrc);
    this.sourceNode = this.audioContext.createMediaElementSource(
      this.audioElement,
    );
    this.gainNode = this.audioContext.createGain();
    this.sourceNode.connect(this.gainNode);
    this.gainNode.connect(this.audioContext.destination);
  }
  play() {
    this.audioContext.resume().then(() => {
      this.audioElement.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
    });
  }
  stop() {
    this.audioElement.pause();
    this.audioElement.currentTime = 0;
  }
  pause() {
    this.audioElement.pause();
  }
  increaseVolume(amount) {
    this.gainNode.gain.value = Math.min(this.gainNode.gain.value + amount, 1);
  }
  decreaseVolume(amount) {
    this.gainNode.gain.value = Math.max(this.gainNode.gain.value - amount, 0);
  }
}
//# sourceMappingURL=howler.js.map
