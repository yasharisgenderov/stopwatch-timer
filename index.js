class DomElements {
  playButton = document.querySelector("#play");
  stopButton = document.querySelector("#stop");
  lapButton = document.querySelector("#lap");
  timerSection = document.querySelector("#timerSection");
  lapArea = document.querySelector("#lapArea");
}

class TimerClass extends DomElements {
  second = 0;
  timerArray = [];
  lapArray = [];
  b;

  constructor() {
    super();
  }

  timer(timerSecond) {
    let seconds = timerSecond;
    let minute = Math.floor(seconds / 60);
    let leftSecond = seconds - minute * 60;

    let result = `${minute < 10 ? "0" + minute : minute}:${
      leftSecond < 10 ? "0" + leftSecond : leftSecond
    }`;
    return result;
  }

  startFunction() {
    clearInterval(this.b);
    this.b = setInterval(() => {
      this.second++;
      this.timer(this.second);
      this.timerArray.push(this.timer(this.second));
      this.timerSection.innerHTML = this.timer(this.second);
    }, 1000);
  }

  stopFunction() {
    clearInterval(this.b);
  }

  lapFunction() {
    let lapTime = this.timerArray[this.timerArray.length - 1];
    this.lapArray.push(lapTime);
    this.lapArea.innerHTML = this.lapArray
      .map((q, i) => {
        return `<li style = "list-style:none"> Your lap is :  ${q} </li>`;
      })
      .join("");
  }
}

let timerFunc = new TimerClass();

timerFunc.playButton.addEventListener("click", function () {
  timerFunc.startFunction();
});
timerFunc.stopButton.addEventListener("click", function () {
  timerFunc.stopFunction();
});
timerFunc.lapButton.addEventListener("click", function () {
  timerFunc.lapFunction();
});
