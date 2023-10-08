import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FomularioPageRoutingModule } from './fomulario-routing.module';

import { FomularioPage } from './fomulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FomularioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FomularioPage]
})
export class FomularioPageModule {}
