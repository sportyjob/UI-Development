import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigureService {

  constructor(private httpClient: HttpClient) {
    // can call getContentJSON method so full time availablity
   }

  getContentJSON() {
    return this.httpClient.get("assets/configuration/config.json");
  }
}
