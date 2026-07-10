# 📚 Study Desk — a student's toolkit

**Every tool a student needs, on one desk.** Free forever, no sign-up, no login, no limits. All data stays in your browser.

**Live site:** https://thestudydesk.vercel.app

Built by an engineering student who got tired of needing five different websites — each demanding a sign-up, a daily limit, or a "premium pack" — just to finish one assignment.

## Tools

| Category | Tools |
|---|---|
| **Today** | Dashboard (daily XP goal ring, streak badges, exam countdowns), Focus timer (pomodoro), Tasks, Habit tracker |
| **Study** | Notes, Flashcards (decks + study mode), Weekly planner, Formula sheets (algebra → chemistry, searchable) |
| **Calculate** | Scientific calculator, GPA calculator (semester + cumulative), Grade target ("what do I need on the final?"), Unit converter |
| **Write** | Word counter, Citation maker (MLA 9 / APA 7 / Chicago) |
| **Documents** | File converter (JPG ⇄ PNG ⇄ WebP, image → PDF, PDF → JPG/PNG/TXT, DOCX → PDF/TXT/HTML, MD → PDF, CSV ⇄ JSON), Talk to your PDF (offline passage search), Mock tests (coming soon) |

Plus: command palette (`Ctrl+K`), keyboard shortcuts, XP levels & confetti, full dark mode, backup/restore to JSON, and a hash router so browser back/forward work everywhere.

## Architecture

- **`index.html`** — the entire app. One file, zero frameworks, zero build step, zero client dependencies. All state in `localStorage` (`sd:` prefix).
- **`api/create-order.js`** — Vercel serverless function; creates Razorpay donation orders via REST (amount clamped server-side ₹10–₹50,000).
- **`api/verify.js`** — verifies Razorpay payment signatures (timing-safe HMAC-SHA256).

Notable in-browser engineering (no libraries):

- **DOCX parsing** — a minimal ZIP reader using native `DecompressionStream('deflate-raw')` extracts and parses `word/document.xml`.
- **PDF text extraction** — inflates FlateDecode content streams and parses `Tj`/`TJ` text operators.
- **Image → PDF** — builds a valid PDF byte-by-byte (DCTDecode-embedded JPEG, hand-written xref table).
- PDF page rendering (PDF → JPG/PNG) is the one feature that fetches an engine (pdf.js) from a CDN at runtime.

## Privacy

No accounts. No analytics. No uploads — file conversions and PDF chat run entirely in the browser. The only network calls are the optional donation flow (Razorpay) and the on-demand pdf.js fetch.

## Deploy your own

```bash
npm i -g vercel
vercel deploy --prod
# optional, for donations:
vercel env add RAZORPAY_KEY_ID production
vercel env add RAZORPAY_KEY_SECRET production
```

## Support

Study Desk is donation-funded — there are no premium tiers and never will be. If it helped you, the **About & support** page on the site has a donate button. Sharing it with a classmate helps just as much. ♥
