const dicvs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation(); // stop bubbling, no longer trigger events on the parents
};


dicvs.forEach(div => div.addEventListener('click', logText, {
  capture: true 
}));
