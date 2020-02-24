
/**
 * @abstract
 */
module.exports = class {
  constructor () {
    this.language = { }
  }

  get (term, ...args) {
    const value = this.language[term]
    switch (typeof value) {
      case 'function':
        return value(...args)
      default:
        return value
    }
  }
}
