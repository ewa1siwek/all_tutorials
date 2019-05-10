const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  console.log(startX)
  console.log(e.pageX)
})

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
})

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
})

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return; //stop the fn runnig
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  console.log({x, startX})
  const walk = x - startX;
  console.log(walk)
})
