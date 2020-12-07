import { ContactService } from './../_services/contact.service';
import { Contact } from './../_models/contact.model';
import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  listOfContact:Contact[];
  contact:Contact;

  constructor(private contactService:ContactService,private router:Router) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(){
    return this.contactService.getContacts().subscribe(
      data=>{
        this.listOfContact=data;
        console.log(this.listOfContact);
      },
      error=>{
        console.log(error);
      }
    );
  }

  editContact(id) {
    this.router.navigate(['editContact',id]);

  }

  deleteContact(id: number) {
    this.contactService.delete(id).subscribe(
      data=>{
        console.log(data);
        alert("Suppression avec succèss");
        this.getContacts();
      },
        error=>{
          console.log(error);
      }
    )
    
  }
}
