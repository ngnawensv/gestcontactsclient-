import { Component, OnInit } from '@angular/core';
import {Contact} from "../_models/contact.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactService} from "../_services/contact.service";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact:Contact=new Contact();
  mode=1;
  idContact:number;
  //ActivatedRoute nous donne la route activée
  constructor(private activatedRoute:ActivatedRoute,
              private contactService:ContactService,
              private router:Router) {}

  ngOnInit(): void {
    this.idContact=this.activatedRoute.snapshot.params['id'];
    console.log(this.idContact);
    this.getContact(this.idContact);
  }

  getContact(id) {
    this.contactService.getContact(id).subscribe(
      data=>{
        this.contact=data;
        console.log(data);
      },
      error=>{
        console.log(error);

      }
    )
  }

  updateContact(contact: Contact) {
    contact=this.contact;
    this.contactService.updateContact(contact).subscribe(
      data=>{
        console.log(data);
        alert("Mise à jour éffectuée avec succès");
        this.router.navigate(['contact'])
      },
      error=>{
        console.log(error);
        alert("Erreur de mise à jour");
      }
    )
    
  }
}
