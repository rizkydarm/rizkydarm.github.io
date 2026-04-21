# Design System Strategy: The Refractive Architect

## 1. Overview & Creative North Star
This design system is built for the high-end software developer portfolio. The Creative North Star is **"The Refractive Architect."** 

Unlike standard "flat" minimalist sites, this system treats the interface as a series of physical, high-refraction glass layers floating in a void. It rejects the "template" look by using aggressive centered-focus layouts, intentional asymmetry in content distribution, and a strict monochrome-to-teal color ratio. We are moving away from traditional boxes and toward a digital environment that feels clinical, precise, and premium.

## 2. Colors & Surface Logic
The palette is rooted in a deep grayscale monochrome, punctuated by a surgical application of Teal (`#19D9B6`).

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Boundaries are created exclusively through background color shifts. A section should transition from `surface` to `surface-container-low` to define its limits. This creates a more sophisticated, "built" feel rather than a "drawn" feel.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack. We achieve depth through tonal layering:
*   **Base Level:** `surface` (#131313) - The infinite background.
*   **Structural Level:** `surface-container-low` (#1C1B1B) - Large section blocks.
*   **Interactive Level:** `surface-container` (#201F1F) - Cards and primary containers.
*   **Focus Level:** `surface-container-highest` (#353534) - Modals or active state overlays.

### The Glass Rule
To achieve the "Liquid Glass" effect, floating elements (like Navigation or Tooltips) must use semi-transparent surface colors (e.g., `surface-container` at 70% opacity) combined with a heavy `backdrop-blur` (12px–20px). This allows the content beneath to "refract" through, creating a sense of physical material.

### Signature Accents
The Teal (`#19D9B6`) is a high-energy "utility" color. It is never used for backgrounds. It is used for "Active State" indicators, terminal prompts, and critical CTAs. It should represent less than 5% of the total screen real estate.

## 3. Typography
The typography scale relies on the tension between the technical `Roboto Mono` and the highly readable `Fira Code`.

*   **The Display Scale:** Use `display-lg` (3.5rem) and `display-md` (2.75rem) in `robotoMono` for hero headers. These should be set with tight letter-spacing (-0.02em) to look like high-end editorial print.
*   **The Narrative Scale:** `body-lg` (1rem) in `firaCode` is the workhorse. It must have generous line-height (1.6) to ensure maximum readability against the dark background.
*   **The Technical Scale:** `label-md` and `label-sm` in `inter` are reserved for metadata, tags, and code snippets.

**Hierarchy Tip:** Use `on-surface-variant` (#C6C6C6) for secondary body text to create a clear visual gap between "Headline" and "Support" content without changing font weight.

## 4. Elevation & Depth
In this system, depth is a product of light and transparency, not "drop shadows."

### The Layering Principle
Stacking `surface-container-lowest` on top of `surface-container-low` creates a natural "lift." Avoid shadows on static components. 

### Ambient Shadows
If a component must "float" (like a dropdown or a floating action button), use an extra-diffused shadow.
*   **Color:** `#000000` at 15% opacity.
*   **Blur:** 30px–40px.
*   **Spread:** -5px.
*   This mimics an object casting a soft shadow in a dark room rather than a "web shadow."

### The Ghost Border Fallback
If a visual separator is strictly required for accessibility, use a **Ghost Border**: `outline-variant` (#474747) at 20% opacity. Never use 100% opaque borders; they break the "liquid" illusion.

## 5. Components

### Buttons
*   **Primary:** Solid `primary` (#FFFFFF) text on a `primary-fixed` (#006B58) container or a high-contrast monochrome block. 
*   **Secondary:** `surface-container-high` background with `on-surface` text. No border.
*   **Tertiary (Teal Strike):** No background. Text color is `surface-tint` (#28DFBB). Use for "Success" or "Launch Project" actions.

### Cards & Projects
Forbid the use of divider lines. Separate "Project Title" from "Project Description" using a 1.5rem vertical gap. The card itself should use `surface-container-low`. Upon hover, the card should shift to `surface-container-highest` with a `0.2s ease-out` transition.

### Input Fields
Inputs are "Sharp." Use `DEFAULT` rounding (0.25rem). The background should be `surface-container-lowest`. The focus state is signaled by a 1px `surface-tint` (#28DFBB) "Ghost Border" and nothing else.

### Chips (Tags)
Used for tech stacks (e.g., React, Rust).
*   **Style:** `surface-container-high` background, `label-md` typography.
*   **Shape:** `full` (pill shape).
*   **Interaction:** On hover, the text color shifts to Teal (`#19D9B6`).

### Code Blocks
The developer's "Work." These should be nested in `surface-container-lowest`. Use a monospace font for content, but the "copy" button should be a `liquid glass` element floating in the top right corner.

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical spacing. If the left margin is 4rem, try a 6rem right margin for a more editorial, bespoke feel.
*   **Do** use "Liquid Glass" effects for the navigation bar to allow background content to flow under it as the user scrolls.
*   **Do** ensure all interactive elements have a "solid, purposeful animation"—meaning short durations (150ms-250ms) with `cubic-bezier(0.4, 0, 0.2, 1)`.

### Don't
*   **Don't** use gradients. The user has explicitly forbidden them. Depth must be achieved through transparency and blur (refraction) instead.
*   **Don't** use 100% white text (#FFFFFF) for long-form body copy; it causes "halation" on dark backgrounds. Use `on-surface` (#E5E2E1).
*   **Don't** use icons without labels unless they are universally understood (e.g., Github logo). This is a high-readability system.
*   **Don't** use standard "Material Blue." Only use the specified Teal for accents.