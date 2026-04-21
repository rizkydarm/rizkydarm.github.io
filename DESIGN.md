# DESIGN.md
## Design System Reference (extracted from example.html)

---

## 🎨 Color Palette
### Primary
```
#6c63ff  - Main brand purple
#667eea - Gradient start
#764ba2 - Gradient end
```

### Neutrals
```
#333333  - Dark text
#666666  - Secondary text
#777777  - Muted text
#eeeeee  - Border/light grey
#f9f9f9  - Light background
#1a1a2e  - Footer dark
#ffffff  - White
```

### Accent
```
#ffd700  - Gold highlight (hero name)
```

### Gradients
```
Linear 135deg: #667eea → #764ba2
Linear 90deg:  #667eea → #764ba2
```

---

## 📐 Typography
### Base
- Font: Segoe UI → Tahoma → Geneva → Verdana → sans-serif
- Body: 1rem / 1.6 line-height
- Smooth scrolling enabled

### Scale
| Element | Size | Weight |
|---------|------|--------|
| Hero h1 | 3.5rem | 700 |
| Hero h2 | 1.5rem | 400 |
| Section h2 | 2.5rem | 700 |
| Card h3 | 1.3rem | 600 |
| Body | 1rem | 400 |
| Small | 0.8-0.95rem | 400 |
| Buttons | 1rem / 1.1rem | 600 |

---

## 🧱 Layout System
### Container
- Max width: `1100px`
- Horizontal padding: `20px`
- Centered with `margin: 0 auto`

### Spacing
- Section padding: `100px 0`
- Section title bottom margin: `60px`
- Card padding: `30px`
- Gap between grid items: `30px`

### Grid
#### Two column:
`grid-template-columns: 1fr 1fr`
- Used for: About, Contact

#### Responsive auto-fit:
Skills: `repeat(auto-fit, minmax(250px, 1fr))`
Projects: `repeat(auto-fit, minmax(320px, 1fr))`

---

## 🎯 Components
### Navbar
- Fixed top, 70px height
- Glass effect: `rgba(255,255,255,0.95)` + `backdrop-filter: blur(10px)`
- Shadow: `0 2px 15px rgba(0,0,0,0.1)`
- Hover underline animation from left

### Cards
- Border radius: `15px`
- Base shadow: `0 5px 20px rgba(0,0,0,0.08)`
- Hover: translateY(-10px) + increased shadow + border color change
- Transition: all 0.3s ease

### Buttons
- Border radius: `50px` (rounded pills)
- Primary: solid white background, brand text
- Outline: 2px transparent border
- Hover: translateY(-3px) + shadow

---

## ✨ Animation System
### Timing
- Default duration: `0.3s` ease
- Scroll reveal: `0.8s` ease
- Skill bars: `1.5s` ease
- Hero stagger: 0.2s delay per element

### Effects
1. **fadeInUp**: `opacity: 0 → 1` + `translateY(30px → 0)`
2. **Reveal on scroll**: 800ms ease from bottom
3. **Hover lift**: -3px translateY + shadow
4. **Border underline**: width 0 → 100% on hover

---

## 📱 Responsive Breakpoints
### Mobile (<= 768px)
- Hamburger menu replaces desktop nav
- All grids collapse to single column
- Hero text scale down: 3.5rem → 2.2rem
- Buttons stack vertically

---

## 🎭 Interactions
- Smooth scroll enabled globally
- Sticky nav with glass effect
- Scroll reveal animations
- Active nav link highlighting based on scroll position
- Scroll to top button (appears >500px scroll)
- Skill bars animate when in viewport