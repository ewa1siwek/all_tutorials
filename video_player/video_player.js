// get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progerss = player.querySelector('.progress');
const progressBar = player.querySelector('progerss__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');



// build our functions

// hook up the event listeners