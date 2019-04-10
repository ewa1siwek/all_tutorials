// get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progerss = player.querySelector('.progress');
const progressBar = player.querySelector('progerss__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

// build our functions
function togglePlay() {
  // if(video.paused) {
  //   video.play()
  // } else {
  //   video.pause()
  // }

  const method = video.paused ? 'play' : 'pause';
  video[method]()
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

// hook up the event listeners

toggle.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)

// '►' : '❚ ❚'