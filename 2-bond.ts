/*
 * This illustrates:
 * - Defining and using interfaces
 * - Optional properties
 *
 * Try:
 * - Removing one of the fields from jamesBond.
 * - Removing the type annotation from the declaration of jamesBond.
 * - Adding a field to jamesBond.
 * - Making one of the Person fields optional, then removing it from the jamesBond object.
 *   (You probably want to add a conditional in the printPerson function.)
*/

interface PersonInterface {
  firstName: string;
  lastName: string;
  middleName?: string;
}

function printPerson(person: PersonInterface) {
  const fullName = `${person.lastName}. ${person.firstName} ${person.lastName}.`;
  return fullName;
}

const jamesBond: PersonInterface = {
  firstName: 'James',
  lastName: 'Bond'
};
console.log(printPerson(jamesBond));
