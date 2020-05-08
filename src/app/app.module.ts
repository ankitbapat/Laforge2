import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CongratsOrganizerComponent } from './congrats-organizer/congrats-organizer.component';
import { UserAccountComponent } from './user-account/user-account.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    CongratsOrganizerComponent,
    UserAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
