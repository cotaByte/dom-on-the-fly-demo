import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

interface MissionTask {
  id: string;
  title: string;
  description: string;
  time: string;
}

@Component({
  imports: [],
  selector: 'app-mission-page',
  styleUrl: './mission-page.scss',
  templateUrl: './mission-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionPage {
  protected readonly tasks: MissionTask[] = [
    {
      id: 'navigation',
      title: 'Calibrar navegación orbital',
      description: 'Trayectoria verificada con control de tierra',
      time: '09:12 UTC',
    },
    {
      id: 'telemetry',
      title: 'Validar canal de telemetría',
      description: 'Revisar la señal de los seis subsistemas',
      time: '09:45 UTC',
    },
    {
      id: 'solar',
      title: 'Desplegar paneles solares',
      description: 'Confirmar el bloqueo de los brazos',
      time: '10:20 UTC',
    },
    {
      id: 'payload',
      title: 'Activar módulo de observación',
      description: 'Iniciar secuencia de captura',
      time: '11:05 UTC',
    },
  ];
  protected readonly completed = signal<ReadonlySet<string>>(new Set(['navigation']));
  protected readonly completedCount = computed(() => this.completed().size);
  protected readonly progress = computed(() =>
    Math.round((this.completedCount() / this.tasks.length) * 100),
  );

  protected toggleTask(id: string): void {
    this.completed.update((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }
}
