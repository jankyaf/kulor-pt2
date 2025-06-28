// =============================================================================
// COLOR UTILITIES                                                              
// =============================================================================

// -----------------------------------------------------------------------------
// COLOR CONVERSION FUNCTIONS                                                                  
// -----------------------------------------------------------------------------

/**
 * Parses a hex color string to an RGB object.
 * @param {string} hex - The hex color string (e.g. "#ff00aa" or "#f0a").
 * @returns {{r: number, g: number, b: number}} RGB components.
 */
export function hexToRgb(hex) {
  hex = hex.replace(/^#/, '')

  if (hex.length === 3) {
    hex = hex.split('').map(ch => ch + ch).join('')
  }

  const num = parseInt(hex, 16)
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  }
};

/**
 * Converts RGB values to a hex color string.
 * @param {number} r - Red (0-255).
 * @param {number} g - Green (0-255).
 * @param {number} b - Blue (0-255).
 * @returns {string} Hex color string (e.g. "#ff00aa").
 */
export function rgbToHex(r, g, b) {
  const toHex = n => n.toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
};

/**
 * Converts RGB to HSL.
 * @param {number} r - Red (0-255).
 * @param {number} g - Green (0-255).
 * @param {number} b - Blue (0-255).
 * @returns {{h: number, s: number, l: number}} HSL components.
 */
export function rgbToHsl(r, g, b) {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h, s, l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }

    h *= 60
  }

  return { h: Math.round(h), s: +(s * 100).toFixed(1), l: +(l * 100).toFixed(1) }
};

/**
 * Converts HSL to RGB.
 * @param {number} h - Hue (0–360).
 * @param {number} s - Saturation (0–100).
 * @param {number} l - Lightness (0–100).
 * @returns {{r: number, g: number, b: number}} RGB components.
 */
export function hslToRgb(h, s, l) {
  s /= 100
  l /= 100

  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs((h / 60) % 2 - 1))
  const m = l - c / 2
  let r, g, b

  if (h < 60) [r, g, b] = [c, x, 0]
  else if (h < 120) [r, g, b] = [x, c, 0]
  else if (h < 180) [r, g, b] = [0, c, x]
  else if (h < 240) [r, g, b] = [0, x, c]
  else if (h < 300) [r, g, b] = [x, 0, c]
  else [r, g, b] = [c, 0, x]

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  }
};

/**
 * Converts hex directly to HSL.
 * @param {string} hex - Hex color string.
 * @returns {{h: number, s: number, l: number}} HSL components.
 */
export function hexToHsl(hex) {
  const { r, g, b } = hexToRgb(hex)
  return rgbToHsl(r, g, b)
};

/**
 * Converts HSL directly to hex.
 * @param {number} h - Hue (0–360).
 * @param {number} s - Saturation (0–100).
 * @param {number} l - Lightness (0–100).
 * @returns {string} Hex color string.
 */
export function hslToHex(h, s, l) {
  const { r, g, b } = hslToRgb(h, s, l)
  return rgbToHex(r, g, b)
};