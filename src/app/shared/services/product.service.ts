import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product/product.model';
import { RequestUrls } from '../constants/RequestUrls';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  createProduct(productModel: any) {
    return this.http.post<any>(RequestUrls.ACCOUNT.PRODUCT.BASE_API, productModel);
  }

  updateProduct(productModel: any) {
    return this.http.put<any>(RequestUrls.ACCOUNT.PRODUCT.BASE_API + `/${productModel.id}`, productModel);
  }

  deleteProduct(productId: any) {
    return this.http.delete<any>(RequestUrls.ACCOUNT.PRODUCT.BASE_API + `/${productId}`);
  }

  getProducts(filters?: string) {
    let url;
    if (filters) {
      url = RequestUrls.ACCOUNT.PRODUCT.BASE_API + '?_sort=created_at:DESC' + filters;
    } else {
      url = RequestUrls.ACCOUNT.PRODUCT.BASE_API + '?_sort=created_at:DESC';
    }
    return this.http.get<any>(url);
  }

  getProductDetails(id) {
    return this.http.get<any>(RequestUrls.ACCOUNT.PRODUCT.BASE_API + `/${id}`);
  }
}
