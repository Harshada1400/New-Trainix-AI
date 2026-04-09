import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  role: "user" | "assistant";
  text: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    role: "assistant",
    text: "Hi! I'm your AI training assistant. I can help you with training topics, answer questions about company policies, quiz you on what you've learned, or suggest what to study next. What would you like help with?",
  },
];

const QUICK_PROMPTS = [
  "Quiz me on Company Culture",
  "Explain our architecture patterns",
  "What should I study next?",
  "Summarize this week's topics",
];

const AssistantPage = () => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulated AI response
    setTimeout(() => {
      const responses = [
        "Great question! Based on your current progress, I'd recommend focusing on the Architecture & Patterns module. It builds on the development environment concepts you've already completed.",
        "Let me generate a quick quiz for you on that topic. Here's a question: What is the primary benefit of using the Repository Pattern in our codebase? Think about separation of concerns!",
        "I've analyzed your learning pace and you're progressing well! You've completed 30% of the curriculum. At this rate, you'll finish all core modules in about 6 weeks.",
        "That's covered in Week 3 of the Company Fundamentals track. The key takeaway is that our data privacy policies follow GDPR guidelines. Would you like me to elaborate?",
      ];
      const aiMsg: Message = {
        id: Date.now() + 1,
        role: "assistant",
        text: responses[Math.floor(Math.random() * responses.length)],
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 800);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-display text-foreground">AI Training Assistant</h1>
            <p className="text-sm text-muted-foreground">Ask questions, take quizzes, get personalized guidance</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto p-6 space-y-4">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              msg.role === "assistant" ? "gradient-primary" : "gradient-secondary"
            }`}>
              {msg.role === "assistant" ? (
                <Bot className="w-4 h-4 text-primary-foreground" />
              ) : (
                <User className="w-4 h-4 text-secondary-foreground" />
              )}
            </div>
            <div className={`max-w-[70%] rounded-2xl px-4 py-3 text-sm ${
              msg.role === "user"
                ? "bg-primary text-primary-foreground rounded-br-sm"
                : "bg-card border border-border text-foreground rounded-bl-sm"
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick prompts */}
      <div className="px-6 pb-2 flex gap-2 flex-wrap">
        {QUICK_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            onClick={() => { setInput(prompt); }}
            className="text-xs px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <form
          onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
          className="flex gap-2 max-w-3xl mx-auto"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about your training..."
            className="h-11 flex-1"
          />
          <Button type="submit" className="h-11 gradient-primary text-primary-foreground shadow-primary-glow">
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AssistantPage;
