import { Component, OnInit } from '@angular/core';
import {Contact} from "../_models/contact.model";
import {ContactService} from "../_services/contact.service";

@Component({
  selector: 'app-nouveau-contact1',
  templateUrl: './nouveau-contact1.component.html',
  styleUrls: ['./nouveau-contact1.component.css']
})
export class NouveauContact1Component implements OnInit {

  contact:Contact=new Contact();
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
  }

  saveContat(contact) {
    this.contactService.saveContact(contact).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);

      }
    )

  }

}
