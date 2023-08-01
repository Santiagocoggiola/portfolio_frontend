import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataSharingService } from './services/data-sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  showContentContainer: boolean = true;
  title = "Santiago's portfolio";

  ngOnInit() {
    // Suscripción a eventos de cambio de ruta para actualizar showContentContainer
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Obtener la URL actual
        const currentUrl = this.router.url;
        // Verificar si la URL es la ruta "" (puedes ajustar la condición según tus necesidades)
        this.showContentContainer = currentUrl !== '/';
      }
    });
  }
}
