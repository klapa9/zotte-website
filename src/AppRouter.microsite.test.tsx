import { createHead, UnheadProvider } from '@unhead/react/client';
import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AppRouter, MICROSITE_HOST } from './AppRouter';
import { micrositeTopics } from './data/microsite';
import { additionalArticles } from './data/micrositeArticles';

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

  it('provides named landmarks, an operable skip link and a unique indexable head on the entrance', async () => {
    show(MICROSITE_HOST, '/');
    const skip = screen.getByRole('link', { name: 'Spring naar inhoud' });
    expect(skip).toHaveAttribute('href', '#inhoud');
    skip.focus();
    expect(skip).toHaveFocus();
    expect(screen.getByRole('main')).toHaveAttribute('id', 'inhoud');
    expect(screen.getByRole('main').closest('[lang]')).toHaveAttribute('lang', 'nl');
    expect(screen.getByRole('navigation', { name: 'Zes onderwerpen' })).toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    for (const link of within(screen.getByRole('navigation', { name: 'Zes onderwerpen' })).getAllByRole('link')) {
      expect(link).toHaveAccessibleName();
    }
    await waitFor(() => expect(document.title).toBe('Nog Zottere | Ontdek zes nieuwe perspectieven'));
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', expect.stringContaining('zes spirituele onderwerpen'));
    expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute('content', document.title);
    expect(document.querySelector('meta[name="robots"]')).toBeNull();
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

  it.each(micrositeTopics)('opens $title directly and after a refresh with one H1 and unique metadata', async (topic) => {
    const path = `/${topic.slug}`;
    const firstView = show(MICROSITE_HOST, path);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: topic.title })).toBeInTheDocument();
    expect(within(screen.getByRole('navigation', { name: 'Zes onderwerpen' })).getByRole('link', { name: new RegExp(topic.title) })).toHaveAttribute('aria-current', 'page');
    await waitFor(() => expect(document.title).toBe(`${topic.title} | Nog Zottere`));
    const description = topic.slug === 'verlaat-je-lichaam'
      ? 'Ontdek buitenlichamelijke ervaringen, bewustzijn voorbij het lichaam en manieren om je eigen ervaring te verkennen.'
      : additionalArticles[topic.slug].description;
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', description);
    expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute('content', document.title);
    expect(document.querySelector('meta[property="og:description"]')).toHaveAttribute('content', description);
    expect(document.querySelector('.microsite')).toHaveAttribute('data-accent', topic.accent);
    firstView.unmount();

    show(MICROSITE_HOST, path);
    expect(screen.getByRole('heading', { level: 1, name: topic.title })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(within(screen.getByRole('navigation', { name: 'Zes onderwerpen' })).getAllByRole('link')).toHaveLength(6);
  });

  it.each(micrositeTopics.slice(1))('links $title to its neighbors and renders every planned section', (topic) => {
    show(MICROSITE_HOST, `/${topic.slug}`);
    const article = within(screen.getByRole('article'));
    const content = additionalArticles[topic.slug];
    expect(article.getAllByRole('heading', { level: 2 })).toHaveLength(content.sections.length);
    for (const section of content.sections) {
      expect(article.getByRole('heading', { level: 2, name: section.heading })).toBeInTheDocument();
      expect(section.paragraphs?.length || section.bullets?.length).toBeGreaterThan(0);
    }
    expect(article.getAllByRole('listitem').length).toBeGreaterThan(0);
    const index = micrositeTopics.findIndex((item) => item.slug === topic.slug);
    expect(article.getByRole('link', { name: new RegExp(`Vorige: ${micrositeTopics[index - 1].title}`) })).toHaveAttribute('href', `/${micrositeTopics[index - 1].slug}`);
    if (index < micrositeTopics.length - 1) {
      expect(article.getByRole('link', { name: new RegExp(`Volgende: ${micrositeTopics[index + 1].title}`) })).toHaveAttribute('href', `/${micrositeTopics[index + 1].slug}`);
    }
  });

  it('travels through all six articles with the previous and next links', () => {
    show(MICROSITE_HOST, '/verlaat-je-lichaam');
    for (const topic of micrositeTopics.slice(1)) {
      fireEvent.click(within(screen.getByRole('article')).getByRole('link', { name: new RegExp(`Volgende: ${topic.title}`) }));
      expect(window.location.pathname).toBe(`/${topic.slug}`);
      expect(screen.getByRole('heading', { level: 1, name: topic.title })).toBeInTheDocument();
    }
    expect(within(screen.getByRole('article')).queryByRole('link', { name: /Volgende:/ })).not.toBeInTheDocument();
    for (const topic of micrositeTopics.slice(0, -1).reverse()) {
      fireEvent.click(within(screen.getByRole('article')).getByRole('link', { name: new RegExp(`Vorige: ${topic.title}`) }));
      expect(window.location.pathname).toBe(`/${topic.slug}`);
    }
  });
});
