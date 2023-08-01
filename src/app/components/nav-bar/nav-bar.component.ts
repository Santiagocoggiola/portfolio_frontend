import { Component, Input } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent {
  isLoggedIn = false; // Variable para controlar el estado de inicio de sesión
  sidebarVisible = false;
  constructor(private dataSharingService: DataSharingService){}
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  ngOnInit(){
    this.isLoggedIn = this.dataSharingService.getLoggedIn();
  }

  logIn(){
    this.isLoggedIn = true;
    localStorage.setItem("token", "");
    localStorage.setItem("isLoggedIn", "true");
    window.location.reload();
  }

  logOut(){
    localStorage.removeItem("isLoggedIn");
    this.isLoggedIn = false;
    window.location.reload();
  }
}