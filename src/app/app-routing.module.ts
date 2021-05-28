import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },

  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  }
  
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'index',
  //   loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  // },
  // {
  //   path: 'welcome',
  //   loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  // },
  // {
  //   path: 'fingerprintscanner',
  //   loadChildren: () => import('./pages/fingerprintscanner/fingerprintscanner.module').then( m => m.FingerprintscannerPageModule)
  // },
  // {
  //   path: 'feed',
  //   loadChildren: () => import('./pages/feed/feed.module').then( m => m.FeedPageModule)
  // },
  // {
  //   path: 'messages',
  //   loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  // },
  // {
  //   path: 'notifications',
  //   loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  // },
  // {
  //   path: 'schedule',
  //   loadChildren: () => import('./pages/schedule/schedule.module').then( m => m.SchedulePageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
