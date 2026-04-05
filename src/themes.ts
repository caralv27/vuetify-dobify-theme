import type { ThemeDefinition } from 'vuetify'

/**
 * Light theme: Rich saturated tones - premium, bold feel
 */
export const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    'background': '#F8F9FC',
    'surface': '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#F1F3F8',
    'surface-variant': '#E8EBF2',
    'on-surface-variant': '#374151',
    'primary': '#4F46E5',
    'primary-darken-1': '#4338CA',
    'secondary': '#0891B2',
    'secondary-darken-1': '#0E7490',
    'error': '#DC2626',
    'info': '#0284C7',
    'success': '#059669',
    'warning': '#D97706',
    'pos-accent': '#7C3AED',
    'pos-cash': '#059669',
    'pos-card': '#2563EB',
  },
  variables: {
    'border-color': '#E5E7EB',
    'border-opacity': 1,
    'high-emphasis-opacity': 0.95,
    'medium-emphasis-opacity': 0.7,
    'disabled-opacity': 0.4,
    'idle-opacity': 0.06,
    'hover-opacity': 0.08,
    'focus-opacity': 0.12,
    'selected-opacity': 0.1,
    'activated-opacity': 0.14,
    'pressed-opacity': 0.16,
    'dragged-opacity': 0.1,
  },
}

/**
 * Dark theme: Neon/electric accents - vibrant, energetic feel
 */
export const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    'background': '#0F0F14',
    'surface': '#18181F',
    'surface-bright': '#252530',
    'surface-light': '#1F1F28',
    'surface-variant': '#2D2D3A',
    'on-surface-variant': '#A1A1AA',
    'primary': '#818CF8',
    'primary-darken-1': '#6366F1',
    'secondary': '#22D3EE',
    'secondary-darken-1': '#06B6D4',
    'error': '#F87171',
    'info': '#38BDF8',
    'success': '#34D399',
    'warning': '#FBBF24',
    'pos-accent': '#A78BFA',
    'pos-cash': '#34D399',
    'pos-card': '#60A5FA',
  },
  variables: {
    'border-color': '#3F3F46',
    'border-opacity': 1,
    'high-emphasis-opacity': 0.95,
    'medium-emphasis-opacity': 0.7,
    'disabled-opacity': 0.4,
    'idle-opacity': 0.1,
    'hover-opacity': 0.12,
    'focus-opacity': 0.15,
    'selected-opacity': 0.15,
    'activated-opacity': 0.2,
    'pressed-opacity': 0.2,
    'dragged-opacity': 0.15,
  },
}

/**
 * Pre-configured themes object for Vuetify
 */
export const themes = {
  light: lightTheme,
  dark: darkTheme,
}
