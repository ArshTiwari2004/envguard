/**
 * Generates a schema object from parsed variables.
 * Each variable in the schema describes if it is required and its default value.
 * 
 * @param {Array} parsedVariables - Array of variable objects from the parser
 * @returns {Object} Schema object with variable rules
 * 
 * Example output:
 * {
 *   DB_HOST: { required: true, default: 'localhost' },
 *   DB_PORT: { required: true, default: '5432' },
 *   API_KEY: { required: true, default: undefined },
 *   DEBUG: { required: true, default: 'true' }
 * }
 */
function generateSchema(parsedVariables) {
    const schema = {};
  
    parsedVariables.forEach(v => {
      schema[v.name] = {
        // If the default value is missing or empty, mark as required
        required: v.defaultValue === undefined || v.defaultValue === '',
        // Store the default value (if any)
        default: v.defaultValue || undefined
      };
    });
  
    return schema;
  }
  
  module.exports = { generateSchema };
  