import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { Landingpage2Component } from './landingpage2/landingpage2.component';
import { Landingpage3Component } from './landingpage3/landingpage3.component';
import { Landingpage4Component } from './landingpage4/landingpage4.component';
import { Landingpage5Component } from './landingpage5/landingpage5.component';
import { Landingpage6Component } from './landingpage6/landingpage6.component';
import { Landingpage7Component } from './landingpage7/landingpage7.component';
import { Landingpage8Component } from './landingpage8/landingpage8.component';
import { Landingpage9Component } from './landingpage9/landingpage9.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { LoginsignComponent } from './loginsign/loginsign.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    BlogHomeComponent,
    Landingpage2Component,
    Landingpage3Component,
    Landingpage4Component,
    Landingpage5Component,
    Landingpage6Component,
    Landingpage7Component,
    Landingpage8Component,
    Landingpage9Component,
    LoginsignComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
