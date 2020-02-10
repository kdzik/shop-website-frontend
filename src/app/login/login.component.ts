import { Component, OnInit, Inject } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string;
  password : string;
  errorMessage: string;

  constructor(private app: AppService, private router: Router, private basicAuthenticationService: BasicAuthenticationService, private jwt: JwtAuthenticationService) {
  }

  handleBasicAuthLogin() {
   //  this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      this.jwt.authenticate(this.username, this.password)
    .subscribe(
      data => {
        this.router.navigate(["/admin"]);
      },
      error => {
        this.errorMessage = "Nieprawidłowy login lub hasło."
      }
    );
  }

  executeLogout(){
   // this.basicAuthenticationService.executeLogout();
   this.jwt.logOut();
  }
}
