import { Compass, Map, Sparkles, Backpack, Telescope } from "lucide-react";
import SoulAppPage, { type SoulAppConfig } from "./SoulAppPage";

const config: SoulAppConfig = {
  name: "SOUL Wander",
  primary: "#14B8A6",
  accent: "#5EEAD4",
  tagline: "Curiosity, off the beaten path.",
  connectionMessage:
    "SOUL Wander runs on your school's local server. Connect to the school WiFi to start exploring topics, simulations, and side quests that don't fit in a textbook.",
  MainIcon: Compass,
  features: [
    { icon: Map, title: "Guided Explorations", description: "Follow open-ended learning paths that adapt as your interests change. No fixed answers, no rails." },
    { icon: Sparkles, title: "Side Quests", description: "Bite-sized challenges that connect classroom topics to real-world curiosity. Optional, never assigned." },
    { icon: Backpack, title: "Personal Notebook", description: "Capture sketches, questions, and finds in one place. Yours alone, stored locally." },
    { icon: Telescope, title: "Open Inquiry", description: "Ask the big questions. SOUL Wander helps you investigate without grading the journey." },
  ],
};

const WanderPage = () => <SoulAppPage config={config} />;
export default WanderPage;
