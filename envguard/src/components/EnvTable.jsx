import React from 'react';

/**
 * EnvTable component
 * 
 * Displays a table of environment variables and their values.
 * Expects a prop `variables`, which is an array of objects:
 *   [{ name: 'DB_HOST', value: 'localhost' }, ...]
 */
const EnvTable = ({ variables }) => (
  <table className="min-w-full bg-white border border-gray-200 rounded">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b">Name</th>
        <th className="py-2 px-4 border-b">Value</th>
      </tr>
    </thead>
    <tbody>
      {variables.map(v => (
        <tr key={v.name}>
          <td className="py-1 px-4 border-b">{v.name}</td>
          <td className="py-1 px-4 border-b">{v.value !== undefined ? v.value : <span className="text-red-500">Missing</span>}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default EnvTable;
