// =============================================================================
// VUE-SPECIFIC UTILITIES
// =============================================================================

/**
 * Safe reactive property access
 * @param {Object} obj - Object to access
 * @param {string} path - Property path (e.g., 'user.profile.name')
 * @param {*} defaultValue - Default value if path doesn't exist
 * @returns {*} Value at path or default value
 */
export function safeGet(obj, path, defaultValue = null) {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : defaultValue
  }, obj)
};

/**
 * Create a reactive copy of an object
 * @param {Object} obj - Object to make reactive
 * @returns {Object} Reactive object
 */
export function makeReactive(obj) {
  return JSON.parse(JSON.stringify(obj))
};

// =============================================================================
// EXPORT DEFAULT (for convenience)
// =============================================================================

export default {
  safeGet,
  makeReactive
};