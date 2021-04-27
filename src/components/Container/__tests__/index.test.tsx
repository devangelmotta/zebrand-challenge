import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components'
import Container from '..';

test('it works', () => {
  const tree = renderer.create(<Container />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('display', 'flex')
  expect(tree).toHaveStyleRule('position', 'relative')
  expect(tree).toHaveStyleRule('flex-direction', 'column')
  expect(tree).toHaveStyleRule('justify-content', 'space-between')
  expect(tree).toHaveStyleRule('align-content', 'center')
  expect(tree).toHaveStyleRule('align-items', 'center')
  expect(tree).toHaveStyleRule('width', '100%')
  expect(tree).toHaveStyleRule('max-width', 'none')
  expect(tree).toHaveStyleRule('min-width', 'none')
  expect(tree).toHaveStyleRule('height', 'auto')
  expect(tree).toHaveStyleRule('max-height', 'none')
  expect(tree).toHaveStyleRule('background-color', 'transparent')
  expect(tree).toHaveStyleRule('padding', '0 0 0 0')
  expect(tree).toHaveStyleRule('border', '0 solid transparent')
  expect(tree).toHaveStyleRule('border-radius', '0')
  expect(tree).toHaveStyleRule('margin', '0 0 0 0')
  expect(tree).toHaveStyleRule('z-index', 'auto')
  expect(tree).toHaveStyleRule('-webkit-box-shadow', '0px 0px 0px 0px rgba(0,0,0,0)')
  expect(tree).toHaveStyleRule('-moz-box-shadow', '0px 0px 0px 0px rgba(0,0,0,0)')
  expect(tree).toHaveStyleRule('box-shadow', '0px 0px 0px 0px rgba(0,0,0,0)')
})
