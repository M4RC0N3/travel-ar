import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'tab-navigation',
  templateUrl: 'tab-navigation.html',
  styleUrls: ['tab-navigation.sass'],
})
export class TabNavigation {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) {}
  
  navegateTo(page:string) {
    console.log('entra');
    
    this.router.navigateByUrl(page, {replaceUrl: true}); // Substitua pelo caminho da página desejada
  }
}
