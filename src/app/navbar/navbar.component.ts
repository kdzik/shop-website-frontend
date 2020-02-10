import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { ActivatedRoute } from '@angular/router';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';
declare const makeButton: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private basicAuth: BasicAuthenticationService,
    private route: ActivatedRoute,
    private jwt: JwtAuthenticationService) { }

  ngOnInit() {
    makeButton();
    this.scroll();
  }

  scroll(){
    this.route.fragment.subscribe((fragment: string) => { 
      if (fragment && document.getElementById(fragment) != null) {
        document.getElementById(fragment).scrollIntoView({ block: 'start',  behavior: 'smooth' });
      }
    });
  }

  isUserLoggedIn(){
    return this.jwt.isUserLoggedIn();
  }

  logout(){
    this.jwt.logOut();
  }

}
