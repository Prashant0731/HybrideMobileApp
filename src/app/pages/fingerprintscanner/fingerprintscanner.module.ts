import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FingerprintscannerPageRoutingModule } from './fingerprintscanner-routing.module';

import { FingerprintscannerPage } from './fingerprintscanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FingerprintscannerPageRoutingModule
  ],
  declarations: [FingerprintscannerPage]
})
export class FingerprintscannerPageModule {}
