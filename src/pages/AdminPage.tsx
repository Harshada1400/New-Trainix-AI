import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Users, BookOpen, TrendingUp, AlertCircle } from "lucide-react";

const AdminPage = () => {
  const { user } = useAuth();
  if (user?.role !== "admin") return <Navigate to="/dashboard" replace />;

  const mockTrainees = [
    { name: "Alex Johnson", progress: 30, status: "active", lastActive: "Today" },
    { name: "Maria Garcia", progress: 65, status: "active", lastActive: "Today" },
    { name: "James Lee", progress: 12, status: "behind", lastActive: "3 days ago" },
    { name: "Priya Patel", progress: 80, status: "active", lastActive: "Yesterday" },
    { name: "Tom Wilson", progress: 5, status: "inactive", lastActive: "1 week ago" },
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold font-display text-foreground mb-2">Admin Panel</h1>
        <p className="text-muted-foreground mb-8">Monitor trainee progress and manage training content.</p>
      </motion.div>

      {/* Overview cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Active Trainees", value: "5", icon: Users, gradient: "gradient-primary" },
          { label: "Training Tracks", value: "3", icon: BookOpen, gradient: "gradient-secondary" },
          { label: "Avg. Progress", value: "38%", icon: TrendingUp, gradient: "gradient-accent" },
          { label: "Need Attention", value: "2", icon: AlertCircle, gradient: "gradient-primary" },
        ].map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            className="bg-card rounded-xl shadow-card border border-border p-5"
          >
            <div className={`w-10 h-10 rounded-lg ${card.gradient} flex items-center justify-center mb-3`}>
              <card.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="text-2xl font-bold font-display text-foreground">{card.value}</div>
            <div className="text-sm text-muted-foreground">{card.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Trainee table */}
      <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
        <div className="p-5 border-b border-border">
          <h2 className="text-lg font-semibold font-display text-foreground">Trainee Overview</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 text-muted-foreground font-medium">Name</th>
                <th className="text-left p-4 text-muted-foreground font-medium">Progress</th>
                <th className="text-left p-4 text-muted-foreground font-medium">Status</th>
                <th className="text-left p-4 text-muted-foreground font-medium">Last Active</th>
              </tr>
            </thead>
            <tbody>
              {mockTrainees.map((t) => (
                <tr key={t.name} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-medium text-foreground">{t.name}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-1.5 rounded-full bg-muted overflow-hidden">
                        <div className="h-full rounded-full gradient-primary" style={{ width: `${t.progress}%` }} />
                      </div>
                      <span className="text-muted-foreground">{t.progress}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                      t.status === "active" ? "bg-success/10 text-success" :
                      t.status === "behind" ? "bg-warning/10 text-warning" :
                      "bg-destructive/10 text-destructive"
                    }`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground">{t.lastActive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
