const fs = require('fs');
const packageJson = require('../package.json');

const version = packageJson.version;
const versionFileContent = `
{
  "version": "${version}"
}
`;

fs.writeFile('./src/environments/version.json', versionFileContent, (err) => {
  if (err) {
    return console.log('Error escribiendo el archivo de versión:', err);
  }
  console.log('Archivo de versión generado correctamente');
});
