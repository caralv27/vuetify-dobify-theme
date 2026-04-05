"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  createDobifyVuetify: () => createDobifyVuetify,
  darkTheme: () => darkTheme,
  default: () => index_default,
  defaults: () => defaults,
  getDobifyThemeConfig: () => getDobifyThemeConfig,
  lightTheme: () => lightTheme,
  themes: () => themes
});
module.exports = __toCommonJS(index_exports);
var import_vuetify = require("vuetify");

// src/themes.ts
var lightTheme = {
  dark: false,
  colors: {
    "background": "#F8F9FC",
    "surface": "#FFFFFF",
    "surface-bright": "#FFFFFF",
    "surface-light": "#F1F3F8",
    "surface-variant": "#E8EBF2",
    "on-surface-variant": "#374151",
    "primary": "#4F46E5",
    "primary-darken-1": "#4338CA",
    "secondary": "#0891B2",
    "secondary-darken-1": "#0E7490",
    "error": "#DC2626",
    "info": "#0284C7",
    "success": "#059669",
    "warning": "#D97706",
    "pos-accent": "#7C3AED",
    "pos-cash": "#059669",
    "pos-card": "#2563EB"
  },
  variables: {
    "border-color": "#E5E7EB",
    "border-opacity": 1,
    "high-emphasis-opacity": 0.95,
    "medium-emphasis-opacity": 0.7,
    "disabled-opacity": 0.4,
    "idle-opacity": 0.06,
    "hover-opacity": 0.08,
    "focus-opacity": 0.12,
    "selected-opacity": 0.1,
    "activated-opacity": 0.14,
    "pressed-opacity": 0.16,
    "dragged-opacity": 0.1
  }
};
var darkTheme = {
  dark: true,
  colors: {
    "background": "#0F0F14",
    "surface": "#18181F",
    "surface-bright": "#252530",
    "surface-light": "#1F1F28",
    "surface-variant": "#2D2D3A",
    "on-surface-variant": "#A1A1AA",
    "primary": "#818CF8",
    "primary-darken-1": "#6366F1",
    "secondary": "#22D3EE",
    "secondary-darken-1": "#06B6D4",
    "error": "#F87171",
    "info": "#38BDF8",
    "success": "#34D399",
    "warning": "#FBBF24",
    "pos-accent": "#A78BFA",
    "pos-cash": "#34D399",
    "pos-card": "#60A5FA"
  },
  variables: {
    "border-color": "#3F3F46",
    "border-opacity": 1,
    "high-emphasis-opacity": 0.95,
    "medium-emphasis-opacity": 0.7,
    "disabled-opacity": 0.4,
    "idle-opacity": 0.1,
    "hover-opacity": 0.12,
    "focus-opacity": 0.15,
    "selected-opacity": 0.15,
    "activated-opacity": 0.2,
    "pressed-opacity": 0.2,
    "dragged-opacity": 0.15
  }
};
var themes = {
  light: lightTheme,
  dark: darkTheme
};

