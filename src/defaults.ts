import type { VuetifyOptions } from 'vuetify'

/**
 * Component defaults for a modern, polished UI
 */
export const defaults: VuetifyOptions['defaults'] = {
  global: {
    ripple: true,
  },

  // =====================
  // BUTTONS
  // =====================
  VBtn: {
    rounded: 'lg',
    fontWeight: 600,
    style: 'text-transform: none; letter-spacing: 0.01em;',
  },
  VBtnGroup: {
    rounded: 'lg',
    divided: true,
  },

  // =====================
  // CARDS & SURFACES
  // =====================
  VCard: {
    rounded: 'xl',
    elevation: 0,
    border: true,
  },
  VSheet: {
    rounded: 'lg',
    border: true,
  },
  VExpansionPanels: {
    rounded: 'lg',
  },
  VExpansionPanel: {
    rounded: 'lg',
    elevation: 0,
  },

  // =====================
  // FORM INPUTS
  // =====================
  VTextField: {
    variant: 'outlined',
    density: 'comfortable',
    rounded: 'lg',
    color: 'primary',
  },
  VTextarea: {
    variant: 'outlined',
    density: 'comfortable',
    rounded: 'lg',
    color: 'primary',
  },
  VSelect: {
    variant: 'outlined',
    density: 'comfortable',
    rounded: 'lg',
    color: 'primary',
  },
  VAutocomplete: {
    variant: 'outlined',
    density: 'comfortable',
    rounded: 'lg',
    color: 'primary',
  },
  VCombobox: {
    variant: 'outlined',
    density: 'comfortable',
    rounded: 'lg',
    color: 'primary',
  },
  VFileInput: {
    variant: 'outlined',
    density: 'comfortable',
    rounded: 'lg',
    color: 'primary',
  },
  VNumberInput: {
    variant: 'outlined',
    density: 'comfortable',
    rounded: 'lg',
    color: 'primary',
  },
  VCheckbox: {
    color: 'primary',
  },
  VRadio: {
    color: 'primary',
  },
  VRadioGroup: {
    color: 'primary',
  },
  VSwitch: {
    color: 'primary',
    inset: true,
  },
  VSlider: {
    color: 'primary',
  },
  VRangeSlider: {
    color: 'primary',
  },

  // =====================
  // CHIPS & BADGES
  // =====================
  VChip: {
    rounded: 'lg',
  },
  VChipGroup: {
    selectedClass: 'v-chip--selected bg-primary',
  },
  VBadge: {
    rounded: 'lg',
  },

  // =====================
  // LISTS & MENUS
  // =====================
  VList: {
    rounded: 'lg',
    nav: false,
  },
  VListItem: {
    rounded: 'lg',
  },
  VMenu: {
    rounded: 'lg',
    offset: 4,
  },

  // =====================
  // DIALOGS & OVERLAYS
  // =====================
  VDialog: {
    rounded: 'xl',
  },
  VBottomSheet: {
    rounded: 't-xl',
  },
  VOverlay: {
    scrim: 'rgba(0, 0, 0, 0.5)',
  },
  VSnackbar: {
    rounded: 'lg',
    location: 'bottom',
  },

  // =====================
  // NAVIGATION
  // =====================
  VAppBar: {
    elevation: 0,
    border: 'b',
  },
  VToolbar: {
    elevation: 0,
  },
  VNavigationDrawer: {
    elevation: 0,
    border: true,
  },
  VTabs: {
    color: 'primary',
    sliderColor: 'primary',
  },
  VTab: {
    rounded: 'lg',
  },
  VBreadcrumbs: {
    rounded: 'lg',
  },
  VPagination: {
    rounded: 'lg',
    activeColor: 'primary',
  },
  VBottomNavigation: {
    elevation: 0,
    border: true,
  },

  // =====================
  // DATA DISPLAY
  // =====================
  VDataTable: {
    hover: true,
  },
  VDataTableServer: {
    hover: true,
  },
  VTable: {
    hover: true,
  },
  VAvatar: {
    rounded: 'lg',
  },
  VImg: {
    rounded: 'lg',
  },
  VProgressLinear: {
    rounded: true,
    color: 'primary',
    height: 6,
  },
  VProgressCircular: {
    color: 'primary',
  },
  VRating: {
    color: 'warning',
    activeColor: 'warning',
  },
  VTimeline: {
    lineColor: 'primary',
  },
  VTimelineItem: {
    dotColor: 'primary',
  },

  // =====================
  // ALERTS & FEEDBACK
  // =====================
  VAlert: {
    rounded: 'lg',
    variant: 'tonal',
    border: 'start',
  },
  VBanner: {
    rounded: 'lg',
  },
  VTooltip: {
    rounded: 'lg',
  },

  // =====================
  // STEPPERS & FORMS
  // =====================
  VStepper: {
    rounded: 'lg',
  },
  VStepperItem: {
    color: 'primary',
  },

  // =====================
  // DATE/TIME PICKERS
  // =====================
  VDatePicker: {
    rounded: 'lg',
    color: 'primary',
  },
  VTimePicker: {
    rounded: 'lg',
    color: 'primary',
  },
  VColorPicker: {
    rounded: 'lg',
  },

  // =====================
  // SKELETONS & LOADING
  // =====================
  VSkeletonLoader: {
    boilerplate: false,
  },

  // =====================
  // DIVIDERS
  // =====================
  VDivider: {
    thickness: 1,
  },
}
