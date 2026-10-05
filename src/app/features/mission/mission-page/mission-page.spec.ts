import { TestBed } from '@angular/core/testing';
import { MissionPage } from './mission-page';

describe('Mission control', () => {
  it('updates mission progress when a task is completed', async () => {
    await TestBed.configureTestingModule({ imports: [MissionPage] }).compileComponents();
    const fixture = TestBed.createComponent(MissionPage);
    fixture.detectChanges();
    const host = fixture.nativeElement as HTMLElement;
    const task = host.querySelector<HTMLButtonElement>('[data-task-id="telemetry"]')!;

    expect(task.getAttribute('aria-pressed')).toBe('false');
    task.click();
    fixture.detectChanges();
    expect(task.getAttribute('aria-pressed')).toBe('true');
    expect(host.querySelector('[data-testid="task-progress"]')?.textContent).toContain('2 de 4');
  });
});
