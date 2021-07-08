const { writeFileSync } = require('fs');
const defaultIcons = require('@enterprisedb/icons');
const logosIcons = require('@enterprisedb/icons/logos');
const colorIcons = require('@enterprisedb/icons/color');

const camelToUnderscore = (str) => {
  const result = str.replace(/([A-Z])/g, ' $1').substring(1);
  return result.split(' ').join('_').toUpperCase();
};

const icons = Object.keys(defaultIcons);
const logos = Object.keys(logosIcons);
const color = Object.keys(colorIcons);

const IconNamesContent = [
  'const iconNames = {',
  icons.map((icon) => `  ${camelToUnderscore(icon)}: '${icon}',`).join('\n'),
  logos
    .map((icon) => `  ${camelToUnderscore(icon)}: 'logos/${icon}',`)
    .join('\n'),
  color
    .map((icon) => `  ${camelToUnderscore(icon)}: 'color/${icon}',`)
    .join('\n'),
  '};',
  'export default iconNames;\n',
].join('\n');

writeFileSync(`src/components/icon/iconNames.js`, IconNamesContent);
console.log("Icon Names file created! ✅");
