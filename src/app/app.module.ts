import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    LoginModule,
    DashboardModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireStorageModule,
    BrowserAnimationsModule
  ],
  providers: [
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
