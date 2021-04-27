import * as React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import {WelcomeIllustration} from '..';

describe('Image', () => {
  test('Image must have a string src  and alt = "Manage your repositories"', () => {
    render(<WelcomeIllustration/>);
  });
});
