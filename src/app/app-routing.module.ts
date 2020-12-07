import { ContactComponent } from './contact/contact.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditContactComponent} from "./edit-contact/edit-contact.component";
import {HomeComponent} from "./home/home.component";
import {NouveauContactComponent} from "./nouveau-contact/nouveau-contact.component";


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"contact", component:ContactComponent},
  {path:"newContact", component:NewContactComponent},
  {path:"nouveauContact", component:NouveauContactComponent},
  {path:"editContact/:id", component:EditContactComponent},
  {path:"", redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
