import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ArView } from './ar-view';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: 'ar-view', component: ArView }]),
    ComponentsModule
  ],
  declarations: [ArView]
})
export class ArViewModule {}
