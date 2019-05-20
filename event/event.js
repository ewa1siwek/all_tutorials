const divs = document.querySelectorAll('div');
const button = document.querySelector('button')

function logText(e) {
  console.log(this.classList.value);
  // e.stopPropagation(); // stop bubbling, no longer trigger events on the parents
};

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false, // default
  once: true // unbinding itself
}));

button.addEventListener('click', () => {
  console.log('Click');
}, {
  once: true
})
