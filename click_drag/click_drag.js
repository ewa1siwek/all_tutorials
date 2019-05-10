const slider = document.querySelector('.items');
let isDown = false;
let stratX;
let scrollLeft;

slider.addEventListener('mousedown', () => {
  isDown = true;
  slider.classList.add('active');
  stratX = e.pageX - slider.offsetLeft;
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
