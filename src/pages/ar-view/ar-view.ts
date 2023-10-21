import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'ar-view',
  templateUrl: 'ar-view.html',
  styleUrls: ['ar-view.sass'],
})
export class ArView implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  close(){
    this.modalCtrl.dismiss();
  }
  
}
