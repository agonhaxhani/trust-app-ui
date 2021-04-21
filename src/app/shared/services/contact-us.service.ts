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
}


