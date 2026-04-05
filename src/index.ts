import { createVuetify, type VuetifyOptions } from 'vuetify'
import { lightTheme, darkTheme, themes } from './themes'
import { defaults } from './defaults'

export { lightTheme, darkTheme, themes } from './themes'
export { defaults } from './defaults'

export interface DobifyThemeOptions {
  /**
   * Default theme to use ('light', 'dark', or 'system')
   * @default 'system'
   */
  defaultTheme?: 'light' | 'dark' | 'system'
  /**
   * Additional Vuetify options to merge
   */
  vuetifyOptions?: Partial<VuetifyOptions>
}

/**
 * Creates a pre-configured Vuetify instance with Dobify theme
 *
 * @example
 * ```ts
 * import { createDobifyVuetify } from '@caralv27/vuetify-dobify-theme'
 * import '@caralv27/vuetify-dobify-theme/styles'
 *
 * const vuetify = createDobifyVuetify()
 * ```
 *
 * @example With options
 * ```ts
 * const vuetify = createDobifyVuetify({
 *   defaultTheme: 'dark',
 *   vuetifyOptions: {
 *     // Additional Vuetify options
 *   }
 * })
 * ```
 */
export function createDobifyVuetify(options: DobifyThemeOptions = {}) {
  const { defaultTheme = 'system', vuetifyOptions = {} } = options

  return createVuetify({
    theme: {
      defaultTheme,
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
    },
    defaults,
    ...vuetifyOptions,
  })
}

/**
 * Get Vuetify theme configuration to use with your own createVuetify call
 *
 * @example
 * ```ts
 * import { createVuetify } from 'vuetify'
 * import { getDobifyThemeConfig } from '@caralv27/vuetify-dobify-theme'
 *
 * const vuetify = createVuetify({
 *   ...getDobifyThemeConfig(),
 *   // Your additional options
 * })
 * ```
 */
export function getDobifyThemeConfig(defaultTheme: 'light' | 'dark' | 'system' = 'system'): Partial<VuetifyOptions> {
  return {
    theme: {
      defaultTheme,
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
    },
    defaults,
  }
}

export default createDobifyVuetify
