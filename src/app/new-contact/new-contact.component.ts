import { Component, OnInit } from '@angular/core';
import {Contact} from '../_models/contact.model';
import {ContactService} from "../_services/contact.service";

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contact:Contact=new Contact();
  mode=1;
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
  }

  saveContat(contact) {
    this.contactService.saveContact(contact).subscribe(
      data=>{
        console.log(data);
        this.mode=2;
      },
      error=>{
        console.log(error);

      }
    )

  }
}
