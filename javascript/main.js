const DigitsSegments = [
  [1, 2, 3, 4, 5, 6], // 0
  [2, 3], // 1
  [1, 2, 4, 5, 7], // 2
  [1, 2, 3, 4, 7], // 3
  [2, 3, 6, 7], // 4
  [1, 3, 4, 6, 7], // 5
  [1, 3, 4, 5, 6, 7], // 6
  [1, 2, 3], // 7
  [1, 2, 3, 4, 5, 6, 7], // 8
  [1, 2, 3, 6, 7], // 9
];

function clock() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  let hoursTens = document.querySelector("#hoursTens");
  let getHoursTens = Math.floor(hours / 10);

  let hoursOnes = document.querySelector("#hoursOnes");
  let getHoursOnes = hours % 10;

  let minutesTens = document.querySelector("#minutesTens");
  let getMinutesTens = Math.floor(minutes / 10);

  let minutesOnes = document.querySelector("#minutesOnes");
  let getMinutesOnes = minutes % 10;

  let secondsTens = document.querySelector("#secondsTens");
  let getSecondsTens = Math.floor(seconds / 10);

  let secondsOnes = document.querySelector("#secondsOnes");
  let getSecondsOnes = seconds % 10;
  console.log(seconds);

  DigitsSegments.forEach((digitSegment, digit) => {
    if (getHoursTens === digit) {
      [...hoursTens.children].forEach((item) => {
        if (!digitSegment.includes(Number(item.dataset.value))) {
          item.classList.add("off");
        } else {
          item.classList.remove("off");
        }
      });
    }

    if (getHoursOnes === digit) {
      [...hoursOnes.children].forEach((item) => {
        if (!digitSegment.includes(Number(item.dataset.value))) {
          item.classList.add("off");
        } else {
          item.classList.remove("off");
        }
      });
    }

    if (getMinutesTens === digit) {
      [...minutesTens.children].forEach((item) => {
        if (!digitSegment.includes(Number(item.dataset.value))) {
          item.classList.add("off");
        } else {
          item.classList.remove("off");
        }
      });
    }

    if (getMinutesOnes === digit) {
      [...minutesOnes.children].forEach((item) => {
        if (!digitSegment.includes(Number(item.dataset.value))) {
          item.classList.add("off");
        } else {
          item.classList.remove("off");
        }
      });
    }

    if (getSecondsTens === digit) {
      [...secondsTens.children].forEach((item) => {
        if (!digitSegment.includes(Number(item.dataset.value))) {
          item.classList.add("off");
        } else {
          item.classList.remove("off");
        }
      });
    }

    if (getSecondsOnes === digit) {
      [...secondsOnes.children].forEach((item) => {
        if (!digitSegment.includes(Number(item.dataset.value))) {
          item.classList.add("off");
        } else {
          item.classList.remove("off");
        }
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => setInterval(clock, 1000));
