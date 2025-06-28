// =============================================================================
// THEME UTILITIES
// =============================================================================

// -----------------------------------------------------------------------------
// THEME COLOR FUNCTIONS
// -----------------------------------------------------------------------------

/**
 * Get the base colors from the theme
 * @param {Object} theme - The theme object
 * @returns {Object} The base colors
 */
export function getBaseColors (theme) {
  const themeColors = theme.value.colors
  const baseColors = {
    background: themeColors.background,
    surface: themeColors.surface,
    'surface-light': themeColors['surface'],
    'surface-variant': themeColors['surface-variant'],
    'surface-bright': themeColors['surface-bright'],
  }
  return baseColors
}

/**
 * Get the accent colors from the theme
 * @param {Object} theme - The theme object
 * @returns {Object} The accent colors
 */
export function getAccentColors (theme) {
  const themeColors = theme.value.colors
  const accentColors = {
    primary: themeColors.primary,
    secondary: themeColors.secondary,
    success: themeColors.success,
    warning: themeColors.warning,
    error: themeColors.error,
    info: themeColors.info,
  }
  return accentColors
}

/**
 * Get the extended accent colors from the theme
 * @param {Object} theme - The theme object
 * @returns {Object} The extended accent colors
 */
export function getExtendedAccentColors (theme) {
  const themeColors = theme.value.colors
  const extendedAccentColors = {
    primary: themeColors.primary,
    'on-primary': themeColors['on-primary'],
    'primary-darken-1': themeColors['primary-darken-1'],
    'on-primary-darken-1': themeColors['on-primary-darken-1'],
    secondary: themeColors.secondary,
    'on-secondary': themeColors['on-secondary'],
    'secondary-darken-1': themeColors['secondary-darken-1'],
    'on-secondary-darken-1': themeColors['on-secondary-darken-1'],
    success: themeColors.success,
    'on-success': themeColors['on-success'],
    warning: themeColors.warning,
    'on-warning': themeColors['on-warning'],
    error: themeColors.error,
    'on-error': themeColors['on-error'],
    info: themeColors.info,
    'on-info': themeColors['on-info'],
  }
  return extendedAccentColors
}

/**
 * Get the extended base colors from the theme
 * @param {Object} theme - The theme object
 * @returns {Object} The extended base colors
 */
export function getExtendedBaseColors(theme) {
  const themeColors = theme.value.colors;
  const extendedBaseColors = {
    background: themeColors.background,
    "on-background": themeColors["on-background"],
    surface: themeColors.surface,
    "on-surface": themeColors["on-surface"],
    "surface-variant": themeColors["surface-variant"],
    "on-surface-variant": themeColors["on-surface-variant"],
    "surface-light": themeColors["surface-light"],
    "on-surface-light": themeColors["on-surface-light"],
    "surface-bright": themeColors["surface-bright"],
    "on-surface-bright": themeColors["on-surface-bright"],
  };
  return extendedBaseColors;
};

export function getAllColors(theme) {
  const themeColors = theme.value.colors
  const allColors: Record<string, any> = {}
  for (const color in themeColors) {
    const colorName = color
    const colorValue = themeColors[color]
    allColors[colorName] = colorValue
  }
  return allColors
}

/**
 * Get the current border color based on the theme
 * @param {Object} theme - The theme object
 * @returns {string} The border color hex value
 */
export function getBorderColor(theme) {
  const isDark = theme.value.dark;
  
  // Vuetify's default border colors
  const defaultBorderColors = {
    dark: '#2f2f2f',   // Vuetify's default dark theme border color
    light: '#e0e0e0'   // Vuetify's default light theme border color
  };
  
  // Check if theme has a custom border color defined
  const themeColors = theme.value.colors;
  if (themeColors['border-color']) {
    return themeColors['border-color'];
  }
  
  // Return the default border color based on theme mode
  return isDark ? defaultBorderColors.dark : defaultBorderColors.light;
}

export function getCurrentBorderColor () {
  const borderColor = getBorderColor(theme.global.current)
  console.log('Current border color:', borderColor)
  return borderColor
}