import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'tab-navigation',
  templateUrl: 'tab-navigation.html',
  styleUrls: ['tab-navigation.sass'],
})
export class TabNavigation {

  constructor(private router: Router) {}
  
  navegateTo(page:string) {
    this.router.navigateByUrl(page, {replaceUrl: true}); // Substitua pelo caminho da página desejada
  }
}
