const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 
'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bandsWindow = document.querySelector('#bands');

const sortedBand = bands
  .sort((a, b) => a < b ? -1 : 1)
  .map(band => `<li>${band}</li>`)

bandsWindow.innerHTML = `${sortedBand}`
