import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent {
  loggedIn = false; // Variable para controlar el estado de inicio de sesión
  sidebarVisible = false;
  
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}