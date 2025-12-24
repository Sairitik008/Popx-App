📱 PopX – Mobile-First React UI

PopX is a mobile-first React application designed to replicate a real mobile app experience in the browser.
The project focuses on pixel-consistent layouts, full-screen mobile views, and desktop preview via a mobile wrapper, without layout shifts or overflow issues.

🚀 Features

Mobile-first UI (built for real phones, not resized desktops)

Consistent width & height across all screens

Zero unwanted scrollbars in mobile view

Desktop preview using a mobile frame

Clean React + CSS architecture

No UI libraries — pure CSS control

Optimized for small devices (360px–390px)

🧱 Screens Implemented

Welcome Screen

Login Screen

Create Account (Signup)

Profile / Account Settings

Each screen:

Occupies full height on mobile

Aligns perfectly inside the mobile wrapper on desktop

Shares consistent spacing and typography

🧠 Core Design Philosophy
Mobile First (Non-Negotiable)

On mobile devices:

App fills the entire screen

No card, no shadow, no border

Feels like a native app

On desktop:

App is wrapped inside a MobileWrapper

Fixed max-width (390px)

Rounded corners + shadow for preview

This avoids common UI mistakes like:

Fake mobile cards on mobile

Nested scrolling containers

Inconsistent screen heights

🗂️ Project Structure
src/
│
├── components/
│ └── MobileWrapper.jsx
│
├── pages/
│ ├── Welcome.jsx
│ ├── Login.jsx
│ ├── Signup.jsx
│ └── Profile.jsx
│
├── styles/
│ ├── index.css
│ ├── MobileWrapper.css
│ ├── Welcome.css
│ ├── Login.css
│ ├── Signup.css
│ └── Profile.css
│
├── App.jsx
└── main.jsx

🎨 Styling Strategy

No inline styles

No CSS frameworks

Each screen has its own CSS file

Layout control is done via:

flex: 1

controlled padding

no 100vh hacks

no calc() height tricks

📐 Mobile Wrapper Logic

The MobileWrapper is only meant for desktop preview.

Behavior

Desktop:

Max width: 390px

Rounded corners

Shadow

Mobile:

Full width

No border

No shadow

This ensures the app behaves correctly on real devices.

🛠️ Tech Stack

React (Vite)

React Router

Plain CSS (no Tailwind, no MUI)

LocalStorage for mock auth data

📦 Installation
git clone <your-repo-url>
cd popx
npm install
npm run dev

🌍 Deployment (Netlify)

Push project to GitHub

Go to https://www.netlify.com/

Click Add new site → Import from Git

Select repository

Set:

Build command: npm run build

Publish directory: dist

Deploy
