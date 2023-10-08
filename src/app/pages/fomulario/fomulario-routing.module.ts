import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FomularioPage } from './fomulario.page';

const routes: Routes = [
  {
    path: '',
    component: FomularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FomularioPageRoutingModule {}
