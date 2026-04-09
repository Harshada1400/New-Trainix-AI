import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trainingTopics, type TrainingTopic } from "@/data/trainingData";
import {
  BookOpen, Building2, Code2, Users, CheckCircle2, Circle,
  Lock, Clock, ChevronDown, ChevronRight, Brain
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = { Building2, Code2, Users };
const colorMap = {
  primary: "gradient-primary",
  secondary: "gradient-secondary",
  accent: "gradient-accent",
};
const statusIcon = {
  completed: <CheckCircle2 className="w-5 h-5 text-success" />,
  "in-progress": <Clock className="w-5 h-5 text-accent" />,
  locked: <Lock className="w-5 h-5 text-muted-foreground/40" />,
};

const TrainingPage = () => {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(trainingTopics[0]?.id ?? null);
  const [expandedWeek, setExpandedWeek] = useState<string | null>(null);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold font-display text-foreground mb-2">Training Curriculum</h1>
        <p className="text-muted-foreground mb-8">
          Work through each track at your own pace. AI-generated quizzes help reinforce your learning.
        </p>
      </motion.div>

      <div className="space-y-4">
        {trainingTopics.map((topic, ti) => {
          const Icon = iconMap[topic.icon] || BookOpen;
          const isExpanded = expandedTopic === topic.id;
          const completed = topic.weeks.filter((w) => w.status === "completed").length;

          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ti * 0.05 }}
              className="bg-card rounded-xl shadow-card border border-border overflow-hidden"
            >
              <button
                onClick={() => setExpandedTopic(isExpanded ? null : topic.id)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-muted/30 transition-colors"
              >
                <div className={`w-11 h-11 rounded-lg ${colorMap[topic.color]} flex items-center justify-center shrink-0`}>
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-semibold font-display text-foreground">{topic.title}</h2>
                  <p className="text-sm text-muted-foreground">{completed}/{topic.weeks.length} weeks completed</p>
                </div>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 space-y-2">
                      {topic.weeks.map((week) => {
                        const weekKey = `${topic.id}-${week.week}`;
                        const isWeekExpanded = expandedWeek === weekKey;

                        return (
                          <div key={weekKey} className="rounded-lg border border-border overflow-hidden">
                            <button
                              onClick={() => setExpandedWeek(isWeekExpanded ? null : weekKey)}
                              className={`w-full flex items-center gap-3 p-4 text-left transition-colors
                                ${week.status === "locked" ? "opacity-60" : "hover:bg-muted/30"}`}
                              disabled={week.status === "locked"}
                            >
                              {statusIcon[week.status]}
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-foreground text-sm">
                                  Week {week.week}: {week.title}
                                </p>
                                <p className="text-xs text-muted-foreground">{week.duration}</p>
                              </div>
                              {week.status !== "locked" && (
                                <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform ${isWeekExpanded ? "rotate-90" : ""}`} />
                              )}
                            </button>

                            <AnimatePresence>
                              {isWeekExpanded && week.status !== "locked" && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden border-t border-border"
                                >
                                  <div className="p-4 bg-muted/20">
                                    <p className="text-sm text-muted-foreground mb-3">{week.description}</p>
                                    <ul className="space-y-2 mb-3">
                                      {week.lessons.map((lesson) => (
                                        <li key={lesson} className="flex items-center gap-2 text-sm text-foreground">
                                          <Circle className="w-3 h-3 text-primary" />
                                          {lesson}
                                        </li>
                                      ))}
                                    </ul>
                                    {week.quiz && (
                                      <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
                                        <Brain className="w-4 h-4 text-primary" />
                                        <span className="text-sm text-foreground">
                                          AI Quiz: {week.quiz.questions} questions · {week.quiz.passingScore}% to pass
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TrainingPage;
