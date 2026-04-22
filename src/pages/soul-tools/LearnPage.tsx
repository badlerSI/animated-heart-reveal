import { Brain, MessageCircle, FileText, BookOpen, Lightbulb } from "lucide-react";
import SoulAppPage, { type SoulAppConfig } from "./SoulAppPage";

const config: SoulAppConfig = {
  name: "SOUL Learner",
  primary: "#3B82F6",
  accent: "#60A5FA",
  tagline: "Your brain called. It wants more knowledge.",
  connectionMessage:
    "Looks like you're not on your school's network. SOUL Learner lives on your school's local server, like a private library that only works on campus. Connect to your school WiFi and try again.",
  MainIcon: Brain,
  features: [
    { icon: MessageCircle, title: "AI Tutor", description: "Get personalized help with any subject. Ask questions, get explanations, work through problems step by step." },
    { icon: FileText, title: "Smart Notes", description: "Take notes that organize themselves. AI helps summarize, highlight key concepts, and connect ideas." },
    { icon: BookOpen, title: "Interactive Lessons", description: "Engage with dynamic content that adapts to your learning pace and style." },
    { icon: Lightbulb, title: "Study Tools", description: "Flashcards, quizzes, and review sessions powered by AI to help you actually remember things." },
  ],
};

const LearnPage = () => <SoulAppPage config={config} />;
export default LearnPage;
