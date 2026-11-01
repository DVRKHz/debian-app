# Debian Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-App_Router-black?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-20.9%2B-5FA04E?logo=nodedotjs)](https://nodejs.org/)

A Debian showcase website built with Next.js App Router, React, TypeScript, and
Tailwind CSS. It brings together project information, official Debian news, and
links for choosing and downloading Debian installation images.

## ✨ Features

- 🏠 **Homepage:** Debian artwork, project and community information, a photo
  carousel, and recent Debian news.
- 📰 **Official news:** Fetches the Debian News feed, displays the three latest
  announcements, and revalidates the feed hourly.
- 💿 **Image selector:** Choose a release branch, architecture, and installer.
  Netinst images are available for six architectures; Live images are available
  for amd64.
- 🔗 **Download resolution:** Finds the current Stable image in Debian's official
  `SHA512SUMS` manifest and uses weekly images for Testing. ISO files are
  downloaded directly from Debian's servers.
- 📦 **Release information:** Dedicated pages for the Stable and Testing branches
  at `/releases`.
- 🔎 **Search:** Uses Debian's official search and passes along the selected
  language.
- 🌗 **Theme and language preferences:** Switch between light and dark themes and
  choose a language. Language can follow the browser or be saved locally.
- 🌍 **Localization:** Supports Arabic, Bulgarian, Catalan, Simplified and
  Traditional Chinese, Croatian, Czech, Danish, Dutch, English, Finnish,
  French, Galician, German, Greek, Hungarian, Indonesian, Italian, Japanese,
  Korean, Norwegian Bokmål, Persian, Polish, Portuguese, Romanian, Russian,
  Slovak, Spanish, Swedish, Turkish, Ukrainian, and Vietnamese. The page
  language and text direction are updated as appropriate, including RTL for
  Arabic and Persian.
- ♿ **Accessibility:** Visible focus styles, carousel controls, and motion
  preferences that respect the operating system's reduced-motion setting.

## 🧰 Requirements

- Node.js 20.9 or later
- npm

## 🚀 Getting started

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🏗️ Build and run

```bash
npm run build
npm run start
```

The production server listens on port `3000` by default.

## ☁️ Deployment

This app can be deployed to Vercel. Import the repository and keep the detected
Next.js settings. The project root is `./`, and no environment variables or
static-export configuration are required.

The app uses server routes and incremental revalidation to load news and resolve
download images, so deploy it to a platform that supports these Next.js
features. After deployment, check `/`, `/download`, `/releases`, and
`/api/download`.

## 🧭 Main routes

| Route | Description |
| --- | --- |
| `/` | Homepage, community information, and recent news |
| `/download` | Image selector and download resources |
| `/releases` | Stable and Testing release information |
| `/api/download` | Resolves an image URL from the selected options |

The download API accepts `branch`, `architecture`, and `media` query
parameters. For example:

```text
/api/download?branch=stable&architecture=amd64&media=netinst
```

It returns the image filename and official download URL; it does not proxy or
host ISO files. Invalid selections return an HTTP error.

## 🗂️ Project structure

```text
app/
  api/download/route.ts   Resolves Debian image downloads
  download/page.tsx       Download page
  releases/page.tsx       Release information page
  icon.svg                Favicon
  layout.tsx              Root layout and metadata
  page.tsx                Homepage
  globals.css             Global styles
components/
  community.tsx           Community links and photo carousel
  download-resources.tsx  Official Debian download resources
  download-selector.tsx   Image selector
  footer.tsx              Site footer
  header.tsx              Navigation, search, language, and theme controls
  hero.tsx                Hero section and statistics
  news.tsx                News cards
  releases.tsx            Release information
lib/
  debian-news.ts          Debian News feed parsing and validation
  download.ts             Download option types and validation
  i18n.tsx                Languages, detection, and preferences
```

## 🛠️ Tech stack

- [Next.js](https://nextjs.org/) with the App Router
- [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) for
  parsing the Debian News RDF/XML feed
- [Lucide](https://lucide.dev/) for icons
