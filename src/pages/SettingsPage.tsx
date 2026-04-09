import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { Bell, Palette, Globe } from "lucide-react";

const SettingsPage = () => {
  const { user } = useAuth();

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold font-display text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground mb-8">Manage your account and preferences.</p>
      </motion.div>

      <div className="space-y-6">
        {/* Profile */}
        <div className="bg-card rounded-xl shadow-card border border-border p-6">
          <h2 className="text-lg font-semibold font-display text-foreground mb-4">Profile</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-xl font-bold text-primary-foreground">
              {user?.name.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-foreground">{user?.name}</p>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Role</span>
              <p className="font-medium text-foreground capitalize">{user?.role}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Department</span>
              <p className="font-medium text-foreground">{user?.department}</p>
            </div>
          </div>
        </div>

        {/* Preferences */}
        {[
          { icon: Bell, title: "Notifications", desc: "Email and in-app notification preferences" },
          { icon: Palette, title: "Appearance", desc: "Theme and display settings" },
          { icon: Globe, title: "Language", desc: "Language and region preferences" },
        ].map((item) => (
          <div key={item.title} className="bg-card rounded-xl shadow-card border border-border p-6 flex items-center gap-4 cursor-pointer hover:shadow-card-hover transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <item.icon className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
