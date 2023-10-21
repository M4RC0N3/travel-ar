import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'place-view',
  templateUrl: 'place-view.html',
  styleUrls: ['place-view.sass'],
})
export class PlaceView {

  constructor(private navCtrl: NavController) {}
  goBack() {
    this.navCtrl.back();
  }
}