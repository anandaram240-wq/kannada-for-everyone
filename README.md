# 🌟 Kannada for Everyone (ಕನ್ನಡ ಎಲ್ಲರಿಗಾಗಿ)

> **"Learn Kannada. Speak with Confidence."**  
> Practical Kannada for everyday life, one conversation at a time.

[![React 18](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![Web Speech API](https://img.shields.io/badge/Web%20Speech-kn--IN%20Enabled-success.svg)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
[![Automated QA Tests](https://img.shields.io/badge/QA%20Tests-14%2F14%20Passed-brightgreen.svg)](#-automated-testing--quality-assurance)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📌 1. Hackathon Details

- **Event:** Kannada Digital Innovation Hackathon 2026
- **Organizers:** HackerRank Campus Crew & The National Institute of Engineering (NIE), Mysuru
- **Problem Statement Track:** **Problem Statement #1 — Kannada for Everyone**
- **Official Problem Statement:**
  > *"Develop an interactive platform that helps non-Kannada speakers learn practical Kannada through everyday conversations, situations, vocabulary, and guided practice."*

---

## 🎯 2. Problem Description & Motivation

Karnataka, home to Bengaluru and Mysuru, is India's preeminent hub for technology, research, education, and innovation. Every year, hundreds of thousands of non-Kannada speakers — including university students, software engineers, corporate employees, healthcare workers, and relocating families — move to Karnataka.

However, non-Kannada speakers face severe daily friction when trying to assimilate:
1. **Commuter Anxiety:** Straining to hail auto rickshaws, negotiate meters, confirm BMTC bus destinations, or ask for loose change (*"Chillare"*).
2. **Everyday Dining & Shopping:** Feeling intimidated when ordering South Indian breakfast at fast-paced Darshini coupon counters or bargaining politely at local vegetable markets (*Santhe*).
3. **Complex Traditional Apps:** Existing language apps overwhelm beginners with complex grammar conjugations or put up forced paywalls and registration forms before teaching practical dialogue.
4. **Social Disconnect:** In workplaces and neighborhoods, the inability to speak even a few courteous words creates unintended social distance.

---

## 💡 3. Proposed Solution

**Kannada for Everyone** is an interactive, zero-barrier web learning application built from the ground up to solve this exact challenge. Rather than forcing users to memorize academic grammar rules, the platform adopts a **street-smart, dialogue-first pedagogy** organized into four foundational learning pillars:

1. **Everyday Conversations:** 10 authentic dialogues (Person A & B) simulating real-world scenarios with line-by-line audio and role-play mode.
2. **Practical Situations:** 10 interactive scenarios with cultural etiquette tips (*"-ri"*, *"-kodi"* vs *"-kodu"*) and situational decision challenges.
3. **Structured Vocabulary:** 65+ curated high-frequency words across 12 practical categories with interactive 3D flip flashcards, search, and audio synthesis.
4. **Guided Practice & Evaluation:** Instant-feedback quiz engine with pedagogical explanations, daily practice streaks, unlockable achievement badges, and 100% offline localStorage persistence.

**Zero Friction:** No account creation or forced sign-up is required. Any student or newcomer can open the application and start learning immediately.

---

## 👥 4. Target Users

- **Students from other Indian states** studying in engineering, medical, or degree colleges across Karnataka.
- **IT & Corporate Professionals** relocating to tech corridors like Whitefield, Electronic City, and Koramangala.
- **Daily Commuters & Travelers** navigating BMTC buses, Namma Metro, and auto rickshaws.
- **Relocating Families** settling into apartments, managing daily grocery shopping, and interacting with neighbors and domestic help.
- **Tourists & Visitors** exploring Karnataka's rich heritage sites in Mysuru, Hampi, and coastal regions.

---

## 🚀 5. Core Features & Capabilities

### 📚 Module 1: Interactive Vocabulary Builder
- **65+ Verified Beginner Words** spanning 12 categories: Greetings, Common Expressions, Numbers (1-1000), Time & Dates, Food & Dining, Transportation, Shopping & Money, Directions & Places, Family & People, Workplace & Tech, Emergency & Health.
- **Tri-Lingual Display:** Clear Kannada Unicode script, verified Roman phonetic transliteration, and natural English meaning.
- **Example Sentences:** Real-life usage in Kannada, transliteration, and English.
- **Interactive 3D Flip Flashcards:** Flip card to test active recall; navigate next/previous cards seamlessly.
- **Filters & Search:** Real-time search across Kannada, English, or transliterations, with instant category pills and "Learned / Bookmarked" toggles.
- **State Management:** One-click *"Mark as Learned"* and *"Bookmark"* toggles.

### 💬 Module 2: Real-World Kannada Conversations
- **10 Complete Practical Dialogues:**
  1. *Introducing Yourself to a Neighbor*
  2. *Hiring an Auto Rickshaw & Meter Request*
  3. *Ordering Food at a Traditional Darshini*
  4. *Travelling by BMTC Bus (Majestic / Trinity Circle)*
  5. *Buying Fresh Vegetables in a Local Market*
  6. *Asking for Directions on the Street*
  7. *Visiting a Clinic / Pharmacy for Fever*
  8. *Coordinating with a Colleague at Workplace*
  9. *Talking to Apartment Security & Delivery Person*
  10. *Campus Life & Talking to College Friends*
- **Line-by-Line Audio:** Web Speech API audio for every dialogue turn.
- **Automated Dialogue Playback:** *"Listen All"* button plays the entire sequential conversation between speakers with realistic pauses.
- **Interactive Role-Play Mode:** Practice speaking by selecting *"Play Person A"* or *"Play Person B"*.
- **Comprehension Quiz:** Post-dialogue quiz verifying understanding before awarding lesson completion.

### 🧭 Module 3: Real-Life Situation Learning
- **10 Interactive Survival Scenarios:** Bus Stand, Auto Rickshaw, Darshini, Vegetable Market, Clinic, Street Directions, Apartment Rental, Emergency Distress, Workplace, and College Canteen.
- **Cultural Etiquette Insights:** Explains social nuances like polite plural imperatives (*Kodi* vs *Kodu*, *Banni* vs *Baa*) and affectionate address (*Anna*, *Akka*).
- **Communication Intent & Target Phrases:** What to say, how to say it, and what the other person is expected to answer.
- **Interactive Decision Challenges:** Immediate pedagogical feedback explaining why a choice is correct or incorrect.

### 🔊 Module 4: Browser Speech Synthesis & Phonetics
- **Web Speech API Integration:** Automatically detects system Kannada voice (`kn-IN`).
- **Graceful Fallback:** If the browser or OS lacks a native Kannada voice pack, the engine falls back to Indian English phonetic synthesis without breaking.
- **Speed Controls:** Adjustable speaking speeds (0.7x slow learner, 0.85x recommended, 1.0x normal).
- **Phonetic Alphabet Guide:** Covers Kannada vowels (ಸ್ವರಗಳು - Svaragalu) and consonants with interactive pronunciation examples.
- **Educational Honesty:** Transparently displays voice diagnostic state without faking audio.

### ❓ Module 5: Guided Practice Quiz Engine
- **Multiple Evaluation Tracks:** *Quick 5-Minute Daily Sprint*, *Vocabulary Meaning*, *Situational Challenges*, and *Full Comprehensive Exam*.
- **Diverse Question Types:** Kannada-to-English, English-to-Kannada, Situational Responses, and Sentence Completion.
- **Instant Pedagogical Explanations:** Explains the cultural and linguistic reason behind each correct answer.
- **Celebration & Gamification:** Triggers particle confetti upon scoring $\ge 70\%$.
- **Detailed Review Mode:** Question-by-question review showing user choice vs correct answer.

### 📊 Module 6: Personal Learning Dashboard
- **Aggregate Syllabus Metric:** Weighted calculation of words learned, dialogues finished, and scenarios mastered.
- **Daily Practice Streak:** Automatically counts consecutive practice days.
- **8 Unlockable Achievement Badges:** *First Word, Vocabulary Explorer, Kannada Champion, Conversation Starter, Darshini Master, Auto Meter Pro, Street Smart, Quiz Master*.
- **Bookmarked Words Hub:** Fast revision list of favorited vocabulary.
- **Quiz Performance History:** Tracks past attempts, percentages, and timestamps.
- **LocalStorage Data Persistence:** Survives page refresh and browser restarts without requiring login.
- **Reset Progress Safety Modal:** Allows resetting all metrics with confirmation.

---

## 📸 6. Application Screenshots

| Screen | Description | File |
|---|---|---|
| **Landing Page** | Hero section, Word of the Day, 4 Curriculum Pillars, Target audience | `screenshots/01_landing_page.png` |
| **Mobile Layout** | Fully responsive layout tested on iPhone / Android viewport (375x812) | `screenshots/02_mobile_layout.png` |
| **Vocabulary Module** | Category filters, search, flashcards, learned toggles, and audio buttons | `screenshots/03_vocabulary_module.png` |
| **Conversations Module** | Person A & B dialogues, role-play selector, line audio, comprehension check | `screenshots/04_conversation_module.png` |
| **Situations Module** | Practical scenarios, cultural etiquette tips, scenario decision challenges | `screenshots/05_situations_module.png` |
| **Quiz Results** | Instant score calculation, confetti trigger, and pedagogical review list | `screenshots/06_quiz_results.png` |
| **Learner Dashboard** | Daily streak, syllabus progress, 8 achievement badges, bookmarks, history | `screenshots/07_progress_dashboard.png` |
| **Phonetics & Speech** | Web Speech API diagnostics, speech test bench, speed controls, vowels | `screenshots/08_pronunciation_guide.png` |

---

## 🛠️ 7. Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend Framework** | **React 18.3.1** | Component-driven, declarative user interface with hooks |
| **Build Tool & Bundler** | **Vite 6.0.7** | Sub-second Hot Module Replacement (HMR) and optimized rollup production builds |
| **Styling & CSS** | **Tailwind CSS 3.4.17** | Utility-first responsive design system with custom Karnataka-inspired palette |
| **Icons** | **Lucide React** | Consistent, accessible, modern SVG iconography |
| **Typography** | **Google Noto Sans Kannada** & **Inter** | Highly legible, beautifully rendered Kannada script across all display densities |
| **Speech Engine** | **Web Speech API (`SpeechSynthesis`)** | Native client-side speech synthesis with `kn-IN` voice detection |
| **Effects & Celebrations** | **Canvas-Confetti** | Rewarding visual confetti celebrations upon quiz milestone achievements |
| **Local Persistence** | **HTML5 localStorage API** | Safe, offline-first client storage for streaks, badges, scores, and words |
| **Automated Testing** | **Puppeteer-Core & Headless Chrome** | End-to-end browser regression testing and automated screenshot capture |

---

## 🏛️ 8. System Architecture Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                   CLIENT BROWSER (Desktop & Mobile)                    │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        REACT ROOT (App.jsx)                            │
│  - Active Tab State Router (Home, Vocab, Convs, Situations, Practice) │
│  - Persistent State Sync (Learned Words, Bookmarks, Badges, Streak)    │
│  - Global Toast Notification Dispatcher                                │
└───────────┬────────────────────────────────────────────────┬───────────┘
            │                                                │
            ▼                                                ▼
┌───────────────────────┐                        ┌───────────────────────┐
│     PAGES & VIEWS     │                        │   SERVICES & UTILS    │
│ ├── HomePage          │                        │ ├── speech.js         │
│ ├── VocabularyPage    │◄───────────────────────┤   (Web Speech API)    │
│ ├── ConversationsPage │                        │ ├── storage.js        │
│ ├── SituationsPage    │                        │   (LocalStorage API)  │
│ ├── PracticePage      │                        └───────────────────────┘
│ ├── ProgressPage      │                                    │
│ └── PronunciationPage │                                    ▼
└───────────┬───────────┘                        ┌───────────────────────┐
            │                                    │  HTML5 LOCALSTORAGE   │
            ▼                                    │ ├── kfe_learned_words │
┌──────────────────────────────────────────────┐ │ ├── kfe_bookmarked    │
│            CURATED LEARNING DATA             │ │ ├── kfe_completed_conv│
│ ├── vocabulary.js (65+ entries, 12 cats)     │ │ ├── kfe_quiz_history  │
│ ├── conversations.js (10 practical dialogues)│ │ └── kfe_daily_streak  │
│ ├── situations.js (10 survival scenarios)    │ └───────────────────────┘
│ ├── quizzes.js (30 validated questions)      │
│ └── badges.js (8 achievement milestones)     │
└──────────────────────────────────────────────┘
```

---

## 📂 9. Project Folder Structure

```
kannada-for-everyone/
├── index.html                     # HTML5 entry point with Noto Sans Kannada font
├── package.json                   # Dependencies, scripts, and project metadata
├── vite.config.js                 # Vite bundler configuration
├── tailwind.config.js             # Tailwind CSS configuration with custom theme
├── postcss.config.js              # PostCSS plugins (Tailwind, Autoprefixer)
├── .env.example                   # Environment configuration example template
├── .gitignore                     # Git ignore rules for node_modules, build & logs
│
├── src/
│   ├── main.jsx                   # React application mount
│   ├── App.jsx                    # Root component with state synchronization & routing
│   ├── index.css                  # Tailwind directives & Kannada typography rules
│   │
│   ├── components/                # Reusable UI components
│   │   ├── Navbar.jsx             # Top bar navigation, brand logo, and streak pill
│   │   ├── Footer.jsx             # Hackathon attribution, links, and cultural note
│   │   └── AudioButton.jsx        # Audio button with Web Speech API integration
│   │
│   ├── pages/                     # Primary functional view pages
│   │   ├── HomePage.jsx           # Welcome hero, Word of the Day & curriculum pillars
│   │   ├── VocabularyPage.jsx     # Vocabulary builder, flashcards, filters & search
│   │   ├── ConversationsPage.jsx  # Real dialogues, line audio, role-play & quiz
│   │   ├── SituationsPage.jsx     # Situational survival scenarios & decision challenges
│   │   ├── PracticePage.jsx       # Interactive quiz engine with pedagogical feedback
│   │   ├── ProgressPage.jsx       # Learner dashboard, badges, streak & bookmarks
│   │   └── PronunciationGuidePage.jsx # Phonetics guide, vowels & voice test bench
│   │
│   ├── data/                      # Structured, verified learning datasets
│   │   ├── vocabulary.js          # 65+ high-frequency beginner vocabulary entries
│   │   ├── conversations.js       # 10 complete real-world dialogues
│   │   ├── situations.js          # 10 practical situational survival scenarios
│   │   ├── quizzes.js             # 30 verified multiple-choice questions
│   │   └── badges.js              # 8 achievement badge definitions and conditions
│   │
│   └── services/                  # Browser platform integrations
│       ├── speech.js              # Web Speech API service with kn-IN fallback logic
│       └── storage.js             # LocalStorage wrapper for offline persistence
│
├── screenshots/                   # Automated high-resolution screenshots
│   ├── 01_landing_page.png
│   ├── 02_mobile_layout.png
│   ├── 03_vocabulary_module.png
│   ├── 04_conversation_module.png
│   ├── 05_situations_module.png
│   ├── 06_quiz_results.png
│   ├── 07_progress_dashboard.png
│   └── 08_pronunciation_guide.png
│
├── submission/                    # Official Hackathon submission package
│   ├── Kannada_For_Everyone_Presentation.pdf # 7-slide official presentation PDF
│   ├── presentation.html         # HTML source for the presentation deck
│   └── video_script.md           # 3-5 minute demonstration voice-over narration script
│
├── test_and_screenshot.cjs        # Automated Puppeteer end-to-end audit test script
├── test_report.json               # Automated test execution report (14/14 pass)
└── generate_presentation.cjs      # Slide deck to PDF compilation engine
```

---

## ⚡ 10. Local Installation & Development

### Prerequisites
- **Node.js:** v18.0.0 or higher (Tested on Node v24.14.0)
- **npm:** v9.0.0 or higher (Tested on npm 11.9.0)

### Step 1: Clone Repository
```bash
git clone https://github.com/anandaram240-wq/kannada-for-everyone.git
cd kannada-for-everyone
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### Step 4: Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### Step 5: Preview Production Build
```bash
npm run preview
```

---

## 🧪 11. Automated Testing & Quality Assurance

We implemented an automated end-to-end browser test suite using `puppeteer-core` driving headless Google Chrome. The audit verifies every module, route transition, user interaction, quiz evaluation, and localStorage persistence.

### Run Automated Browser Audit
```bash
node test_and_screenshot.cjs
```

### Test Results Summary

```
=======================================
Total Tests Executed: 14
Passed: 14
Failed: 0
Build Status: CLEAN (0 errors, 0 warnings)
=======================================
```

| # | Test Case Description | Expected Result | Result |
|---|---|---|---|
| 1 | Website opens | Loads without blocking errors | **PASSED** |
| 2 | Mobile responsive layout | Renders cleanly on 375x812 viewport | **PASSED** |
| 3 | Vocabulary module | Categories and search render properly | **PASSED** |
| 4 | Mark as learned | State toggles and updates UI live | **PASSED** |
| 5 | Conversations module | Person A & B dialogues and audio controls load | **PASSED** |
| 6 | Conversation comprehension quiz | Evaluates answer and displays feedback | **PASSED** |
| 7 | Situations module | Renders scenarios and cultural tips | **PASSED** |
| 8 | Situational decision challenge | Validates scenario choice with explanations | **PASSED** |
| 9 | Practice quiz module | Loads categorized tracks | **PASSED** |
| 10 | Quiz engine start | Starts question sequence with progress bar | **PASSED** |
| 11 | Quiz evaluation & submit | Calculates score and presents review screen | **PASSED** |
| 12 | Progress dashboard | Displays metrics, streak, and badges | **PASSED** |
| 13 | LocalStorage persistence | Data survives page reload / browser restart | **PASSED** |
| 14 | Pronunciation guide | Displays Web Speech diagnostics and vowels | **PASSED** |

---

## 🌐 12. Deployment Instructions

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel` (or use `npx vercel`)
2. Run deployment command:
   ```bash
   npx vercel --prod
   ```
3. Set build command: `npm run build`
4. Set output directory: `dist`

### Deploy to Netlify
1. Install Netlify CLI: `npm i -g netlify-cli` (or use `npx netlify-cli`)
2. Run deployment command:
   ```bash
   npx netlify deploy --prod --dir=dist
   ```

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add `"homepage": "https://<username>.github.io/<repo-name>"` to `package.json`
3. Run `npm run build && npx gh-pages -d dist`

---

## 💻 13. Browser Compatibility

| Browser | Platform | Compatibility | Audio Synthesis Support |
|---|---|---|---|
| **Google Chrome** | macOS / Windows / Android | Full | Native `kn-IN` voice if installed; phonetic fallback |
| **Microsoft Edge** | Windows / macOS | Full | Native Microsoft Kannada Online voice |
| **Safari** | macOS / iOS | Full | Native Siri Kannada voice / phonetic fallback |
| **Mozilla Firefox** | macOS / Windows / Linux | Full | Native system speech synthesis |
| **Mobile Chrome / Safari** | iOS / Android | Full | 100% touch-optimized mobile navigation |

---

## 🔍 14. Known Limitations & Educational Honesty

1. **Speech Engine Variability:** Browser speech synthesis depends on whether the user's OS or browser has installed the Kannada voice pack. If absent, the platform transparently falls back to phonetic Indian English pronunciation without faking audio.
2. **Speech Recognition Evaluation:** We do not pretend to evaluate a user's spoken Kannada through artificial recognition scores without a trained phoneme recognition model. Users are encouraged to practice speaking using verified transliterations.
3. **Local Scope:** Currently focuses on standard everyday spoken Kannada used in Bengaluru and Mysuru; regional dialect exploration is planned for future releases.

---

## 🗺️ 15. Future Scope & Roadmap

1. **Regional Dialect Explorer:** Add North Karnataka (*Hubballi-Dharwad*), Coastal Karnataka (*Kundapura/Mangaluru*), and Hyderabad-Karnataka dialect variations.
2. **Audio Voice Recognition with Microphones:** Integrate an open-source Kannada Whisper model to give real-time phonetic pronunciation scores.
3. **Progressive Web App (PWA):** Enable full offline installation on Android and iOS home screens with background sync.
4. **Community Scenarios:** Allow users to submit their own real-life dilemmas (*"What do I say to the BBMP waste collector?"*) with community-verified phrases.

---

## 🏆 16. Submission Deliverables Summary

1. **Public GitHub Repository:** [https://github.com/anandaram240-wq/kannada-for-everyone](https://github.com/anandaram240-wq/kannada-for-everyone)
2. **Official Presentation PDF:** `submission/Kannada_For_Everyone_Presentation.pdf` (7 slides covering Problem, Existing System, Solution, Features, Architecture, Conclusion)
3. **Video Explanation Script:** `submission/video_script.md` (3 to 5 minutes voice-over demonstration script and recording sequence)
4. **Automated Test Report:** `test_report.json` (14/14 automated end-to-end tests passing)

---

## 📜 17. License

This project is licensed under the **MIT License** — free to use, distribute, and enhance for educational purposes across Karnataka.

---

<p align="center">
  <b>ಕನ್ನಡ ಕಲಿಯಿರಿ • ಹೆಮ್ಮೆಯಿಂದ ಮಾತನಾಡಿ</b><br>
  <i>Code. Create. Celebrate Kannada.</i><br>
  Organized by HackerRank Campus Crew & The National Institute of Engineering (NIE), Mysuru
</p>
