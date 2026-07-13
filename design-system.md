# AquiferGrowth Design System

A high-contrast, editorial design system built around bold display type, a single warm-pink accent, and clean off-white surfaces. Tone: confident, operational, anti-fluff. Visual feel: editorial magazine meets ops dashboard.

---

## 1. Brand Foundations

**Voice / tone**
- Declarative, short sentences. No fluff.
- Pattern: setup → 3 specifics → "That's X, Y, and Z" close.
- Lowercase only for body; uppercase for all headings, badges, eyebrows.
- Em-dashes generally avoided in body copy — replaced with commas.

**Visual identity**
- One accent color (pink). Used sparingly for emphasis, key words in H2s, accent stripes on cards, primary CTAs.
- Backgrounds are off-white (#F9F7F2) with a subtle radial dot grid.
- Cards sit on a slightly warmer near-white (#FDFCF9) with very subtle borders.
- Dark "outcome" bands break up otherwise light pages.

---

## 2. Color Palette

### Brand
| Token | Hex | Usage |
|---|---|---|
| `--accent-primary` | `#FF4D6D` | Pink. Primary CTA, gradient text in H2s, accent stripes on cards, badge for "Most Common" pricing tier, eyebrow labels |
| `--accent-orange` | `#FF7E5F` | Secondary warm tone. Used in gradients with pink for text-gradient effect |
| `--accent-glow` | `rgba(255, 77, 109, 0.2)` | Subtle pink shadow / glow on hover states |

### Surfaces
| Token | Hex | Usage |
|---|---|---|
| `--bg-primary` | `#F9F7F2` | Page background (warm off-white / cream) |
| `--bg-secondary` | `#FFFFFF` | Pure white cards, nav pill background |
| `--bg-dark` | `#1A1A1A` | Dark transition sections, badge background, outcome pill background |
| Card off-white | `#FDFCF9` | Capability cards, pricing cards, comms body — a touch warmer than pure white |

### Text
| Token | Hex | Usage |
|---|---|---|
| `--text-primary` | `#1A1A1A` | Headings, primary body copy |
| `--text-secondary` | `#555555` | Subheads, body paragraphs, taglines |
| Card body | `#555` / `#444` | Description text inside cards |
| `--text-on-dark` | `#F9F7F2` | Text on dark backgrounds (dark sections, badges, outcome pills) |

### Borders & State
| Token | Hex / Value | Usage |
|---|---|---|
| `--border-color` | `#1A1A1A` | Solid thin borders on dark elements |
| `--border-muted` | `#D1D1D1` | Dot grid background |
| Subtle card border | `rgba(0, 0, 0, 0.06)` | Default 1px border on cards |
| Stronger card border | `rgba(0, 0, 0, 0.12)` | Card border on open / hover state |

### Status / Semantic (used inside UI mockups, not page chrome)
| Use | Color |
|---|---|
| Success / matched / synced | `#27ae60` / `#10b981` |
| Warning / capped / flagged | `#f39c12` / `#f59e0b` |
| Error / at-risk / overselling | `#e74c3c` / `#ef4444` |
| Info / status | `#3b82f6` (blue), `#a78bfa` (purple) |

---

## 3. Typography

### Font families
| Token | Family | Usage |
|---|---|---|
| `--font-sans` | `Inter` | Body copy, paragraphs, secondary UI |
| `--font-display` | `Inter Tight` | All headings (H1–H6), badges, eyebrow labels, button text, big numbers |
| `--font-mono` | `IBM Plex Mono` | Code, system labels (e.g. "INSTANCE: AQ-OPS-V3"), terminal-style UI |

Loaded via Google Fonts; weights used: 400, 700, 800 (Inter), 800 (Inter Tight), 800 (Syne, occasionally).

### Heading defaults (global)
```
font-family: Inter Tight
font-weight: 800
line-height: 1.1
letter-spacing: -0.04em
text-transform: uppercase
color: #1A1A1A
```

### Type scale (functional, not strict modular)
| Use | Size | Weight | Line height | Letter-spacing | Notes |
|---|---|---|---|---|---|
| Hero H1 | clamp(3rem, 7vw, 5rem) | 800 | 1.05 | -0.04em | All caps. Pink gradient on action verbs (BUILD / ENGINEER / RUN). |
| Section H2 (large) | clamp(2rem, 4.5vw, 3.4rem) | 800 | 1.05 | -0.04em | All caps. `text-wrap: balance` for clean line breaks. |
| Section H2 (compact, with badge) | inherit (~2rem) | 850 | inherit | -0.02em | The "Work That Speaks" pattern: smaller, with pink-gradient accent on one word. |
| Discipline title (H3) | clamp(1.5rem, 2.5vw, 1.9rem) | 800 | 1.15 | -0.03em | Title case. The "Inventory Management" headings. |
| Card title | 1.25rem | 800 | 1.2 | -0.02em | How We Plug-In, FAQ summaries, Pricing tier descriptions |
| Capability card title | 0.92rem | 800 | 1.2 | -0.01em | Title case, not uppercase |
| Body large | 1.15rem | 400 | 1.55–1.65 | -0.005em | Service taglines, section subheads |
| Body | 1rem | 400 | 1.6 | normal | Default paragraph |
| Body small | 0.92–0.95rem | 400 | 1.55–1.65 | normal | Card body text |
| Tiny / micro | 0.62–0.78rem | 800 | normal | 0.12–0.16em | Uppercase eyebrows, badges, label chips |

### Text treatments
- **Gradient accent on key word**: `background: linear-gradient(135deg, #FF4D6D, #FF7E5F)` clipped to text. Used on 1–2 words inside large H2s.
- **All caps eyebrow**: tiny font (0.62–0.78rem), weight 800, letter-spacing 0.12–0.16em, pink color, used as section/category labels (e.g. "OUTCOME", "MANAGED OPS", "STARTER").

---

## 4. Spacing Scale

| Token | Value (rem) | Px | Common use |
|---|---|---|---|
| `--space-xs` | 0.5rem | 8px | Tight inline gaps |
| `--space-sm` | 1rem | 16px | Container padding, small gaps |
| `--space-md` | 2rem | 32px | Grid gaps, card padding |
| `--space-lg` | 4rem | 64px | Section padding (formerly default; now usually tightened to 2rem) |
| `--space-xl` | 8rem | 128px | Reserved; rarely used |

**Section padding (current):** Most page sections use `padding: 2rem 0` to keep the page tight. Hero is `padding: 3rem 0 0` (matches across pages). Case studies bottom is `5rem` for breathing room before footer.

**Card padding:** capability cards `0.95rem 1.05rem`, pricing cards `2rem 1.75rem`, FAQ summaries `1.1rem 1.4rem`.

**Section intro to grid gap:** ~2.5rem between section header and the content grid below it.

---

## 5. Radius, Borders & Shadows

### Radius
| Token | Value | Usage |
|---|---|---|
| `--radius-pill` | 9999px | Buttons, badges, FAQ chevron container, status pills, "Most Common" label |
| `--radius-lg` | 24px | Section cards, large content cards |
| `--radius-md` | 12px | Default images, FAQ items |
| 14–18px (ad-hoc) | — | Most cards (capability cards: 12px, pricing cards: 18px, FAQ items: 14px) |
| 20px | — | Case study listing cards |

### Borders
- Default card border: `1px solid rgba(0, 0, 0, 0.06)`
- Featured/pricing highlight border: `1.5px solid var(--accent-primary)`
- Accent stripe on cards: `border-left: 3px solid var(--accent-primary)` (capability cards, comms body) OR `border-top: 3px solid var(--accent-primary)` (How We Plug-In cards)
- Outline button border: `1.5px solid rgba(0, 0, 0, 0.2)`

### Shadows
- Card hover lift: `0 20px 40px rgba(0, 0, 0, 0.08)`
- Featured pricing card: `0 10px 30px rgba(255, 77, 109, 0.08)` (pink-tinted glow)
- Open FAQ item: `0 4px 18px rgba(0, 0, 0, 0.04)`
- Subtle ambient on white cards: `0 10px 40px rgba(0, 0, 0, 0.03)`

---

## 6. Layout

### Container
```
max-width: 1200px
margin: 0 auto
padding: 0 1rem
```

### Section intro pattern (centered)
```
max-width: 960px (was 800px — widened for "SEVEN OPERATIONAL DISCIPLINES." to fit on one line)
text-align: center
display: flex; flex-direction: column; align-items: center; gap: 1.25rem
margin: 0 auto 2rem
```

### Grids
- Capability cards: `repeat(2, 1fr)`, gap 0.75rem, single column on ≤720px
- Pricing tiers / How We Plug-In cards: `repeat(3, 1fr)`, gap 1.25rem, single column on ≤900px
- Case study cards: `repeat(3, 1fr)`, gap 2rem, single column on ≤900px
- Discipline (text + visual): `repeat(2, 1fr)`, gap 4rem, `align-items: center`, alternating left/right

### Background pattern
```css
.bg-grid {
  background-image: radial-gradient(#D1D1D1 1px, transparent 1px);
  background-size: 24px 24px;
}
```
Applied to the page body. Visible on the off-white surfaces, hidden under cards.

---

## 7. Component Patterns

### 7.1 Primary CTA button (pink, animated)
```html
<a href="..." class="btn-hero-pink">
  <span>Let's Talk</span>
  <span class="animated-dots">
    <span></span><span></span><span></span>
  </span>
</a>
```
- Background: `#FF7A7A` / `#FF4D6D`
- 2px black border + `4px 4px 0 #000` solid shadow (Neo-brutalist offset)
- Text: black, weight 800, no uppercase transform
- Hover: shadow grows to `8px 8px 0 #000`, button shifts `-4px -4px`
- Dots: 3 black dots that animate sequentially, sit right of the label

### 7.2 Secondary / ghost button
```html
<a href="..." class="btn-secondary">View All Case Studies →</a>
```
- Transparent background
- 1.5px grey border (`rgba(0, 0, 0, 0.2)`)
- Pill radius
- Hover: border + text turn pink, very light pink-tinted background

### 7.3 Badge / pill (dark)
- Dark `#1A1A1A` background, white text
- Tiny font (~0.72rem), weight 800, letter-spacing 0.1–0.14em, uppercase
- Padding `0.5rem 1.25rem`, pill radius
- Used as section category labels above H2s: "OUR APPROACH", "FAQ", "CASE STUDIES", "PRICING", "COMMUNICATION"

### 7.4 Section header pattern
```html
<div class="section-header">
  <div class="badge">CASE STUDIES</div>
  <h2 style="font-weight: 850; letter-spacing: -0.02em;">
    Work That <span class="text-gradient">Speaks</span>
  </h2>
</div>
```
- Flex column, centered, gap 1rem
- Smaller H2 than the giant section-title variant; gradient accent on the final/key word

### 7.5 Capability card (the 2×3 grid pattern)
```html
<div class="ec-cap-grid">
  <div class="ec-cap-card">
    <div class="ec-cap-card__title">Multi-location sync</div>
    <p class="ec-cap-card__body">Shopify, 3PL, and physical locations reconciled daily.</p>
  </div>
  ...
</div>
```
- Off-white `#FDFCF9` background
- 1px border `rgba(0, 0, 0, 0.06)`
- **3px pink left-edge stripe** (`border-left: 3px solid var(--accent-primary)`)
- Radius 12px, padding `0.95rem 1.05rem`
- Title: 0.92rem, weight 800, title case (NOT uppercase)
- Body: 0.82rem, line-height 1.45, color #555
- Grid: 2 columns desktop, 1 column ≤720px

Used to break up dense feature descriptions into scannable atoms.

### 7.6 Outcome pill (dark band)
```html
<div class="ec-outcome-pill">
  <span class="ec-outcome-pill__label">Outcome</span>
  <span class="ec-outcome-pill__text">Numbers you can trust. ...</span>
</div>
```
- Dark `#1A1A1A` background, radius 14px, padding `0.85rem 1.1rem`
- Flex row (wraps), gap 0.65rem, items baseline-aligned
- Label: 0.62rem, weight 800, letter-spacing 0.16em, uppercase, **pink color**, flex-shrink 0
- Text: 0.88rem, line-height 1.5, white

Used as the closing line of every discipline section — punchy 3-sentence rhythm: setup → 3 specifics → "That's X, Y, Z" close.

### 7.7 How We Plug-In / Engagement card (3-column)
- Off-white card, radius 16px, padding `1.75rem 1.5rem`
- **3px pink top-edge stripe** (`border-top: 3px solid var(--accent-primary)`)
- Small pink eyebrow number "01 / 02 / 03"
- Title: 1.25rem, weight 800
- Body: 0.92rem, line-height 1.6, color #555

### 7.8 Pricing card
- Off-white card, radius 18px, padding `2rem 1.75rem`
- Pink eyebrow tier name (uppercase, tiny)
- Big amount: 2.4rem, weight 850, letter-spacing -0.03em
- "/mo" suffix small and grey
- Body description below
- **Featured/highlighted variant**: 1.5px pink border + pink-tinted shadow + 4px upward translate + pink "MOST COMMON" pill absolutely positioned at top center

### 7.9 FAQ accordion (native `<details>`)
```html
<details class="ec-faq__item">
  <summary class="ec-faq__q">Question?</summary>
  <div class="ec-faq__a">Answer.</div>
</details>
```
- Off-white card, 1px border, radius 14px
- Question: weight 700, ~1.02rem
- Pink chevron arrow on the right that rotates on open
- Open state: stronger border + subtle shadow
- No JS — native HTML `<details>` element, accessible by default

### 7.10 Case study listing card (rich)
- White background, 1.5px border `#e5e7eb`, radius 20px
- Top "color block" with aspect 9/4 (slug-specific dark background + lighter SVG ellipses blob, OR a hero image with dark gradient overlay)
- "INDUSTRY" tag pill positioned top-left (or bottom-left over images), white-on-glass with blur backdrop
- Content area: white, padding 1.75rem, gap 0.75rem
  - Headline: 0.98rem, weight 700, letter-spacing -0.015em (compact and readable)
  - "Read case study →" outlined CTA pill — fills dark on hover
- Card hover: lifts 6px with shadow

### 7.11 Discipline section pattern (alternating)
Structure for each of the 7 disciplines:
- 2-column grid, alternating left/right, `align-items: center`
- Left/right column 1: **text panel**
  - Big pink number eyebrow (01–07)
  - H3 title (large, uppercase, weight 800)
  - Tagline (1.15rem, weight 400, secondary grey — NOT bold)
  - 5–6 capability cards in 2-col grid (pattern 7.5)
  - Dark outcome pill (pattern 7.6)
- Other column: **visual mockup** — a fake spreadsheet/dashboard/table/chart styled to look like a window with chrome dots, header row, data rows, status badges

---

## 8. Visual Mockups (in-UI illustrations)

Many sections include faux-UI screenshots built in pure HTML/CSS — never raster images. Pattern:

```html
<div class="ec-mock">
  <div class="ec-mock__chrome">
    <span></span><span></span><span></span>     <!-- traffic lights -->
    <span class="ec-mock__title">Channel Sync · Live</span>
  </div>
  <div class="ec-mock__body">
    <!-- table / cards / chart -->
  </div>
  <div class="ec-mock__footer">5 channels live · Last sync 30s ago</div>
</div>
```

Common conventions:
- Macos-style 3 traffic-light dots in top-left of chrome
- Status pills inside use semantic colors (green/yellow/coral)
- Numbers shown in mono font when "system-like"
- Before/After "pipeline" pattern: 2 columns — messy spreadsheet source ("BEFORE") on left → clean managed table ("AFTER") on right

---

## 9. Animations & Motion

| Token | Value | Use |
|---|---|---|
| `--transition-fast` | `0.15s ease` | Link colors, button hovers (color/border changes) |
| `--transition-slow` | `0.4s cubic-bezier(0.16, 1, 0.3, 1)` | Fade-in entrance, card lifts |

### Common micro-animations
- **Fade-in on load**: `@keyframes fadeIn` — opacity 0 → 1 with 10px upward translate. Applied via `.animate-fade-in`.
- **Card hover lift**: `transform: translateY(-6px)` + shadow grows
- **Button "neo-brutalist" hover**: shifts -4px, shadow grows from 4px → 8px
- **Animated dots in CTA**: 3 dots, each with sequential `animation-delay` (0s, 0.2s, 0.4s), opacity / scale pulse loop
- **FAQ chevron**: 12×12px arrow built from CSS borders, rotates 45° → -135° on open
- **Tab pill active state**: pink background, no transition (instant) for snappiness
- **Scroll-reveal**: IntersectionObserver-triggered fade + 20px translateY up on section entrance. Threshold 0.12, unobserve after first trigger (to avoid replays)

### Motion principles
- Hover effects are subtle (small translate, color shift) — never aggressive
- Page-load animations are gentle fade-in only; never bouncy or attention-grabbing
- Heavy in-mockup animations (pulses, dashes flowing) are reserved for the operational dashboard mockups to suggest "live system"
- `prefers-reduced-motion` respected on smooth-scroll anchors

---

## 10. Voice & Copy Patterns

### Section structure rhythm (every discipline)
1. Tagline (1 line, soft secondary grey weight 400)
2. 5–6 capability cards (terse 1-line descriptions per capability)
3. Outcome pill (3-sentence rhythm: setup → 3 specifics → "That's X, Y, Z" close)

### Outcome pill formula
```
[Short setup sentence]. [Three short noun phrases, comma-separated]. That's [outcome A], [outcome B], and [outcome C].
```

Examples:
- "Numbers you can trust. You reorder on real data, catch dead stock early, close the month without a fire drill. That's freed cash, protected margin, and hours back every week."
- "Every PO accounted for. Short shipments caught at the dock, suppliers paid for what actually landed, COGS that ties to real cost. That's recovered margin, clean AP, and suppliers held to what they shipped."

### Punctuation conventions
- Em-dashes generally replaced with commas in body copy (the project removed them across multiple iterations)
- Sentences kept short and declarative
- Contractions used freely ("we're", "don't", "it's")
- Cadences phrased as "daily, weekly, and monthly"

---

## 11. Page Architecture (canonical)

### Marketing page (ecommerce template)
1. Hero (badge + H1 with gradient accent + soft tagline + primary CTA)
2. Interactive tab demo (pipeline mockups, BEFORE/AFTER pattern)
3. "Who this is for" — 3-column icon grid
4. Disciplines section — N×(text + visual) alternating
5. How We Plug-In — 3-column engagement cards
6. How We Communicate — single body card + dark outcome pill (optional)
7. Pricing — 3-tier cards with middle highlighted
8. FAQ — accordion
9. Case Studies — 3-card rich listing
10. (Footer)

### Homepage
1. Hero (badge + H1 + subhead + primary CTA)
2. Convergence section (icon + statement)
3. Three-act build banner (Plug In → Build → Run)
4. Roadmap / model section
5. How we work cards
6. Case studies
7. Testimonials
8. (Footer)

---

## 12. Quick token export (CSS custom properties)

```css
:root {
  /* Color */
  --bg-primary: #F9F7F2;
  --bg-secondary: #FFFFFF;
  --bg-dark: #1A1A1A;
  --text-primary: #1A1A1A;
  --text-secondary: #555555;
  --text-on-dark: #F9F7F2;
  --accent-primary: #FF4D6D;
  --accent-orange: #FF7E5F;
  --accent-glow: rgba(255, 77, 109, 0.2);
  --border-color: #1A1A1A;
  --border-muted: #D1D1D1;
  --glass-bg: rgba(255, 255, 255, 0.8);
  --glass-border: rgba(0, 0, 0, 0.1);
  --glass-blur: 16px;

  /* Type */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-display: 'Inter Tight', 'Inter', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;

  /* Radius */
  --radius-pill: 9999px;
  --radius-lg: 24px;
  --radius-md: 12px;

  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 4rem;
  --space-xl: 8rem;

  /* Motion */
  --transition-fast: 0.15s ease;
  --transition-slow: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
```
