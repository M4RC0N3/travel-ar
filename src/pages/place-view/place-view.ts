import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { getDatabase } from '@angular/fire/database';
import { DatabaseService } from 'src/services/database.service';
import { AlertController } from '@ionic/angular';
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

    this.databaseService.get(`places/${this.placeId}`).then(data=>{
      console.log(data);
      this.item = data;
    }).catch(()=>{
      this.showAlert('Falha ao buscar dados', 'Não foi possível buscar os dados do lugar')
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