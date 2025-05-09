/**
 * Reports environment variable validation errors to the console.
 * 
 * @param {Array} errors - Array of error messages from the validator
 * 
 * If errors exist, prints them clearly to the console.
 */
function reportErrors(errors) {
    if (!errors.length) return;
    console.error('\n[envguard] Environment Variable Errors:');
    errors.forEach(err => {
      console.error(`  - ${err}`);
    });
  }
  
  module.exports = { reportErrors };
  