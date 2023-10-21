import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'place-new',
  templateUrl: 'place-new.html',
  styleUrls: ['place-new.sass'],
})

export class PlaceNew {
  public budgetFormated: string = "0,00";
  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back();
  }

  formatCurrency(data:any){
    let budget = Number(data.detail.value);
    this.budgetFormated = budget.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }
}