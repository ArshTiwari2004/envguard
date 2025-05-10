const fs = require('fs');
const path = require('path');

/**
 * Script to auto-generate or update a .env.example file
 * based on the current process.env or a given schema.
 * 
 * This is useful for keeping .env.example in sync with actual usage.
 * 
 * Usage: node scripts/generateEnvExample.js
 */

// You can customize this array or import your schema
const envVars = [
  { name: 'DB_HOST', defaultValue: 'localhost' },
  { name: 'DB_PORT', defaultValue: '5432' },
  { name: 'API_KEY', defaultValue: '' },
  { name: 'DEBUG', defaultValue: 'true' }
];

function generateEnvExampleFile(vars, filePath = path.join(process.cwd(), '.env.example')) {
  const lines = [
    '# Auto-generated .env.example file',
    ...vars.map(v => `${v.name}=${v.defaultValue !== undefined ? v.defaultValue : ''}`)
  ];
  fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
  console.log(`.env.example updated at ${filePath}`);
}

generateEnvExampleFile(envVars);
