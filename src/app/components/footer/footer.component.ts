import { Component } from '@angular/core';
import { Footer } from 'src/app/domain/types';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footer : Footer = {};

  constructor(private dataSharingService: DataSharingService){}

  loggedIn = false;
  displayModal = false;


  ngOnInit(){
    this.loggedIn = this.dataSharingService.getLoggedIn();
    this.footer = {
      gitHubUrl: "https://github.com/Santiagocoggiola",
      linkedInUrl: "https://www.linkedin.com/in/santiago-coggiola/"
    };
  }

  openEditModal(): void {
    this.displayModal = true;
  }

  onCancelModal(): void {
    this.displayModal = false;
  }

  onSaveFooter(event : Footer){
    this.footer = event;
  }
}
