import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean;
  
  constructor(private authService: AuthService) {}

  ngOnInit(){
    this.isLoggedIn = this.authService.isUserLoggedIn();
  }

  logOut() {
    localStorage.removeItem("usertoken");
    // redirect user to log in page
  }

}
