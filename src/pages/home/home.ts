import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.services';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { getDatabase, ref, onValue } from '@angular/fire/database';
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
    private auth: Auth,
  ) {}
  logout(){
    this.router.navigateByUrl('/sign-in', {replaceUrl: true});
    this.authService.logout();
  }

  async getCategories(){
    const db = getDatabase();
    const categories = ref(db, 'categories/');
    return new Promise((resolve) => {
      onValue(categories, (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      });
    });
  }
  async getPlaces(){
    const places = ref(this.db, 'places/')

    return new Promise((resolve) =>{
      onValue(places, (snapshot)=>{
        const data = snapshot.val();
        resolve(data);
      })
    })
  } 
  async ngOnInit(){
    this.places = await this.getPlaces();
    this.categories = await this.getCategories();
    console.log(this.categories);
    console.log(this.places);
    
  }
  ionViewDidEnter() {
    this.seuMetodoAqui();
  }

  seuMetodoAqui() {
    console.log('Método executado após a página ter sido carregada.');
  }
}