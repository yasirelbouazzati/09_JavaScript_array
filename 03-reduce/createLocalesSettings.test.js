import createLocalesSettings from "./createLocalesSettings.js";

const LOCALES = ["EN", "GR", "FR", "IT", "PT"];

test("createLocalesSettings should return the correct object", () => {
  const expectedSettings = {
    EN: { id: 0, enabled: true },
    GR: { id: 1, enabled: false },
    FR: { id: 2, enabled: false },
    IT: { id: 3, enabled: false },
    PT: { id: 4, enabled: false },
  };

  expect(createLocalesSettings(LOCALES)).toEqual(expectedSettings);
});
