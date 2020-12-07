import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { HomeComponent } from './home/home.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { NouveauContact1Component } from './nouveau-contact1/nouveau-contact1.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NewContactComponent,
    EditContactComponent,
    HomeComponent,
    NouveauContactComponent,
    NouveauContact1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
