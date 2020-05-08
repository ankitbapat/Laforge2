import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAccountComponent } from './create-account/create-account.component';
import { CongratsOrganizerComponent } from './congrats-organizer/congrats-organizer.component';
import { UserAccountComponent } from './user-account/user-account.component';


const routes: Routes = [
  { path: '', component: UserAccountComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'congratulations-organizer', component: CongratsOrganizerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
