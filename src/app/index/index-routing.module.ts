import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
//guards
    children:[
      {
        path:'',
        loadChildren: () => 
        import('../pages/welcome/welcome.module').then(
          m => m.WelcomePageModule
        )
      },

      {
        path:'login',
        loadChildren: () => 
        import('../pages/login/login.module').then(
          m => m.LoginPageModule
        )
      },

      {
        path:'signup',
        loadChildren: () => 
        import('../pages/signup/signup.module').then(
          m => m.SignupPageModule
        )
      },

      {
        path:'fingerprint',
        loadChildren: () => 
        import('../pages/fingerprintscanner/fingerprintscanner.module').then(
          m => m.FingerprintscannerPageModule
        )
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
