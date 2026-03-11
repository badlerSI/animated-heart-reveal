import { Palette, Image, BookOpen, LayoutGrid, Layers } from "lucide-react";
import SoulAppPage, { type SoulAppConfig } from "./SoulAppPage";

const config: SoulAppConfig = {
  name: "SOUL Create",
  primary: "#EAB308",
  accent: "#FACC15",
  tagline: "Where imagination gets an AI boost. ✨",
  connectionMessage:
    "Whoa there, Picasso! You need to be on your school network to use SOUL Create. All the AI magic happens on your school's local server — no internet needed, no data leaving campus. Connect to WiFi and let's make something awesome!",
  MainIcon: Palette,
  features: [
    { icon: Image, title: "AI Image Generation", description: "Create stunning artwork using AI. Describe what you imagine and watch it come to life." },
    { icon: BookOpen, title: "Interactive Stories", description: "Build branching narratives with AI-generated illustrations. Write your own adventure!" },
    { icon: LayoutGrid, title: "Creative Gallery", description: "Browse and share creations with your classmates. Get inspired by what others are making." },
    { icon: Layers, title: "Project Builder", description: "Combine text, images, and AI tools to create presentations, posters, and multimedia projects." },
  ],
};

const CreatePage = () => <SoulAppPage config={config} />;
export default CreatePage;
