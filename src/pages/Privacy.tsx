import { useEffect } from "react";
import PageFooter from "@/components/PageFooter";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Soul Interface";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Soul Interface privacy policy for the SOUL suite of educational applications.");
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-cyan-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#1bbdc5" }}>
          Privacy Policy
        </h1>
        <p className="text-lg mb-1 text-gray-300 font-semibold">
          SOUL Interface — Secure Offline Unified Learning Interface
        </p>
        <p className="text-sm text-gray-500 mb-12 italic">Last updated: March 10, 2026</p>

        <p className="text-gray-300 mb-10 leading-relaxed">
          SOUL Interface ("we," "our," or "us") operates the SOUL suite of mobile applications: SOUL Learner, SOUL Teacher, SOUL Creator, SOUL Yearbook, SOUL Administrator, and SOUL Etcher (collectively, the "Apps"). This Privacy Policy explains how we collect, use, and protect information when you use our Apps.
        </p>

        <Section title="Information We Collect">
          <SubSection title="Identity Information">
            <p>
              When you create a SOUL account, we generate a decentralized identifier (DID) and collect a minimal profile that may include a display name, age, grade level, preferred languages, and role (student, teacher, or administrator). Account authentication uses a PIN that is processed server-side — we do not store your PIN in plain text.
            </p>
          </SubSection>
          <SubSection title="Session Data">
            <p>
              We store a session token on your device using encrypted local storage (Apple Keychain via Expo SecureStore) to keep you signed in. This token expires automatically and does not contain personal information.
            </p>
          </SubSection>
          <SubSection title="AI Training Data (LoRA)">
            <p>
              If you use SOUL's personalized AI features, a lightweight model fine-tune (LoRA) may be created based on content you provide. This is associated with your DID and stored on the SOUL server. You can request deletion of this data at any time.
            </p>
          </SubSection>
        </Section>

        <Section title="Information We Do NOT Collect">
          <p>
            We do not collect or access your device's camera, microphone, contacts, location, photo library, or browsing history. We do not use third-party analytics, advertising SDKs, or tracking frameworks. We do not sell, rent, or share your personal information with third parties for marketing purposes.
          </p>
        </Section>

        <Section title="How We Use Your Information">
          <p>
            We use the information described above solely to provide and improve the SOUL learning experience, authenticate your identity, maintain your session across app launches, and deliver personalized AI-assisted educational content.
          </p>
        </Section>

        <Section title="Data Storage and Security">
          <p>
            Your data is stored on a private SOUL server. Authentication credentials are encrypted, and session tokens are stored in your device's secure keychain. All communication between the Apps and our server uses HTTPS encryption.
          </p>
        </Section>

        <Section title="Children's Privacy">
          <p>
            SOUL is designed for K–12 educational environments. We are committed to protecting the privacy of children. We collect only the minimum information necessary to provide the educational service. We do not knowingly collect personal information from children under 13 without appropriate consent from a parent, guardian, or school administrator acting in loco parentis. If you believe we have inadvertently collected information from a child without proper consent, please contact us and we will promptly delete it.
          </p>
        </Section>

        <Section title="COPPA Compliance">
          <p>
            In accordance with the Children's Online Privacy Protection Act (COPPA), we obtain verifiable consent through the school or district administrator before collecting any personal information from children under 13. Schools and districts using SOUL are responsible for obtaining necessary parental consent under COPPA and FERPA.
          </p>
        </Section>

        <Section title="Data Retention and Deletion">
          <p>
            You may request deletion of your account and all associated data at any time by contacting us. Upon account deletion, your DID, profile information, session data, and any associated LoRA models will be permanently removed from our servers.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify users of material changes through the Apps or by updating the "Last updated" date above.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>
            If you have questions about this Privacy Policy or your data, contact us at:
          </p>
          <p className="mt-4 font-semibold">SOUL Interface</p>
          <p>
            Email:{" "}
            <a
              href="mailto:contact@soulinterface.ai"
              className="transition-colors"
              style={{ color: "#1bbdc5" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#1bbdc5")}
            >
              contact@soulinterface.ai
            </a>
          </p>
        </Section>
      </div>

      <PageFooter glowing accentColor="#1bbdc5" mutedColor="#5BA8C4" dimColor="#4A8DA8" />
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: "#1bbdc5" }}>
      {title}
    </h2>
    <div className="text-gray-300 leading-relaxed space-y-4">{children}</div>
  </section>
);

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-4">
    <h3 className="text-base font-semibold text-gray-200 mb-2">{title}</h3>
    <div className="text-gray-400 leading-relaxed">{children}</div>
  </div>
);

export default Privacy;
