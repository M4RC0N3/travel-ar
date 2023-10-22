import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { DatabaseService } from 'src/services/database.service';
import { AlertController } from '@ionic/angular';
import { getDatabase, ref, onValue, query, equalTo, get, orderByChild, onChildAdded  } from '@angular/fire/database';
@Component({
  selector: 'place-view',
  templateUrl: 'place-view.html',
  styleUrls: ['place-view.sass'],
})
export class PlaceView {
  public placeId: any;
  public db = getDatabase();
  public item: any;
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private databaseService: DatabaseService,
    private alertController: AlertController
  ) {}

  goBack() {
    this.navCtrl.back();
  }

  async ionViewDidEnter() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.placeId = id;
    });

    this.databaseService.getList(`places/${this.placeId}`).then(data=>{
      this.item = data;
    }).catch(()=>{
      this.showAlert('Erro na busca', 'Erros ao buscar o lugar')
    });
  }
  async showAlert(header:any, message:any){
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}