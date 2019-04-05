

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
const middleAgesBorn = inventors.filter(function(inventor) {
  if (inventor.year >= 1500 && inventor.year < 1600) return true

}).map(inventor => inventor.first + ' ' + inventor.last).join(', ')

document.querySelector('.filter__fun-expr')
.innerHTML = `Urodzeni w XVI wieku /func expr/: ${middleAgesBorn}.`;

const middleAgesBornArr = inventors.filter(inventor => {
  if (inventor.year >= 1800 && inventor.year < 1900) return true
}).map(inventor => inventor.first + ' ' + inventor.last).join(', ');

document.querySelector('.filter__fun-arr')
.innerHTML = `Urodzeni w XVIII wieku /arr func/: ${middleAgesBornArr}.`

const middleAgesBornRef = inventors.filter(inventor => 
  (inventor.year >= 1400 && inventor.year < 1500))
  .map(inventor => inventor.first + ' ' + inventor.last)
  .join(', ');

document.querySelector('.filter__fun-arr__ref')
.innerHTML= `Urodzeni w XIV wieku /refactring/: ${middleAgesBornRef}.`;

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
const inventorsList = inventors.map(inventor => inventor.first + " " + inventor.last).join(', ');
document.querySelector('.map__fun').innerHTML = `${inventorsList}.`

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventors = inventors.sort(function(a, b) {
  if (a.year > b.year) {
    return 1
  } else {
    return -1
  }
}).map(inventor => `${inventor.first} ${inventor.year}`).join(', ');

document.querySelector('.sort__fun-expr').innerHTML = `od najstraszego /fun expr: ${sortedInventors}`;

const orderedByBirth = inventors.sort((a, b) => a.year > b.year ? -1 : 1)
.map(inventor => `${inventor.first} ${inventor.year}`).join(', ');
// const orderedByBirth = inventors.sort((a, b) => a.year - b.year)
// .map(inventor => `${inventor.first} ${inventor.year}`).join(', ');
document.querySelector('.sort__fun-arr').innerHTML = `od najmłodszego /arr fun, ternary/: ${orderedByBirth}`

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
const liveDuration = inventors.map(inventor => inventor.passed - inventor.year);
var totalAge = 0;
for (var i = 0; i < liveDuration.length; i++) {
  totalAge += liveDuration[i]
}

const personalAge = inventors.map(inventor => inventor.passed - inventor.year)
.reduce((a, b) => a + b)
console.table(liveDuration)
document.querySelector('.for__loop').innerHTML = `Łączny wiek /for loop/: ${totalAge}.`
document.querySelector('.reduce').innerHTML = `Łączny wiek /reduce/: ${personalAge}.`

const totalYears = inventors.reduce((total, inventor) => {
  return total + inventor.passed - inventor.year
}, 0)
console.log(totalYears)

    // 5. Sort the inventors by years lived


// .sort((a, b) => a > b ? -1 : 1)

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


    // 7. sort Exercise
    // Sort the people alphabetically by last name

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];