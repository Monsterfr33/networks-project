import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomepageModule)
  },{
    path: 'homepage',
    loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'interest-hobbies',
    loadChildren: () => import('./components/interest-and-hobbies/interest-and-hobbies.module').then(m => m.InterestAndHobbiesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
