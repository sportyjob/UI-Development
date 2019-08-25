import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment'
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  constructor(private httpClient: HttpClient) { }

  isUserLoggedIn(): boolean {
    return false;
  }

  login() {
    this.httpClient.get<User>(environment.apiURL).subscribe((response) => {
      this.isLoggedIn = true;
      // add token
    });
  }

  signUp() {
    this.httpClient.post<User>(environment.apiURL, {}, {});
  }

}

export interface User {
  name: '',
  token: '',
  password: '',
}
