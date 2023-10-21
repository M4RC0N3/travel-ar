import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.services';
import { Router } from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html',
  styleUrls: ['home.sass'],
})
export class Home {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  logout(){
    this.router.navigateByUrl('/home', {replaceUrl: true});
    this.authService.logout();
  }

}