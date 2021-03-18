const { readdirSync, writeFileSync } = require('fs');

const isSVG = (file) => /.svg$/.test(file);
const removeExtension = (file) => file.split('.')[0];
const toSingleLowerCase = (string) => string.replace(/-/g, '').toLowerCase();

const toScreamingSnakeCase = (string) => string.replace(/-/g, '_').toUpperCase();

// getting all the icons
const icons = readdirSync('static/edb-icons').filter(isSVG).map(removeExtension);

const IconNamesContent = [
  'const iconNames = {',
  icons.map((icon) => `  ${toScreamingSnakeCase(icon)}: '${toSingleLowerCase(icon)}',`).join('\n'),
  '};',
  'export default iconNames;\n',
].join('\n');

writeFileSync(`src/components/icon/iconNames.js`, IconNamesContent);
console.log('Icon Names file created! ✅');
