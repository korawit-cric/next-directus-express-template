const fs = require('fs');

const [sourceFile, targetFile] = process.argv.slice(2);

if (!sourceFile || !targetFile) {
  console.error("Usage: node env-setup.js <sourceFile> <targetFile>");
  process.exit(1);
}

try {
  // Check if the source file exists
  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Source file "${sourceFile}" does not exist.`);
  }

  // Read the content of the source file
  const content = fs.readFileSync(sourceFile, 'utf8');

  // Write the content to the target file
  fs.writeFileSync(targetFile, content, 'utf8');

  console.log(`Successfully copied "${sourceFile}" to "${targetFile}".`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
