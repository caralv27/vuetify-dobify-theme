import * as vuetify from 'vuetify';
import { ThemeDefinition, VuetifyOptions } from 'vuetify';
import * as vue from 'vue';

/**
 * Light theme: Rich saturated tones - premium, bold feel
 */
declare const lightTheme: ThemeDefinition;
/**
 * Dark theme: Neon/electric accents - vibrant, energetic feel
 */
declare const darkTheme: ThemeDefinition;
/**
 * Pre-configured themes object for Vuetify
 */
declare const themes: {
    light: {
        dark?: boolean | undefined;
        colors?: {
            [x: string]: string | undefined;
            background?: string | undefined;
            surface?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            error?: string | undefined;
            info?: string | undefined;
            'on-background'?: string | undefined;
            'on-surface'?: string | undefined;
            'on-primary'?: string | undefined;
            'on-secondary'?: string | undefined;
            'on-success'?: string | undefined;
            'on-warning'?: string | undefined;
            'on-error'?: string | undefined;
            'on-info'?: string | undefined;
        } | undefined;
        variables?: {
            [x: string]: string | number | undefined;
        } | undefined;
    };
    dark: {
        dark?: boolean | undefined;
        colors?: {
            [x: string]: string | undefined;
            background?: string | undefined;
            surface?: string | undefined;
            primary?: string | undefined;
            secondary?: string | undefined;
            success?: string | undefined;
            warning?: string | undefined;
            error?: string | undefined;
            info?: string | undefined;
            'on-background'?: string | undefined;
            'on-surface'?: string | undefined;
            'on-primary'?: string | undefined;
            'on-secondary'?: string | undefined;
            'on-success'?: string | undefined;
            'on-warning'?: string | undefined;
            'on-error'?: string | undefined;
            'on-info'?: string | undefined;
        } | undefined;
        variables?: {
            [x: string]: string | number | undefined;
        } | undefined;
    };
};

/**
 * Component defaults for a modern, polished UI
 */
declare const defaults: VuetifyOptions['defaults'];

interface DobifyThemeOptions {
    /**
     * Default theme to use ('light', 'dark', or 'system')
     * @default 'system'
     */
    defaultTheme?: 'light' | 'dark' | 'system';
    /**
     * Additional Vuetify options to merge
     */
    vuetifyOptions?: Partial<VuetifyOptions>;
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
declare function createDobifyVuetify(options?: DobifyThemeOptions): {
    install: (app: vue.App<any>) => void;
    unmount: () => void;
    defaults: vue.Ref<vuetify.DefaultsInstance, vuetify.DefaultsInstance>;
    display: vuetify.DisplayInstance;
    theme: vuetify.ThemeInstance & {
        install: (app: vue.App<any>) => void;
    };
    icons: {
        defaultSet: string;
        aliases: Partial<vuetify.IconAliases>;
        sets: Record<string, vuetify.IconSet>;
    };
    locale: {
        name: string;
        decimalSeparator: vue.ShallowRef<string>;
        messages: vue.Ref<vuetify.LocaleMessages, vuetify.LocaleMessages>;
        current: vue.Ref<string, string>;
        fallback: vue.Ref<string, string>;
        t: (key: string, ...params: unknown[]) => string;
        n: (value: number) => string;
        provide: (props: vuetify.LocaleOptions) => vuetify.LocaleInstance;
        isRtl: vue.Ref<boolean, boolean>;
        rtl: vue.Ref<Record<string, boolean>, Record<string, boolean>>;
        rtlClasses: vue.Ref<string, string>;
    };
    date: {
        options: {
            adapter: (new (options: {
                locale: any;
                formats?: any;
            }) => vuetify.DateInstance) | vuetify.DateInstance;
            formats?: Record<string, any>;
            locale: Record<string, any>;
        };
        instance: {
            date: (value?: any) => unknown;
            format: (date: unknown, formatString: string) => string;
            toJsDate: (value: unknown) => Date;
            parseISO: (date: string) => unknown;
            toISO: (date: unknown) => string;
            startOfDay: (date: unknown) => unknown;
            endOfDay: (date: unknown) => unknown;
            startOfWeek: (date: unknown, firstDayOfWeek?: string | number | undefined) => unknown;
            endOfWeek: (date: unknown) => unknown;
            startOfMonth: (date: unknown) => unknown;
            endOfMonth: (date: unknown) => unknown;
            startOfYear: (date: unknown) => unknown;
            endOfYear: (date: unknown) => unknown;
            isAfter: (date: unknown, comparing: unknown) => boolean;
            isAfterDay: (date: unknown, comparing: unknown) => boolean;
            isSameDay: (date: unknown, comparing: unknown) => boolean;
            isSameMonth: (date: unknown, comparing: unknown) => boolean;
            isSameYear: (date: unknown, comparing: unknown) => boolean;
            isBefore: (date: unknown, comparing: unknown) => boolean;
            isEqual: (date: unknown, comparing: unknown) => boolean;
            isValid: (date: any) => boolean;
            isWithinRange: (date: unknown, range: [unknown, unknown]) => boolean;
            addMinutes: (date: unknown, amount: number) => unknown;
            addHours: (date: unknown, amount: number) => unknown;
            addDays: (date: unknown, amount: number) => unknown;
            addWeeks: (date: unknown, amount: number) => unknown;
            addMonths: (date: unknown, amount: number) => unknown;
            getYear: (date: unknown) => number;
            setYear: (date: unknown, year: number) => unknown;
            getDiff: (date: unknown, comparing: unknown, unit?: string | undefined) => number;
            getWeekArray: (date: unknown, firstDayOfWeek?: string | number | undefined) => unknown[][];
            getWeekdays: (firstDayOfWeek?: string | number | undefined, weekdayFormat?: "long" | "narrow" | "short" | undefined) => string[];
            getWeek: (date: unknown, firstDayOfWeek?: string | number | undefined, firstDayOfYear?: string | number | undefined) => number;
            getMonth: (date: unknown) => number;
            setMonth: (date: unknown, month: number) => unknown;
            getDate: (date: unknown) => number;
            setDate: (date: unknown, day: number) => unknown;
            getNextMonth: (date: unknown) => unknown;
            getPreviousMonth: (date: unknown) => unknown;
            getHours: (date: unknown) => number;
            setHours: (date: unknown, hours: number) => unknown;
            getMinutes: (date: unknown) => number;
            setMinutes: (date: unknown, minutes: number) => unknown;
            locale?: any;
        };
    };
    goTo: vuetify.GoToInstance;
};
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
declare function getDobifyThemeConfig(defaultTheme?: 'light' | 'dark' | 'system'): Partial<VuetifyOptions>;

export { type DobifyThemeOptions, createDobifyVuetify, darkTheme, createDobifyVuetify as default, defaults, getDobifyThemeConfig, lightTheme, themes };
