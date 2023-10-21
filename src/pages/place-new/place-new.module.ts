import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PlaceNew } from './place-new';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: 'place-view', component: PlaceNew }]),
    ComponentsModule
  ],
  declarations: [PlaceNew],
  exports: [PlaceNew]
})
export class PlaceNewModule {}
