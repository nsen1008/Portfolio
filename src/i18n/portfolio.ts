import { useMemo } from 'react';
import { PORTFOLIO_INFO, PROJECTS } from '../data/portfolioData';
import { useLanguage } from './useLanguage';

const englishProjects = [
  {
    "title": "ConDaoTrip — Con Dao Travel & Services",
    "subtitle": "Client project at DUDI Software",
    "category": "Travel & Commerce",
    "description": "A complete travel information and service booking website for Con Dao. Supports eight languages, dynamic API-driven sitemaps and an administration interface.",
    "longDescription": "Developed listing and detail pages for tours, services and news, with reusable navigation, content cards and layouts. Integrated REST APIs for public content and administration of tours, services, categories, banners, articles and contacts. Added support for eight languages with i18next and a dynamic API-driven sitemap with fallback data.",
    "metrics": [
      { "label": "Multilingual", "value": "8 Languages", "desc": "Instant language switching with i18next" },
      { "label": "Response Time", "value": "< 1.4s", "desc": "Server-side Rendering with optimized Next.js" },
      { "label": "Sitemap Generation", "value": "100% Dynamic", "desc": "Live REST API sync with fallback data" },
      { "label": "Deployment", "value": "Live Production", "desc": "Operating live at condaotrip.com.vn" }
    ],
    "keyFeatures": [
      "Eight languages with i18next and locale-based routing",
      "Listing and detail pages for tours, travel services, news and contacts",
      "REST API integration for public content and the administration dashboard",
      "Dynamic API-driven sitemaps with fallbacks for failed requests"
    ],
    "caseStudy": {
      "challenge": "A comprehensive travel platform for Con Dao needed to organize diverse data (tours, hotels, speedboats, guides). The key requirements were ultra-fast page speeds, seamless 8-language support for international visitors, and top-tier SEO to compete in search rankings.",
      "solution": "Built with Next.js and i18next with locale-based routing, modular reusable components (tour cards, booking triggers, photo galleries), and dynamic XML sitemap generation with defensive fallback data.",
      "result": "Operating reliably on live production at condaotrip.com.vn, serving thousands of monthly visitors and travel bookings with high search engine rankings."
    },
    "contributions": [
      { "title": "Next.js SSR & Multilingual Setup", "description": "Structured project architecture with clean folder hierarchy and 8 language dictionaries mapped to dynamic routes." },
      { "title": "Reusable Component System", "description": "Designed flexible UI primitives: navigation header, tour cards, booking popups and filter systems." },
      { "title": "REST API Integration & Interceptors", "description": "Encapsulated Axios API clients with request/response interceptors and loading skeleton states." },
      { "title": "Dynamic SEO & XML Sitemap", "description": "Implemented automated sitemap generation from live tour and news endpoints for fast Google indexation." }
    ]
  },
  {
    "title": "Landing Con Dao — Travel & National Park Discovery",
    "subtitle": "Client project at DUDI Software",
    "category": "Landing Page & Animation",
    "description": "A cinematic tourism landing page for Con Dao with smooth scrolling, GSAP, ScrollTrigger, Lenis and parallax effects.",
    "longDescription": "Built a responsive landing page with a hero, destination story, featured tours, interactive map, services and photo gallery. Implemented scroll-based animations, parallax, text reveals and smooth scrolling using GSAP and Lenis. Separated tour and service data from interface components for easier maintenance.",
    "metrics": [
      { "label": "Frame Rate", "value": "60 FPS", "desc": "Fluid scrolling with zero frame drops" },
      { "label": "LCP Score", "value": "< 1.2s", "desc": "Optimized WebP assets and priority loading" },
      { "label": "Animation Tech", "value": "Lenis + GSAP", "desc": "Inertial Scroll with ScrollTrigger" },
      { "label": "Deployment", "value": "Live Production", "desc": "condaonationalpark.com" }
    ],
    "keyFeatures": [
      "Smooth inertial scrolling with Lenis",
      "ScrollTrigger animations with parallax and text reveals",
      "Interactive destination map and optimized WebP image gallery",
      "A data layer separated from UI components"
    ],
    "caseStudy": {
      "challenge": "Create a cinematic visual storytelling experience showcasing the untouched landscapes and historical heritage of Con Dao, while maintaining high mobile responsiveness and snappy load times.",
      "solution": "Combined GSAP ScrollTrigger with Lenis inertial smooth scrolling, staggered text reveals, layered parallax, an interactive exploration map, and progressive WebP imagery.",
      "result": "Delivered a captivating landing page at condaonationalpark.com that significantly boosted average session duration and visitor exploration."
    },
    "contributions": [
      { "title": "Inertial Smooth Scrolling", "description": "Integrated Lenis synchronizing with the browser refresh rate for stutter-free scroll motions." },
      { "title": "ScrollTrigger & Parallax Timelines", "description": "Orchestrated layered visual depth effects combining typography reveals and landscape photography." },
      { "title": "Interactive Exploration Map", "description": "Engineered an interactive tourist map with clickable pins highlighting marine reserves and historical landmarks." },
      { "title": "Asset & WebP Optimization", "description": "Implemented modern image formatting and hero priority preloading to optimize Core Web Vitals." }
    ]
  },
  {
    "title": "Cao Nguyen Xanh — Printing & Packaging",
    "subtitle": "Client project at DUDI Software",
    "category": "Business Website",
    "description": "A corporate website for a printing and packaging manufacturer, with debounced search, URL-based category filters and centralized API handling.",
    "longDescription": "Built company information, product listing and detail pages, design collections, projects and industry pages. Implemented debounced product search, category filters and pagination synchronized with URL parameters. Organized API services by business domain, standardized error handling, and built administration interfaces for products, collections and projects.",
    "metrics": [
      { "label": "Search Speed", "value": "300ms Debounce", "desc": "70% reduction in redundant server queries" },
      { "label": "URL Sync", "value": "Query Params", "desc": "Shareable filter states and pagination" },
      { "label": "API Architecture", "value": "Modular Services", "desc": "Standardized interceptors and error handling" },
      { "label": "Deployment", "value": "Live Production", "desc": "caonguyenxanh.com.vn" }
    ],
    "keyFeatures": [
      "Debounced product search and smooth pagination",
      "URL-synchronized category filters for SEO and bookmarking",
      "Modular API services with interceptors for error handling",
      "Administration interfaces for products, collections and business contact forms"
    ],
    "caseStudy": {
      "challenge": "A commercial packaging and printing manufacturer with hundreds of catalog items across multiple industries required an authoritative corporate presence with instant catalog filtering and streamlined quotation inquiries for B2B partners.",
      "solution": "Engineered 300ms debounced live search, synced category filters directly into URL query parameters for instant link sharing, and unified enterprise inquiry forms with frontend validation.",
      "result": "Live in production at caonguyenxanh.com.vn, streamlining digital catalog access and accelerating client sales inquiries."
    },
    "contributions": [
      { "title": "URL-driven Filter State", "description": "Leveraged React Router useSearchParams to synchronize industry categories and pagination in browser URLs." },
      { "title": "Debounced Search Engine", "description": "Reduced unnecessary backend load by throttling requests until users stop typing." },
      { "title": "Centralized API Architecture", "description": "Structured domain-specific API clients with error handling interceptors and fallback models." },
      { "title": "B2B Quotation Workflow", "description": "Engineered inquiry forms with product ID attachments and real-time client-side validation." }
    ]
  },
  {
    "title": "Odyssey Ha Giang — Ha Giang Adventure Tours",
    "subtitle": "Client project at DUDI Software",
    "category": "Tours & Experiences",
    "description": "A travel website for Ha Giang Loop adventures, with international SEO, lazy-loaded images and custom metadata hooks.",
    "longDescription": "Developed tour listing and detail pages, destinations, galleries, articles, transport and accommodation information. Integrated administrator authentication and article management APIs, transforming backend data for frontend display. Built custom hooks for dynamic titles, descriptions, Open Graph and Twitter metadata, alongside lazy-loaded images.",
    "metrics": [
      { "label": "SEO Metadata", "value": "Dynamic Hooks", "desc": "Live Open Graph & Twitter Cards sync" },
      { "label": "Layout Stability", "value": "CLS = 0", "desc": "Fixed aspect ratio image wrappers" },
      { "label": "Image Delivery", "value": "Lazy Loading", "desc": "Bandwidth conservation on mobile networks" },
      { "label": "Deployment", "value": "Live Production", "desc": "odysseyhagiangloop.com" }
    ],
    "keyFeatures": [
      "Custom hooks for dynamic titles, descriptions and Open Graph metadata",
      "Tour itineraries, destinations and high-resolution image galleries",
      "API integration for administrator authentication and content management",
      "Loading states and carefully designed error fallbacks"
    ],
    "caseStudy": {
      "challenge": "Targeted at international backpackers undertaking the Ha Giang Motorbike Loop, the website required vivid daily itinerary maps, rich landscape galleries, and robust social sharing metadata.",
      "solution": "Built custom dynamic SEO metadata hooks updating Open Graph and Twitter card tags per tour, designed interactive daily route timelines, and implemented lazy-loaded high-resolution image galleries.",
      "result": "Successfully launched at odysseyhagiangloop.com with international visual standards and strong organic social media discovery."
    },
    "contributions": [
      { "title": "Custom Dynamic SEO Hook", "description": "Authored lightweight hooks dynamically updating title and meta tags without heavy external libraries." },
      { "title": "Interactive Route Timeline", "description": "Structured intuitive day-by-day itineraries detailing elevation, milestones and photo viewpoints." },
      { "title": "Landscape Media Optimization", "description": "Utilized responsive picture elements and deferred image loading for mountainous photography." },
      { "title": "Admin Authentication & Portal", "description": "Integrated token-based auth for content managers editing tour programs and travel articles." }
    ]
  },
  {
    "title": "Mon Qua Nho — Community Sharing Platform",
    "subtitle": "Internship project at DUDI Software",
    "category": "Web App & Realtime",
    "description": "A community platform for sharing items, with real-time Socket.IO messaging, OTP authentication, TanStack Query and Zustand.",
    "longDescription": "Built item discovery, exchange posts, detail pages, item requests and profile management. Integrated sign-in, registration, OTP verification and password recovery. Used TanStack Query for data caching and Zustand for application state. Implemented real-time Socket.IO messaging and administration dashboards for users, items and transactions.",
    "metrics": [
      { "label": "Real-time Chat", "value": "Socket.IO", "desc": "Bidirectional instant messaging & notifications" },
      { "label": "Server State", "value": "TanStack Query", "desc": "Optimistic updates and smart cache management" },
      { "label": "Client State", "value": "Zustand Store", "desc": "Lightweight authentication and cart session store" },
      { "label": "Authentication", "value": "OTP Flow", "desc": "Secure verification and password recovery" }
    ],
    "keyFeatures": [
      "Real-time messaging with Socket.IO Client",
      "Account authentication with OTP verification and profile management",
      "Server-state synchronization and caching with TanStack Query",
      "Administration dashboard for users, categories and transactions"
    ],
    "caseStudy": {
      "challenge": "A high-interaction social giving web application requiring real-time communication between donors and recipients, verified user accounts to prevent spam, and admin oversight for posted items.",
      "solution": "Architected with Next.js, TanStack Query for server caching, Zustand for local sessions, and Socket.IO Client for bidirectional chats, paired with an Ant Design administrative analytics suite.",
      "result": "Finished with full user flows and received top evaluation during the software engineering internship at DUDI Software."
    },
    "contributions": [
      { "title": "Real-time Messaging with Socket.IO", "description": "Constructed two-way chat rooms with read receipts, unread badges and auto-scrolling conversation feeds." },
      { "title": "State Architecture with Query & Zustand", "description": "Decoupled transient UI state from cached asynchronous server data for seamless page transitions." },
      { "title": "Secure Auth & OTP Verification", "description": "Built end-to-end authentication with email OTP code validation and client-side route guards." },
      { "title": "Administrative Analytics Dashboard", "description": "Implemented Ant Design charts and tables monitoring user signups, item approvals and transactions." }
    ]
  }
];

export function usePortfolioData() {
  const { locale, t } = useLanguage();
  return useMemo(() => ({
    info: {
      ...PORTFOLIO_INFO,
      name: t(PORTFOLIO_INFO.name),
      role: t(PORTFOLIO_INFO.role),
      location: t(PORTFOLIO_INFO.location),
      education: {
        ...PORTFOLIO_INFO.education,
        school: t(PORTFOLIO_INFO.education.school),
        major: t(PORTFOLIO_INFO.education.major),
      },
      experience: PORTFOLIO_INFO.experience.map(item => ({
        ...item, role: t(item.role), description: t(item.description),
      })),
    },
    projects: locale === 'en' ? PROJECTS.map((project, index) => ({ ...project, ...englishProjects[index] })) : PROJECTS,
  }), [locale, t]);
}
