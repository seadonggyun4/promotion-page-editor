<img width="300" height="300" alt="logo" src="https://github.com/user-attachments/assets/4ca6be3b-249e-4ac7-aae5-2330abbbced8" />

# PromoKit

**Event landing pages in 5 minutes.** Stop writing HTML/CSS and adjusting button coordinates manually.

## The Problem

Frontend developers repeatedly receive event landing page requests from planners. Each time, you need to:
- Write HTML/CSS from scratch
- Manually calculate button positions
- Adjust coordinates pixel by pixel
- Repeat for every new campaign

## The Solution

PromoKit lets you visually place buttons on the planner's image and instantly generate production-ready code for your stack.

```
1. Upload image from planner
2. Drag & drop buttons
3. Copy code to your project
```

## Code Generation

Export code that matches your existing project environment. Select framework and styling method, then copy or download.

**Frameworks**
| Output | Description |
|:------:|:------------|
| HTML/CSS/JS | Vanilla implementation, zero dependencies |
| React TSX | TypeScript functional component |
| Vue 3 SFC | Composition API single file component |

**Styling**
| Method | HTML | React | Vue |
|:------:|:----:|:-----:|:---:|
| CSS | ✓ | ✓ | ✓ |
| SCSS | ✓ | ✓ | ✓ |
| Styled Components | - | ✓ | - |
| Emotion | - | ✓ | - |
| Tailwind CSS | ✓ | ✓ | ✓ |

## Features

- **21 Button Presets** - Solid colors, gradients, ready to use
- **Drag & Drop Positioning** - Visual placement with @dnd-kit
- **Real-time Preview** - See changes instantly
- **Copy to Clipboard** - No download needed, just paste
- **Syntax Highlighting** - Preview generated code with Prism
- **i18n** - English, Korean, Japanese

## Quick Start

```bash
git clone https://github.com/your-username/promo-kit.git
cd promo-kit
npm install
npm run dev
```

## Tech Stack

- React 18 + TypeScript
- Vite
- Styled Components
- Zustand
- @dnd-kit/core
- react-i18next
- prism-react-renderer

## Project Structure

```
src/
├── app/           # App config, providers
├── pages/         # Home, Editor pages
├── widgets/       # Menu, Preview, Webview
├── features/      # Download, Button Editor
└── shared/        # Types, store, constants
```

## License

MIT
