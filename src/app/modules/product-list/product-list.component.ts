import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product/product.model';
import {ProductService} from '../../shared/services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RequestUrls} from '../../shared/constants/RequestUrls';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: [];

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.activatedRoute.queryParams.subscribe(params => {
      const type = params.type;
      const rooms = params.rooms;
      const address = params.address;
      const bathroomNr = params.bathroomNr;
      const pricegt = params.pricegt;
      const pricelt = params.pricelt;
      let url;

      if (type) {
        url = RequestUrls.ACCOUNT.PRODUCT.BASE_API + `?_where[0][type]=${type.toUpperCase()}`;
      }

      if (rooms) {
        if (url && url.includes('?')) {
          url += `&_where[1][rooms]=${rooms}`;
        } else {
          url = RequestUrls.ACCOUNT.PRODUCT.BASE_API + `?_where[0][rooms]=${rooms}`;
        }
      }

      if (address) {
        if (url && url.includes('?')) {
          url += `&_where[2][address]=${address}`;
        } else {
          url = RequestUrls.ACCOUNT.PRODUCT.BASE_API + `?_where[0][address]=${address}`;
        }
      }

      if (bathroomNr) {
        if (url && url.includes('?')) {
          url += `&_where[3][bathroomNr]=${bathroomNr}`;
        } else {
          url = RequestUrls.ACCOUNT.PRODUCT.BASE_API + `?_where[0][bathroomNr]=${bathroomNr}`;
        }
      }

      if (pricegt) {
        if (url && url.includes('?')) {
          url += `&_where[4][price_gte]=${pricegt}`;
        } else {
          url = RequestUrls.ACCOUNT.PRODUCT.BASE_API + `?_where[0][price_gte]=${pricegt}`;
        }
      }

      if (pricelt) {
        if (url && url.includes('?')) {
          url += `&_where[5][price_lte]=${pricelt}`;
        } else {
          url = RequestUrls.ACCOUNT.PRODUCT.BASE_API + `?_where[0][price_lte]=${pricelt}`;
        }
      }

      this.productService.getProducts(url).subscribe(
        result => {
          this.products = result;
        }
      );
    });
  }
}
