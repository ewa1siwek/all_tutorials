const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 
'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bandsWindow = document.querySelector('#bands');

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim()
}

const sortedBand = bands
  .sort((a, b) => strip(a) < strip(b) ? -1 : 1)
  .map(band => `<li>${band}</li>`)

bandsWindow.innerHTML = `${sortedBand}`
