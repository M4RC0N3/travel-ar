// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabNavigation } from './tab-navigation/tab-navigation';
import { IonicModule } from '@ionic/angular';
import { Categorie } from './categorie/categorie';
import { Place } from './place/place';
import { Trip } from './trip/trip';
@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [TabNavigation, Categorie, Place, Trip],
  exports: [TabNavigation, Categorie, Place, Trip] // Exporte os componentes que deseja compartilhar
})
export class ComponentsModule {}