const { parseEnvExample } = require('../src/parser/envExampleParser');
const fs = require('fs');

/**
 * Jest test for the envExampleParser.
 * 
 * This test writes a temporary .env.example file, parses it,
 * and checks if the output matches the expected array of variables.
 */
describe('parseEnvExample', () => {
  const tempEnvFile = '.env.example';

  beforeAll(() => {
    // Write a temporary .env.example file for testing
    fs.writeFileSync(
      tempEnvFile,
      `
      # Sample .env.example
      FOO=bar
      BAZ=
      # A comment
      API_KEY=12345
      `
    );
  });

  afterAll(() => {
    // Clean up the temporary file
    fs.unlinkSync(tempEnvFile);
  });

  it('parses variables correctly from .env.example', () => {
    const vars = parseEnvExample(tempEnvFile);

    expect(vars).toEqual([
      { name: 'FOO', defaultValue: 'bar', comment: null },
      { name: 'BAZ', defaultValue: '', comment: null },
      { name: 'API_KEY', defaultValue: '12345', comment: null }
    ]);
  });
});
