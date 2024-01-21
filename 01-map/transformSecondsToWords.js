/**
 * Given SECONDS array, define function 'transformSecondsToWords' to return an array of strings from numbers
 *
 * expected: ["2", "5", "100"]
 */

const SECONDS = [2, 5, 100];

function transformSecondsToWords(secondsArray) {
  return secondsArray.map((seconds) => String(seconds));
}

const transformedWords = transformSecondsToWords(SECONDS);
console.log(transformedWords);

export default transformSecondsToWords;
