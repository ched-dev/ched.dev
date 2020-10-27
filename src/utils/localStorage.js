export default {

  hasLocalStorage: typeof window !== 'undefined',

  load() {
    // load from localStorage if available
    // otherwise set defaults
  },

  getContentFormat() {
    const defaultValue = 'minimal'

    if (!this.hasLocalStorage) {
      return defaultValue
    }

    return window.localStorage.chedDevContentFormat || defaultValue
  },

  setContentFormat(value) {
    window.localStorage.chedDevContentFormat = value
  }

}