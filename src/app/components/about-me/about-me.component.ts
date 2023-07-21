import { Component } from '@angular/core';
import { AboutMe } from 'src/app/domain/types';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  loggedIn = true;
  displayModal = false;
  aboutMe : AboutMe = {
    title:"About Me",
    content:"I'am Santiago Coggiola, a Software developer.",
    imgUrl: "https://media.licdn.com/dms/image/C4D03AQGnnKFUUyjQcQ/profile-displayphoto-shrink_200_200/0/1642115115145?e=1695254400&v=beta&t=IxZvZV1xZpklomXZmakW_YlnsaqzakszGQDKp42sPCg"
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
