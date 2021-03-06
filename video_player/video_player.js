// get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.fullscreen__button')

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

function handleProgress() {
  const percent = video.currentTime * 100 / video.duration;
  progressBar.style.flexBasis = `${percent}%`;
  // console.log(percent)
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  console.log(e)
}

function toggleFullScreen() {
  if(video.requestFullScreen) {
    video.requestFullScreen();
  } else if (video.webkitRequestFullScreen) {
    video.webkitRequestFullScreen()
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen
  }
}

// hook up the event listeners

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullScreen.addEventListener('click', toggleFullScreen);