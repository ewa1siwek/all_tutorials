const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
// const timeNodes = ([...document.querySelectorAll('[data-time]')]);

const seconds = timeNodes
  .map(node => node.dataset.time);
console.log(seconds)
