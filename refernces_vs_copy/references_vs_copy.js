  // start with strings, numbers and booleans
  let age = 100;
  let age2 = 100;
  console.log(age, age2)
    //100 100
  age = 200;
  console.log(age, age2)
    //200, 100

  let name = 'ewa';
  let name2 = name;
  console.log(name, name2)
    //ewa, ewa
  name = 'aga';
  console.log(name, name2);
    //aga, ewa

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    const team = players;
    console.log(players, team);
    team[3] = 'Lux';
    console.log(team);
    console.log(players)

    // and we want to make a copy of it.

    // You might think we can just do something like this:

    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    
    // one way
    const team2 = players.slice();
    team2[3] = 'Alan'
    console.log(team2);
    console.log(players);

    // or create a new array and concat the old one in
    const team3 = [].concat(players);
    console.log(team3);
    team3[3] = 'Mark';
    console.log(team3);
    console.log(players);

    // or use the new ES6 Spread
    team4 = [...players];
    team4[1] = 'John';
    console.log(team4);
    console.log(players);

    team5 = Array.from(players);
    team5[4] = 'Seba';
    console.log(team5);
    console.log(players);

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    const captain = person;
    console.log(person)
    captain.number = 99;
    console.log(person)

    // how do we take a copy instead?
    const cpt2 = Object.assign({}, person, {number: 109});
    console.log(person);
    console.log(cpt2)

    // We will hopefully soon see the object ...spread

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.