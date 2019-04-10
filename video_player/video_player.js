// get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progerss = player.querySelector('.progress');
const progressBar = player.querySelector('progerss__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

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

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  
};

// hook up the event listeners

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));