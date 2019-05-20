const dicvs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value)
}

dicvs.forEach(div => div.addEventListener('click', logText));
