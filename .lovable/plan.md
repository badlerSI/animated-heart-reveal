

# Update Privacy Policy Page

## Overview

Replace the existing Privacy Policy at `src/pages/Privacy.tsx` with the new comprehensive version dated April 22, 2026. The new policy covers 9 SOUL apps (adding Wander, Counselor, and Guardian), detailed data retention schedules, expanded parental rights, and COPPA compliance aligned with the amended FTC rule.

## Changes to Make

### 1. Update header metadata
- Change "Last updated: March 10, 2026" → "Effective: April 22, 2026"
- Add "Version: 2026-04-22"
- Update entity name to "Soul Interface Inc. (Delaware Public Benefit Corporation)"
- Add contact email: privacy@soulinterface.ai

### 2. Replace all section content

**New sections to add:**
1. **Who we are** — Company description, local AI processing explanation
2. **The SOUL apps** — Table of 9 apps (Learner, Teacher, Creator, Yearbook, Etcher, Wander, Counselor, Guardian, Admin) with audience, purpose, and data collected
3. **What we collect, why, and how long we keep it** — 8 subsections with detailed retention schedules:
   - 3.1 Account and session data (30 days for tokens)
   - 3.2 Educational content and tutor interactions (6 months full logs → summary)
   - 3.3 Flow posts and social content (enrollment + 90 days)
   - 3.4 Creator output and Yearbook pages (enrollment + 90 days, export option)
   - 3.5 Assessment, mastery, and competency data (enrollment + 7 years)
   - 3.6 Biometric/facial data for LoRA (photos deleted in 7 days, LoRA kept +30 days after revocation)
   - 3.7 Attendance, behavior, classroom-operational data (3-7 years per state)
   - 3.8 Crisis-detection flags and counselor records (enrollment + 7 years)

4. **How SOUL uses data — and what it does not do** — Local AI, no cloud, no ads, no commercial use, no proactive monitoring
5. **Third-party services** — Google Classroom, Cloudflare Tunnel, Resend (with air-gapped option)
6. **Parental and guardian rights** — 6 rights: review, refuse collection, consent without disclosure, request deletion, revoke biometric consent, receive updated notice
7. **School-as-agent model** — COPPA carve-out explanation, biometric exception
8. **Information security** — Link to security policy, key safeguards
9. **Contact** — privacy@soulinterface.ai, security@soulinterface.ai, mailing address, security officer
10. **Changes to this policy** — Version archiving in docs/legal/

### 3. Maintain styling consistency
- Keep dark background `#0a0a0f`
- Keep cyan accent `#1bbdc5` for headings
- Keep Section/SubSection component pattern
- Add table styling for the apps table and third-party services table
- Add code styling for `docs/legal/` reference

## Files to Edit
- `src/pages/Privacy.tsx` — Complete rewrite with new content

## Approach
- Replace entire file content with new comprehensive privacy policy
- Maintain existing component structure (Section, SubSection helpers)
- Add table components for structured data display
- Keep PageFooter with existing accent colors

