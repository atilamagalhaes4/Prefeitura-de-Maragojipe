import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostProvider } from '../../assets/providers/post-provider';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class LoginPageRoutingModule {}
