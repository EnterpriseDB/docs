const { readdirSync, writeFileSync } = require("fs");

const isSVG = (file) => /.svg$/.test(file);
const removeExtension = (file) => file.split(".")[0];
// ThisIsPascalCase
const toPascalCase = (string) =>
  string
    .match(/[a-z0-9]+/gi)
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join("");

// THIS_IS_SCREAMING_SNAKE_CASE
const toScreamingSnakeCase = (string) =>
  string.replace(/-/g, "_").toUpperCase();

const icons = readdirSync("static/icons").filter(isSVG).map(removeExtension);

const IconTypeContent = [
  "import React from 'react';",
  "import iconNames from './iconNames';",
  "",
  icons
    .map(
      (icon) =>
        `import ${toPascalCase(
          icon,
        )}Svg from '../../../static/icons/${icon}.svg';`,
    )
    .join("\n"),
  "",
  "function formatIconName(name) {",
  "  return name && name.replace(/ /g, '').toLowerCase();",
  "}",
  "",
  "export default function IconType({ iconName, ...rest }) {",
  "  switch (formatIconName(iconName)) {",
  icons
    .map(
      (icon) =>
        `    case iconNames.${toScreamingSnakeCase(
          icon,
        )}:\n      return <${toPascalCase(icon)}Svg {...rest} />;`,
    )
    .join("\n"),
  "    default:",
  "      return null;",
  "  }",
  "};\n",
].join("\n");

writeFileSync(`src/components/icon/iconType.js`, IconTypeContent);
console.log("Icon Types file created! ✅");
