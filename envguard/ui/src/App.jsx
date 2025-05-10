import React, { useState, useEffect } from 'react';
import EnvTable from './components/EnvTable';

/**
 * Main App component for the envguard React UI.
 * 
 * This component fetches environment variable data (for demo purposes, 
 * from a local JSON file or API endpoint), and displays it in a table.
 */
function App() {
  const [envVars, setEnvVars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/env')
      .then(res => res.json())
      .then(data => setEnvVars(data.variables));
  }, []);
  

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Environment Variables</h1>
      <EnvTable variables={envVars} />
    </div>
  );
}

export default App;
