import getWordFromValues from "./getWordFromValues.js";

const VALUES = [1, 2, 3];

test("getWordFromValues should return the correct string", () => {
  expect(getWordFromValues(VALUES)).toBe("123");
});
