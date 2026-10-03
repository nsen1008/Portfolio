# Portfolio — Nguyễn Thanh Sang

Personal portfolio website designed and developed with a modern tactile aesthetic, fluid micro-interactions, and multi-language support. Built using React 19, TypeScript, Vite, and Tailwind CSS.

---

## Overview

A modern Front-End Developer portfolio showcasing production-ready web applications, interactive case studies, and engineering philosophy. The interface is inspired by high-end tactile design patterns, featuring custom smooth scrolling, tactile grain backgrounds, dynamic theme switching, and responsive bento layouts.

## Key Features

- **Design System & Aesthetics**: Minimalist, tactile aesthetic with paper grain textures, frosted glass cards, balanced typography (Space Grotesk, Plus Jakarta Sans, JetBrains Mono), and curated dark/light color schemes.
- **Bilingual Internationalization (i18n)**: Seamless switching between Vietnamese and English, with URL-driven locale prefixes (`/vi`, `/en`) and automatic document metadata updates.
- **Interactive Project Case Studies**: Detailed project pages highlighting technical challenges, measurable impact, role breakdown, and live preview links.
- **Contact Form with EmailJS**: Direct email delivery via EmailJS integration with fallback support, purpose selectors, and interactive feedback.
- **Interactive 404 Canvas**: Immersive full-screen 404 error experience featuring an animated duck character with mouse-accelerated turbo speed, ambient aurora backdrops, and theme responsiveness.
- **Initial Page Loader**: Smooth entry loading animation with vibrant logo gradient transitions, optimized to only trigger on initial visit or refresh.
- **Performance & SEO**: Client-side routing with React Router, scroll-driven progress tracking, responsive layouts for all device form factors, and fast production bundle output via Vite.

## Tech Stack

- **Core**: React 19, TypeScript
- **Bundler & Tooling**: Vite, Oxlint
- **Styling**: Tailwind CSS v4, Vanilla CSS custom animations
- **Animation & Interaction**: Framer Motion, Lenis Scroll, Canvas Confetti
- **Icons**: Lucide React
- **Integration**: EmailJS

## Project Structure

```text
portfolio/
├── public/                  # Static assets (favicons, images, CV)
│   ├── images/              # Logos, portraits, project screenshots
│   └── favicon.png          # Brand favicon
├── src/
│   ├── assets/              # Component-level static resources
│   ├── components/          # Reusable UI components
│   │   ├── animations/      # Text & scroll animation primitives
│   │   ├── Navbar.tsx       # Navigation bar with theme & language toggle
│   │   ├── Footer.tsx       # Site footer
│   │   ├── PageLoader.tsx   # Entry loading spinner
│   │   └── ContactSection.tsx
│   ├── data/                # Portfolio configuration & project data
│   ├── i18n/                # Localization dictionary (vi / en) & hooks
│   ├── pages/               # Top-level view routes
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── PortfolioPage.tsx
│   │   ├── ProjectDetailPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── NotFoundPage.tsx # Fullscreen 404 canvas
│   ├── App.tsx              # Router configuration & root providers
│   ├── index.css            # Design tokens, theme variables & animations
│   └── main.tsx             # Application entry point
├── .env.example             # Template for required environment variables
├── index.html               # HTML entry with font preconnects & theme script
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm 9.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nsen1008/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Copy `.env.example` to `.env` and provide your EmailJS credentials (optional for contact form testing):
   ```bash
   cp .env.example .env
   ```

   Variables in `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Development

Run the local development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Production Build

Create an optimized production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Author

**Nguyễn Thanh Sang (Sen)**
- Portfolio: [https://github.com/nsen1008/Portfolio](https://github.com/nsen1008/Portfolio)
- Role: Front-End Developer
