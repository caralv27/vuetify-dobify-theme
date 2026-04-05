# Vuetify Dobify Theme

A reusable Vuetify 3 theme preset with carefully crafted light/dark themes, comprehensive component defaults, and design tokens.

## Features

- **Light & Dark Themes** - Rich saturated tones for light mode, neon/electric accents for dark mode
- **40+ Component Defaults** - Pre-configured settings for buttons, cards, forms, navigation, and more
- **Design Tokens** - CSS custom properties for transitions, shadows, radii, and animations
- **Utility Classes** - Hover effects, glass morphism, gradient text, and staggered animations
- **TypeScript Support** - Full type definitions included

## Installation

```bash
npm install @caralv27/vuetify-dobify-theme
# or
yarn add @caralv27/vuetify-dobify-theme
# or
pnpm add @caralv27/vuetify-dobify-theme
```

## Quick Start

### Option 1: Use the pre-configured Vuetify instance

```typescript
// plugins/vuetify.ts
import { createDobifyVuetify } from '@caralv27/vuetify-dobify-theme'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@caralv27/vuetify-dobify-theme/styles'

export default createDobifyVuetify({
  defaultTheme: 'system', // 'light', 'dark', or 'system'
})
```

### Option 2: Use with your own Vuetify configuration

```typescript
// plugins/vuetify.ts
import { createVuetify } from 'vuetify'
import { getDobifyThemeConfig } from '@caralv27/vuetify-dobify-theme'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@caralv27/vuetify-dobify-theme/styles'

export default createVuetify({
  ...getDobifyThemeConfig('system'),
  // Your additional options here
})
```

### Option 3: Import individual pieces

```typescript
// plugins/vuetify.ts
import { createVuetify } from 'vuetify'
import { lightTheme, darkTheme, defaults } from '@caralv27/vuetify-dobify-theme'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@caralv27/vuetify-dobify-theme/styles'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
  defaults,
})
```

## Vite Configuration

If you're using Vite, add the styles to your CSS preprocessor options:

```typescript
// vite.config.ts
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@caralv27/vuetify-dobify-theme/styles" as *;`,
      },
    },
  },
})
```

## Theme Colors

### Light Theme
| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#4F46E5` | Main interactive elements |
| Secondary | `#0891B2` | Secondary actions |
| Success | `#059669` | Positive states |
| Error | `#DC2626` | Error states |
| Warning | `#D97706` | Warning states |
| Info | `#0284C7` | Informational states |

### Dark Theme
| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#818CF8` | Main interactive elements |
| Secondary | `#22D3EE` | Secondary actions |
| Success | `#34D399` | Positive states |
| Error | `#F87171` | Error states |
| Warning | `#FBBF24` | Warning states |
| Info | `#38BDF8` | Informational states |

## CSS Custom Properties

The theme provides design tokens as CSS custom properties:

```css
/* Transitions */
--app-transition-fast: 150ms ease-out;
--app-transition-base: 200ms ease-out;
--app-transition-smooth: 300ms cubic-bezier(0.4, 0, 0.2, 1);
--app-transition-bounce: 400ms cubic-bezier(0.34, 1.56, 0.64, 1);

/* Border Radius */
--app-radius-xs: 4px;
--app-radius-sm: 8px;
--app-radius-md: 12px;
--app-radius-lg: 16px;
--app-radius-xl: 20px;
--app-radius-full: 9999px;

/* Shadows */
--app-shadow-xs: ...;
--app-shadow-sm: ...;
--app-shadow-md: ...;
--app-shadow-lg: ...;
--app-shadow-xl: ...;
--app-shadow-glow: ...;
```

## Utility Classes

```html
<!-- Hover lift effect -->
<div class="hover-lift">Lifts on hover</div>

<!-- Glow effects -->
<div class="glow-primary">Primary glow</div>
<div class="glow-success">Success glow</div>
<div class="glow-error">Error glow</div>

<!-- Glass morphism -->
<div class="glass">Glassmorphism effect</div>

<!-- Gradient text -->
<span class="gradient-text">Gradient text</span>

<!-- Animations -->
<div class="fade-in">Fades in on mount</div>
<div class="stagger-children">
  <div>Child 1</div>
  <div>Child 2</div>
  <div>Child 3</div>
</div>
```

## API Reference

### `createDobifyVuetify(options?)`

Creates a pre-configured Vuetify instance.

```typescript
interface DobifyThemeOptions {
  defaultTheme?: 'light' | 'dark' | 'system' // Default: 'system'
  vuetifyOptions?: Partial<VuetifyOptions>   // Additional Vuetify options
}
```

### `getDobifyThemeConfig(defaultTheme?)`

Returns the theme configuration to spread into your own `createVuetify` call.

### Exports

- `lightTheme` - Light theme definition
- `darkTheme` - Dark theme definition
- `themes` - Object containing both themes
- `defaults` - Component defaults configuration

## License

MIT
