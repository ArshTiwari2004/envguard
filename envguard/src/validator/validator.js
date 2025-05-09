/**
 * Validates process.env (or any env object) against the generated schema.
 * 
 * @param {Object} schema - The schema object from schemaGenerator.js
 * @param {Object} [env=process.env] - The environment variables object (default: process.env)
 * @returns {Object} { valid: boolean, errors: array of strings }
 * 
 * Example:
 *   {
 *     valid: false,
 *     errors: [
 *       "Missing required environment variable: API_KEY"
 *     ]
 *   }
 */
function validateEnv(schema, env = process.env) {
    const errors = [];
  
    Object.keys(schema).forEach(key => {
      const rule = schema[key];
      // Check if required and missing or empty
      if (rule.required && (!env[key] || env[key] === '')) {
        errors.push(`Missing required environment variable: ${key}`);
      }
      // (Optional: Add more validation here, e.g., type checks)
    });
  
    return {
      valid: errors.length === 0,
      errors
    };
  }
  
  module.exports = { validateEnv };
  