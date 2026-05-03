# Clip2Flip Web

Marketing website for the Clip2Flip app — built with [Next.js](https://nextjs.org) and TypeScript.

## Pages

- `/` — Home (hero, How It Works, Why Video Selling Wins, CTA)
- `/terms-of-service` — Terms of Service
- `/privacy-policy` — Privacy Policy

## Prerequisites

- [Node.js](https://nodejs.org) v20 or later
- npm v9 or later (comes with Node.js)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm start` | Start production server (after build) |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata)
│   ├── page.tsx                # Home page
│   ├── home.module.css         # Home page styles
│   ├── globals.css             # Global CSS variables and resets
│   ├── policy.module.css       # Shared styles for policy pages
│   ├── privacy-policy/
│   │   └── page.tsx
│   └── terms-of-service/
│       └── page.tsx
├── components/
│   ├── site-header.tsx         # Navigation bar
│   ├── site-footer.tsx         # Footer with email, chips, social links
│   ├── cta-banner.tsx          # Download CTA with QR code
│   └── store-badges.tsx        # App Store / Google Play buttons
public/
├── images/
│   ├── brand/                  # Logo assets
│   ├── home/                   # Hero phones, CTA background, QR code
│   ├── icons/                  # Icon assets
│   ├── policy/                 # Policy page badge
│   └── store/                  # Store badge images
└── firebase-messaging-sw.js
```

## Environment

No environment variables are required to run this project locally.

> **Note:** `next.config.ts` allows images from `api.builder.io`. Some service card images currently use this remote source.
