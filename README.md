# envguard

A zero-config, framework-agnostic NPM package and UI for validating and documenting your environment variables, straight from your `.env.example` file.

---

## Features

- **Zero-config:** Works out-of-the-box with your existing `.env.example`
- **Framework-agnostic:** Use in any Node.js or frontend project
- **Auto-documentation:** Keeps `.env.example` up-to-date
- **CLI & Programmatic API:** Validate env vars in scripts, CI, or app startup
- **React UI:** Visualize, debug, and document env variables (dev only)
- **Descriptive errors:** Friendly messages for missing/misconfigured variables

---


# 🧰 Tech Stack

| Category        | Technologies                               |
|----------------|--------------------------------------------|
| Backend/Core    | TypeScript, Node.js                        |
| Schema Validation | Zod, Custom Schema Generator              |
| File Parsing    | dotenv, fs-extra                          |
| CLI             | yargs, commander                          |
| Frontend (UI)   | React.js, Vite , TailwindCSS      |
| Testing         | Jest                                      |
| CI/CD           | GitHub Actions                            |







## Quick Start

### 1. Install

```bash
npm install --save-dev envguard
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
├── src/
│ ├── parser/
│ ├── schema/
│ ├── validator/
│ ├── reporter/
│ ├── cli/
│ └── ...
├── ui/
│ ├── src/
│ ├── public/
│ └── ...
├── tests/
├── scripts/
└── ...

```


---

## How It Works

1. **Parse** your `.env.example` for variable names and defaults.
2. **Generate** a validation schema automatically.
3. **Validate** your actual environment (`process.env`) against the schema.
4. **Report** errors in CLI, programmatically, or visually in the UI.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

MIT


























