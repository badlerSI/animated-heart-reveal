import { HeartHandshake, MessageCircle, Calendar, NotebookPen, LifeBuoy } from "lucide-react";
import SoulAppPage, { type SoulAppConfig } from "./SoulAppPage";

const config: SoulAppConfig = {
  name: "SOUL Counselor",
  primary: "#EC4899",
  accent: "#F9A8D4",
  tagline: "A quiet place to think things through.",
  connectionMessage:
    "SOUL Counselor only runs on your school's local network. Nothing you say leaves the building. Connect to the school WiFi to get started.",
  MainIcon: HeartHandshake,
  features: [
    { icon: MessageCircle, title: "Private Conversations", description: "Talk through what's on your mind. Conversations stay on the school server, never sent to the cloud." },
    { icon: Calendar, title: "Counselor Scheduling", description: "Request time with a school counselor. Pick a slot, share what you'd like to talk about, or keep it open." },
    { icon: NotebookPen, title: "Reflection Journal", description: "Write privately. Track how you're feeling over time. Visible only to you." },
    { icon: LifeBuoy, title: "Support Resources", description: "Quick access to school-approved resources, hotlines, and trusted adults when you need them." },
  ],
};

const CounselorPage = () => <SoulAppPage config={config} />;
export default CounselorPage;
