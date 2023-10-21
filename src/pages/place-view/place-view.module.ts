import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PlaceView } from './place-view';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: 'place-view', component: PlaceView }]),
    ComponentsModule
  ],
  declarations: [PlaceView],
  exports: [PlaceView]
})
export class PlaceViewModule {}
