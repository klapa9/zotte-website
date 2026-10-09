import { createHead, UnheadProvider } from '@unhead/react/client';
import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AppRouter, MICROSITE_HOST } from './AppRouter';
import { micrositeTopics } from './data/microsite';

vi.mock('./pages/Index', () => ({ default: () => <h1>Bestaande homepage</h1> }));

function show(hostname: string, path: string) {
  window.history.replaceState({}, '', path);
  return render(<UnheadProvider head={createHead()}><AppRouter hostname={hostname} /></UnheadProvider>);
}

describe('microsite host and routes', () => {
  beforeEach(() => window.history.replaceState({}, '', '/'));
  afterEach(() => cleanup());

  it('shows its own entrance on the new host and the existing homepage on www', () => {
    const view = show(MICROSITE_HOST, '/');
    expect(screen.getByRole('heading', { level: 1, name: 'Alles is nog zotter dan je denkt' })).toBeInTheDocument();
    expect(screen.queryByText('Bestaande homepage')).not.toBeInTheDocument();
    view.unmount();
    show('www.zottewebsite.be', '/');
    expect(screen.getByRole('heading', { level: 1, name: 'Bestaande homepage' })).toBeInTheDocument();
  });

  it('keeps exactly six article destinations in the microsite navigation', () => {
    show(MICROSITE_HOST, '/');
    const links = within(screen.getByRole('navigation', { name: 'Zes onderwerpen' })).getAllByRole('link');
    expect(links).toHaveLength(6);
    expect(links.map((link) => link.getAttribute('href'))).toEqual(micrositeTopics.map((topic) => `/${topic.slug}`));
    expect(new Set(links.map((link) => link.getAttribute('href'))).size).toBe(6);
  });

  it('opens the first article by navigation, direct URL and refresh', async () => {
    const view = show(MICROSITE_HOST, '/');
    fireEvent.click(within(screen.getByRole('navigation', { name: 'Zes onderwerpen' })).getByRole('link', { name: /Verlaat je lichaam/ }));
    expect(window.location.pathname).toBe('/verlaat-je-lichaam');
    expect(screen.getByRole('heading', { level: 1, name: 'Verlaat je lichaam' })).toBeInTheDocument();
    expect(screen.getByText(/Mensen met een bijna-doodervaring vertellen vaak/)).toBeInTheDocument();
    expect(within(screen.getByRole('navigation', { name: 'Zes onderwerpen' })).getByRole('link', { name: /Verlaat je lichaam/ })).toHaveAttribute('aria-current', 'page');
    view.unmount();
    show(MICROSITE_HOST, '/verlaat-je-lichaam');
    expect(screen.getByRole('heading', { level: 1, name: 'Verlaat je lichaam' })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    await waitFor(() => expect(document.title).toBe('Verlaat je lichaam | Nog Zottere'));
  });
});
