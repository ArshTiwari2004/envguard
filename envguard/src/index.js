// Import the core modules
const { parseEnvExample } = require('./parser/envExampleParser');
const { generateSchema } = require('./schema/schemaGenerator');
const { validateEnv } = require('./validator/validator');
const { reportErrors } = require('./reporter/errorReporter');

/**
 * Programmatic entry point for envguard.
 * 
 * This function can be imported and run from other Node.js scripts
 * to validate environment variables without using the CLI.
 * 
 * @returns {boolean} - true if environment is valid, false otherwise
 */
function runEnvguard() {
  // Parse .env.example to get variable definitions
  const parsed = parseEnvExample();
  // Generate a schema from the parsed variables
  const schema = generateSchema(parsed);
  // Validate the current environment
  const { valid, errors } = validateEnv(schema);
  // Report errors (if any)
  reportErrors(errors);
  // Return validation result
  return valid;
}

module.exports = { runEnvguard };
