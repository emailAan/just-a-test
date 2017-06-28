import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { RoundedImage } from '../../components'

const describe = window.describe
const it = window.it
const expect = window.expect

describe('Components library', () => {
  //

  it('renders RoundedImage', () => {
    const element = TestUtils.renderIntoDocument(<RoundedImage />)
    expect(element).toBeTruthy()
  })

  it(' is wrong', () => {
    const element = TestUtils.renderIntoDocument(<RoundedImage />)
    expect(element).toBe(element)
  })

 //
})
