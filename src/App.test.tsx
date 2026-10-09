import { cleanup, render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import App from './App';

test('App', () => {
  render(<App />);
})

test('een bestaande host behoudt de inhoudspagina /leven', () => {
  cleanup();
  window.history.replaceState({}, '', '/leven');
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: 'L E V E N' })).toBeInTheDocument();
  expect(document.querySelector('.microsite')).toBeNull();
  window.history.replaceState({}, '', '/');
});
