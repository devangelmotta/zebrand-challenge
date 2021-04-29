import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Img  from '..';

test('it works', () => {
  const tree = renderer.create(<Img src=""/>).toJSON()
})




