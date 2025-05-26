"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
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
  Shield,
  FileJson,
  Code2,
  Layers,
  Cpu,
  Star,
  Download,
  Activity,
  Globe,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FloatingDock } from "@/components/ui/floating-dock"
import { LampContainer } from "@/components/ui/lamp"
import { StickyBanner } from "@/components/ui/sticky-banner"
import { MacbookScroll } from "@/components/ui/macbook-scroll"
import { SparklesCore } from "@/components/ui/sparkles"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface DockItem {
  title: string
  icon: React.ReactNode
  href: string
}

interface TeamMember {
  id: number
  name: string
  designation: string
  image: string
}

export default function Home() {
  const [copied, setCopied] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [activeUsers, setActiveUsers] = useState<number>(1247)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  useEffect(() => {
    setIsVisible(true)
    // Simulate real-time user count updates
    const interval = setInterval(() => {
      setActiveUsers((prev) => prev + Math.floor(Math.random() * 3))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const copyToClipboard = (text: string): void => {
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

  const features: Feature[] = [
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

  const dockItems: DockItem[] = [
    {
      title: "GitHub",
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/ArshTiwari2004/envguard",
    },
    {
      title: "NPM",
      icon: <Package className="h-6 w-6" />,
      href: "https://www.npmjs.com/package/@arshtiwari/envguard",
    },
    {
      title: "Documentation",
      icon: <FileJson className="h-6 w-6" />,
      href: "#docs",
    },
    {
      title: "Terminal",
      icon: <Terminal className="h-6 w-6" />,
      href: "#cli",
    },
    {
      title: "Download",
      icon: <Download className="h-6 w-6" />,
      href: "#install",
    },
  ]

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Arsh Tiwari",
      designation: "Creator & Maintainer",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const words = "Validate & Document Environment Variables with Zero Configuration"

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <BackgroundBeams />

      {/* Sticky Banner */}
      <StickyBanner>
        <div className="flex items-center justify-center gap-2 text-sm">
          <Star className="h-4 w-4 text-yellow-400" />
          <span>Star us on GitHub for updates!</span>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 px-2 text-xs"
            onClick={() => window.open("https://github.com/ArshTiwari2004/envguard", "_blank")}
          >
            Star
          </Button>
        </div>
      </StickyBanner>

      {/* Floating Dock */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock items={dockItems} />
      </div>

      {/* Enhanced Navbar */}
      <motion.nav
        className="fixed top-0 w-full z-40 border-b border-white/10 backdrop-blur-md bg-black/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
            <Shield className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              envguard
            </span>
          </motion.div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Activity className="h-4 w-4 text-green-400" />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="cursor-default">
                      {activeUsers.toLocaleString()} users online
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Active users right now</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <Separator orientation="vertical" className="h-6" />

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white"
                onClick={() => window.open("https://github.com/ArshTiwari2004/envguard", "_blank")}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>

              <HoverBorderGradient>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0"
                  onClick={() => window.open("https://www.npmjs.com/package/@arshtiwari/envguard", "_blank")}
                >
                  <Terminal className="mr-2 h-4 w-4" />
                  Install
                </Button>
              </HoverBorderGradient>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Lamp Effect */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <div className="relative z-10 py-20 md:py-32 container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge variant="outline" className="mb-6 px-4 py-1 text-sm border-purple-500 text-purple-400">
                v1.0.3 • Latest Release
              </Badge>


              <h1 className="text-4xl md:text-6xl font-extrabold mb-10 mt-24 leading-tight">
                {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  envguard
                </span> */}
                <span className="text-white"> Validate and document your environment variables </span>
              </h1>

             

              <p className="text-xl md:text-2xl text-white/80 mb-6 leading-relaxed">
               A zero-config, framework-agnostic NPM package that prevents runtime errors by validating your environment variables directly from your .env.example file.
              </p>

              {/* <div className="mb-6">
                <TextGenerateEffect words={words} className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight" />
              </div> */}

              {/* <div className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed">
                <TypeAnimation
                  sequence={[
                    "Prevent runtime errors with automatic validation",
                    2000,
                    "Zero-config setup with your existing .env.example",
                    2000,
                    "Framework-agnostic solution for any project",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                />
              </div> */}

              <div className="relative mx-auto max-w-3xl mb-10 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center bg-gray-900 rounded-lg p-1">
                  <SyntaxHighlighter
                    language="bash"
                    style={atomDark}
                    customStyle={{
                      background: "transparent",
                      padding: "1rem",
                      borderRadius: "0.5rem",
                      margin: 0,
                      fontSize: '0.875rem',
                      lineHeight: '1.25rem',
                      width: '100%',
                      overflowX: 'auto',
                    }}
                  >
                    {installCommand}
                  </SyntaxHighlighter>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
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
                      </TooltipTrigger>
                      <TooltipContent side="top" align="center">
                        {copied ? "Copied!" : "Copy to clipboard"}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
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
                  className="border-white/20 text-white hover:bg-white/10 bg-black/50 backdrop-blur-sm"
                  onClick={() => window.open("https://github.com/ArshTiwari2004/envguard", "_blank")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Star on GitHub
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </LampContainer>

      {/* Sparkles Background */}
      <div className="w-full absolute inset-0 h-screen pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Powerful Features
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Everything you need to validate, document, and manage your environment variables
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 h-full group">
                  <CardHeader>
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
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

      {/* MacBook Scroll Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                See It In Action
              </span>
            </motion.h2>
          </div>

          <MacbookScroll
            title="envguard Dashboard"
            badge="Live Demo"
            src="/placeholder.svg?height=600&width=1200"
            showGradient={false}
          />
        </div>
      </section>

      {/* How It Works Section - Added extra padding to prevent overlap */}
      <section className="relative z-10 py-32 container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              How It Works
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Simple, powerful, and zero-config environment variable validation
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {[
                  {
                    step: 1,
                    title: "Parse .env.example",
                    description:
                      "envguard reads your .env.example file to understand your environment variable requirements.",
                    color: "purple",
                  },
                  {
                    step: 2,
                    title: "Generate Schema",
                    description: "Automatically creates a validation schema based on your .env.example structure.",
                    color: "blue",
                  },
                  {
                    step: 3,
                    title: "Validate Environment",
                    description: "Checks your actual environment variables against the schema at runtime.",
                    color: "green",
                  },
                  {
                    step: 4,
                    title: "Report & Visualize",
                    description: "Provides clear error messages and optional UI for visualizing your environment.",
                    color: "yellow",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`bg-${item.color}-500/20 p-2 rounded-full`}>
                      <span
                        className={`flex items-center justify-center w-6 h-6 bg-${item.color}-500 rounded-full text-white font-bold`}
                      >
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
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
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Quick Start
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get up and running in seconds with these simple commands
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="cli" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-800/50">
                <TabsTrigger value="cli">CLI Usage</TabsTrigger>
                <TabsTrigger value="programmatic">Programmatic API</TabsTrigger>
                <TabsTrigger value="ui">React UI</TabsTrigger>
              </TabsList>

              <TabsContent value="cli" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white font-bold text-lg">CLI Validation</CardTitle>
                      <CardDescription className="text-white/70">
                        Validate your environment variables directly from the command line
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative flex items-center bg-gray-900 rounded-lg p-1">
                          <SyntaxHighlighter
                            language="bash"
                            style={atomDark}
                            customStyle={{
                              background: "transparent",
                              padding: "1rem",
                              borderRadius: "0.5rem",
                              margin: 0,
                              width: "100%",
                              fontSize: '0.875rem',
                              lineHeight: '1.25rem',
                            }}
                          >
                            {validateCommand}
                          </SyntaxHighlighter>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
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
                              </TooltipTrigger>
                              <TooltipContent side="top" align="center">
                                {copied ? "Copied!" : "Copy to clipboard"}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
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
                </motion.div>
              </TabsContent>

              <TabsContent value="programmatic" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white font-bold text-lg">Programmatic API</CardTitle>
                      <CardDescription className="text-white/70">
                        Integrate environment validation directly into your application
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative flex items-center bg-gray-900 rounded-lg p-1">
                          <SyntaxHighlighter
                            language="javascript"
                            style={atomDark}
                            customStyle={{
                              background: "transparent",
                              padding: "1rem",
                              borderRadius: "0.5rem",
                              margin: 0,
                              width: "100%",
                              fontSize: '0.875rem',
                              lineHeight: '1.25rem',
                            }}
                          >
                            {programmaticUsage}
                          </SyntaxHighlighter>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
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
                              </TooltipTrigger>
                              <TooltipContent side="top" align="center">
                                {copied ? "Copied!" : "Copy to clipboard"}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>

                      <p className="mt-6 text-white/70">
                        Add this to your application's entry point to validate environment variables on startup. If
                        validation fails, the process will exit with code 1.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="ui" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white font-bold text-lg">React UI Dashboard</CardTitle>
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
                                fontSize: '0.875rem',
                                lineHeight: '1.25rem',
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
                                fontSize: '0.875rem',
                                lineHeight: '1.25rem',
                              }}
                            >
                              {"cd ui && npm run dev"}
                            </SyntaxHighlighter>
                          </div>
                        </div>

                        <p className="text-white/70 mt-4">
                          Visit <code className="bg-gray-800 px-2 py-1 rounded">http://localhost:5173</code> to access
                          the dashboard.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "41+", label: "Weekly Downloads", delay: 0.1 },
            { value: "v1.0.3", label: "Latest Version", delay: 0.2 },
            { value: "MIT", label: "License", delay: 0.3 },
            { value: "7.06 kB", label: "Unpacked Size", delay: 0.4 },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: stat.delay }}
              className="text-center"
            >
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                {stat.value}
              </div>
              <p className="text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About the Author */}
      <section className="relative z-10 py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="bg-gray-800/50 border border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 flex-shrink-0">
                    <img
                      src="/placeholder.svg?height=128&width=128"
                      alt="Arsh Tiwari"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                        About the Developer
                      </span>
                    </h3>
                    <p className="text-white/70 mb-4">
                      Hey everyone! I'm Arsh Tiwari, a 2nd-year CSE student at GGSIPU Delhi and also pursuing a B.S. in
                      Data Science from IIT Madras (online).
                    </p>
                    <p className="text-white/70 mb-4">
                      I'm passionate about full-stack development, open-source collaboration, AI/LLMs, and building
                      scalable systems. envguard is one of my contributions to making developer experience better.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      {[
                        {
                          icon: <Github className="h-4 w-4" />,
                          label: "GitHub",
                          href: "https://github.com/ArshTiwari2004",
                        },
                        {
                          icon: <Linkedin className="h-4 w-4" />,
                          label: "LinkedIn",
                          href: "https://www.linkedin.com/in/arsh-tiwari-072609284/",
                        },
                        { icon: <Twitter className="h-4 w-4" />, label: "Twitter", href: "https://x.com/ArshTiwari17" },
                        {
                          icon: <Globe className="h-4 w-4" />,
                          label: "Portfolio",
                          href: "https://arsh-tiwari-portfolio.vercel.app/",
                        },
                        {
                          icon: <Youtube className="h-4 w-4" />,
                          label: "YouTube",
                          href: "https://www.youtube.com/@TeamSynapse3",
                        },
                      ].map((social, index) => (
                        <TooltipProvider key={index}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-white/70 hover:text-white transition-colors bg-gray-700/50 hover:bg-gray-700"
                                onClick={() => window.open(social.href, "_blank")}
                              >
                                {social.icon}
                                <span className="ml-2 hidden sm:inline">{social.label}</span>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent side="top" align="center">
                              {social.label}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Environment Variables?</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              Start validating your environment variables today and prevent runtime errors before they happen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HoverBorderGradient>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                  onClick={() => window.open("https://www.npmjs.com/package/@arshtiwari/envguard", "_blank")}
                >
                  <Terminal className="mr-2 h-4 w-4" />
                  npm install @arshtiwari/envguard
                </Button>
              </HoverBorderGradient>

              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-black/50 backdrop-blur-sm"
                onClick={() => window.open("https://github.com/ArshTiwari2004/envguard", "_blank")}
              >
                <Github className="mr-2 h-4 w-4" />
                Star on GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 border-t border-white/10 backdrop-blur-sm">
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
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white/50 hover:text-white transition-colors"
                      onClick={() => window.open("https://github.com/ArshTiwari2004", "_blank")}
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center">
                    GitHub Repository
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white/50 hover:text-white transition-colors"
                      onClick={() =>
                        window.open("https://www.npmjs.com/package/@arshtiwari/envguard", "_blank")
                      }
                    >
                      <Package className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center">
                    NPM Package
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}