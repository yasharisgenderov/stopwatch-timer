let second = 0;
let timerArray = [];
let lapArray = [];
let a;

function Timer(a) {
  let seconds = a;
  let minute = Math.floor(seconds / 60);
  let leftSecond = seconds - minute * 60;

  let result = `${minute < 10 ? "0" + minute : minute}:${
    leftSecond < 10 ? "0" + leftSecond : leftSecond
  }`;
  return result;
}



document.querySelector("#play").onclick = function () {
  a = setInterval(function () {
    second++;
    console.log(Timer(second));
    timerArray.push(Timer(second));
    console.log(timerArray);
    document.querySelector("#timerSection").innerHTML = Timer(second);
  }, 1000);
};

document.querySelector("#stop").onclick = function () {
  clearInterval(a);
};

document.querySelector("#lap").onclick = function () {
  let lapTime = timerArray[timerArray.length - 1];
  lapArray.push(lapTime);
  document.querySelector("#lapArea").innerHTML = lapArray
    .map((q, i) => {
      return `<li style = "list-style:none"> Your lap is :  ${q} </li>`;
    })
    .join("");
  console.log(lapArray);
};

