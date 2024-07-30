// Controls audio playback via the Web Audio API.
//
// This class provides functions to play, stop, pause, and adjust the volume of a specific audio source.
export default class AudioController {
    // Creates a new instance of AudioController.
    //
    // @param audioSrc - The audio source, which is the URL of the audio file to be played.
    constructor(audioSrc) {
        // Create the audio context
        this.audioContext = new (window.AudioContext ||
            window.webkitAudioContext)();
        // Create the audio element and connect it to the audio context
        this.audioElement = new Audio(audioSrc);
        this.sourceNode = this.audioContext.createMediaElementSource(this.audioElement);
        // Create the gain node and connect it
        this.gainNode = this.audioContext.createGain();
        this.sourceNode.connect(this.gainNode);
        this.gainNode.connect(this.audioContext.destination);
    }
    // Starts playing the audio.
    //
    // This method will play the audio after resuming the audio context.
    //
    // @returns void
    play() {
        this.audioContext.resume().then(() => {
            this.audioElement.play().catch((error) => {
                console.error("Error playing audio:", error);
            });
        });
    }
    // Stops playing the audio and resets it to the beginning.
    //
    // @returns void
    stop() {
        this.audioElement.pause();
        this.audioElement.currentTime = 0;
    }
    // Pauses the audio playback.
    //
    // @returns void
    pause() {
        this.audioElement.pause();
    }
    // Increases the volume by a specified amount.
    //
    // @param amount - The amount to increase the volume by (from 0 to 1).
    // @returns void
    increaseVolume(amount) {
        this.gainNode.gain.value = Math.min(this.gainNode.gain.value + amount, 1);
    }
    // Decreases the volume by a specified amount.
    //
    // @param amount - The amount to decrease the volume by (from 0 to 1).
    // @returns void
    decreaseVolume(amount) {
        this.gainNode.gain.value = Math.max(this.gainNode.gain.value - amount, 0);
    }
}
