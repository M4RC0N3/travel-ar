import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.services';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { DatabaseService } from 'src/services/database.service';
import { getDatabase } from '@angular/fire/database';
@Component({
  selector: 'home',
  templateUrl: 'home.html',
  styleUrls: ['home.sass'],
})
export class Home {
  public categories: any;
  public places: any;
  public db = getDatabase();

  constructor(
    private authService: AuthService,
    private router: Router,
    private databaseService: DatabaseService,
    private auth: Auth,
  ) {}

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/sign-in', {replaceUrl: true});
  }

  async getCategories(){
    this.databaseService.get('categories/').then(data=>{
      this.categories = data;
    })
  }

  async getPlaces(){
    this.databaseService.get('places/').then(data=>{
      this.places = data;
    });
  }

  async ionViewDidEnter(){
    this.getPlaces();
    this.getCategories();
  }
}