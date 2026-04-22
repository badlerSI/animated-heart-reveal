import { Cpu, Camera, Image, Database, LayoutGrid } from "lucide-react";
import SoulAppPage, { type SoulAppConfig } from "./SoulAppPage";

const config: SoulAppConfig = {
  name: "SOUL Etcher",
  primary: "#F97316",
  accent: "#FB923C",
  tagline: "Training AI models, one selfie at a time.",
  connectionMessage:
    "Camera ready? You need the school network first. SOUL Etcher captures training data on the school's private server. Your images never leave campus. Connect to WiFi and start training.",
  MainIcon: Cpu,
  features: [
    { icon: Camera, title: "Training Capture", description: "Take photos for AI model training (LoRA). Capture multiple angles and expressions to build your custom AI model." },
    { icon: Image, title: "AI Image Generation", description: "Generate images using trained models. See yourself in different styles, settings, and artistic interpretations." },
    { icon: Database, title: "Model Management", description: "View your training sets, check model status, and manage your LoRA models." },
    { icon: LayoutGrid, title: "Gallery", description: "Browse generated images, save favorites, and share your best AI creations with classmates." },
  ],
};

const EtcherPage = () => <SoulAppPage config={config} />;
export default EtcherPage;
