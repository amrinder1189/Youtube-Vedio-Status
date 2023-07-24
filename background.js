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
var tetdiv = document.getElementsByClassName("ytp-time-display");

// for the COMPLETE
let testingdiv = document.createElement("div");
testingdiv.className = "timeLeftDiv";
let completedLeftspan = document.createElement("span");
completedLeftspan.className = "bolder ";
testingdiv.appendChild(completedLeftspan);
let cptag = document.createElement("span");
cptag.className = "ptag ";
cptag.innerHTML = "Completed";
testingdiv.appendChild(cptag);

// For The Time LEFT
let timeLeftDiv = document.createElement("div");
timeLeftDiv.className = "timeLeftDiv";
let timeLeftspan = document.createElement("span");
timeLeftDiv.appendChild(timeLeftspan);
let ptag = document.createElement("span");
ptag.className = "ptag";
ptag.innerHTML = "Time Left ";
timeLeftDiv.appendChild(ptag);

function findgtarget() {
  if (tetdiv.length === 1) {
    console.log("appending divs --->");
    tetdiv[0].insertAdjacentElement("afterend", testingdiv);
    tetdiv[0].insertAdjacentElement("afterend", timeLeftDiv);
  }
}

// testing.className = "test";

// MAIN FUNCTION
// MAIN FUNCTION
// MAIN FUNCTION

var titleCheck = setInterval(() => {
  videoElement = document.querySelector("video");
  helpingdiv = document.getElementsByClassName("bolder");
  console.log("helpingdiv", helpingdiv);

  if (videoElement?.duration > 0) {
    // console.log("waheguru ji 2");
    getElements();
    completedLeftspan.innerText =
      " " + Math.floor(percentageCompleted) + "%" + "  ";
    timeLeftspan.innerText = " " + timeleftVedio;
  }

  var findingtarget = setInterval(() => {
    console.log("appending interval --->");

    findgtarget();
    console.log("waheguru ji kirpa kro");
  }, 1000);

  if (videoElement?.duration > 0) {
    console.log("clearing interval --->");
    if (helpingdiv?.length === 1) {
      clearInterval(findingtarget);
    }
  }
}, 1000);

// MAIN FUNCTION
// MAIN FUNCTION
// MAIN FUNCTION

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
