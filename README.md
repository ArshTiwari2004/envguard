<p align="center">
  <img src="envguard.png" alt="EnvGuard Logo" width="600"/>
</p>

<p align="center">
  <b>A zero-config, framework-agnostic NPM package and UI for validating and documenting your environment variables, straight from your <code>.env.example</code> file.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@arishtiwari/envguard">
    <img src="https://img.shields.io/npm/v/@arshtiwari/envguard?style=for-the-badge" alt="NPM Version">
  </a>
  <a href="https://www.npmjs.com/package/@arishtiwari/envguard">
    <img src="https://img.shields.io/npm/dt/@arshtiwari/envguard?style=for-the-badge" alt="Downloads">
  </a>
  <a href="https://github.com/ArshTiwari2004/envguard/stargazers">
    <img src="https://img.shields.io/github/stars/ArshTiwari2004/envguard?style=for-the-badge" alt="GitHub Stars">
  </a>
  <a href="https://github.com/ArshTiwari2004/envguard/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/ArshTiwari2004/envguard?style=for-the-badge" alt="License">
  </a>
  <a href="https://github.com/ArshTiwari2004/envguard/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/ArshTiwari2004/envguard/ci.yml?style=for-the-badge" alt="CI Status">
  </a>
</p>

---

## Quick Start


### Install via NPM


```bash
npm install @arshtiwari/envguard
```

### Add to Project Startup

```bash
require('envguard'); // Validates env vars on startup
```

### Or Use CLI

```bash
npx envguard validate
```



## Features

-  **Zero-config** - Works with existing `.env.example`
-  **Framework-agnostic** - Node.js, Next.js, React, Vue, etc.
-  **Auto-documentation** - Keep `.env.example` always updated
-  **Interactive UI** - Visual debugger for environment variables
-  **Validation** - Catch missing/invalid vars before runtime
-  **Multiple Integration Methods** - CLI, programmatic, and React UI

---


# 🧰 Tech Stack


<div align="center">
  <img height="40" src="https://skillicons.dev/icons?i=ts,nodejs,react,tailwind,vite,jest,git,github,figma" alt="Tech Stack">
</div>

--



| Category        | Technologies                               |
|----------------|--------------------------------------------|
| Backend/Core    | TypeScript, Node.js                        |
| Schema Validation | Zod, Custom Schema Generator              |
| File Parsing    | dotenv, fs-extra                          |
| CLI             | yargs, commander                          |
| Frontend (UI)   | React.js, Vite , TailwindCSS      |
| Testing         | Jest                                      |
| CI/CD           | GitHub Actions                            |







## Installation and setup

### 1. Install

```bash
npm install --save-dev @arshtiwari/envguard
# or
yarn add -D @arshtiwari/envguard
# or
pnpm add -D @arshtiwari/envguard
```
### 2. Validate in CLI

```bash
npx envguard validate
```


### 3. Use Programmatically

```bash
const { runEnvguard } = require('envguard');
if (!runEnvguard()) {
process.exit(1);
}
```

### 4. Access frontend

```bash
cd ui
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the UI.

---

## Folder Structure

```bash

envguard/
├── .env.example                # Example env file for validation
├── .gitignore
├── README.md                   # Project documentation
├── package.json
├── babel.config.js             # Babel config for transpiling (if needed)
├── jest.config.js              # Jest config for tests
├── tsconfig.json               # TypeScript config (optional)
├── LICENSE
├── dist/                       # Transpiled output for npm (ignored in VCS)
│   └── ...                     # Compiled JS files
├── src/                        # Main source code
│   ├── index.js                # Main entry point (exports runEnvguard)
│   ├── parser/
│   │   └── envExampleParser.js
│   ├── schema/
│   │   └── schemaGenerator.js
│   ├── validator/
│   │   └── validator.js
│   ├── reporter/
│   │   └── errorReporter.js
│   ├── cli/
│   │   └── cli.js              # CLI entry point
│   ├── utils/
│   │   └── helpers.js
│   └── types/
│       └── index.d.ts          # Type definitions
├── server/                     # Backend server for live UI (optional)
│   └── server.js
├── scripts/                    # Utility scripts (e.g., generate .env.example)
│   └── generateEnvExample.js
├── tests/                      # Jest test files
│   ├── parser.test.js
│   ├── schema.test.js
│   ├── validator.test.js
│   └── cli.test.js
├── ui/                         # React UI dashboard (dev/optional)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── components/
│   │       └── EnvTable.jsx
│   ├── public/
│   │   ├── index.html
│   │   └── env-vars.json       # (for demo, replaced by API in prod)
│   ├── tailwind.config.js
│   └── vite.config.js
├── website/                    # Landing page (for npm promotion)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── components/
│   │       ├── Hero.jsx
│   │       └── Pricing.jsx
│   ├── public/
│   │   └── index.html
│   ├── tailwind.config.js
│   └── vite.config.js

```


---

## How It Works

1. **Parse** your `.env.example` for variable names and defaults.
2. **Generate** a validation schema automatically.
3. **Validate** your actual environment (`process.env`) against the schema.
4. **Report** errors in CLI, programmatically, or visually in the UI.

---



## File Structure Example

```bash
project-root/
├── .env                # Local environment (gitignored)
├── .env.example        # Template with all required vars
├── .env.development    # Environment-specific vars
├── .env.production
└── package.json
```

#### Your .env.example should look like:

```bash
# Required variables
API_KEY=your_api_key_here
DATABASE_URL=postgres://user:pass@localhost:5432/db

# Optional variables
# PORT=3000
# DEBUG=false
```

## Advanced Configuration

#### Create envguard.config.js for custom rules:

```bash
module.exports = {
  // Custom schema rules
  rules: {
    API_KEY: {
      minLength: 32,
      pattern: /^sk_[a-zA-Z0-9]+$/
    }
  },
  
  // Additional environments
  environments: ['staging', 'test'],
  
  // Custom error messages
  messages: {
    missing: '🚨 Missing required env var: {var}',
    invalid: '❌ Invalid value for {var}: {error}'
  }
};
```








## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

MIT © Arsh Tiwari


---

## 📬 Contact

Have questions or need help? Feel free to reach out!

- **Email:** [arshtiwari12345@gmail.com](mailto:arshtiwari12345@gmail.com)
- **GitHub:** [@ArshTiwari2004](https://github.com/ArshTiwari2004)
- **Twitter/X:** [@ArshTiwari17](https://x.com/ArshTiwari17)
- **LinkedIn:** [Arsh Tiwari](https://www.linkedin.com/in/arsh-tiwari-072609284/)

For bug reports or feature requests, please [open an issue](https://github.com/ArshTiwari2004/envguard/issues) on GitHub.

---

<p align="center">
  <i> Happy coding! May your environment variables always be valid. ✨</i>
</p>






















