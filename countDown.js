let audiomute = false
const timezone = 2;
const hoursToMilli = timezone * 60 * 60 * 1000;

const when = new Date("2023-01-01");

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

function pad(d) {
  return d < 10 ? "0" + d.toString() : d.toString();
}

function mute() {
  if (audiomute === false) {
    audiomute = true
    document.getElementById("muter").style.color = "red";
  } else {
    audiomute = false
    document.getElementById("muter").style.color = "white";
  }
}

function getNewYear() {
  const start = new Date("1970-01-01");
  return when - start;
}

function getSeconds(value) {
  return value / 1000;
}

function getMinutes(seconds) {
  return seconds / 60;
}

function getHours(minutes) {
  return minutes / 60;
}

function getDays(hours) {
  return hours / 24;
}

async function init() {
  while (true) {
    const todayDate = Date.now() + hoursToMilli;

    let seconds = getSeconds(todayDate);
    let minutes = getMinutes(seconds);
    let hours = getHours(minutes);
    let days = getDays(hours);

    let newYearSeconds = getSeconds(getNewYear());
    let newYearMinutes = getMinutes(newYearSeconds);
    let newYearHours = getHours(newYearMinutes);
    let newYearDays = getDays(newYearHours);

    let countdownSeconds = newYearSeconds - seconds;
    let countdownMinutes = newYearMinutes - minutes;
    let countdownHours = newYearHours - hours;
    let countdownDays = newYearDays - days;

    let mainDays = Math.floor(countdownDays);
    let mainHours = Math.floor(countdownHours - mainDays * 24);
    let mainMinutes = Math.floor(
      countdownMinutes - Math.floor(countdownHours) * 60
    );
    let mainSeconds = Math.floor(
      countdownSeconds - Math.floor(countdownMinutes) * 60
    );

    if (audiomute === false) {
          const audio = new Audio("tickyes.mp3");
          audio.play();
    }

    document.getElementById("second").innerHTML = pad(mainSeconds);
    document.getElementById("minute").innerHTML = pad(mainMinutes);
    document.getElementById("hour").innerHTML = pad(mainHours);
    document.getElementById("day").innerHTML = pad(mainDays);


    
    async function aftermath() { }
    

    await delay(1000);

    if (mainDays & mainHours & mainMinutes & (mainDays === 0)) {
      break;
    }
  }
}



init();
