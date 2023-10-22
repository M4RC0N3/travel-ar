import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'place-view',
  templateUrl: 'place-view.html',
  styleUrls: ['place-view.sass'],
})
export class PlaceView {

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {}
  goBack() {
    this.navCtrl.back();
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      // Agora você tem o ID e pode usá-lo como quiser
    });
  }
}