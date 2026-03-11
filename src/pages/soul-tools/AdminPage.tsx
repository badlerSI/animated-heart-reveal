import { Settings, Users, School, Server, ShieldCheck } from "lucide-react";
import SoulAppPage, { type SoulAppConfig } from "./SoulAppPage";

const config: SoulAppConfig = {
  name: "SOUL Administrator",
  primary: "#22C55E",
  accent: "#4ADE80",
  tagline: "Someone's gotta keep the lights on. 🔧",
  connectionMessage:
    "Admin access requires the school network! SOUL Administrator runs on the local SOUL server and manages everything behind the scenes. Connect to the school LAN to access the dashboard.",
  MainIcon: Settings,
  features: [
    { icon: Users, title: "User Management", description: "Create and manage student and teacher accounts. Set roles, reset passwords, handle the people stuff." },
    { icon: School, title: "Classroom Setup", description: "Configure classrooms, assign teachers, organize students into groups and periods." },
    { icon: Server, title: "System Settings", description: "Manage the SOUL server settings, monitor system health, and configure AI model availability." },
    { icon: ShieldCheck, title: "Content Moderation", description: "Review flagged content, manage filters, and ensure everything stays school-appropriate." },
  ],
};

const AdminPage = () => <SoulAppPage config={config} />;
export default AdminPage;
