async function init() {
  const h1 = document.createElement("h1");
  document.body.prepend(h1);
  const secCounter = 0;
  const minCounter = 0;
  const hourCounter = 0;
  await clock(h1, secCounter, minCounter, hourCounter);
}

async function clock(h1, sec, min, hour) {
  showClock(h1, sec, min, hour);
  while (true) {
    await waitOneSecond();
    sec = sec + 1;
    if (sec == 60) {
      sec = 0;
      min += 1;
    }
    if (min == 60) {
      min = 0;
      hour += 1;
    }
    if (hour == 24) {
      sec = 0;
      min = 0;
      hour = 0;
    }
    showClock(h1, sec, min, hour);
  }
}

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve();
    }, 1000);
  });
}

function showClock(h1, sec, min, hour) {
  const view = setClockFormat(sec, min, hour);
  h1.innerHTML = view;
}

function setClockFormat(sec, min, hour) {
  const view = [hour, ":", min, ":", sec];
  if (hour < 10) {
    view[0] = "0" + hour.toString();
  }
  if (min < 10) {
    view[2] = "0" + min.toString();
  }
  if (sec < 10) {
    view[4] = "0" + sec.toString();
  }
  return view.join("");
}

document.addEventListener("DOMContentLoaded", init);
