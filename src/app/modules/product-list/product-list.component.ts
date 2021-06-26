import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product/product.model';
import {ProductService} from '../../shared/services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RequestUrls} from '../../shared/constants/RequestUrls';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenService} from '../../shared/services/auth/token.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: [];
  loading = true;
  activeProds: false;

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts();
  }

  changedDone(event) {
    this.activeProds = event.checked;
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
      const id = params.id;

      let filters;

      if (type) {
        filters = `&_where[0][type]=${type.toUpperCase()}`;
      }

      if (rooms) {
        filters = `&_where[1][rooms]=${rooms}`;
      }

      if (address) {
        filters = `&_where[2][address]=${address}`;
      }

      if (bathroomNr) {
        filters = `&_where[3][bathroomNr]=${bathroomNr}`;
      }

      if (pricegt) {
        filters = `&_where[4][price_gte]=${pricegt}`;
      }

      if (pricelt) {
        filters = `&_where[5][price_lte]=${pricelt}`;
      }

      if (id) {
        filters = `&_where[6][id]=${id}`;
      }

      if (this.activeProds) {
        filters = `&_where[7][done]=${!this.activeProds}`;
      }

      this.productService.getProducts(filters)
        .pipe(finalize(() => this.loading = false))
        .subscribe(
        result => {
          this.products = result;
        }
      );
    });
  }
}
