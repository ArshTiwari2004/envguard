#!/usr/bin/env node

// Import required modules
const yargs = require('yargs');
const { parseEnvExample } = require('../parser/envExampleParser');
const { generateSchema } = require('../schema/schemaGenerator');
const { validateEnv } = require('../validator/validator');
const { reportErrors } = require('../reporter/errorReporter');

/**
 * CLI entry point for envguard.
 * 
 * Usage:
 *   npx envguard validate
 * 
 * Provides commands for validating environment variables.
 */
yargs
  .command(
    'validate',
    'Validate environment variables',
    () => {},
    argv => {
      // Parse .env.example
      const parsed = parseEnvExample();
      // Generate schema from parsed variables
      const schema = generateSchema(parsed);
      // Validate the current environment
      const { valid, errors } = validateEnv(schema);
      // Report errors (if any)
      reportErrors(errors);
      // Exit with code 1 if invalid, 0 if valid
      process.exit(valid ? 0 : 1);
    }
  )
  .help()
  .argv;
