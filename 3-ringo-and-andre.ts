/*
 * This illustrates:
 * - Defining and using classes
 *
 * Try:
 * - Removing the super() call in a subclass constructor.
 * - Have the Person class implement the PersonInterface.
 * - Creating a new subclass of Person, with different fields and methods!
*/

interface PersonInterface {
  firstName: string;
  lastName: string;
}

class Person {
  firstName: string;
  lastName: string;
  constructor(fName: string, lName: string) {
    this.firstName = fName;
    this.lastName = lName;
  };
  introduce() {
    return `Hi, I'm ${this.firstName} ${this.lastName}.`;
  }
}

class Musician extends Person {
  instrument: string;
  constructor(fName: string, lName: string, instr: string) {
    super(fName, lName);
    this.instrument = instr;
  }
  introduce() {
    return `Hi, I'm ${this.firstName} ${this.lastName}. I play the ${this.instrument}.`;
  }
}

class Athlete extends Person {
  sport: string;
  constructor(fName: string, lName: string, sport: string) {
    super(fName, lName);
    this.sport = sport;
  }
  introduce() {
    return `Hi, I'm ${this.firstName} ${this.lastName}. I play ${this.sport}.`;
  }
}

const ringoStarr = new Musician('Ringo', 'Starr', 'drums');
console.log(ringoStarr.introduce());
const andreAgassi = new Athlete('Andre', 'Agassi', 'tennis');
console.log(andreAgassi.introduce());
