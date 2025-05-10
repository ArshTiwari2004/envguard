const express = require('express');
const { runEnvguard } = require('../src/index');
const app = express();
const port = 3001;

app.get('/api/env', (req, res) => {
  const parsed = parseEnvExample();
  const schema = generateSchema(parsed);
  const validation = validateEnv(schema);
  
  res.json({
    variables: Object.entries(process.env).map(([name, value]) => ({
      name,
      value,
      isMissing: !schema[name]?.required ? false : !value
    }))
  });
});

// Serve UI in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('ui/dist'));
}

app.listen(port, () => {
  console.log(`Envguard server running on port ${port}`);
});
