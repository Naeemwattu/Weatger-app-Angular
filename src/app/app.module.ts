import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainPageComponent} from './main-page/main-page.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {LeftContentComponent} from './main-page/left-content/left-content.component';
import {RightContentComponent} from './main-page/right-content/right-content.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LeftContentComponent,
    RightContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,


    FormsModule,
    ReactiveFormsModule,
    MatCardModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
