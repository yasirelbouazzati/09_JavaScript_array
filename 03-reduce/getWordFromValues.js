/**
 * Given 'VALUES' array, define function 'getWordFromValues' to return a string of all those numbers.
 *
 * expected: '123'
 */

const VALUES = [1, 2, 3];

function getWordFromValues(values) {
  const result = values.join("");
  return result;
}

const result = getWordFromValues(VALUES);

console.log(result);

export default getWordFromValues;
