const dicvs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation();
};


dicvs.forEach(div => div.addEventListener('click', logText, {
  capture: false
}));
