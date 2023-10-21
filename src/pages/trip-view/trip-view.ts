import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'trip-view',
  templateUrl: 'trip-view.html',
  styleUrls: ['trip-view.sass'],
})
export class TripView {

  constructor(private navCtrl: NavController) {}
  goBack() {
    this.navCtrl.navigateBack('/trip-list');
  }
}