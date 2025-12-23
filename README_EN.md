<img width="300" height="300" alt="logo" src="https://github.com/user-attachments/assets/4ca6be3b-249e-4ac7-aae5-2330abbbced8" />

# PromoKit

**Streamline your event landing page workflow.** Place elements visually and generate production-ready code tailored to your project stack.

[Live Demo](https://promotion-page-editor.netlify.app/) · [한국어 문서](./README.md)

---

## Overview

Event landing pages are among the most frequently requested deliverables in frontend development. A typical workflow involves the following steps:

| Step | Traditional Approach | With PromoKit |
|:---:|:---------------------|:--------------|
| 1 | Write HTML/CSS markup | Upload image |
| 2 | Calculate button coordinates manually | Drag and drop placement |
| 3 | Fine-tune pixel positions | Real-time preview |
| 4 | Convert code per framework | Automatic code generation |

PromoKit replaces these repetitive tasks with a visual interface, allowing developers to focus on business logic and user experience.

### Workflow

```
1. Upload the design image provided by your planner
2. Drag and drop buttons, text, and image overlays
3. Select framework and styling options, then generate code
4. Integrate the generated code into your project
```

---

## Key Features

### Button Editor

27 button presets are available, categorized into three groups.

| Category | Count | Presets |
|:--------:|:-----:|:--------|
| Basic | 11 | SimpleBtn, PrimaryBtn, SecondaryBtn, SuccessBtn, DangerBtn, WarningBtn, DarkBtn, OutlineBtn, PillBtn, GhostBtn, NeonBtn |
| Gradient | 10 | GradationBtn, SunsetBtn, OceanBtn, ForestBtn, PurpleHazeBtn, FireBtn, AuroraBtn, MidnightBtn, RoseGoldBtn, CyberBtn |
| Animated | 6 | BounceBtn, GlowBtn, PulseBtn, ShakeBtn, SlideBtn, RippleBtn |

Animated buttons support fine-tuned parameter adjustments including bounce height, glow size and intensity, pulse scale, and shake distance.

### Text Editor

5 text presets are available (H1, H2, H3, Paragraph, Strong).

| Property Group | Adjustable Items |
|:--------------|:-----------------|
| Typography | Font family, size, weight, line height, letter spacing |
| Style | Color, alignment, decoration, transform |
| Effects | Text shadow |

### Image Overlay Editor

12 image style presets are available.

| Category | Presets |
|:--------:|:--------|
| Simple | SimpleImage, RoundedImage, CircleImage, PillImage |
| Framed | BorderedImage, ShadowImage, NeonBorderImage, DoubleFrameImage |
| Decorative | PolaroidImage, GradientBorderImage, GlowImage, VintageImage |

### Version History

Manage your work history and restore previous states.

- Undo/Redo support (`Ctrl+Z` / `Ctrl+Y`)
- History timeline visualization
- Instant navigation to specific snapshots
- Action type icons for differentiation

### Project Management

| Feature | Description |
|:--------|:------------|
| Auto-save | Automatically saves to localStorage every 10 seconds |
| Export/Import | Save and restore project files in JSON format |
| New Project | Safe initialization with confirmation dialog |

---

## Code Generation

Generate code that matches your project's tech stack. Select your preferred framework and styling method combination.

### Supported Frameworks

10 frontend frameworks are supported.

| Framework | Description |
|:---------:|:------------|
| HTML/CSS/JS | Vanilla implementation, zero dependencies |
| React | TypeScript functional component |
| Vue 3 | Composition API SFC |
| Svelte | Svelte component |
| Angular | Angular component |
| Solid | SolidJS component |
| Preact | Preact component |
| Astro | Astro component |
| Qwik | Qwik component |
| Lit | Lit web component |

### Supported Styling

16 CSS methodologies and frameworks are supported. Refer to the compatibility matrix below.

| Style | Vanilla | React | Vue | Svelte | Angular | Solid | Preact | Astro | Qwik | Lit |
|:-----:|:-------:|:-----:|:---:|:------:|:-------:|:-----:|:------:|:-----:|:----:|:---:|
| CSS | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| SCSS | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Styled Components | - | ✓ | - | - | - | - | ✓ | - | - | - |
| Emotion | - | ✓ | - | - | - | ✓ | ✓ | - | - | - |
| Tailwind CSS | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS Modules | - | ✓ | ✓ | ✓ | - | ✓ | ✓ | ✓ | ✓ | - |
| UnoCSS | ✓ | ✓ | ✓ | ✓ | - | ✓ | ✓ | ✓ | ✓ | ✓ |
| Panda CSS | - | ✓ | - | - | - | ✓ | ✓ | - | ✓ | - |
| Vanilla Extract | - | ✓ | - | - | - | ✓ | ✓ | - | ✓ | - |
| Stitches | - | ✓ | - | - | - | - | ✓ | - | - | - |
| Less | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Stylus | ✓ | ✓ | ✓ | ✓ | - | ✓ | ✓ | ✓ | - | - |
| Bootstrap | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | - | ✓ |
| Bulma | ✓ | ✓ | ✓ | ✓ | - | ✓ | ✓ | ✓ | - | ✓ |
| Chakra UI | - | ✓ | - | - | - | - | - | - | - | - |
| MUI (sx) | - | ✓ | - | - | - | - | - | - | - | - |

### Code Quality Options

Three options are available to control the quality of generated code.

#### Responsive
Automatically generates media queries based on viewport size.
- Mobile (≤480px), tablet (≤768px), and desktop breakpoint support
- Relative adjustment of element positions and sizes

#### Accessibility (a11y)
Generates accessibility attributes following [WCAG 2.1](https://www.w3.org/WAI/standards-guidelines/wcag/) guidelines.

| Attribute | Description |
|:----------|:------------|
| `aria-label` | Provides text alternatives for buttons and interactive elements |
| `role` attribute | Specifies semantic roles for elements |
| `aria-describedby` | Links references for elements requiring additional description |
| Focus styles | Provides visual feedback during keyboard navigation |

> **Note**: Due to the nature of image-based layouts, screen reader user experience may be limited. Enabling accessibility options for production deployment is recommended. Consider supplementing generated code with additional text alternatives as needed.

#### SEO
Generates meta tags for search engine optimization and social media sharing.
- Open Graph protocol meta tags
- Twitter Card meta tags

---

## Getting Started

### Installation

```bash
git clone https://github.com/seadonggyun4/promo-kit.git
cd promo-kit
npm install
npm run dev
```

### Development Commands

| Command | Description |
|:--------|:------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

---

## Tech Stack

| Category | Technology |
|:--------:|:-----------|
| Framework | React 18, TypeScript, Vite |
| State Management | Zustand |
| Styling | Styled Components |
| Drag & Drop | @dnd-kit/core |
| Internationalization | react-i18next (Korean, English, Japanese) |
| UI Feedback | SweetAlert2, seo-toast |

---

## Project Structure

Follows the [Feature-Sliced Design](https://feature-sliced.design/) architecture.

```
src/
├── app/                        # Application configuration, routing
├── pages/                      # Page components
│   ├── home/                   # Landing page
│   └── editor/                 # Editor page
├── widgets/                    # Independent UI blocks
│   ├── editor-panel/           # Edit panel
│   └── preview-panel/          # Preview panel
├── features/                   # Business feature units
│   ├── button-editor/          # Button editing feature
│   ├── text-editor/            # Text editing feature
│   ├── image-overlay-editor/   # Image overlay editing feature
│   ├── image-upload/           # Image upload feature
│   ├── download/               # Code generation & download feature
│   └── version-history/        # Version history management feature
├── entities/                   # Domain entities
│   ├── button/                 # Button style components
│   ├── text/                   # Text style components
│   └── image-overlay/          # Image overlay styles
└── shared/                     # Shared resources
    ├── store/                  # Zustand state stores
    ├── types/                  # TypeScript type definitions
    ├── constants/              # Constants and preset definitions
    ├── config/                 # Configuration (i18n, etc.)
    └── ui/                     # Common UI components
```

---

## License

MIT License. See the [LICENSE](./LICENSE) file for details.
