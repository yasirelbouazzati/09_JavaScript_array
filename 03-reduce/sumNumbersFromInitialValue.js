/**
 * Given 'NUMBERS' array, define function 'sumNumbersFromInitialValue' to return its sum value depending on initial value.
 * use for() instruction
 *
 * expected with initial as 0: 15
 * expected with initial as 10: 25
 */

const NUMBERS = [1, 2, 3, 4, 5];

function sumNumbersFromInitialValue(initialValue) {
  let sum = initialValue;

  for (let i = 0; i < NUMBERS.length; i++) {
    sum += NUMBERS[i];
  }

  return sum;
}

const resultWithInitial0 = sumNumbersFromInitialValue(0);
console.log(resultWithInitial0);

const resultWithInitial10 = sumNumbersFromInitialValue(10);
console.log(resultWithInitial10);

export default sumNumbersFromInitialValue;
