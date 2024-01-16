import transformSecondsToWords from "./transformSecondsToWords";

describe("transformSecondsToWords function", () => {
  test("transforms numbers to strings", () => {
    const inputSeconds = [2, 5, 100];
    const expectedOutput = ["2", "5", "100"];

    const result = transformSecondsToWords(inputSeconds);

    expect(result).toEqual(expectedOutput);
  });

  
});
