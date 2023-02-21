import React from 'react';
import { render } from './utils/customTestingLibrary';
import Button from '../components/Button';

describe('Button', () => {
  test('Should have the button label', () => {
    render(<Button text='Hello World!'/>)
  });
});
