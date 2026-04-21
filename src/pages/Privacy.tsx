import { useEffect } from "react";
import PageFooter from "@/components/PageFooter";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Soul Interface";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Soul Interface privacy policy for the SOUL suite of educational applications, aligned with the amended FTC COPPA Rule effective April 22, 2026.");
  }, []);

  const accent = "#1bbdc5";

  const apps: Array<[string, string, string, string]> = [
    ["Learner", "Students", "Daily practice, curiosity-driven exploration (Explore tab), tutor (Alma), Flow posts, assignments, widgets", "Name, DID, grade, responses to assessments and assignments, tutor transcripts, posts to Flow, widget state, microphone input when tutor is actively invoked"],
    ["Teacher", "Classroom teachers", "Lesson planning, live instruction push, gradebook, student progress, moderation, seating, attendance, enrichments, messages", "Teacher profile, class rosters, grading/assessment data, moderation decisions, attendance records"],
    ["Creator", "Students (ages ~6-18)", "Drawing, image generation, yearbook pages, gallery", "Creations, SDXL generation prompts, drawing history"],
    ["Yearbook", "Students", "Yearbook page composition, peer pages, code studio widgets", "Yearbook contributions, widget state"],
    ["Etcher", "Students (opted-in biometric)", "Capture photos of the student for personalized LoRA training; camera is used", "Raw facial photographs (deleted within 7 days of LoRA completion), captured timestamps"],
    ["Wander (formerly Quest)", "Students", "Exploratory 16-bit adventure space incorporating classroom content", "Character state, game progress"],
    ["Counselor", "School counselors / on-duty mandated reporters", "Crisis-flag review, student case notes, alert queue", "Counselor notes, alert dispositions, caseload records"],
    ["Guardian", "Parents / guardians", "View child's progress, consent management, messages", "Guardian profile, consent decisions, messages with teachers"],
    ["Admin", "School administrators", "Deployment configuration, user management, device fleet, policy controls", "Admin profile, configuration changes (all logged)"],
  ];

  const thirdParties: Array<[string, string, string]> = [
    ["Google Classroom (optional, per-school)", "Roster sync and assignment hand-off, if the school already uses Google Classroom.", "Student name, grade, class roster membership, assignment metadata (not student responses)."],
    ["Cloudflare Tunnel (for non-air-gapped deployments only)", "Provides the secure routing between student devices and the local school fleet when a school chooses a tunnel-connected deployment. Cloudflare sees encrypted traffic metadata (source IPs, timing, byte counts) but does not see the decrypted AI content, which is processed only on the school fleet.", "Encrypted traffic metadata."],
    ["Resend (optional, for guardian email only)", "Delivers emails from teachers and the platform to guardian email addresses the guardian themselves provided. Used only if the school enables guardian email.", "Guardian email address and email body content."],
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-cyan-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: accent }}>
          SOUL Privacy Policy
        </h1>
        <p className="text-lg mb-1 text-gray-300 font-semibold">
          Soul Interface Inc. — Delaware Public Benefit Corporation
        </p>
        <div className="text-sm text-gray-500 mb-12 italic space-y-1">
          <p>Effective: April 22, 2026</p>
          <p>Version: 2026-04-22</p>
          <p>
            Contact:{" "}
            <a href="mailto:privacy@soulinterface.ai" style={{ color: accent }} className="not-italic">
              privacy@soulinterface.ai
            </a>
          </p>
        </div>

        <Section title="1. Who we are">
          <p>
            Soul Interface Inc. ("Soul Interface," "we," "our") operates the SOUL platform — a sovereign, on-premises AI system used in K-12 classrooms. SOUL runs inside schools on hardware the school owns or leases. The AI workloads (tutor, image generation, text-to-speech, speech recognition, content moderation) run <strong>locally on that hardware</strong> and are never sent to any cloud AI provider.
          </p>
          <p>
            This policy describes what data SOUL collects from students, teachers, and guardians; why we collect it; how long we keep it; who else sees it; and how parents and guardians can exercise their rights under the Children's Online Privacy Protection Act (COPPA), as amended.
          </p>
        </Section>

        <Section title="2. The SOUL apps">
          <p>
            SOUL is delivered as nine applications, each with a distinct purpose. Each app collects only the data needed to function; unused collection is disabled.
          </p>
          <div className="overflow-x-auto -mx-2 my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-2 font-semibold" style={{ color: accent }}>App</th>
                  <th className="text-left p-2 font-semibold" style={{ color: accent }}>Audience</th>
                  <th className="text-left p-2 font-semibold" style={{ color: accent }}>What it does</th>
                  <th className="text-left p-2 font-semibold" style={{ color: accent }}>Personal data collected</th>
                </tr>
              </thead>
              <tbody>
                {apps.map(([name, aud, what, data]) => (
                  <tr key={name} className="border-b border-gray-800 align-top">
                    <td className="p-2 text-gray-200 font-semibold whitespace-nowrap">{name}</td>
                    <td className="p-2 text-gray-400">{aud}</td>
                    <td className="p-2 text-gray-400">{what}</td>
                    <td className="p-2 text-gray-400">{data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Every app uses the student's Decentralized Identifier (DID), a locally-stored cryptographic identity issued at enrollment. The DID is the key under which the student's educational record — competency, assessments, accommodations, personalized models — lives on the local fleet. DIDs are never shared with third parties.
          </p>
        </Section>

        <Section title="3. What we collect, why, and how long we keep it">
          <p>
            The amended COPPA Rule (effective April 22, 2026) requires that data retention be described directly in this notice — not behind a separate link. Below is every category of personal data SOUL collects, the purpose, and the retention period. Retention periods are minimums required for the described purpose; we delete sooner if data is no longer needed.
          </p>

          <SubSection title="3.1 Account and session data">
            <p><strong className="text-gray-200">What:</strong> Student / teacher / guardian name, role, email (teacher & guardian only), DID, device identifiers, session tokens.</p>
            <p><strong className="text-gray-200">Why:</strong> Authenticate users, maintain sessions, associate actions with the correct person.</p>
            <p><strong className="text-gray-200">Retention:</strong> Session tokens are deleted <strong>30 days after last activity</strong>. Account records are retained for the duration of enrollment plus the educational-record retention window in §3.5.</p>
          </SubSection>

          <SubSection title="3.2 Educational content and tutor interactions">
            <p><strong className="text-gray-200">What:</strong> Student questions to the Alma tutor, Alma's responses, Wikipedia/Kiwix article views within the Explore tab, microphone input <em>while the tutor is actively listening</em> (not continuously).</p>
            <p><strong className="text-gray-200">Why:</strong> Provide on-demand tutoring, improve Alma's ability to tailor help to the student's level and accommodations, support teacher review of tutor effectiveness when needed.</p>
            <p><strong className="text-gray-200">Retention:</strong> Full conversation logs are retained for <strong>6 months</strong>, after which logs are reduced to a short summary (topics discussed, standards touched) that is written into the student's DID competency record. The full text is then deleted. Microphone audio is never stored server-side; transcription happens locally on the fleet and only the transcribed text is retained.</p>
          </SubSection>

          <SubSection title="3.3 Flow posts and social content">
            <p><strong className="text-gray-200">What:</strong> Posts students make to their classroom Flow (journal-style posts visible to the class + teacher), comments, kindness-check results.</p>
            <p><strong className="text-gray-200">Why:</strong> Classroom community, teacher visibility into student voice.</p>
            <p><strong className="text-gray-200">Retention:</strong> Duration of enrollment plus <strong>90 days after graduation or withdrawal.</strong> After this window, posts are deleted from active systems.</p>
          </SubSection>

          <SubSection title="3.4 Creator output and Yearbook pages">
            <p><strong className="text-gray-200">What:</strong> Drawings, SDXL-generated images, yearbook page layouts, text on pages, prompts the student typed.</p>
            <p><strong className="text-gray-200">Why:</strong> Preserve creative work, allow peer visibility where the student chose it, support printed or exported yearbook artifacts.</p>
            <p><strong className="text-gray-200">Retention:</strong> Yearbook pages and Creator output are retained during enrollment. A student may export their pages at any time to keep permanently. Server-side copies are deleted <strong>90 days after graduation or withdrawal</strong> unless the student opts in to a permanent-archive option.</p>
          </SubSection>

          <SubSection title="3.5 Assessment, mastery, and competency data">
            <p><strong className="text-gray-200">What:</strong> Responses to diagnostic and practice items, computed mastery estimates per Common Core / Next Gen Science / ELA standard, grade-level-equivalent summaries, accommodations (IEP-derived data such as extended time, read-aloud, reduced-item).</p>
            <p><strong className="text-gray-200">Why:</strong> Adaptive instruction, teacher reports, parent visibility, school-district educational records.</p>
            <p><strong className="text-gray-200">Retention:</strong> Duration of enrollment plus <strong>seven (7) years</strong>, matching typical state educational-record retention statutes. Parents may request earlier deletion, subject to the school's record-retention obligations.</p>
          </SubSection>

          <SubSection title="3.6 Biometric / facial data for personalized portraits (opt-in only)">
            <p><strong className="text-gray-200">What:</strong> Photographs captured by Etcher (up to 8 poses), trained LoRA model weights (a compressed numerical representation derived from the photos, not the photos themselves).</p>
            <p><strong className="text-gray-200">Why:</strong> Enable personalized-character features in Yearbook, Creator, and Wander. A student who does not opt in receives a stock or stylized avatar.</p>
            <p><strong className="text-gray-200">Retention:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Raw photos are deleted within 7 days</strong> of LoRA training completion.</li>
              <li><strong>LoRA model weights are retained</strong> while the biometric feature is enabled for the student, plus <strong>30 days</strong> after revocation. After that window the LoRA is deleted.</li>
              <li>If biometric consent is revoked, the LoRA is removed from all active systems within the 30-day window and cannot be used to generate new content in the meantime.</li>
            </ul>
            <p>
              The amended COPPA Rule explicitly categorizes biometric data as personal information. Biometric collection requires <strong>separate, verifiable parental consent</strong> beyond the general school-use consent. Opt-out triggers deletion of the LoRA, disables Etcher for that student, and switches Yearbook / Creator / Wander to stock avatars.
            </p>
          </SubSection>

          <SubSection title="3.7 Attendance, behavior, and classroom-operational data">
            <p><strong className="text-gray-200">What:</strong> Attendance records, seating charts, gradebook entries, teacher messages.</p>
            <p><strong className="text-gray-200">Why:</strong> Day-to-day classroom operation and educational-record obligations the school is required to maintain.</p>
            <p><strong className="text-gray-200">Retention:</strong> Duration of enrollment plus the school's governing record-retention schedule (typically 3-7 years, depending on state).</p>
          </SubSection>

          <SubSection title="3.8 Crisis-detection flags and counselor records">
            <p><strong className="text-gray-200">What:</strong> Automated flags raised by the local content-moderation model (Gemma) when student posts or tutor exchanges indicate possible self-harm, harm-to-others, sexual content, bullying, or other mandated-reporter categories. Counselor dispositions ("actionable" / "not actionable"). Case notes entered by counselors.</p>
            <p><strong className="text-gray-200">Why:</strong> Surface potential safety issues to the adult best positioned to help. California, and most states in which SOUL deploys, make classroom staff mandated reporters; the system surfaces and routes, a human judges and — if warranted — files with child-welfare authorities. SOUL does <strong>not</strong> file with child-welfare authorities automatically.</p>
            <p><strong className="text-gray-200">Retention:</strong> Crisis flags and counselor notes are retained for duration of enrollment plus <strong>seven (7) years</strong>, matching the school's child-welfare documentation obligations.</p>
          </SubSection>
        </Section>

        <Section title="4. How SOUL uses data — and what it does not do">
          <ul className="list-disc pl-6 space-y-3">
            <li><strong className="text-gray-200">AI inference runs on the local fleet.</strong> All tutor responses, image generation, text-to-speech, and speech recognition happen on hardware inside the school. Student data never leaves the fleet for AI processing. We do not use OpenAI, Anthropic, Google Gemini, or any other cloud AI provider for inference on student data.</li>
            <li><strong className="text-gray-200">Student photos never leave the local fleet.</strong> Raw photos captured by Etcher are processed on-site and deleted after LoRA training completes. LoRA inference is local.</li>
            <li><strong className="text-gray-200">No behavioral advertising. No commercial use of student data.</strong> SOUL is used solely for educational purposes. We do not sell, license, or share personal data with advertising networks, data brokers, or affiliates. We do not use student data to train general-purpose models for other customers.</li>
            <li><strong className="text-gray-200">No proactive monitoring.</strong> Alma, the tutor, is invoked by the student; she is not a persistent presence with always-on listening. The microphone is active only while the student has explicitly opened the tutor and is speaking to it.</li>
          </ul>
        </Section>

        <Section title="5. Third-party services">
          <p>
            SOUL deployments sometimes use a small set of third-party services for non-AI purposes. Each is named below with its purpose. None receives AI-workload data.
          </p>
          <div className="overflow-x-auto -mx-2 my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-2 font-semibold" style={{ color: accent }}>Third party</th>
                  <th className="text-left p-2 font-semibold" style={{ color: accent }}>Purpose</th>
                  <th className="text-left p-2 font-semibold" style={{ color: accent }}>What it sees</th>
                </tr>
              </thead>
              <tbody>
                {thirdParties.map(([name, purpose, sees]) => (
                  <tr key={name} className="border-b border-gray-800 align-top">
                    <td className="p-2 text-gray-200 font-semibold">{name}</td>
                    <td className="p-2 text-gray-400">{purpose}</td>
                    <td className="p-2 text-gray-400">{sees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Air-gapped deployments (e.g., juvenile-justice facility deployments) have <strong>no outbound network connectivity</strong> and thus use none of the above third-party services.
          </p>
          <p>
            We will name any new third-party service in this policy before using it, and we will obtain updated consent where the amended COPPA Rule requires it.
          </p>
        </Section>

        <Section title="6. Parental and guardian rights">
          <p>
            Under COPPA as amended, and under many state equivalents, parents and legal guardians of children under 13 have the following rights. SOUL makes these rights equally available to guardians of students 13-17 where applicable.
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li><strong className="text-gray-200">Right to review</strong> — You may request a copy of the personal data we hold about your child. The school's admin can export this on request, typically within 5 business days.</li>
            <li><strong className="text-gray-200">Right to refuse further collection</strong> — You may tell the school you do not wish for SOUL to continue collecting a category of data about your child. Depending on the category, this may limit which features of SOUL your child can use; we will tell you what is affected before you decide.</li>
            <li><strong className="text-gray-200">Right to consent to collection without consenting to disclosure</strong> — You may consent to SOUL's general school-use collection while separately refusing consent for any third-party disclosure (e.g., sync to Google Classroom). Each disclosure is independently consented. Refusing a disclosure does not withdraw the general use consent.</li>
            <li><strong className="text-gray-200">Right to request deletion</strong> — You may request deletion of your child's personal data. We will honor the request for all categories where we are not legally required to retain data under the school's educational-record obligations. Categories affected by school retention rules (e.g., assessment records held for the state-required 7 years) will be deleted at the end of that retention window.</li>
            <li><strong className="text-gray-200">Right to revoke biometric consent</strong> — You may revoke the biometric consent (LoRA portrait training) at any time. Revocation triggers deletion of the LoRA within 30 days; your child will see a stock avatar in the meantime.</li>
            <li><strong className="text-gray-200">Right to receive an updated notice</strong> — If SOUL changes this policy in a material way, we will notify guardians by email (where an email is on file with the school) and through an in-app notice in the Guardian app, before the change takes effect.</li>
          </ol>
          <p>
            To exercise any of these rights, contact your school's SOUL administrator or email{" "}
            <a href="mailto:privacy@soulinterface.ai" style={{ color: accent }}>privacy@soulinterface.ai</a>. Requests are logged and responded to within 10 business days.
          </p>
        </Section>

        <Section title="7. School-as-agent model">
          <p>
            When SOUL is deployed inside a K-12 school, the school or district acts as agent for parents for school-use data, consistent with the ed-tech carve-out in the COPPA Rule. This means:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The school authorizes collection of educational-purpose data on behalf of guardians.</li>
            <li>Data collected under this authorization is used <strong>solely</strong> for educational purposes to run the classroom experience SOUL provides. It is not used for marketing, not sold, not licensed to third parties, and not used to train general-purpose commercial models.</li>
            <li>Guardians retain the rights listed in §6, including the right to refuse further collection, to refuse disclosure, and to request deletion.</li>
            <li>Biometric collection (LoRA portrait training) is <strong>not covered</strong> by the school-as-agent model and requires explicit, separate parental consent for each child before any photos are captured.</li>
          </ul>
          <p>
            Soul Interface does not use student personal data for any purpose beyond operating the school deployment.
          </p>
        </Section>

        <Section title="8. Information security">
          <p>
            A companion <strong>Information Security Policy</strong> at{" "}
            <a href="https://soulinterface.ai/security" style={{ color: accent }}>soulinterface.ai/security</a>{" "}
            describes the security officer (Ben Adler, CEO), the risks SOUL's design addresses, the safeguards in place, and the annual-review cadence. Key points:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>All AI inference is on local hardware; no cloud dependency for model execution.</li>
            <li>Student-to-student data isolation via DID-based access control.</li>
            <li>Biometric data (Etcher photos) never transits public networks.</li>
            <li>Tunnel-connected deployments use TLS-terminated Cloudflare Tunnel; content is encrypted in transit and Cloudflare does not decrypt AI workloads.</li>
            <li>Air-gapped deployment option for facilities where outbound connectivity is not appropriate.</li>
            <li>Annual security review; incidents disclosed to affected schools and guardians within the applicable state breach-notification window.</li>
          </ul>
        </Section>

        <Section title="9. Contact">
          <ul className="space-y-2">
            <li>
              <strong className="text-gray-200">Privacy questions or requests:</strong>{" "}
              <a href="mailto:privacy@soulinterface.ai" style={{ color: accent }}>privacy@soulinterface.ai</a>
            </li>
            <li>
              <strong className="text-gray-200">Security-related disclosures:</strong>{" "}
              <a href="mailto:security@soulinterface.ai" style={{ color: accent }}>security@soulinterface.ai</a>
            </li>
            <li>
              <strong className="text-gray-200">Mail:</strong> Soul Interface Inc., Delaware
            </li>
            <li>
              <strong className="text-gray-200">Security officer:</strong> Ben Adler, Chief Executive Officer
            </li>
          </ul>
        </Section>

        <Section title="10. Changes to this policy">
          <p>
            The current version of this policy and its effective date are shown at the top. Prior versions are archived in our public repository under{" "}
            <code className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-300 text-sm">docs/legal/</code>{" "}
            so guardians can see what changed and when. Material changes will be announced before taking effect, as described in §6.6.
          </p>
        </Section>

        <div className="mt-16 pt-8 border-t border-gray-800 text-gray-400 italic">
          <p>Signed,</p>
          <p className="font-semibold text-gray-200 not-italic mt-2">Soul Interface Inc.</p>
          <p>Delaware Public Benefit Corporation</p>
          <p>April 22, 2026</p>
        </div>
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
  <div className="mb-6">
    <h3 className="text-base font-semibold text-gray-200 mb-2">{title}</h3>
    <div className="text-gray-400 leading-relaxed space-y-2">{children}</div>
  </div>
);

export default Privacy;
