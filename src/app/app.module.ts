import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { DetailsComponent } from './details/details.component';
import {MatCardModule} from '@angular/material/card'; 
import { EventComponent } from './event/event.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormAddComponent } from './form-add/form-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { CardsComponent } from './cards/cards.component';

@NgModule({ 
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    DetailsComponent,
    FormAddComponent,
    CardsComponent,
    EventComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    SlickCarouselModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  exports: [AppRoutingModule]

})
export class AppModule { }
