import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  menuItems: any[];
  @Input() sidebarVisible: boolean = false;

  constructor(private router: Router) {
    this.menuItems = [
      {
        label: 'About me',
        icon: 'pi pi-user',
        routerLink: '/'
      },
      {
        label: 'Education',
        icon: 'pi pi-book',
        routerLink: '/education'
      },
      {
        label: 'Experience',
        icon: 'pi pi-briefcase',
        routerLink: '/experience'
      },
      {
        label: 'Tecnologies',
        icon: 'pi pi-desktop',
        routerLink: '/tecnologies'
      },
      {
        label: 'Projects',
        icon: 'pi pi-images',
        routerLink: '/projects'
      }
    ];
  }

  
}