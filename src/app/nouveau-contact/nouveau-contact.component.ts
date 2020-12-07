import { Component, OnInit } from '@angular/core';
import {ContactService} from "../_services/contact.service";

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
  }

  /**
   * dataForm represente les données du formulaire
   * @param dataForm
   */
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
