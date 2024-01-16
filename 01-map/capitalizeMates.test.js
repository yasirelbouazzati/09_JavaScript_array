import capitalizeMates from "./capitalizeMates.js";

describe("capitalizeMates function", () => {
  test("capitalizes names in the array", () => {
    const inputMates = ["john", "JACOB", "jinGleHeimer", "schmidt"];
    const expectedOutput = ["John", "Jacob", "Jingleheimer", "Schmidt"];

    const result = capitalizeMates(inputMates);

    expect(result).toEqual(expectedOutput);
  });
});
