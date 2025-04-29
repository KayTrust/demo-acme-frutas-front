const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, "..", 'staticwebapp.config.json');
const destinationDir = path.join(__dirname, "..", 'dist', 'demo-acme-frutas-front', 'browser'); // Ajusta la ruta si es diferente

if (!fs.existsSync(destinationDir)) {
  fs.mkdirSync(destinationDir, { recursive: true });
}

const destinationFile = path.join(destinationDir, 'staticwebapp.config.json');

fs.copyFile(sourceFile, destinationFile, (err) => {
  if (err) {
    console.error('Error copying staticwebapp.config.json:', err);
    process.exit(1); // Salir con código de error
  } else {
    console.log('staticwebapp.config.json copied successfully!');
  }
});