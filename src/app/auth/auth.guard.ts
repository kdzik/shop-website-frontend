import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from "../app.service";
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private appService: AppService, private router: Router, private basicAuthenticationService: BasicAuthenticationService, private jwt: JwtAuthenticationService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
   // if (this.basicAuthenticationService.isUserLoggedIn()) {
    if (this.jwt.isUserLoggedIn()) {
      return true;
    }
    // Store the attempted URL for redirecting
    //this.appService.redirectUrl s= url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
