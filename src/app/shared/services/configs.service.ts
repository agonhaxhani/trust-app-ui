import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product/product.model';
import { RequestUrls } from '../constants/RequestUrls';

@Injectable()
export class ConfigsService {

  constructor(private http: HttpClient) { }

  saveToDb(data: any) {
    return this.http.put<any>(RequestUrls.ACCOUNT.CONFIGS.CONFIGS + '/1', data);
  }

  getConfigs() {
    return this.http.get<any>(RequestUrls.ACCOUNT.CONFIGS.CONFIGS + '/1');
  }
}
