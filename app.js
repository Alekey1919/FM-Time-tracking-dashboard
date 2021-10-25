let data;

fetch("./data.json")
  .then((res) => res.json())
  .then((json) => (data = json))
  .then(() => dailySwitch())
  .catch((err) => console.log(err));

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

const workCurrent = document.getElementById("work-current");
const workPrevious = document.getElementById("work-previous");

const playCurrent = document.getElementById("play-current");
const playPrevious = document.getElementById("play-previous");

const studyCurrent = document.getElementById("study-current");
const studyPrevious = document.getElementById("study-previous");

const exerciseCurrent = document.getElementById("exercise-current");
const exercisePrevious = document.getElementById("exercise-previous");

const socialCurrent = document.getElementById("social-current");
const socialPrevious = document.getElementById("social-previous");

const selfCareCurrent = document.getElementById("self-care-current");
const selfCarePrevious = document.getElementById("self-care-previous");

const dailySwitch = () => {
  daily.classList.add("active");
  weekly.classList.remove("active");
  monthly.classList.remove("active");

  workCurrent.innerText = data[0].timeframes.daily.current + " hrs";
  workPrevious.innerText =
    "Last Week -  " + data[0].timeframes.daily.previous + " hrs";

  playCurrent.innerText = data[1].timeframes.daily.current + " hrs";
  playPrevious.innerText =
    "Last Week -  " + data[1].timeframes.daily.previous + " hrs";

  studyCurrent.innerText = data[2].timeframes.daily.current + " hrs";
  studyPrevious.innerText =
    "Last Week -  " + data[2].timeframes.daily.previous + " hrs";

  exerciseCurrent.innerText = data[3].timeframes.daily.current + " hrs";
  exercisePrevious.innerText =
    "Last Week -  " + data[3].timeframes.daily.previous + " hrs";

  socialCurrent.innerText = data[4].timeframes.daily.current + " hrs";
  socialPrevious.innerText =
    "Last Week -  " + data[4].timeframes.daily.previous + " hrs";

  selfCareCurrent.innerText = data[5].timeframes.daily.current + " hrs";
  selfCarePrevious.innerText =
    "Last Week -  " + data[5].timeframes.daily.previous + " hrs";
};

const weeklySwitch = () => {
  daily.classList.remove("active");
  weekly.classList.add("active");
  monthly.classList.remove("active");

  workCurrent.innerText = data[0].timeframes.weekly.current + " hrs";
  workPrevious.innerText =
    "Last Week -  " + data[0].timeframes.weekly.previous + " hrs";

  playCurrent.innerText = data[1].timeframes.weekly.current + " hrs";
  playPrevious.innerText =
    "Last Week -  " + data[1].timeframes.weekly.previous + " hrs";

  studyCurrent.innerText = data[2].timeframes.weekly.current + " hrs";
  studyPrevious.innerText =
    "Last Week -  " + data[2].timeframes.weekly.previous + " hrs";

  exerciseCurrent.innerText = data[3].timeframes.weekly.current + " hrs";
  exercisePrevious.innerText =
    "Last Week -  " + data[3].timeframes.weekly.previous + " hrs";

  socialCurrent.innerText = data[4].timeframes.weekly.current + " hrs";
  socialPrevious.innerText =
    "Last Week -  " + data[4].timeframes.weekly.previous + " hrs";

  selfCareCurrent.innerText = data[5].timeframes.weekly.current + " hrs";
  selfCarePrevious.innerText =
    "Last Week -  " + data[5].timeframes.weekly.previous + " hrs";
};

const monthlySwitch = () => {
  daily.classList.remove("active");
  weekly.classList.remove("active");
  monthly.classList.add("active");

  workCurrent.innerText = data[0].timeframes.monthly.current + " hrs";
  workPrevious.innerText =
    "Last Week -  " + data[0].timeframes.monthly.previous + " hrs";

  playCurrent.innerText = data[1].timeframes.monthly.current + " hrs";
  playPrevious.innerText =
    "Last Week -  " + data[1].timeframes.monthly.previous + " hrs";

  studyCurrent.innerText = data[2].timeframes.monthly.current + " hrs";
  studyPrevious.innerText =
    "Last Week -  " + data[2].timeframes.monthly.previous + " hrs";

  exerciseCurrent.innerText = data[3].timeframes.monthly.current + " hrs";
  exercisePrevious.innerText =
    "Last Week -  " + data[3].timeframes.monthly.previous + " hrs";

  socialCurrent.innerText = data[4].timeframes.monthly.current + " hrs";
  socialPrevious.innerText =
    "Last Week -  " + data[4].timeframes.monthly.previous + " hrs";

  selfCareCurrent.innerText = data[5].timeframes.monthly.current + " hrs";
  selfCarePrevious.innerText =
    "Last Week -  " + data[5].timeframes.monthly.previous + " hrs";
};

daily.addEventListener("click", dailySwitch);

weekly.addEventListener("click", weeklySwitch);

monthly.addEventListener("click", monthlySwitch);
