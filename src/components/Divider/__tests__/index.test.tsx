import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components'
import Divider from '..';

test('it works', () => {
  const tree = renderer.create(<Divider />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('display', 'flex')
  expect(tree).toHaveStyleRule('position', 'relative')
  expect(tree).toHaveStyleRule('width', '1px')
  expect(tree).toHaveStyleRule('max-width', 'none')
  expect(tree).toHaveStyleRule('min-width', 'none')
  expect(tree).toHaveStyleRule('height', '1px')
  expect(tree).toHaveStyleRule('max-height', 'none')
  expect(tree).toHaveStyleRule('background-color', '#404040')
  expect(tree).toHaveStyleRule('padding', '0 0 0 0')
  expect(tree).toHaveStyleRule('border', '0 solid transparent')
  expect(tree).toHaveStyleRule('border-radius', '0')
  expect(tree).toHaveStyleRule('margin', '0 0 0 0')
  expect(tree).toHaveStyleRule('z-index', 'auto')
  expect(tree).toHaveStyleRule('-webkit-box-shadow', '0px 0px 0px 0px rgba(0,0,0,0)')
  expect(tree).toHaveStyleRule('-moz-box-shadow', '0px 0px 0px 0px rgba(0,0,0,0)')
  expect(tree).toHaveStyleRule('box-shadow', '0px 0px 0px 0px rgba(0,0,0,0)')
})
