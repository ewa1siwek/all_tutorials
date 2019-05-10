const slider = document.querySelector('.items');
let isDown = false;
let stratX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  console.log(e.pageX);
})

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
})

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
})

slider.addEventListener('mousemove', () => {
  if(!isDown) return //stop the fn runnig
  console.log(isDown);
})
