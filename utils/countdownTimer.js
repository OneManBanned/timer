class CountDownTimer {
  timer = null;

  constructor(cachedDuration = -1) {
    this.duration = cachedDuration;
  }

  startTimer = () => {
    let count = 0;

    this.timer = setInterval(() => {
      ++count;
      console.log(count);
    }, 1000);

    setTimeout(() => clearInterval(this.timer), (this.duration + 1) * 1000);
  };

  stopTimer = () => clearInterval(this.timer);
  setDuration = (input) => (this.duration = input);
  getDuration = () => this.duration;
}

export default CountDownTimer;
