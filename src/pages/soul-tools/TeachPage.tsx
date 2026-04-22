import { Shield, Monitor, Users, CheckSquare, PenTool } from "lucide-react";
import SoulAppPage, { type SoulAppConfig } from "./SoulAppPage";

const config: SoulAppConfig = {
  name: "SOUL Teacher",
  primary: "#8B5CF6",
  accent: "#A78BFA",
  tagline: "Teaching just got a superpower upgrade.",
  connectionMessage:
    "Hold up, you're not connected to the school server. SOUL Teacher runs entirely on your school's local network for maximum privacy. Hop on the school WiFi and come back.",
  MainIcon: Shield,
  features: [
    { icon: Monitor, title: "Classroom Controls", description: "Manage your class in real-time. See what students are working on, send announcements, and guide the flow of a lesson." },
    { icon: Users, title: "Student Management", description: "Track progress, view engagement, and get AI-powered insights on how each student is doing." },
    { icon: CheckSquare, title: "LoRA Model Approval", description: "Review and approve AI image generation models that students want to use. You're the gatekeeper." },
    { icon: PenTool, title: "Lesson Tools", description: "Create and distribute interactive content, assignments, and activities with AI assistance." },
  ],
};

const TeachPage = () => <SoulAppPage config={config} />;
export default TeachPage;
