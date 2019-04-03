const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

secHand.style.background = 'white';
minHand.style.background = 'red';
hourHand.style.background = 'green';

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees  = ((seconds / 60) * 360) + 90;
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

}

setInterval(setDate, 1000)