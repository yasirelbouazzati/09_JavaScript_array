import feedMonkeys from "./feedMonkeys";

describe("feedMonkeys function", () => {
  test("returns an array with each monkey having one fruit (🍌)", () => {
    const fruit = "🍌";
    const expectedOutput = ["🐒 🍌", "🦍 🍌", "🦧 🍌"];

    const result = feedMonkeys(fruit);

    expect(result).toEqual(expectedOutput);
  });

  test("returns an array with each monkey having one fruit (🍎)", () => {
    const fruit = "🍎";
    const expectedOutput = ["🐒 🍎", "🦍 🍎", "🦧 🍎"];

    const result = feedMonkeys(fruit);

    expect(result).toEqual(expectedOutput);
  });

  
});
