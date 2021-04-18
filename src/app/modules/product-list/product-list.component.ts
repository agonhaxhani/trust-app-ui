import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product/product.model';
import {ProductService} from '../../shared/services/product.service';
import {ActivatedRoute} from '@angular/router';
import {RequestUrls} from '../../shared/constants/RequestUrls';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: [];
  formGroup: FormGroup;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
    this.getProducts();
  }

  initForm() {
    this.formGroup = new FormGroup({
      roomsNr: new FormControl(''),
      price: new FormControl(''),
      address: new FormControl(''),
      bathroomNr: new FormControl(''),
    });
  }

  getProducts() {
    this.activatedRoute.queryParams.subscribe(params => {
      const type = params.type;
      const roomsNr = params.roomsNr;
      const address = params.address;
      const bathroomNr = params.bathroomNr;
      const price = params.price;
      let url;

      if (type) {
        url = RequestUrls.ACCOUNT.PRODUCT.BASE_API + `?_where[0][type]=${type.toUpperCase()}`;
      }

      this.productService.getProducts(url).subscribe(
        result => {
          this.products = result;
        }
      );
    });
  }

  searchSubmit() {
    this.router.navigate(['/product/list'], {queryParams: {
      type: 'shitje',

    }});
  }


}
