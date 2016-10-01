/* global describe, it */
'use strict'
import {expect} from 'chai'
import isObjProp from '../lib/'

describe('is-obj-prop', () => {
  it('should throw error when type or property is not a string', () => {
    const typeTest = () => isObjProp(1, 'prop')
    const propTest = () => isObjProp('type', 1)

    expect(typeTest).to.throw(TypeError, /Expected a string/)
    expect(propTest).to.throw(TypeError, /Expected a string/)
  })

  it('should return false if not a js type', () => {
    expect(isObjProp('dog', 'bark')).to.eql(false)
    expect(isObjProp('gulp', 'task')).to.eql(false)
  })

  it('should return false if type does not have property', () => {
    expect(isObjProp('Array', 'push')).to.eql(false)
    expect(isObjProp('Error', 'ignore')).to.eql(false)
  })

  it('shoud return true if type does have property', () => {
    expect(isObjProp('Array', 'from')).to.eql(true)
    expect(isObjProp('Error', 'name')).to.eql(true)
  })

  it('should be case insensitive for types', () => {
    expect(isObjProp('array', 'length')).to.eql(true)
    expect(isObjProp('ARRAY', 'length')).to.eql(true)
  })
})
