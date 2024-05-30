'use strict'
const lowercaseKeys = require('lowercase-keys')
const objProps = require('obj-props')

const lowerObjProps = lowercaseKeys(objProps)

/**
 * Determine if a proptery belongs to a JS type
 * @param {String} type - JS type
 * @param {String} property - name of property
 * @return {Boolean} - type has named property
 */
module.exports = (type, property) => {
  if (typeof type !== 'string' || typeof property !== 'string') {
    throw new TypeError('Expected a string')
  }

  const lowerType = type.toLowerCase()

  return !!lowerObjProps[lowerType] && lowerObjProps[lowerType].indexOf(property) > -1
}
