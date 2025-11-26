import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteVisible } from './nuevo-componente-visible/nuevo-componente-visible';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponenteVisible],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-scrum-deploy');
}
