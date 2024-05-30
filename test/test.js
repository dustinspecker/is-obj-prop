'use strict'
const test = require('ava')
const isObjProp = require('../src/')

test('should throw error when type or property is not a string', t => {
  const typeTest = () => isObjProp(1, 'prop')
  const propTest = () => isObjProp('type', 1)

  t.throws(typeTest, {instanceOf: TypeError, message: /Expected a string/})
  t.throws(propTest, {instanceOf: TypeError, message: /Expected a string/})
})

test('should return false if not a js type', t => {
  t.falsy(isObjProp('dog', 'bark'))
  t.falsy(isObjProp('gulp', 'task'))
})

test('should return false if type does not have property', t => {
  t.falsy(isObjProp('Array', 'push'))
  t.falsy(isObjProp('Error', 'ignore'))
})

test('shoud return true if type does have property', t => {
  t.truthy(isObjProp('Array', 'from'))
  t.truthy(isObjProp('Error', 'name'))
})

test('should be case insensitive for types', t => {
  t.truthy(isObjProp('array', 'length'))
  t.truthy(isObjProp('ARRAY', 'length'))
})
