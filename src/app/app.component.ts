import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeccionVideoComponent } from './seccion-video/seccion-video.component';
import { SeccionInvitacionComponent } from "./seccion-invitacion/seccion-invitacion.component";
import { SeccionFotosComponent } from "./seccion-fotos/seccion-fotos.component";
import { SeccionJamComponent } from "./seccion-jam/seccion-jam.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SeccionVideoComponent, SeccionInvitacionComponent, SeccionFotosComponent, SeccionJamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fiesta-halloween';
}
