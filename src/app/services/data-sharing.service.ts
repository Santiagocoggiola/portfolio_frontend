import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private loggedIn = true;

  getLoggedIn(): boolean {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    this.loggedIn =  isLoggedIn !== undefined && isLoggedIn !== null ? true : false;
    return this.loggedIn;
  }
}