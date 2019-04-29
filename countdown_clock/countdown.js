let countdown;
const timerDisplay = document.querySelector('.display__time-left');

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds)
  
  setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //check if we should stop it
    if (secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(secondsLeft) {
  const minutes = Math.floor(secondsLeft / 60);
  const reminderSeconds = secondsLeft % 60;
  const displayTime = `${minutes}:${reminderSeconds}`;
  timerDisplay.textContent = displayTime;
  
  console.log(`${minutes} : ${reminderSeconds}`)
}