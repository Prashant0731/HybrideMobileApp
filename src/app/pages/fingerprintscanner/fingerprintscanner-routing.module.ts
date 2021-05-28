import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FingerprintscannerPage } from './fingerprintscanner.page';

const routes: Routes = [
  {
    path: '',
    component: FingerprintscannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FingerprintscannerPageRoutingModule {}
