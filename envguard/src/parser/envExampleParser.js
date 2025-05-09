const fs = require('fs');
const path = require('path');

/**
 * Parses a .env.example file and returns an array of variable objects.
 * Each object: { name, defaultValue, comment }
 * 
 * @param {string} filePath - Path to the .env.example file (default: project root)
 * @returns {Array} Array of variable objects
 */
function parseEnvExample(filePath = path.join(process.cwd(), '.env.example')) {
  // Read the file content as a string
  const content = fs.readFileSync(filePath, 'utf-8');
  // Split the content into lines
  const lines = content.split('\n');
  const variables = [];

  lines.forEach(line => {
    // Remove whitespace from both ends
    const trimmed = line.trim();

    // Skip empty lines and comment lines
    if (!trimmed || trimmed.startsWith('#')) return;

    // Split at the first '=' to get key and value
    const [key, ...rest] = trimmed.split('=');
    const value = rest.join('=');

    // Add the variable to the array
    variables.push({
      name: key.trim(),
      defaultValue: value ? value.trim() : undefined,
      comment: null // (Optional: Enhance to parse inline comments)
    });
  });

  return variables;
}

module.exports = { parseEnvExample };
