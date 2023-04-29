import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Details = () => (
  <div>
    <h1>my details</h1>
  </div>
);

describe('Details', () => {
  test('render React component', () => {
    render(<Details />);
    expect(screen.getByText('my details')).toBeInTheDocument();
  });
});
