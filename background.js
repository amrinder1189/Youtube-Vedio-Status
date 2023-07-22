var currentTimeSpan = document.createElement("span");
var totalTimeSpan = document.createElement("span");
currentTimeSpan.className = "currentTimeSpan";
totalTimeSpan.className = "totalTimeSpan";

var timeDiv = document.createElement("div");
timeDiv.style.float = "right";
timeDiv.style.display = "inline-block";
timeDiv.appendChild(currentTimeSpan);
timeDiv.appendChild(totalTimeSpan);

var progressBar = document.createElement("div");
progressBar.id = "progressBar";
var progress = document.createElement("div");
progress.id = "progress";
progressBar.appendChild(progress);

let titleElement;
let time;
let totalTime;
let currentTimeElement;
let streamTitle;
let duration;
let currentTimeSeconds;
let playbackspeedvalue;
let percentageCompleted;
let timeleftVedio;

// --------------
// making div elements
// --------------

let testing = document.createElement("span");
let tetdiv = document.getElementsByClassName("ytp-time-display");

let timeLeftDiv = document.createElement("span");
let ptag = document.createElement("p");
ptag.innerHTML = "Time Left Vedio";

// timeLeftDiv[0].appendChild(ptag);

if (tetdiv.length === 1) {
  console.log("tetdic--->", tetdiv);
  tetdiv[0].appendChild(testing);
  tetdiv[0].insertAdjacentElement("afterend", timeLeftDiv);
}
testing.className = "test";

var titleCheck = setInterval(() => {
  console.log("waheguru ji");
  videoElement = document.querySelector("video");

  if (videoElement?.duration > 0) {
    // clearInterval(titleCheck);

    getElements();
    testing.innerText = " " + Math.floor(percentageCompleted) + "%" + "  ";

    timeLeftDiv.innerText = " " + timeleftVedio;

    // setInterval(() => {
    //   updateCurrentTime();
    // }, 500);
  }
}, 1000);

function getPlaybackSpeed() {
  playbackspeedvalue = document.getElementsByClassName(
    "video-stream html5-main-video"
  )[0].playbackRate;
}

function getElements() {
  videoElement = document.querySelector("video");
  duration = videoElement.duration;
  updateCurrentTime();
  getPlaybackSpeed();
  getTimeLeft();
  percentageCompleted = (currentTimeSeconds / duration) * 100;
}

function getTimeLeft() {
  timeleftVedio = (duration - currentTimeSeconds) / playbackspeedvalue;
  timeleftVedio = getTimeString(timeleftVedio);
}

function updateCurrentTime() {
  currentTimeSeconds = videoElement.currentTime;
  currentTimeSpan.textContent = getTimeString(currentTimeSeconds);
}

function getTimeString(time) {
  var hours = Math.floor(time / 3600);
  var res =
    "" +
    hours +
    ":" +
    getTwoDigitNumber(Math.floor((time - hours * 3600) / 60)) +
    ":" +
    getTwoDigitNumber(Math.floor(time % 60));
  return res;
}

function getTwoDigitNumber(n) {
  return n > 9 ? "" + n : "0" + n;
}
