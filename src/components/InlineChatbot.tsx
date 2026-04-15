import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles, ChevronDown, ChevronUp, MessageCircle, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  role: "user" | "assistant";
  text: string;
}

const QUICK_PROMPTS = [
  "Explain this concept",
  "Give me a hint",
  "Quiz me",
  "What's next?",
];

interface InlineChatbotProps {
  dayTitle: string;
}

const InlineChatbot = ({ dayTitle }: InlineChatbotProps) => {
  const [expanded, setExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      text: `Hi! I'm here to help you with "${dayTitle}". Ask me anything about today's topic!`,
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const responses = [
        "Great question! This concept is about structuring your code so each part has a single responsibility.",
        "Here's a hint: try breaking the problem into smaller steps first.",
        "Let me quiz you: What's the difference between `margin` and `padding` in CSS?",
        "Based on your progress, I'd suggest reviewing the code snippets above one more time.",
        "That's a common question! Practice matters more than memorization.",
      ];
      const aiMsg: Message = {
        id: Date.now() + 1,
        role: "assistant",
        text: responses[Math.floor(Math.random() * responses.length)],
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 700);
  };

  // Desktop: full sidebar panel
  // Mobile: floating toggle button + expandable chat
  return (
    <>
      {/* Desktop sidebar version */}
      <div className="hidden lg:flex flex-col h-full bg-card">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-border shrink-0">
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold font-display text-foreground">AI Training Assistant</h3>
            <p className="text-xs text-muted-foreground truncate">Help with: {dayTitle}</p>
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${msg.role === "assistant" ? "gradient-primary" : "gradient-secondary"}`}>
                {msg.role === "assistant" ? <Bot className="w-3.5 h-3.5 text-primary-foreground" /> : <User className="w-3.5 h-3.5 text-secondary-foreground" />}
              </div>
              <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${msg.role === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Prompts */}
        <div className="px-4 pb-2 flex gap-1.5 flex-wrap shrink-0">
          {QUICK_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              onClick={() => setInput(prompt)}
              className="text-xs px-2.5 py-1 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 border-t border-border shrink-0">
          <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex gap-2">
            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about this topic..." className="h-10 flex-1 text-sm" />
            <Button type="submit" size="icon" className="h-10 w-10 gradient-primary text-primary-foreground shrink-0">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Mobile floating version */}
      <div className="lg:hidden">
        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="w-14 h-14 rounded-full gradient-primary shadow-lg flex items-center justify-center text-primary-foreground"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )}

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="bg-card rounded-xl border border-border shadow-xl flex flex-col w-full max-h-[70vh]"
            >
              {/* Mobile header */}
              <div className="flex items-center gap-3 p-3 border-b border-border shrink-0">
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
                <span className="text-sm font-bold text-foreground flex-1">AI Assistant</span>
                <button onClick={() => setExpanded(false)} className="p-1">
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-[200px]">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${msg.role === "assistant" ? "gradient-primary" : "gradient-secondary"}`}>
                      {msg.role === "assistant" ? <Bot className="w-3 h-3 text-primary-foreground" /> : <User className="w-3 h-3 text-secondary-foreground" />}
                    </div>
                    <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${msg.role === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-3 border-t border-border shrink-0">
                <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex gap-2">
                  <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask anything..." className="h-9 flex-1 text-sm" />
                  <Button type="submit" size="icon" className="h-9 w-9 gradient-primary text-primary-foreground shrink-0">
                    <Send className="w-3.5 h-3.5" />
                  </Button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default InlineChatbot;
