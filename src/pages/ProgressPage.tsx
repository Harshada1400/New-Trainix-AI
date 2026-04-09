import { motion } from "framer-motion";
import { trainingTopics } from "@/data/trainingData";
import { Trophy, Target, Flame, BookOpen } from "lucide-react";

const ProgressPage = () => {
  const totalModules = trainingTopics.reduce((s, t) => s + t.weeks.length, 0);
  const completed = trainingTopics.reduce(
    (s, t) => s + t.weeks.filter((w) => w.status === "completed").length, 0
  );
  const percent = Math.round((completed / totalModules) * 100);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold font-display text-foreground mb-2">Your Progress</h1>
        <p className="text-muted-foreground mb-8">Track your learning journey and achievements.</p>
      </motion.div>

      {/* Overall progress */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card rounded-xl shadow-card border border-border p-8 mb-8 text-center"
      >
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="none" className="stroke-muted" strokeWidth="8" />
            <circle
              cx="60" cy="60" r="50" fill="none"
              className="stroke-primary"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${percent * 3.14} ${314 - percent * 3.14}`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold font-display text-foreground">{percent}%</span>
          </div>
        </div>
        <p className="text-lg font-semibold text-foreground">{completed} of {totalModules} modules completed</p>
        <p className="text-sm text-muted-foreground mt-1">Keep going! You're making great progress.</p>
      </motion.div>

      {/* Per-topic progress */}
      <div className="space-y-4">
        {trainingTopics.map((topic, i) => {
          const tc = topic.weeks.filter((w) => w.status === "completed").length;
          const tp = Math.round((tc / topic.weeks.length) * 100);
          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="bg-card rounded-xl shadow-card border border-border p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold font-display text-foreground">{topic.title}</h3>
                <span className="text-sm font-medium text-muted-foreground">{tp}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${tp}%` }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className={`h-full rounded-full ${
                    topic.color === "primary" ? "gradient-primary" :
                    topic.color === "secondary" ? "gradient-secondary" : "gradient-accent"
                  }`}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">{tc}/{topic.weeks.length} weeks completed</p>
            </motion.div>
          );
        })}
      </div>

      {/* Achievements */}
      <h2 className="text-xl font-bold font-display text-foreground mt-10 mb-4">Achievements</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Flame, label: "Fast Learner", desc: "Completed 3 modules", unlocked: true },
          { icon: Trophy, label: "Quiz Master", desc: "Passed first quiz", unlocked: true },
          { icon: Target, label: "On Track", desc: "No missed deadlines", unlocked: true },
          { icon: BookOpen, label: "Scholar", desc: "Complete all modules", unlocked: false },
        ].map((badge, i) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.05 }}
            className={`bg-card rounded-xl shadow-card border border-border p-5 text-center ${
              !badge.unlocked ? "opacity-40" : ""
            }`}
          >
            <badge.icon className={`w-8 h-8 mx-auto mb-2 ${badge.unlocked ? "text-accent" : "text-muted-foreground"}`} />
            <p className="font-medium text-sm text-foreground">{badge.label}</p>
            <p className="text-xs text-muted-foreground">{badge.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProgressPage;
