let secondCounter = 0;
let timerSection = document.querySelector("#timerSection")
let playSection = document.querySelector("#play");
let stopSection = document.querySelector("#stop");
let lapSection = document.querySelector("#lap");
let lapArea = document.querySelector("#lapArea");
let a
let timerArray = []
let lapArray = []

function Timer(timerSecond) {
  let second = timerSecond;
  let minute = Math.floor(timerSecond / 60);
  let leftSecond = second - minute * 60;

  let result = `${minute < 10 ? "0" + minute : minute}:${
    leftSecond < 10 ? "0" + leftSecond : leftSecond
  }`;
 return result;
}

playSection.addEventListener("click", function () {
  a = setInterval(function () {
    secondCounter++;
    Timer(secondCounter);
    timerSection.innerHTML = Timer(secondCounter)
    timerArray.push(Timer(secondCounter))
    console.log(timerArray)
  }, 1000);
});

stopSection.addEventListener("click", function () {
  clearInterval(a);
});

lapSection.addEventListener("click",function(){
    let lapItem = timerArray[timerArray.length-1]
    lapArray.push(lapItem)
    lapArea.innerHTML = lapArray.map((q,i)=>{
        return `<li style = "list-style:none"> Your lap is :  ${q} </li>`;
    }).join("")
})