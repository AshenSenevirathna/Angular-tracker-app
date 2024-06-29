import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './modules/share/share.module';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MainFooterComponent } from './core/main-footer/main-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyCWc08dXUnY6F0p4jhebUZgzpm5aLjWVVs",
    authDomain: "tracker-49117.firebaseapp.com",
    projectId: "tracker-49117",
    storageBucket: "tracker-49117.appspot.com",
    messagingSenderId: "1075622905803",
    appId: "1:1075622905803:web:0bbf3b46a4079298f2984e",
    measurementId: "G-VL8YD3245V"
  }),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
