import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Briefcase, Wrench, ClipboardCheck, Cpu, Bot, Sparkles, Zap } from "lucide-react";

// Define the structure for each step in the interactive demo
interface DemoStep {
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

// Component for the animated agent preview card
const AgentPreviewCard = ({
  step,
  direction
}: {
  step: DemoStep;
  direction: number;
}) => {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 30 : -30,
      opacity: 0,
      scale: 0.95
    })
  };
  
  return (
    <motion.div 
      key={step.title} 
      custom={direction} 
      variants={variants} 
      initial="enter" 
      animate="center" 
      exit="exit" 
      transition={{
        x: {
          type: "spring",
          stiffness: 400,
          damping: 40
        },
        opacity: {
          duration: 0.3
        },
        scale: {
          duration: 0.3
        }
      }} 
      className="absolute w-full h-full"
    >
      <div className="w-full h-full apple-glass border border-border/20 shadow-2xl shadow-primary/5 rounded-3xl p-6">
        <div className="flex flex-row items-center gap-3 space-y-0 pb-4">
          <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
            <step.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground tracking-tight">{step.title}</h3>
        </div>
        <div className="pt-0">
          {step.content}
        </div>
      </div>
    </motion.div>
  );
};

export default function HeroSection() {
  const navigate = useNavigate();
  const [[page, direction], setPage] = useState([0, 0]);
  
  const demoSteps: DemoStep[] = [
    {
      title: "Choose Your Agent",
      icon: Briefcase,
      content: (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-secondary/50 border border-transparent transition-all duration-300 hover:bg-secondary/70">
            <div className="flex items-center gap-3">
              <Cpu className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium text-sm">Sales Assistant</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 ring-2 ring-primary/10 transition-all duration-300">
            <div className="flex items-center gap-3">
              <Bot className="w-5 h-5 text-primary" />
              <span className="font-semibold text-sm text-primary">IT Project Manager</span>
            </div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }} 
              className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" 
            />
          </div>
          <div className="flex items-center justify-between p-4 rounded-2xl bg-secondary/50 border border-transparent transition-all duration-300 hover:bg-secondary/70">
            <div className="flex items-center gap-3">
              <Wrench className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium text-sm">DevOps Engineer</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Configure Skills",
      icon: Wrench,
      content: (
        <div className="space-y-4 pt-2">
          <p className="text-sm text-muted-foreground font-medium">Building intelligent capabilities...</p>
          <div className="flex flex-wrap gap-2">
            {["Risk Analysis", "Budgeting", "Agile Methods", "Resource Planning", "Reporting"].map((skill, i) => (
              <motion.div 
                key={skill} 
                initial={{ opacity: 0, y: 15, scale: 0.8 }} 
                animate={{ opacity: 1, y: 0, scale: 1 }} 
                transition={{ delay: i * 0.15 + 0.2, type: "spring", stiffness: 300 }}
              >
                <span className="inline-block font-medium text-xs px-3 py-1 rounded-full bg-gradient-to-r from-secondary to-secondary/80 border border-border/30 shadow-sm">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 1, type: "spring" }} 
            className="flex items-center gap-2 mt-4"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs text-primary font-medium">AI-powered optimization complete</span>
          </motion.div>
        </div>
      )
    },
    {
      title: "Agent Ready",
      icon: ClipboardCheck,
      content: (
        <div className="flex flex-col items-center text-center pt-6">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <Avatar className="w-20 h-20 mb-4 border-4 border-primary/20 shadow-xl">
                <AvatarImage src="https://source.unsplash.com/random/100x100/?robot" alt="IT Project Manager Agent" />
                <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-white font-bold text-lg">PM</AvatarFallback>
              </Avatar>
              <motion.div 
                initial={{ scale: 0, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                transition={{ delay: 0.5 }} 
                className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
              >
                <Zap className="w-3 h-3 text-white" />
              </motion.div>
            </div>
          </motion.div>
          <h3 className="font-bold text-foreground text-lg tracking-tight">IT Project Manager</h3>
          <p className="text-sm text-primary font-medium mt-1">Ready to deploy</p>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <span className="text-xs font-medium border border-primary/30 text-primary px-2 py-1 rounded-full">Risk Analysis</span>
            <span className="text-xs font-medium border border-primary/30 text-primary px-2 py-1 rounded-full">Budgeting</span>
            <span className="text-xs font-medium border border-primary/30 text-primary px-2 py-1 rounded-full">Reporting</span>
          </div>
        </div>
      )
    }
  ];
  
  const paginate = (newDirection: number) => {
    setPage([(page + newDirection + demoSteps.length) % demoSteps.length, newDirection]);
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(timer);
  }, [page]);
  
  return (
    <header className="relative w-full min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent opacity-60"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[80vh]">
          <div className="text-center lg:text-left space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                AI Agents -
                <span className="block apple-text-gradient mt-2">the future of knowledge work</span>
              </h1>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed font-medium max-w-2xl">
                Transform your business with intelligent AI agents that work 24/7. No coding required.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="apple-button-primary text-lg px-10 py-7 rounded-2xl bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 border-0 font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/ai-fundamentals')}
              >
                AI Fundamentals
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                className="apple-button-primary text-lg px-10 py-7 rounded-2xl bg-secondary hover:bg-secondary/90 shadow-xl shadow-secondary/20 border-0 font-semibold transition-all duration-300 hover:scale-105"
              >
                Agentic platform
              </Button>
              <Button 
                size="lg" 
                className="apple-button-primary text-lg px-10 py-7 rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20 border-0 font-semibold transition-all duration-300 hover:scale-105 text-white"
              >
                Microsoft Copilot
              </Button>
            </motion.div>
          </div>
          
          {/* Interactive Demo */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} 
            className="relative"
          >
            <div className="relative h-[500px] w-full max-w-md mx-auto">
              <AnimatePresence mode="wait" custom={direction}>
                <AgentPreviewCard step={demoSteps[page]} direction={direction} />
              </AnimatePresence>
              
              {/* Navigation dots */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {demoSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setPage([index, index > page ? 1 : -1])}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      index === page 
                        ? "bg-primary shadow-lg shadow-primary/50" 
                        : "bg-secondary hover:bg-secondary/80"
                    )}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
} 