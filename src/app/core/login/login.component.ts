import { Component, OnInit } from '@angular/core';
import { ConfigureService } from 'src/app/configure.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  configureData: any;

  constructor(private configService: ConfigureService) { }

  ngOnInit() {
    this.configureData = this.configService.getContentJSON()
      .subscribe((response) => {
        this.configureData = response;
      });
  }

}
