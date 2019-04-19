const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
// const timeNodes = ([...document.querySelectorAll('[data-time]')]);

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':');
    return mins * 60 + secs
  });

  console.log(seconds)