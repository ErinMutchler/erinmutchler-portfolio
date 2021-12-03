class AudioService {
  constructor() {
    this.track = new Audio();
    this.isPlaying = false;
  }

  loadAudio(url) {
    if (this.track.src !== url) {
      this.pause();
      this.track.src = url;
      this.track.load();
    }
  }

  play() {
    if (!this.isPlaying) {
      this.track.play().then(() => {
        this.isPlaying = true;
      });
    }
  }

  pause() {
    if (this.isPlaying) {
      this.track.pause();
      this.isPlaying = false;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  getTrackLength() {
    return this.track.duration;
  }

  getCurrentTime() {
    return this.track.currentTime;
  }

  setCurrentTime(time) {
    this.track.currentTime = time;
  }
}

export const audioService = new AudioService();
