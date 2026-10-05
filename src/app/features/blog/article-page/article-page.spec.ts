import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { ArticlePage } from './article-page';

describe('Article navigation', () => {
  it('keeps table-of-contents links on the current article', async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter([{ path: 'blog/:slug', component: ArticlePage }])],
    });

    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/blog/interfaces-que-se-adaptan', ArticlePage);
    const link = harness.routeNativeElement?.querySelector<HTMLAnchorElement>('.article-aside a');

    expect(link).toBeTruthy();
    expect(new URL(link!.href).pathname).toBe('/blog/interfaces-que-se-adaptan');
    expect(new URL(link!.href).hash).toBe('#section-0');
  });
});
