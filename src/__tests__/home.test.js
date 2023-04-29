import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const MyHome = () => (
  <div>
    <h1>home</h1>
  </div>
);

describe('MyHome', () => {
  test('render React component', () => {
    render(<MyHome />);
    expect(screen.getByText('home')).toBeInTheDocument();
  });
});
