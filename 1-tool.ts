/*
 * This illustrates:
 * - Type annotations for variables
 * - Type annotations for function arguments
 * - Type annotations for function return values
 *
 * Try:
 * - Look at the .js output!
 * - In a variable assignment, change the value so it's the wrong type.
 * - Remove a type annotation (from anywhere).
 * - In the function call, pass a value of the wrong type.
 * - In the function call, pass the wrong number of args. (If curious, try this in raw JS, too.)
*/

function printTool(item: string, powerLevel: number): string {
  return `I am a ${item} and my power level is ${powerLevel}!`;
}

let myPower: number = 9999;
let myItem: string = "hair dryer";

console.log(printTool(myItem, myPower));
