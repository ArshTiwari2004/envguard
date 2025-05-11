"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Github,
  Package,
  Terminal,
  Zap,
  Shield,
  FileJson,
  Code2,
  Layers,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const installCommand = "npm install @arshtiwari/envguard"
  const validateCommand = "npx envguard validate"
  const programmaticUsage = `const { runEnvguard } = require('envguard');
if (!runEnvguard()) {
  process.exit(1);
}`

  const envExampleFile = `# API Keys (required)
API_KEY=your-api-key-here
# Database connection (required)
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password
# Feature flags (optional)
ENABLE_FEATURE_X=true
DEBUG_MODE=false`

  const features = [
    {
      icon: <Shield className="h-10 w-10 text-purple-400" />,
      title: "Zero-config",
      description: "Works out-of-the-box with your existing .env.example file",
    },
    {
      icon: <Layers className="h-10 w-10 text-blue-400" />,
      title: "Framework-agnostic",
      description: "Use in any Node.js or frontend project",
    },
    {
      icon: <FileJson className="h-10 w-10 text-green-400" />,
      title: "Auto-documentation",
      description: "Keeps .env.example up-to-date automatically",
    },
    {
      icon: <Terminal className="h-10 w-10 text-yellow-400" />,
      title: "CLI & API",
      description: "Validate env vars in scripts, CI, or app startup",
    },
    {
      icon: <Code2 className="h-10 w-10 text-pink-400" />,
      title: "React UI",
      description: "Visualize, debug, and document env variables (dev only)",
    },
    {
      icon: <Cpu className="h-10 w-10 text-red-400" />,
      title: "Descriptive errors",
      description: "Friendly messages for missing/misconfigured variables",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [Math.random() * 100, Math.random() * -100],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <nav className="relative z-10 border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              envguard
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ArshTiwari2004/envguard"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="hidden md:inline">GitHub</span>
            </a>
            <a
              href="https://www.npmjs.com/package/@arshtiwari/envguard"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Package className="h-5 w-5" />
              <span className="hidden md:inline">npm</span>
            </a>
            <Button
              variant="outline"
              className="bg-black border-purple-500 text-purple-400 hover:bg-purple-500/20"
              onClick={() => {window.open("https://www.npmjs.com/package/@arshtiwari/envguard", "_blank")}}
            >
              <Terminal className="mr-2 h-4 w-4" />
              Install
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-20 md:py-32 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Badge variant="outline" className="mb-6 px-4 py-1 text-sm border-purple-500 text-purple-400">
            v1.0.3
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">
              Validate & Document
            </span>
            <br />
            <TypeAnimation
              sequence={["Environment Variables", 2000, ".env Files", 2000, "Configuration Settings", 2000]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="text-white"
            />
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed">
            A zero-config, framework-agnostic NPM package that prevents runtime errors by validating your environment
            variables directly from your .env.example file.
          </p>

          <div className="relative mx-auto max-w-3xl mb-10 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-gray-900 rounded-lg p-2">
              <SyntaxHighlighter
                language="bash"
                style={atomDark}
                customStyle={{
                  background: "transparent",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  margin: 0,
                }}
              >
                {installCommand}
              </SyntaxHighlighter>
              <button
                onClick={() => copyToClipboard(installCommand)}
                className="p-2 rounded-md hover:bg-white/10 transition-colors"
                aria-label="Copy to clipboard"
              >
                {copied ? (
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                ) : (
                  <Copy className="h-5 w-5 text-white/70" />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
              onClick={() => window.open("https://www.npmjs.com/package/@arshtiwari/envguard", "_blank")}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-black"
              onClick={() => window.open("https://github.com/ArshTiwari2004/envguard", "_blank")}
            >
              <Github className="mr-2 h-4 w-4" />
              Star on GitHub
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Everything you need to validate, document, and manage your environment variables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/80 transition-colors h-full">
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle className="text-xl font-bold text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Simple, powerful, and zero-config environment variable validation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/20 p-2 rounded-full">
                    <span className="flex items-center justify-center w-6 h-6 bg-purple-500 rounded-full text-white font-bold">
                      1
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Parse .env.example</h3>
                    <p className="text-white/70">
                      envguard reads your .env.example file to understand your environment variable requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-2 rounded-full">
                    <span className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full text-white font-bold">
                      2
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Generate Schema</h3>
                    <p className="text-white/70">
                      Automatically creates a validation schema based on your .env.example structure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-500/20 p-2 rounded-full">
                    <span className="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full text-white font-bold">
                      3
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Validate Environment</h3>
                    <p className="text-white/70">
                      Checks your actual environment variables against the schema at runtime.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500/20 p-2 rounded-full">
                    <span className="flex items-center justify-center w-6 h-6 bg-yellow-500 rounded-full text-white font-bold">
                      4
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Report & Visualize</h3>
                    <p className="text-white/70">
                      Provides clear error messages and optional UI for visualizing your environment.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 border-b border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-white/70 text-sm ml-2">.env.example</span>
                </div>
                <SyntaxHighlighter
                  language="bash"
                  style={atomDark}
                  customStyle={{
                    background: "transparent",
                    padding: "1rem",
                    margin: 0,
                  }}
                >
                  {envExampleFile}
                </SyntaxHighlighter>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="relative z-10 py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Quick Start
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Get up and running in seconds with these simple commands
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="cli" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-800/50">
                <TabsTrigger 
                
                value="cli">CLI Usage</TabsTrigger>
                <TabsTrigger value="programmatic">Programmatic API</TabsTrigger>
                <TabsTrigger value="ui">React UI</TabsTrigger>
              </TabsList>

              <TabsContent value="cli" className="mt-0">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle
                        className=" text-white font-bold text-lg"
                    
                    >CLI Validation</CardTitle>
                    <CardDescription className="text-white/70">
                      Validate your environment variables directly from the command line
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative flex items-center bg-gray-900 rounded-lg p-2">
                        <SyntaxHighlighter
                          language="bash"
                          style={atomDark}
                          customStyle={{
                            background: "transparent",
                            padding: "1rem",
                            borderRadius: "0.5rem",
                            margin: 0,
                            width: "100%",
                          }}
                        >
                          {validateCommand}
                        </SyntaxHighlighter>
                        <button
                          onClick={() => copyToClipboard(validateCommand)}
                          className="p-2 rounded-md hover:bg-white/10 transition-colors"
                          aria-label="Copy to clipboard"
                        >
                          {copied ? (
                            <CheckCircle2 className="h-5 w-5 text-green-400" />
                          ) : (
                            <Copy className="h-5 w-5 text-white/70" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="mt-6 bg-gray-900 rounded-lg p-4 text-white/70">
                      <p className="mb-2 text-white font-semibold">Output:</p>
                      <pre className="text-sm">
                        {`[envguard] Environment Variable Errors:
  - Missing required environment variable: API_KEY
  - Invalid value for DB_PORT: Expected number, got "string"
error Command failed with exit code 1`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="programmatic" className="mt-0">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle
                       className=" text-white font-bold text-lg"
                    >Programmatic API</CardTitle>
                    <CardDescription className="text-white/70">
                      Integrate environment validation directly into your application
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative flex items-center bg-gray-900 rounded-lg p-2">
                        <SyntaxHighlighter
                          language="javascript"
                          style={atomDark}
                          customStyle={{
                            background: "transparent",
                            padding: "1rem",
                            borderRadius: "0.5rem",
                            margin: 0,
                            width: "100%",
                          }}
                        >
                          {programmaticUsage}
                        </SyntaxHighlighter>
                        <button
                          onClick={() => copyToClipboard(programmaticUsage)}
                          className="p-2 rounded-md hover:bg-white/10 transition-colors"
                          aria-label="Copy to clipboard"
                        >
                          {copied ? (
                            <CheckCircle2 className="h-5 w-5 text-green-400" />
                          ) : (
                            <Copy className="h-5 w-5 text-white/70" />
                          )}
                        </button>
                      </div>
                    </div>

                    <p className="mt-6 text-white/70">
                      Add this to your application's entry point to validate environment variables on startup. If
                      validation fails, the process will exit with code 1.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ui" className="mt-0">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle
                    className=" text-white font-bold text-lg"
                    >React UI Dashboard</CardTitle>
                    <CardDescription className="text-white/70">
                      Visualize and debug your environment variables with the included UI
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-white/70">Start the backend server:</p>
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-gray-900 rounded-lg p-4">
                          <SyntaxHighlighter
                            language="bash"
                            style={atomDark}
                            customStyle={{
                              background: "transparent",
                              padding: "0",
                              margin: 0,
                            }}
                          >
                            {"node server/server.js"}
                          </SyntaxHighlighter>
                        </div>
                      </div>

                      <p className="text-white/70 mt-4">Start the UI:</p>
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-gray-900 rounded-lg p-4">
                          <SyntaxHighlighter
                            language="bash"
                            style={atomDark}
                            customStyle={{
                              background: "transparent",
                              padding: "0",
                              margin: 0,
                            }}
                          >
                            {"cd ui && npm run dev"}
                          </SyntaxHighlighter>
                        </div>
                      </div>

                      <p className="text-white/70 mt-4">
                        Visit <code className="bg-gray-800 px-2 py-1 rounded">http://localhost:5173</code> to access the
                        dashboard.
                      </p>
                    </div>

                    <div className="mt-6 relative overflow-hidden rounded-lg border border-gray-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-purple-500/20 animate-pulse"></div>
                      <div className="relative p-4 flex items-center justify-center h-48 bg-gray-900/80">
                        <p className="text-white/70 text-center">
                          UI Dashboard Preview
                          <br />
                          <span className="text-sm">(Coming soon in the demo video)</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
              41+
            </div>
            <p className="text-white/70">Weekly Downloads</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
              v1.0.3
            </div>
            <p className="text-white/70">Latest Version</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
              MIT
            </div>
            <p className="text-white/70">License</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
              7.06 kB
            </div>
            <p className="text-white/70">Unpacked Size</p>
          </motion.div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="relative z-10 py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                See It In Action
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Watch how envguard can simplify your environment variable management
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video overflow-hidden rounded-lg border border-gray-700 group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-purple-500/20 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative flex items-center justify-center h-full bg-gray-900/80">
                <div className="text-center">
                  <Zap className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                  <p className="text-white/70 text-xl">Demo Video Coming Soon</p>
                  <p className="text-white/50 mt-2">Check back for a comprehensive walkthrough</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="relative z-10 py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 flex-shrink-0">
                <img
                  src="arshtiwari.jpeg"
                  alt="Arsh Tiwari"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    About the Dev
                  </span>
                </h3>
                <p className="text-white/70 mb-4">
                  Hey everyone! I'm Arsh Tiwari, a 2nd-year CSE student at GGSIPU Delhi and also pursuing a B.S. in Data
                  Science from IIT Madras (online).
                </p>
                <p className="text-white/70 mb-4">
                  I'm passionate about full-stack development, open-source collaboration, AI/LLMs, and building scalable
                  systems.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href="https://github.com/ArshTiwari2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-gray-700/50 hover:bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arsh-tiwari-072609284/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-gray-700/50 hover:bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="https://x.com/ArshTiwari17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-gray-700/50 hover:bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-twitter"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    Twitter
                  </a>
                  <a
                    href="https://arsh-tiwari-portfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-gray-700/50 hover:bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-globe"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" x2="22" y1="12" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    Portfolio
                  </a>
                  <a
                    href="https://www.youtube.com/@TeamSynapse3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-gray-700/50 hover:bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-youtube"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Environment Variables?</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Start validating your environment variables today and prevent runtime errors before they happen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
              onClick={() => copyToClipboard(installCommand)}
            >
              <Terminal className="mr-2 h-4 w-4" />
              {copied ? "Copied!" : "npm install @arshtiwari/envguard"}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-black"
              onClick={() => window.open("https://github.com/ArshTiwari2004/envguard", "_blank")}
            >
              <Github className="mr-2 h-4 w-4" />
              Star on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                envguard
              </span>
            </div>

            <div className="text-white/50 text-sm">
              © {new Date().getFullYear()} Arsh Tiwari. Released under the MIT License.
            </div>

            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a
                href="https://github.com/ArshTiwari2004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.npmjs.com/package/@arshtiwari/envguard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Package className="h-5 w-5" />
                <span className="sr-only">npm</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
