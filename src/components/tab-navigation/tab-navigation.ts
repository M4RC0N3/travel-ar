import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'tab-navigation',
  templateUrl: 'tab-navigation.html',
  styleUrls: ['tab-navigation.sass'],
})
export class TabNavigation {

  constructor(private navCtrl: NavController) {}
  
  navegateTo(page:string) {
    this.navCtrl.navigateForward(page); // Substitua pelo caminho da página desejada
  }

}
