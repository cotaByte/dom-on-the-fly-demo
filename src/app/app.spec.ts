import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App navigation', () => {
  it('exposes the three demo sections from a shared navigation bar', async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();

    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const links = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('nav a'));

    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '/blog',
      '/pokedex',
      '/mission-control',
    ]);
  });

  it('keeps the skip link on the current page and focuses the content', async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await TestBed.inject(Router).navigateByUrl('/mission-control');
    await fixture.whenStable();
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    const link = host.querySelector<HTMLAnchorElement>('.skip-link')!;
    expect(new URL(link.href).pathname).toBe('/mission-control');
    link.click();
    expect(document.activeElement).toBe(host.querySelector('main'));
  });
});
