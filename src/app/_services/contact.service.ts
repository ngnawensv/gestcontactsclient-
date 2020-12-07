import { Contact } from './../_models/contact.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const uri="http://localhost:8080/api/contacts";
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getContacts():Observable<Contact[]>{
    return this.http.get<Contact[]>(uri);
  }

  saveContact(contact){
    return this.http.post(uri,contact);
  }

  getContact(id):Observable<Contact> {
    return this.http.get<Contact>(uri+"/"+id);
  }

  updateContact(contact) {
    return this.http.put(uri+"/"+contact.id, contact);
  }

  delete(id) {
    console.log(uri+"/"+id)
    return this.http.delete(uri+"/"+id);
  }
}
