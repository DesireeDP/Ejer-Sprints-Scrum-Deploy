import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteVisible } from './nuevo-componente-visible/nuevo-componente-visible';
import { ComponenteVisible2 } from './componente-visible2/componente-visible2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponenteVisible, ComponenteVisible2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-scrum-deploy');
}
