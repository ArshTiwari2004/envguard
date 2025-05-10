const { parseEnvExample } = require('./parser/envExampleParser');
const { generateSchema } = require('./schema/schemaGenerator');
const { validateEnv } = require('./validator/validator');
const { reportErrors } = require('./reporter/errorReporter');

function runEnvguard(options = { silent: false }) {
  try {
    const parsed = parseEnvExample();
    const schema = generateSchema(parsed);
    const { valid, errors } = validateEnv(schema);
    if (!options.silent) reportErrors(errors);
    return valid;
  } catch (error) {
    if (!options.silent) console.error('[envguard] Error:', error.message);
    return false;
  }
}

// Auto-run validation unless disabled via ENVGUARD_SILENT
if (process.env.ENVGUARD_SILENT !== 'true') {
  const isValid = runEnvguard();
  if (!isValid) process.exit(1);
}

module.exports = { runEnvguard };
