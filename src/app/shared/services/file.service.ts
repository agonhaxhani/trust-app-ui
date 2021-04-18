import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product/product.model';
import { RequestUrls } from '../constants/RequestUrls';

@Injectable()
export class FileService {

  constructor(private http: HttpClient) { }

  uploadToS3(formData: any) {
    return this.http.post<any>(RequestUrls.ACCOUNT.FILE.UPLOAD, formData);
  }

  saveToDb(data: any) {
    return this.http.post<any>(RequestUrls.ACCOUNT.PRODUCT_FILES.BASE_API, data);
  }

  removeFromDb(data) {
    return this.http.delete(RequestUrls.ACCOUNT.PRODUCT_FILES.BASE_API + `/${data.id}`)
  }

  removeFromS3(data) {
    return this.http.delete(RequestUrls.ACCOUNT.FILE.DELETE_FILES + `/${data.id}`)
  }
}
