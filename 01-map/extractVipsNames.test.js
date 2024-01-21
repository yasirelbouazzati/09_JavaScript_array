import extractVipsNames from "./extractVipsNames";

describe("extractVipsNames function", () => {
  test("returns an array of strings with vips names", () => {
    const inputVIPS = [
      { name: "Foo", age: 80 },
      { name: "Bar", age: 2 },
      { name: "Fizz", age: 5 },
      { name: "Buzz", age: 16 },
      { name: "FizzBuzz", age: 100 },
    ];

    const expectedOutput = ["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"];

    const result = extractVipsNames(inputVIPS);

    expect(result).toEqual(expectedOutput);
  });
});
