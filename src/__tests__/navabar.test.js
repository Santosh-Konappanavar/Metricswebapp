import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Navbarlink = () => (
  <div>
    <h1>links</h1>
  </div>
);

describe('Navbarlink', () => {
  test('render React component', () => {
    render(<Navbarlink />);
    expect(screen.getByText('links')).toBeInTheDocument();
  });
});
