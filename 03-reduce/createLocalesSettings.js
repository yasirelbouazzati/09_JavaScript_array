/**
 * Given 'LOCALES' array, define function 'createLocalesSettings' to return an object with locales settings
 *
 * expected:
 * {
 *  "EN": {id: 0, enabled: true},
 *  "GR": {id: 1, enabled: false},
 *  "FR": {id: 2, enabled: false},
 *  "IT": {id: 3, enabled: false},
 *  "PT": {id: 4, enabled: false},
 * }
 */

const LOCALES = ["EN", "GR", "FR", "IT", "PT"];

function createLocalesSettings(locales) {
  const localesSettings = {};

  for (let i = 0; i < locales.length; i++) {
    const locale = locales[i];
    const enabled = i === 0;
    localesSettings[locale] = { id: i, enabled };
  }

  return localesSettings;
}

const localesSettings = createLocalesSettings(LOCALES);
console.log(localesSettings);

export default createLocalesSettings;