// src/defaults.ts
var defaults = {
  global: {
    ripple: true
  },
  // =====================
  // BUTTONS
  // =====================
  VBtn: {
    rounded: "lg",
    fontWeight: 600,
    style: "text-transform: none; letter-spacing: 0.01em;"
  },
  VBtnGroup: {
    rounded: "lg",
    divided: true
  },
  // =====================
  // CARDS & SURFACES
  // =====================
  VCard: {
    rounded: "xl",
    elevation: 0,
    border: true
  },
  VSheet: {
    rounded: "lg",
    border: true
  },
  VExpansionPanels: {
    rounded: "lg"
  },
  VExpansionPanel: {
    rounded: "lg",
    elevation: 0
  },
  // =====================
  // FORM INPUTS
  // =====================
  VTextField: {
    variant: "outlined",
    density: "comfortable",
    rounded: "lg",
    color: "primary"
  },
  VTextarea: {
    variant: "outlined",
    density: "comfortable",
    rounded: "lg",
    color: "primary"
  },
  VSelect: {
    variant: "outlined",
    density: "comfortable",
    rounded: "lg",
    color: "primary"
  },
  VAutocomplete: {
    variant: "outlined",
    density: "comfortable",
    rounded: "lg",
    color: "primary"
  },
  VCombobox: {
    variant: "outlined",
    density: "comfortable",
    rounded: "lg",
    color: "primary"
  },
  VFileInput: {
    variant: "outlined",
    density: "comfortable",
    rounded: "lg",
    color: "primary"
  },
  VNumberInput: {
    variant: "outlined",
    density: "comfortable",
    rounded: "lg",
    color: "primary"
  },
  VCheckbox: {
    color: "primary"
  },
  VRadio: {
    color: "primary"
  },
  VRadioGroup: {
    color: "primary"
  },
  VSwitch: {
    color: "primary",
    inset: true
  },
  VSlider: {
    color: "primary"
  },
  VRangeSlider: {
    color: "primary"
  },
  // =====================
  // CHIPS & BADGES
  // =====================
  VChip: {
    rounded: "lg"
  },
  VChipGroup: {
    selectedClass: "v-chip--selected bg-primary"
  },
  VBadge: {
    rounded: "lg"
  },
  // =====================
  // LISTS & MENUS
  // =====================
  VList: {
    rounded: "lg",
    nav: false
  },
  VListItem: {
    rounded: "lg"
  },
  VMenu: {
    rounded: "lg",
    offset: 4
  },
  // =====================
  // DIALOGS & OVERLAYS
  // =====================
  VDialog: {
    rounded: "xl"
  },
  VBottomSheet: {
    rounded: "t-xl"
  },
  VOverlay: {
    scrim: "rgba(0, 0, 0, 0.5)"
  },
  VSnackbar: {
    rounded: "lg",
    location: "bottom"
  },
  // =====================
  // NAVIGATION
  // =====================
  VAppBar: {
    elevation: 0,
    border: "b"
  },
  VToolbar: {
    elevation: 0
  },
  VNavigationDrawer: {
    elevation: 0,
    border: true
  },
  VTabs: {
    color: "primary",
    sliderColor: "primary"
  },
  VTab: {
    rounded: "lg"
  },
  VBreadcrumbs: {
    rounded: "lg"
  },
  VPagination: {
    rounded: "lg",
    activeColor: "primary"
  },
  VBottomNavigation: {
    elevation: 0,
    border: true
  },
  // =====================
  // DATA DISPLAY
  // =====================
  VDataTable: {
    hover: true
  },
  VDataTableServer: {
    hover: true
  },
  VTable: {
    hover: true
  },
  VAvatar: {
    rounded: "lg"
  },
  VImg: {
    rounded: "lg"
  },
  VProgressLinear: {
    rounded: true,
    color: "primary",
    height: 6
  },
  VProgressCircular: {
    color: "primary"
  },
  VRating: {
    color: "warning",
    activeColor: "warning"
  },
  VTimeline: {
    lineColor: "primary"
  },
  VTimelineItem: {
    dotColor: "primary"
  },
  // =====================
  // ALERTS & FEEDBACK
  // =====================
  VAlert: {
    rounded: "lg",
    variant: "tonal",
    border: "start"
  },
  VBanner: {
    rounded: "lg"
  },
  VTooltip: {
    rounded: "lg"
  },
  // =====================
  // STEPPERS & FORMS
  // =====================
  VStepper: {
    rounded: "lg"
  },
  VStepperItem: {
    color: "primary"
  },
  // =====================
  // DATE/TIME PICKERS
  // =====================
  VDatePicker: {
    rounded: "lg",
    color: "primary"
  },
  VTimePicker: {
    rounded: "lg",
    color: "primary"
  },
  VColorPicker: {
    rounded: "lg"
  },
  // =====================
  // SKELETONS & LOADING
  // =====================
  VSkeletonLoader: {
    boilerplate: false
  },
  // =====================
  // DIVIDERS
  // =====================
  VDivider: {
    thickness: 1
  }
};

// src/index.ts
function createDobifyVuetify(options = {}) {
  const { defaultTheme = "system", vuetifyOptions = {} } = options;
  return (0, import_vuetify.createVuetify)({
    theme: {
      defaultTheme,
      themes: {
        light: lightTheme,
        dark: darkTheme
      }
    },
    defaults,
    ...vuetifyOptions
  });
}
function getDobifyThemeConfig(defaultTheme = "system") {
  return {
    theme: {
      defaultTheme,
      themes: {
        light: lightTheme,
        dark: darkTheme
      }
    },
    defaults
  };
}
var index_default = createDobifyVuetify;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createDobifyVuetify,
  darkTheme,
  defaults,
  getDobifyThemeConfig,
  lightTheme,
  themes
});
