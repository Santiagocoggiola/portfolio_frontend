import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { AboutMe } from 'src/app/domain/types';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class AboutMeComponent {
  constructor(private dataSharingService: DataSharingService){}

  loggedIn = false;
  displayModal = false;
  aboutMe : AboutMe = {
    title:"About Me",
    content:"I'am Santiago Coggiola, a Software developer.",
    imgUrl: "https://media.licdn.com/dms/image/C4D03AQGnnKFUUyjQcQ/profile-displayphoto-shrink_200_200/0/1642115115145?e=1695254400&v=beta&t=IxZvZV1xZpklomXZmakW_YlnsaqzakszGQDKp42sPCg"
  }

  ngOnInit(){
    this.loggedIn = this.dataSharingService.getLoggedIn();
  }

  openEditModal(): void {
    this.displayModal = true;
  }

  onCancelModal(): void {
    this.displayModal = false;
  }

  onSaveCard(event : AboutMe){
    this.aboutMe = event;
  }

}
