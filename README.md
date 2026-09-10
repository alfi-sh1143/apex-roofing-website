# Apex Roofing — Production Web Platform & Lead Engine

> **Portfolio Project Notice**: Apex Roofing is a fictional home-services brand built as an agency-caliber portfolio showcase demonstrating modern UI/UX design, full-stack lead capture, responsive layout systems, and robust database persistence with Firebase Firestore.

---

## 1. Project Overview & Business Goal

The primary business objective of **Apex Roofing** is to convert residential and commercial property owners into qualified roofing estimate requests. The application balances technical credibility (GAF Master Elite certifications, $2M insurance, 25-year warranties) with low-friction, high-converting interactive quote calculators.

### Visual Design System
- **Primary Canvas & Contrast**: Deep Navy (`#0B192C`), Warm Off-White (`#FBFBFA`), and Architectural Sand (`#F3F4F1`).
- **Accent**: Professional Safety Orange / Amber (`#E8681A`) for high-conversion CTAs.
- **Typography**: Paired display font (**Outfit**) with a geometric readability font (**Plus Jakarta Sans**).
- **Layout Math**: 8px spatial grid system, mathematically nested corner radii, generous negative space, and mobile-first touch targets (>44px).

---

## 2. Tech Stack

- **Framework**: React 19 + Vite 6
- **Language**: TypeScript (strict mode, zero compiler warnings)
- **Styling**: Tailwind CSS v4 (native `@theme` tokens)
- **Icons**: Lucide React (`lucide-react`)
- **Animations**: Motion (`motion/react`)
- **Backend & Persistence**: Firebase Client SDK v11 (Cloud Firestore), plus automatic resilient local persistence fallback for offline or preview environments.
- **Security & Validation**: Zero-Trust ABAC Firestore Security Rules (`firestore.rules`) and intermediate data schema (`firebase-blueprint.json`).

---

## 3. Local Setup Instructions

### Prerequisites
- Node.js (v18 or v20+ recommended)
- npm or pnpm

### Quickstart
```bash
# 1. Clone repository and install dependencies
npm install

# 2. Copy environment variable template
cp .env.example .env.local

# 3. Start development server (binds to port 3000)
npm run dev

# 4. Open in browser
# http://localhost:3000
```

### Build & Lint
```bash
# Verify TypeScript typing
npm run lint

# Build production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 4. Firebase & Firestore Setup Instructions

The application supports both **live Firebase Cloud Firestore** and **resilient local offline persistence**. When Firebase credentials are provided in `.env.local` or injected by Cloud Run, all quote requests write directly to Firestore `/quotes` collection.

### Step-by-Step Firebase Console Setup
1. Visit the [Firebase Console](https://console.firebase.google.com/) and click **Add Project**. Name it `apex-roofing-production` (or your preferred name).
2. In the project dashboard, navigate to **Build > Firestore Database** and click **Create Database**.
   - Choose your preferred location (e.g. `nam5 (us-central)`).
   - Start in **Production mode**.
3. Under the **Rules** tab, paste the contents of `firestore.rules` located in this repository and click **Publish**.
4. In Project Settings > **General**, scroll down to **Your apps** and click the **Web (`</>`)** icon.
   - Register app nickname `apex-roofing-web`.
   - Copy the `firebaseConfig` keys.
5. In your local `.env.local` (or cloud deployment environment), provide:
   ```env
   VITE_FIREBASE_API_KEY="AIzaSy..."
   VITE_FIREBASE_AUTH_DOMAIN="apex-roofing.firebaseapp.com"
   VITE_FIREBASE_PROJECT_ID="apex-roofing"
   VITE_FIREBASE_STORAGE_BUCKET="apex-roofing.appspot.com"
   VITE_FIREBASE_MESSAGING_SENDER_ID="1234567890"
   VITE_FIREBASE_APP_ID="1:1234567890:web:abcdef"
   VITE_FIREBASE_FIRESTORE_DATABASE_ID="(default)"
   ```
6. Restart your development server (`npm run dev`). The status badge in the **Leads Manager** modal will switch to **Firestore Live Sync**.

---

## 5. Security Rules & Data Blueprint

This project follows the **Eight Pillars of Hardened Firestore Rules**:
- **Default-Deny Catch-All**: Blocks unmapped collection crawling.
- **Payload Validation Blueprint**: `isValidQuote()` validates field names, types, string length bounds (`size() <= 100`), regex patterns, and enforces valid enum options for `propertyType` and `serviceRequired`.
- **ID Poisoning Protection**: `isValidId()` sanitizes all incoming document identifiers against injection vectors.
- **Admin/Staff Isolation**: Read and list access to quote inquiries is restricted to authorized authenticated roles, while customer submission creation is publicly validated.

See `firestore.rules` and `firebase-blueprint.json` for full architectural schema specifications.

---

## 6. Architecture & Folder Structure

```
├── /firebase-blueprint.json     # Intermediate representation data schema
├── /firestore.rules             # Production zero-trust Firestore security rules
├── /.env.example                # Documented environment variables
├── /index.html                  # HTML entry point with SEO metadata & Google Fonts
├── /src
│   ├── /components
│   │   ├── /forms               # Lead capture forms (QuoteForm)
│   │   ├── /layout              # Navigation bar, mobile drawer, agency footer
│   │   ├── /modals              # Instant Quote modal, Leads Database inspector
│   │   └── /ui                  # Atomic UI: Button, SectionHeading, TrustBadge,
│   │                            # ServiceCard, TestimonialCard, FormInput, CTASection
│   ├── /data
│   │   └── roofingData.ts       # Services, technical specifications, warranties,
│   │                            # testimonials, case studies, and coverage areas
│   ├── /lib
│   │   ├── firebase.ts          # Safe Firebase client initialization & error handling
│   │   └── firestoreService.ts  # Quote submissions CRUD with dual-layer persistence
│   ├── /pages
│   │   ├── Home.tsx             # 10-section flagship landing page
│   │   ├── Services.tsx         # Comprehensive service catalog & materials matrix
│   │   ├── ServiceDetails.tsx   # Interactive tabbed technical deep-dive
│   │   ├── About.tsx            # Company values, GAF Master Elite credentials
│   │   └── Contact.tsx          # Dedicated contact dispatch & quote calculator
│   ├── App.tsx                  # Root layout, routing state, modal coordination
│   ├── index.css                # Tailwind v4 theme declarations & base styles
│   ├── main.tsx                 # React entry point
│   ├── types.ts                 # Strongly typed TypeScript interfaces
│   └── vite-env.d.ts            # Vite client type environment definitions
```

---

## 7. Deployment Instructions

### Deploy to Google Cloud Run (Default Environment)
1. Build the production assets:
   ```bash
   npm run build
   ```
2. The bundled container is automatically built with Node.js and served on port `3000`.

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```
Set root directory to `./`, build command to `npm run build`, and output directory to `dist`.

### Deploy to Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Set public directory to 'dist' and configure as single-page app
npm run build
firebase deploy --only hosting
```

---

## 8. Portfolio Showcase Features for Hiring Managers

- **Interactive Leads Manager**: Click the **"Leads Database"** button in the top navigation bar or footer to inspect captured submissions in real-time, modify lead statuses (`New`, `Contacted`, `Inspection Scheduled`, `Quote Delivered`, `Archived`), or generate test leads.
- **Client-Side Validation**: Try submitting incomplete or invalid email/phone combinations in the Quote Form to observe real-time inline validation feedback.
- **Dynamic Estimates**: Switch between services on the **Service Details** page to view live updates to technical process steps, warranty specifications, and pricing guidelines.
