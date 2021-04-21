import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product/product.model';
import { RequestUrls } from '../constants/RequestUrls';

@Injectable()
export class ContactUsService {

  constructor(private http: HttpClient) { }

  createContact(contactModel: any) {
    return this.http.post<any>(RequestUrls.ACCOUNT.CONTACT.BASE_API, contactModel);
  }

  getContacts(filterBySeen) {
    let url;
    if (filterBySeen != null) {
      url = RequestUrls.ACCOUNT.CONTACT.BASE_API + `?_sort=created_at:DESC&_where[0][seen]=${filterBySeen}`
    } else {
      url = RequestUrls.ACCOUNT.CONTACT.BASE_API + `?_sort=created_at:DESC`
    }
    return this.http.get<any>(url);
  }

  getContactsDetails(id: any) {
    return this.http.get<any>(RequestUrls.ACCOUNT.CONTACT.BASE_API + `/${id}`);
  }

  updateContact(contact: any) {
    return this.http.put<any>(RequestUrls.ACCOUNT.CONTACT.BASE_API + `/${contact.id}?_sort=created_at:DESC`, contact);
  }

  deleteContact(id: any) {
    return this.http.delete<any>(RequestUrls.ACCOUNT.CONTACT.BASE_API + `/${id}`);
  }
}


