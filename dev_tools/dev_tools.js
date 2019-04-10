const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

    // Regular
    console.log('hello');

    // Interpolated
  console.log('Hello I am %s string!', 'my')
    // Styled
  console.log('%c I am some great text', 'font-size: 50px; background: red')
    // warning!
  console.warn('ojej!')

    // Error :|
  console.error('prmanent fatal error')
    // Info
  console.info('jestem informacją, ale nie wyglądam')
    // Testing
  // console.assert(1 === 2, 'true');

  const p = document.querySelector('p');
  // console.assert(p.classList.contains('sth'), 'That is wrong')
    // clearing
  console.clear()

    // Viewing DOM Elements

  console.log(p);
  console.dir(p);
  console.clear();
  // Grouping together
  dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
  })
    // counting
    console.count('ewa');
    console.count('siwek');
    console.count('siwek');
    console.count('siwek');
    console.count('ewa');
    console.count('siwek');
    console.count('siwek');
    console.count('ewa');
    console.count('ewa');
    console.count('ewa');
    console.count('ewa');
    console.count('siwek');

    // timing