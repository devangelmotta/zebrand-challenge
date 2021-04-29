import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components'
import Button from '..';

test('Check button css', () => {
  const treeButton = renderer.create(<Button />).toJSON()
  // expect(treeButton).toMatchSnapshot()
  // expect(treeButton).toHaveStyleRule('display', 'flex')
  // expect(treeButton).toHaveStyleRule('position', 'relative')
  // expect(treeButton).toHaveStyleRule('flex-direction', 'row')
  // expect(treeButton).toHaveStyleRule('justify-content', 'center')
  // expect(treeButton).toHaveStyleRule('align-content', 'center')
  // expect(treeButton).toHaveStyleRule('align-items', 'center')
  // expect(treeButton).toHaveStyleRule('width', '100%')
  // expect(treeButton).toHaveStyleRule('height', 'auto')
  // expect(treeButton).toHaveStyleRule('background-color', 'transparent')
  // expect(treeButton).toHaveStyleRule('padding', '0 0 0 0')
  // expect(treeButton).toHaveStyleRule('border', '0 solid transparent')
  // expect(treeButton).toHaveStyleRule('border-radius', '0')
  // expect(treeButton).toHaveStyleRule('margin', '0 0 0 0')
  // expect(treeButton).toHaveStyleRule('z-index', 'auto')
})
