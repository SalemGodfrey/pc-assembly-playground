# RigLab - PC Assembly Playground

An interactive PC builder simulator with a terminal aesthetic. Browse real components, configure your build, and track compatibility and total price in real time.

Preview Link: 
---

## ✨ Features

- Browse components across 7 categories: Motherboard, CPU, GPU, RAM, PSU, Storage, Cooler
- Terminal-style build log that tracks every selection and change
- Socket compatibility checker (CPU ↔ Motherboard)
- Live total price calculation
- Component data scraped from PCPartPicker

---

## 🛠️ Built With

- **Vite** - Build 
- **React** - Core 
- **Next.js** - App Router
- **Tailwind CSS** - Styling
- **Node.js + Puppeteer** - Component data scraper

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/SalemGodfrey/pc-assembly-playground.git
cd pc-assembly-playground

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
---

## 💾 Updating Component Data

Component data is stored in `prices.json`. To refresh it with the latest prices from PCPartPicker:

```bash
# Script directiory
cd src
cd api

# Run scrapper
node scraper.js
```
The scraper opens a real browser window via Puppeteer. There are few thousand of components, so the process takes a few minutes.

> Inportant note: Manual scraping is not recommended. Component prices are automatically updated once a month via GitHub Actions.

---

## 📁 Project Structure
```
src/
├── api/
│   ├── prices.json
│   └── scraper.js
├── app/
│   ├── cooler/
│   │   └── page.js
│   ├── cpu/
│   │   └── page.js
│   ├── gpu/
│   │   └── page.js
│   ├── psu/
│   │   └── page.js
│   ├── ram/
│   │   └── page.js
│   ├── storage/
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
└── components/
    ├── BottomPanel.jsx
    ├── Card.jsx
    ├── LeftPanel.jsx
    ├── PricesContext.jsx
    └── RightPanel.jsx
```
