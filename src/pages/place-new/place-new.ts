import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Auth } from '@angular/fire/auth';
import { getDatabase, ref, set, orderByKey, query, get} from '@angular/fire/database';
import { limitToLast } from 'firebase/database';

@Component({
  selector: 'place-new',
  templateUrl: 'place-new.html',
  styleUrls: ['place-new.sass'],
})

export class PlaceNew {
  public budgetFormated: string = "0,00";
  public db = getDatabase();
  public URL:string = `users/${this.auth.currentUser?.uid}/trips`;

  constructor(
    private navCtrl: NavController,
    private auth: Auth,
  ) {}

  goBack() {
    this.navCtrl.back();
  }

  formatCurrency(data:any){
    let budget = Number(data.detail.value);
    this.budgetFormated = budget.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  async ionViewDidEnter(){
    console.log(this.auth.currentUser);
  }

  async getLastItem(){
    let dbRef = ref(this.db, this.URL);
    let dbQuery = query(dbRef, orderByKey(), limitToLast(1));
    let tripId;

    await get(dbQuery).then(snapshot=>{
      let lastItem = snapshot.val();

      if (lastItem !== null) {
        const  ultimaChave = Object.keys(lastItem)[0];
        tripId = Number(ultimaChave) + 1;
      }
      else {
        tripId = 1;
      }
    });

    return tripId
  }

  async sendTrip(){
    const newItemRef = ref(this.db, `${this.URL}/${await this.getLastItem()}`);
    set(newItemRef, {
      username: 'test',
      email: 'marcone ribeir',
      profile_picture: 'sadasdsa'
    });
  }
}