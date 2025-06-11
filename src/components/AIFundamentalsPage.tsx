import * as React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Cpu, ArrowLeft, Brain, Zap, Lightbulb, Bot, Database, Search, FileText, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const ConceptCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  delay?: number; 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className="apple-glass rounded-3xl p-8 border border-border/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-2xl font-bold text-foreground tracking-tight">{title}</h3>
    </div>
    <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
  </motion.div>
);



export default function AIFundamentalsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-foreground font-sans antialiased apple-smooth">
      <div className="relative overflow-x-hidden">
        {/* Background gradient */}
        <div aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-secondary/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent opacity-60"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navigation Header */}
          <nav className="sticky top-0 z-20 apple-glass border-b border-border/20 backdrop-blur-xl">
            <div className="container mx-auto px-4 py-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/')}
                className="apple-button-ghost text-foreground hover:bg-secondary/80 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>
          </nav>

          {/* Header Section */}
          <header className="py-20 md:py-28 text-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                  <Cpu className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-primary">The Future of AI</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight apple-text-gradient mb-6">
                  AI Fundamentals:
                  <br />
                  <span className="apple-text-gradient">Understanding the Basics</span>
                </h1>
                
                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                  From basic concepts to advanced applications—learn how AI agents are transforming the way we work.
                </p>
              </motion.div>
            </div>
          </header>

          <main className="flex-1 w-full">
            {/* Core Concepts Section */}
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    Core AI Concepts
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Understanding the fundamental building blocks of artificial intelligence and how they work together.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ConceptCard
                    icon={Brain}
                    title="Machine Learning"
                    description="The foundation of AI that enables computers to learn and improve from experience without being explicitly programmed for every task."
                    delay={0.1}
                  />
                  <ConceptCard
                    icon={Zap}
                    title="Neural Networks"
                    description="Computing systems inspired by biological neural networks, capable of recognizing patterns and making decisions from complex data."
                    delay={0.2}
                  />
                  <ConceptCard
                    icon={Bot}
                    title="Large Language Models"
                    description="Advanced AI systems trained on vast amounts of text data, capable of understanding and generating human-like language with remarkable accuracy."
                    delay={0.3}
                  />
                </div>
              </div>
            </section>

            {/* AI Agent Anatomy Section */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    AI Agent Anatomy
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Three Core Components Working Together
                  </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                  {/* Brain Component */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="apple-glass rounded-3xl p-8 border border-border/20 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-l-pink-500"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-pink-500/10 to-pink-400/5 rounded-2xl">
                        <Brain className="w-8 h-8 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground tracking-tight">🧠 BRAIN</h3>
                        <p className="text-sm text-muted-foreground">Large Language Model (LLM)</p>
                      </div>
                    </div>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">LLM Engine (e.g., GPT-4)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Natural Language Processing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Reasoning & Logic</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Decision Making</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground italic border-t border-border/20 pt-4">
                      Think of this as the AI's "thinking center" - like a very smart assistant that can understand what you're asking and figure out the best way to help you.
                    </p>
                  </motion.div>

                  {/* Memory Component */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="apple-glass rounded-3xl p-8 border border-border/20 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-l-green-500"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-green-500/10 to-green-400/5 rounded-2xl">
                        <Database className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground tracking-tight">🧠 MEMORY</h3>
                        <p className="text-sm text-muted-foreground">Context & Session Management</p>
                      </div>
                    </div>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Conversation History</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Project Context</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">User Preferences</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Session State</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground italic border-t border-border/20 pt-4">
                      This is like the AI's notebook - it remembers what you've talked about, your preferences, and keeps track of ongoing projects so conversations feel natural and connected.
                    </p>
                  </motion.div>

                  {/* Tools Component */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="apple-glass rounded-3xl p-8 border border-border/20 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-l-orange-500"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-orange-500/10 to-orange-400/5 rounded-2xl">
                        <Settings className="w-8 h-8 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground tracking-tight">🛠️ TOOLS</h3>
                        <p className="text-sm text-muted-foreground">External Capabilities</p>
                      </div>
                    </div>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm">Data Access</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm">File Generation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm">Search & Retrieval</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm">API Integration</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground italic border-t border-border/20 pt-4">
                      These are the AI's "hands and eyes" - allowing it to actually do things like search the internet, create files, access databases, or connect with other software to get work done.
                    </p>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Six AI Use Case Primitives Section */}
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    Six AI Use Case Primitives
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Fundamental AI capabilities driving 600+ successful implementations
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Content Creation */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="apple-glass rounded-3xl p-8 border border-border/20 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-l-blue-500"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-400/5 rounded-2xl">
                        <FileText className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground tracking-tight">Content Creation</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">Generate, edit, and polish content across formats</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-blue-600">📊</span>
                        <span className="text-sm">Marketing: Campaign strategies, email drafts</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-blue-600">📋</span>
                        <span className="text-sm">Finance: Policy docs, technical memos</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-blue-600">🛍️</span>
                        <span className="text-sm">Sales: Account plans, follow-up emails</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Research */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="apple-glass rounded-3xl p-8 border border-border/20 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-l-green-500"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-green-500/10 to-green-400/5 rounded-2xl">
                        <Search className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground tracking-tight">Research</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">Multi-step research with formatted outputs</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-green-600">⚡</span>
                        <span className="text-sm">Sales: Industry analysis, competitor intel</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-green-600">💻</span>
                        <span className="text-sm">IT: Vendor research and ratings</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-green-600">📦</span>
                        <span className="text-sm">Product: Market sizing, trend analysis</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Coding */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="apple-glass rounded-3xl p-8 border border-border/20 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-l-purple-500"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-400/5 rounded-2xl">
                        <Bot className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground tracking-tight">Coding</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">Generate, debug, and port code solutions</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-purple-600">⚙️</span>
                        <span className="text-sm">Engineering: Debug, rubber duck, API docs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-purple-600">📊</span>
                        <span className="text-sm">Marketing: SQL queries, visualizations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-purple-600">📋</span>
                        <span className="text-sm">Finance: Python automation scripts</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Data Analysis */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="apple-glass rounded-3xl p-8 border border-border/20 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-l-orange-500"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-orange-500/10 to-orange-400/5 rounded-2xl">
                        <Database className="w-8 h-8 text-orange-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground tracking-tight">Data Analysis</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">Harmonize data and identify insights</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-orange-600">📊</span>
                        <span className="text-sm">Marketing: Webinar data, trend analysis</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-orange-600">🛍️</span>
                        <span className="text-sm">Sales: Lead scoring, account mapping</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-orange-600">💰</span>
                        <span className="text-sm">Finance: Expense analysis, reconciliation</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Ideation & Strategy */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="apple-glass rounded-3xl p-8 border border-border/20 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-l-red-500"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-red-500/10 to-red-400/5 rounded-2xl">
                        <Lightbulb className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground tracking-tight">Ideation & Strategy</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">Brainstorm and strategic planning</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-red-600">📊</span>
                        <span className="text-sm">Marketing: Campaign ideas, go-to-market</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-red-600">💰</span>
                        <span className="text-sm">Finance: Market expansion planning</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-red-600">🛍️</span>
                        <span className="text-sm">Sales: Pitch practice with voice mode</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Automations */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="apple-glass rounded-3xl p-8 border border-border/20 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-l-cyan-500"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 rounded-2xl">
                        <Zap className="w-8 h-8 text-cyan-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground tracking-tight">Automations</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">Automate multi-step workflows</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-cyan-600">📊</span>
                        <span className="text-sm">Marketing: Weekly reports, Slack updates</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-cyan-600">📦</span>
                        <span className="text-sm">Product: Customer insight summaries</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-cyan-600">💰</span>
                        <span className="text-sm">Finance: Executive financial overviews</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>




          </main>

          {/* Footer Section */}
          <footer className="mt-auto py-12 border-t border-border/20 apple-glass">
            <div className="container mx-auto px-4 text-center">
              <div className="flex flex-col items-center gap-4">
                <Cpu className="w-8 h-8 text-muted-foreground" />
                <p className="text-lg font-medium text-foreground">
                  Explore the future—start building with AI.
                </p>
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} AI Landing. All Rights Reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
} 