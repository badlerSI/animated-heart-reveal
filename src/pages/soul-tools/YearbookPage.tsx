import { Camera, BookImage, Sticker, MessageSquare, Heart } from "lucide-react";
import SoulAppPage, { type SoulAppConfig } from "./SoulAppPage";

const config: SoulAppConfig = {
  name: "SOUL Yearbook",
  primary: "#EF4444",
  accent: "#F87171",
  tagline: "Memories are better when they're weird. 📸",
  connectionMessage:
    "Your yearbook is waiting, but you're not on campus! SOUL Yearbook runs on your school's private server — your memories stay safe and local. Connect to the school network and start decorating!",
  MainIcon: Camera,
  features: [
    { icon: BookImage, title: "Yearbook Pages", description: "Design your own yearbook page with photos, backgrounds, and custom layouts." },
    { icon: Sticker, title: "Stickers & Decorations", description: "Add fun stickers, borders, and decorations to make your page uniquely yours." },
    { icon: MessageSquare, title: "Comments & Messages", description: "Leave comments and messages for your classmates — like signing a yearbook, but digital!" },
    { icon: Heart, title: "Class Memories", description: "Browse the class yearbook and see what everyone created. Relive the best moments of the year." },
  ],
};

const YearbookPage = () => <SoulAppPage config={config} />;
export default YearbookPage;
