import { ShieldCheck, Eye, BellRing, FileBarChart, Lock } from "lucide-react";
import SoulAppPage, { type SoulAppConfig } from "./SoulAppPage";

const config: SoulAppConfig = {
  name: "SOUL Guardian",
  primary: "#0EA5E9",
  accent: "#7DD3FC",
  tagline: "For the grown-ups keeping watch.",
  connectionMessage:
    "SOUL Guardian gives parents and guardians a window into their student's school activity, served from the school's local network. Connect to the school WiFi or use your school-issued access link.",
  MainIcon: ShieldCheck,
  features: [
    { icon: Eye, title: "Activity Overview", description: "See what apps your student is using, what assignments are open, and how their week is going." },
    { icon: BellRing, title: "Notifications", description: "Get notified about flagged content, missed assignments, and counselor check-ins. You set the level." },
    { icon: FileBarChart, title: "Progress Reports", description: "Plain-language summaries of how your student is progressing. No jargon, no inflated metrics." },
    { icon: Lock, title: "Privacy Controls", description: "Review what's shared with you, what stays private to your student, and adjust permissions together." },
  ],
};

const GuardianPage = () => <SoulAppPage config={config} />;
export default GuardianPage;
